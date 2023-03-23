import { IconName, IconPrefix } from "@fortawesome/free-solid-svg-icons";
import { CalendarEvent } from "angular-calendar";
import { thresholdFreedmanDiaconis } from "d3";

export class Colors{
    primaire: string;
    secondaire: string;

    constructor(){
        this.primaire = '#FF0000';
        this.secondaire = '#990000';
    }
}

export class Calendrier {
    _id: string | undefined;
    name: string;
    full_name?: string;
    couleurs: Colors;
    dates: CalendarEvent[];
    actif: boolean;
    scripts: TimeLineItem[];

    constructor(){
        this.name="";
        this.couleurs = new Colors();
        this.dates = [];
        this.actif = true;
        this.scripts = [];
    }
}

export interface TimeLineItem{
    nom: string,
    iconePre: IconPrefix,
    iconeName: IconName,
    smallText: string,
    color: string,
    sens: string,
    order: number,
    processus: proc[],

}

export interface proc{
    title: string;
    content: string;
    duree: string;
    heure: string;
    script: string;
}

export interface TaskItem{
    jour: string;
    heure: string;
    environnement: string;
    script: string;
    durée: string;
    partie: string;
    description: string;
}