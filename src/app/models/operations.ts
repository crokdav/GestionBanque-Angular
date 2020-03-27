import { Compte } from './compte';

export class Operations {
    idOperation : number;
    montant : number;
    date : Date;
    emetteur : Compte;
    recepteur : Compte;
    }