import { CollectionReference } from "@angular/fire/compat/firestore";

export interface Usuario {
    Id: string;
    Nombre: string;
    Sexo: string;
    Edad: string;
    Estatura: string;
    Peso: string;
    Objetivo: string;
    Rutinas: {
        "nombre": string,
        "objetivo": string,
        "lugar": string,
        "duracion": string,
        "equipamiento": string,
      }
}
