# =======================================================
# NAME: List_serv_avec_infos_check_wsus.ps1
# AUTHOR: Bonneaud Maël, Cogitis
# DATE: 19/04/2022
#
# 
# VERSION 1.0
# COMMENTS: Extraction des infos sur les serveurs
#
# =======================================================

##################   Initialisation du script ####################


$null = chcp # Run any console application to force the ISE to create a console.
$OutputEncoding = [Console]::InputEncoding = [Console]::OutputEncoding = [System.Text.UTF8Encoding]::new()

[reflection.assembly]::LoadWithPartialName("Microsoft.UpdateServices.Administration") | out-null


[System.Net.ServicePointManager]::ServerCertificateValidationCallback = {$true}

$wsus = [Microsoft.UpdateServices.Administration.AdminProxy]::GetUpdateServer("MIC-WSUS2019.mic.local",$true,8531);


$vmware = Connect-VIServer 172.19.34.19 -User "MIC\m.bonneaud" -Password "******" |out-null



#Invoke-Command -ComputerName 172.19.34.44 { 
    
#    [reflection.assembly]::LoadWithPartialName("Microsoft.UpdateServices.Administration") | out-null
#    $wsus = [Microsoft.UpdateServices.Administration.AdminProxy]::GetUpdateServer("MIC-WSUS2019.mic.local",$true,8531);

#    $wsus

#} -Credential $credential


$Erreurs =@()
$Tableau =@()

$Erreurs_dmz =@()


##################   Récupération des données serveurs auprès de l'AD et VMware ####################

$List_windows = New-Object System.Collections.ArrayList
$List_linux = New-Object System.Collections.ArrayList

$folder_MIC =  Get-Cluster -Location "Projet MIC" 


foreach( $folder in $folder_MIC){

    $windows = Get-VM -Location $folder.Name | where-object{$_.Guest.OSFullName -match "Windows" -and $_.GuestId -match "Windows"} 
    $linux = Get-VM -Location $folder.Name | where-object{$_.Guest.OSFullName -notmatch "Windows" -and $_.GuestId -notmatch "Windows"} 
    
    $List_windows.AddRange($windows)
    $List_linux.AddRange($linux)

}



##################  itération de check WSUS sur les windows ####################
$good_serv = New-Object System.Collections.ArrayList
$id = 1
Foreach ( $clients in $List_windows )
{
    try
    {
        # Test
        $wsus.GetComputerTargetByName($clients.Name+".mic.local") | Out-Null
        # Traitement
        $computer = $wsus.GetComputerTargetByName($clients.Name+".mic.local")

        $type = ""
        $MGM = $false
        foreach( $group in $computer.GetComputerTargetGroups()){
            if($group.name -match "MGM"){
                $type = "MGM"
            }
            elseif($group.name -match "Preprod_2"){
                $type = "Preprod"
            }
            elseif($group.name -match "Prod"){
                $type = "Prod"
            }
            if($MGM){
                $type = "MGM"
            }
        }

        $cluster = get-cluster -VM $clients
        $cluster_name = $cluster.Name.Split("(")[1].Replace(")","")
        


        $good_serv.add(""+$id+"|"+$clients.Name+"|"+$computer.FullDomainName+"|"+$type+"|"+$computer.GetUpdateInstallationSummary().NotInstalledCount+"|"+$computer.IPAddress.IPAddressToString+"|"+$clients.Guest.OSFullName.Substring(10,19)+"|"+($computer.LastReportedStatusTime).ToShortDateString()+"|"+$cluster_name+"|"+$computer.GetUpdateInstallationSummary().UnknownCount+"|"+$computer.GetUpdateInstallationSummary().FailedCount+"|"+$computer.GetUpdateInstallationSummary().LastUpdated+"|"+"windows" + "|" + "mic") | Out-Null


        $id++

    }
    catch
    {
        $split = $clients.Name.split("-");
        try{
            
            # Test
            $wsus.GetComputerTargetByName($clients.Name+".eple034"+$split[0]+".local") | Out-Null
            # Traitement
            $computer = $wsus.GetComputerTargetByName($clients.Name+".eple034"+$split[0]+".local")

            $type = ""
            $MGM = $false
            foreach( $group in $computer.GetComputerTargetGroups()){
                if($group.name -match "MGM"){
                    $type = "MGM"
                }
                elseif($group.name -match "Preprod_2"){
                    $type = "Preprod"
                }
                elseif($group.name -match "Prod"){
                    $type = "Prod"
                }
                if($MGM){
                    $type = "MGM"
                }
            }

            $cluster = get-cluster -VM $clients
            $cluster_name = $cluster.Name.Split("(")[1].Replace(")","")
        


            $good_serv.add(""+$id+"|"+$clients.Name+"|"+$computer.FullDomainName+"|"+$type+"|"+$computer.GetUpdateInstallationSummary().NotInstalledCount+"|"+$computer.IPAddress.IPAddressToString+"|"+$clients.Guest.OSFullName.Substring(10,19)+"|"+($computer.LastReportedStatusTime).ToShortDateString()+"|"+$cluster_name+"|"+$computer.GetUpdateInstallationSummary().UnknownCount+"|"+$computer.GetUpdateInstallationSummary().FailedCount+"|"+$computer.GetUpdateInstallationSummary().LastUpdated+"|"+"windows" + "|" + "mic") | Out-Null


            $id++
        }
        catch{
            [System.Management.Automation.MethodInvocationException] | Out-Null
            $Erreurs += $Clients
        }
    }
}


##################  itération de check WSUS sur les Linux ####################
Foreach ( $clients in $List_linux )
{
    $type = "Production";
    try
    {      
        $good_serv.add(""+$id+"|"+$clients.Name+"|"+$clients.Name+".mic.local"+"|"+$type+"|"+" "+0+"|"+$clients.Guest.IPAddress+"|"+$clients.Guest.OSFullName+"|"+"Inconnu"+"|"+ $clients.Name.split("-")[1]+"|"+""+0+"|"+""+0+"|"+"Inconu"+"|"+"linux" + "|" + "mic") | Out-Null
       
        $id++

    }
    catch
    {

        [System.Management.Automation.MethodInvocationException] | Out-Null
        $Erreurs_dmz += $clients
        
    }

 

}


$good_serv 

#Write-Host "DMZ ERROR: "
#$Erreurs_dmz.Name
# $wsus.GetComputerTargets().count

<#
Write-Host ""
Write-Host "Vérification des serveurs suivants :"
$Erreurs.name
#>
