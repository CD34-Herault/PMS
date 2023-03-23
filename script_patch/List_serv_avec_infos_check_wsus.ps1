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
Param(
[string]$WsusServer = ([system.net.dns]::GetHostByName('S703')).hostname,
[bool]$UseSSL = $False,
[int]$PortNumber = 8530
)


$null = chcp # Run any console application to force the ISE to create a console.
$OutputEncoding = [Console]::InputEncoding = [Console]::OutputEncoding = [System.Text.UTF8Encoding]::new()

[reflection.assembly]::LoadWithPartialName("Microsoft.UpdateServices.Administration") | out-null
$wsus = [Microsoft.UpdateServices.Administration.AdminProxy]::GetUpdateServer($WsusServer,$UseSSL,$PortNumber);

$wsus = [Microsoft.UpdateServices.Administration.AdminProxy]::GetUpdateServer("172.19.34.44",$UseSSL,8530);

$vmware = Connect-VIServer s873 |out-null




$Erreurs =@()
$Tableau =@()

$Erreurs_dmz =@()


##################   Récupération des données serveurs auprès de l'AD et VMware ####################
<#
$PROD =   Get-ADComputer -Filter * -Properties * -SearchBase "OU=Production,OU=Serveurs,OU=Ordinateurs DEPT34,DC=dept34,DC=intranet" | Where-Object {$_.OperatingSystem -match "windows" -and $_.DistinguishedName -notmatch "Critiques"} 
$RECFOR = Get-ADComputer -Filter * -Properties * -SearchBase "OU=Formation Recette,OU=Serveurs,OU=Ordinateurs DEPT34,DC=dept34,DC=intranet" | Where-Object {$_.OperatingSystem -match "windows"} 
$PREPROD = Get-ADComputer -Filter * -Properties * -SearchBase "OU=PreProd,OU=Serveurs,OU=Ordinateurs DEPT34,DC=dept34,DC=intranet" | Where-Object {$_.OperatingSystem -match "windows"} 
$BDDREC =  Get-ADComputer -Filter * -Properties * -SearchBase "OU=Bases de Donnees - Rec,OU=Serveurs,OU=Ordinateurs DEPT34,DC=dept34,DC=intranet" | Where-Object {$_.OperatingSystem -match "windows"} 
$BDD =  Get-ADComputer -Filter * -Properties * -SearchBase "OU=Bases de Donnees,OU=Serveurs,OU=Ordinateurs DEPT34,DC=dept34,DC=intranet" | Where-Object {$_.OperatingSystem -match "windows"} 
#>

$PROD =   Get-ADComputer -Filter * -Properties OperatingSystem,Description -SearchBase "OU=Production,OU=Serveurs,OU=Ordinateurs DEPT34,DC=dept34,DC=intranet" | Where-Object {$_.OperatingSystem -match "windows" -and $_.DistinguishedName -notmatch "Critiques"} 
$RECFOR = Get-ADComputer -Filter * -Properties OperatingSystem,Description -SearchBase "OU=Formation Recette,OU=Serveurs,OU=Ordinateurs DEPT34,DC=dept34,DC=intranet" | Where-Object {$_.OperatingSystem -match "windows"} 
$PREPROD = Get-ADComputer -Filter * -Properties OperatingSystem,Description -SearchBase "OU=PreProd,OU=Serveurs,OU=Ordinateurs DEPT34,DC=dept34,DC=intranet" | Where-Object {$_.OperatingSystem -match "windows"} 
$BDDREC =  Get-ADComputer -Filter * -Properties OperatingSystem,Description -SearchBase "OU=Bases de Donnees - Rec,OU=Serveurs,OU=Ordinateurs DEPT34,DC=dept34,DC=intranet" | Where-Object {$_.OperatingSystem -match "windows"} 
$BDD =  Get-ADComputer -Filter * -Properties OperatingSystem,Description -SearchBase "OU=Bases de Donnees,OU=Serveurs,OU=Ordinateurs DEPT34,DC=dept34,DC=intranet" | Where-Object {$_.OperatingSystem -match "windows"} 

$CRITIQUE =   Get-ADComputer -Filter * -Properties OperatingSystem,Description -SearchBase "OU=Serveurs Critiques,OU=Production,OU=Serveurs,OU=Ordinateurs DEPT34,DC=dept34,DC=intranet" | Where-Object {$_.OperatingSystem -match "windows"} 
#$MESSAGERIE =   Get-ADComputer -Filter * -Properties OperatingSystem,Description -SearchBase "OU=Messagerie,OU=Serveurs,OU=Ordinateurs DEPT34,DC=dept34,DC=intranet" | Where-Object {$_.OperatingSystem -match "windows"} 

$DMZ = get-vm -Location "DMZ"  
$DMZAuth = get-vm -Location "DMZ AUTH"

$folder_pre =  Get-Folder "PRODPRE" 
$folder_rec =  Get-Folder "RECFOR"

$linux_bdd_prodpre = Get-VM -Location "Base de Donnees" | where-object{$_.Guest.OSFullName -notmatch "Windows" -and $_.GuestId -notmatch "Windows"} | where{(Get-VM -Location $folder_pre) -contains $_} 
$linux_bdd_recfor = Get-VM -Location "Base de donnees" | where-object{$_.Guest.OSFullName -notmatch "Windows" -and $_.GuestId -notmatch "Windows"} | where{(Get-VM -Location $folder_rec) -contains $_}
$linux_prodpre = Get-VM -Location "PRODPRE" | where-object{$_.Guest.OSFullName -notmatch "Windows" -and $_.GuestId -notmatch "Windows"}  | where{  (Get-VM -Location "Base de donnees" ) -notcontains $_ } 
$linux_recfor = Get-VM -Location "RECFOR" | where-object{$_.Guest.OSFullName -notmatch "Windows" -and $_.GuestId -notmatch "Windows"} | where{ (Get-VM -Location "Base de donnees" ) -notcontains $_ } 
 



$List = New-Object System.Collections.ArrayList
$List.AddRange($PROD)
$List.AddRange($RECFOR)
$List.AddRange($PREPROD)
$List.AddRange($BDDREC)
$List.AddRange($BDD)
$List.AddRange($CRITIQUE)
#$List.AddRange($MESSAGERIE)

$List_dmz = New-Object System.Collections.ArrayList
$List_dmz.AddRange($DMZ+$DMZAuth)

$List_linux = New-Object System.Collections.ArrayList
$List_linux.AddRange($linux_bdd_prodpre)
$List_linux.AddRange($linux_bdd_recfor)
$List_linux.AddRange($linux_prodpre)
$List_linux.AddRange($linux_recfor)


##################  itération de check WSUS sur les windows ####################
$good_serv = New-Object System.Collections.ArrayList
$id = 1
Foreach ( $clients in $List )
{
    try
    {
        # Test
        $wsus.GetComputerTargetByName($clients.DNSHostName) | Out-Null
        # Traitement
        $computer = $wsus.GetComputerTargetByName($clients.DNSHostName)

        $type = ""
        if($PROD.Contains($clients)){
            $type = "Production"
        }
        if($RECFOR.Contains($clients)){
            $type = "Recette-Formation"
        }
        if($PREPROD.Contains($clients)){
            $type = "Pre-production"
        }
        if($BDDREC.Contains($clients)){
            $type = "BDD-Recette"
        }
        if($BDD.Contains($clients)){
            $type = "BDD"
        }
        if($CRITIQUE.Contains($clients)){
            $type = "Critique"
        }
 <#       if($MESSAGERIE.Contains($clients)){
            $type = "Messagerie"
        }#>


        $good_serv.add(""+$id+"|"+$clients.Name+"|"+$computer.FullDomainName+"|"+$type+"|"+$computer.GetUpdateInstallationSummary().NotInstalledCount+"|"+$computer.IPAddress.IPAddressToString+"|"+$clients.OperatingSystem.Substring(8,12)+"|"+($computer.LastReportedStatusTime).ToShortDateString()+"|"+$clients.Description+"|"+$computer.GetUpdateInstallationSummary().UnknownCount+"|"+$computer.GetUpdateInstallationSummary().FailedCount+"|"+$computer.GetUpdateInstallationSummary().LastUpdated+"|"+"windows" + "|" + "alco") | Out-Null


        $id++

    }
    catch
    {
        [System.Management.Automation.MethodInvocationException] | Out-Null
        $Erreurs += $Clients
        
    }

 

}


##################  itération de check WSUS sur les DMZ ####################
Foreach ( $clients in $List_dmz )
{
    try
    {
        
        # Test
        $wsus.GetComputerTargetByName($clients.Name.split(" ")[0]) | Out-Null
        # Traitement
        $computer = $wsus.GetComputerTargetByName($clients.Name.split(" ")[0])
        
        $type = "DMZ"
        
       

        $good_serv.add(""+$id+"|"+$clients.Name.split(" ")[0]+"|"+$clients.Name+"|"+$type+"|"+$computer.GetUpdateInstallationSummary().NotInstalledCount+"|"+$computer.IPAddress.IPAddressToString+"|"+$clients.Guest.OSFullName.Substring(18)+"|"+($computer.LastReportedStatusTime).ToShortDateString()+"|"+ $clients.Name+"|"+$computer.GetUpdateInstallationSummary().UnknownCount+"|"+$computer.GetUpdateInstallationSummary().FailedCount+"|"+$computer.GetUpdateInstallationSummary().LastUpdated+"|"+"windows"+ "|" + "alco") | Out-Null
       

        $id++

    }
    catch
    {
        if($clients.Guest.OSFullName -notmatch "Windows" -and $clients.GuestId -notmatch "Windows"){
            $type = "DMZ"
            $good_serv.add(""+$id+"|"+$clients.Name.split(" -")[0]+"|"+$clients.Name.split(" -")[0]+".dept34.intranet"+"|"+$type+"|"+" "+0+"|"+$clients.Guest.IPAddress+"|"+$clients.Guest.OSFullName+"|"+"Inconnu"+"|"+ $clients.Name+"|"+""+0+"|"+""+0+"|"+"Incoonu"+"|"+"linux" + "|" + "alco") | Out-Null
            $id++
        }

        
        [System.Management.Automation.MethodInvocationException] | Out-Null
        $Erreurs_dmz += $clients
        
    }

 

}


##################  itération de check WSUS sur les Linux ####################
Foreach ( $clients in $List_linux )
{
    try
    {
        
        $type = ""
        if($linux_bdd_prodpre.Contains($clients)){
            $type = "BDD-PRODPRE"
        }
        if($linux_bdd_recfor.Contains($clients)){
            $type = "BDD-RECFOR"
        }
        if($linux_prodpre.Contains($clients)){
            $type = "PROD-PRE"
        }
        if($linux_recfor.Contains($clients)){
            $type = "REC-FOR"
        }
        
       

        $good_serv.add(""+$id+"|"+$clients.Name.split(" -")[0]+"|"+$clients.Name.split(" -")[0]+".dept34.intranet"+"|"+$type+"|"+" "+0+"|"+$clients.Guest.IPAddress+"|"+$clients.Guest.OSFullName+"|"+"Inconnu"+"|"+ $clients.Name+"|"+""+0+"|"+""+0+"|"+"Inconu"+"|"+"linux" + "|" + "alco") | Out-Null
       

        $id++

    }
    catch
    {

        [System.Management.Automation.MethodInvocationException] | Out-Null
        $Erreurs_dmz += $clients
        
    }

 

}

##################   Récupération des serveurs hébergés orange auprès de WSUS ####################

$orange = $wsus.SearchComputerTargets("H0")

$list_heberge_windows = New-Object System.Collections.ArrayList
$list_heberge_windows.AddRange($orange)


##################  itération de check WSUS sur les windows ####################
Foreach ( $heberge_win in $list_heberge_windows )
{
    try
    {
        $type = "Production"

        $good_serv.add(""+$id+"|"+$heberge_win.FullDomainName+"|"+$heberge_win.FullDomainName+"|"+$type+"|"+$heberge_win.GetUpdateInstallationSummary().NotInstalledCount+"|"+$heberge_win.IPAddress.IPAddressToString+"|"+$heberge_win.OSDescription.Substring(8,12)+"|"+($heberge_win.LastReportedStatusTime).ToShortDateString()+"|"+"Serveur hebergé orange"+"|"+$heberge_win.GetUpdateInstallationSummary().UnknownCount+"|"+$heberge_win.GetUpdateInstallationSummary().FailedCount+"|"+$heberge_win.GetUpdateInstallationSummary().LastUpdated+"|"+"windows" + "|" + "heberge") | Out-Null


        $id++

    }
    catch
    {
        [System.Management.Automation.MethodInvocationException] | Out-Null
        $Erreurs += $Clients
        
    }

 

}


$list_heberge_linux = "H060","H053","H049","H055","H057","h062","H056","H045","H044","H052","H051","H047","H043","H040","H037","H050","H041","H038","H058","H036","H039","H046","H063","H064","H009","H048","H059","h061"
Foreach ( $clients in $list_heberge_linux )
{
    try
    {
        
        $type = "Production"
       

        $good_serv.add(""+$id+"|"+$clients+"|"+$clients+"|"+$type+"|"+" "+0+"|"+"IP Inconnu"+"|"+"Inconnu"+"|"+"Inconnu"+"|"+ "	Serveur hebergé orange"+"|"+""+0+"|"+""+0+"|"+"Inconu"+"|"+"linux" + "|" + "heberge") | Out-Null
       

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


