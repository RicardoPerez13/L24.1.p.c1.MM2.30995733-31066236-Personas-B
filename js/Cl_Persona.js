export default class Cl_Persona{
    constructor(nombre, sexo, edad){
        this.nombre=nombre;
        this.sexo=sexo;
        this.edad=edad;
    }

    set nombre(no){
        this._nombre=no;
    }

    get nombre(){
        return this._nombre;
    }

    set sexo(se){
        this._sexo=se;
    }

    get sexo(){
        return this._sexo;
    }

    set edad(ed){
        this._edad=ed;
    }

    get edad(){
        return this._edad;
    }
}

