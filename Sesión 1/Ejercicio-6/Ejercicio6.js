class Juego {

    mapa = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    jugador = 1;
    celdasPintadas = 0;


    

    pintarCelda(celda) {
        if (this.mapa[celda] == 1)
            document.getElementById("bt" + celda).style = "background-color: red";
        if (this.mapa[celda] == 2)
            document.getElementById("bt" + celda).style = "background-color: blue";
    }

    pBoton(celda) {
        if (this.mapa[celda] == 0) {
            if (this.jugador == 1) {
                this.mapa[celda] = 1;
                this.jugador = 2;
            } else {
                this.mapa[celda] = 2;
                this.jugador = 1;
            }
            this.celdasPintadas++;
        } else {
            window.alert("Esa celda ya esta coloreada");
        }
        this.pintarCelda(celda);
        this.checkGanador();
    }

    checkGanador() {

        if(this.celdasPintadas == 9){
            window.alert("¡Empate!");
            this.reiniciar();
            return;
        }
        // horizontales
        var mapa = this.mapa;
        var ganador = 0;
        if (mapa[0] == mapa[1] && mapa[1] == mapa[2] && mapa[0] != 0) ganador=  mapa[0];
        if (mapa[3] == mapa[4] && mapa[4] == mapa[5] && mapa[3] != 0) ganador=  mapa[3];
        if (mapa[6] == mapa[7] && mapa[7] == mapa[8] && mapa[6] != 0) ganador=  mapa[6];
        //verticales
        if (mapa[0] == mapa[3] && mapa[3] == mapa[6] && mapa[0] != 0) ganador=  mapa[0];
        if (mapa[1] == mapa[4] && mapa[4] == mapa[7] && mapa[1] != 0) ganador=  mapa[1];
        if (mapa[2] == mapa[5] && mapa[5] == mapa[8] && mapa[2] != 0) ganador=  mapa[2];
        //diagonales
        if (mapa[0] == mapa[4] && mapa[4] == mapa[8] && mapa[0] != 0) ganador=  mapa[0];
        if (mapa[2] == mapa[4] && mapa[4] == mapa[6] && mapa[2] != 0) ganador=  mapa[2];

        if(ganador == 1) {
            window.alert("¡Ganó el rojo!");
            this.reiniciar();
        }
        
        if(ganador == 2){
            window.alert("¡Ganó el azul!");
            this.reiniciar();
        }
          
    }

    reiniciar() {
        var i = 0;
        for (i = 0; i < 9; i++) {
            document.getElementById("bt" + i).style = "background-color: white";
            this.mapa[i] = 0;
        }
         this.celdasPintadas = 0;
         this.jugador = 1;
    }
}

var juego = new Juego();

