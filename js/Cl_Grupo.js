export default class Cl_Grupo{
 constructor(){
    this.cont_personas=0;
    this.acum_edad_personas=0;
    this.aux_mayor_edad_mujer=0;
 }
 procesar(p){
    this.cont_personas++;
    this.acum_edad_personas+=p.edad
   
if(p.sexo==='F'){
   if(this.aux_mayor_edad_mujer<p.edad){
      this.aux_mayor_edad_mujer=p.edad;
   }
}
;
 }

 promedad(){
   return (this.acum_edad_personas/this.cont_personas )
 }


 }

