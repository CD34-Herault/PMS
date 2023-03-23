export interface plannification_exceptionnel{
    _id: string | undefined;
    date_plannif: string;
    horaire_debut: string;
    horaire_fin: string;
    user: string;
    plannifs: Array<serv>; 
}

export interface serv {
    name: string;
    type: string;
    description: string;
}
