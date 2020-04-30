class Calculadora{
    constructor(){
        this.display = "";
        this.memory = 0.0;
        this.lastOperationEqual = false;
        this.hayPunto = false;
    }
    
    addNumber(disp){
        if(this.lastOperationEqual)
            this.display = disp; 
        else
            this.display += disp; 
        document.getElementById('resultado').value = this.display;
        this.lastOperationEqual = false;
    }

    addPunto(disp){
        if(!this.hayPunto)
            this.display += disp 
        this.hayPunto = true;
        document.getElementById('resultado').value = this.display;
    }
    

    addOperator(disp){
        this.display = eval(this.display) + disp; 
        document.getElementById('resultado').value = this.display;
        this.lastOperationEqual = false;
        this.hayPunto = false;
    }

    addDisplay(dips){
        document.getElementById('resultado').value = this.display + dips;
        this.hayPunto = false;
    }
    
    calcular(){
        this.display = eval(this.display);
        document.getElementById('resultado').value = this.display; 
        this.lastOperationEqual = true;
        this.hayPunto = false;
    }
    
    resetText(){
        this.display = "";
        document.getElementById('resultado').value = "";
        this.hayPunto = false;
    }
    
    addMemory(){
        this.memory += eval(this.display);
    }
    
    subtractionMemory(){
        this.memory -= eval(this.display);
    }
    
    showMemory(){
       document.getElementById('resultado').value = this.memory; 
    }

    getMemory(){
        return memory;
      }
      
      getDisplay(){
        return this.display;
      }
    
      setMemory(m){
        this.memory = m;
      }
    
      refrescarPantalla(){
        document.getElementById('resultado').value = this.display;
      }
    
      setDisplay(d){
        this.display = d;
        this.refrescarPantalla();
      }
    
      addDisplay(d){
        this.display += d;
        this.refrescarPantalla();
      } 
    
}
var calculadora = new Calculadora();


