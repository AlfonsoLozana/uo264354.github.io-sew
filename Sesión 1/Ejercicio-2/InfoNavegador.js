class Navegador
{
    constructor()
    {
        this.nombre = navigator.appName;
        this.idioma = navigator.language;
        this.platform = navigator.platform;
        this.appVersion = navigator.appVersion;
    }

    getNombre(){
        return this.nombre;
    }
    
    getIdioma(){
        return this.idioma;
    }

    getPlataform(){
        return  this.platform;
    }

    getAppVersion(){
        return this.appVersion;
    }



}


var navegador = new Navegador();