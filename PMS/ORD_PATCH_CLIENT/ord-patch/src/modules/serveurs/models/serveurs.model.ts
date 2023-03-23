export interface Serveur {
    [key: string]: string | number;
    id: number;
    name: string;
    fullName: string;
    type: string;
    ip: string;
    OS: string;
    date_last_rapport: string;
    kb_manquantes: number;
    description: string;
    kb_inconnus: number;
    kb_failed: number;
    kb_na: number;
    date_dernier_update: string;
    os_quick: string;
    position: string;
    
}
