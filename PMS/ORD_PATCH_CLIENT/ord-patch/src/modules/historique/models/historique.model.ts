import { Serveur } from "@modules/serveurs/models";

export interface Historique {
    [key: string]: string | number | Serveur[];
    date: string;
    serveurs: Serveur[];
    
}
