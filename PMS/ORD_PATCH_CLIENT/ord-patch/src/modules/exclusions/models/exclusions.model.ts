export interface serv_exclu {
    _id: string | undefined;
    name: string;
    description: string;
    user: string;
    temporaire: boolean;
    kb_manquantes?: number; 
    comment: string;
}
