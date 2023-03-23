export interface User_profil {
    [key: string]: string | number | boolean | string[];
    nom: string;
    prenom: string;
    mail: string;
    login: string;
    alertMail: boolean;
    type: string;
    actions: string[];
    serveursBon: number;
    serveursAlerte: number;
    theme: string;
    
}