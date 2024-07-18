
import Cl_Grupo from "./Cl_Grupo.js";
import Cl_Persona from "./Cl_Persona.js";

let persona1=new Cl_Persona ("Luis",'M', 15);
let persona2=new Cl_Persona ("Ana",'F', 19);
let persona3=new Cl_Persona ("José",'M', 21);
let persona4=new Cl_Persona ("Carmen",'F', 17);
let persona5=new Cl_Persona ("Rosa",'F', 18);
let persona6=new Cl_Persona ("José",'M', 22);
let persona7=new Cl_Persona ("María",'F', 17);
let persona8=new Cl_Persona ("Luz",'F', 19);
let persona9=new Cl_Persona ("Rafael",'M', 23);
let persona10=new Cl_Persona ("Liz",'F', 15);
let persona11=new Cl_Persona ("Marcos",'M', 20);
let persona12=new Cl_Persona ("Leo",'M', 16);

let grupo=new Cl_Grupo();

grupo.procesar(persona1);
grupo.procesar(persona2);
grupo.procesar(persona3);
grupo.procesar(persona4);
grupo.procesar(persona5);
grupo.procesar(persona6);
grupo.procesar(persona7);
grupo.procesar(persona8);
grupo.procesar(persona9);
grupo.procesar(persona10);
grupo.procesar(persona11);
grupo.procesar(persona12);

let salida=document.getElementById("salida");
salida.innerHTML="Resultados del Grupo";
salida.innerHTML+="<br> Edad promedio: "+grupo.promedad();
salida.innerHTML+="<br> Edad mayor entre las mujeres: "+grupo.aux_mayor_edad_mujer;

