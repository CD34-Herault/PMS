$RECFOR = Get-ADComputer -Filter * -Properties OperatingSystem -SearchBase "OU=Formation Recette,OU=Serveurs,OU=Ordinateurs DEPT34,DC=dept34,DC=intranet" | Where-Object {$_.OperatingSystem -match "windows"} 
$RECFOR.Name
