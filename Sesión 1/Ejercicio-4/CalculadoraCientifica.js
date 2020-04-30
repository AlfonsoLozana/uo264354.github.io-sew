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
    if(!this.hayPunto){
      this.display += disp
    }
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







class CalculadoraCientifica extends Calculadora{
  constructor () {
    super()
    this.numberOfParenthesis = 0;
    this.ultimoNumero = '';
  }

  saveMemory(){
    super.setDisplay(eval(super.getDisplay()))
  }

  addNumber(val){
    this.ultimoNumero += val;
    console.log(this.ultimoNumero);
    super.addNumber(val);
  }

  addPunto(val){
    this.ultimoNumero += val;
    super.addPunto(val);
  }

  addDisplay(val){
    this.ultimoNumero = '';
    super.addDisplay(val);
  }

  calcular(){
    this.ultimoNumero = '';
    super.calcular();
}


  resetText(){
    this.ultimoNumero = '';
    super.resetText();
  }

  addParenthesis(disp){
    super.addDisplay(disp);
    if(disp == '(')
      this.numberOfParenthesis += 1;
    else
      this.numberOfParenthesis -= 1;
  }

  pi () {
    super.addNumber(Math.PI.toPrecision(4));
  }

  invertirSigno () {
    super.setDisplay('(' + super.getDisplay() + ')*-1')
    super.calcular()
  }

  eliminarUltimoNumero() {
    super.setDisplay(super.getDisplay().slice
      (0,super.getDisplay().length-this.ultimoNumero.length));
    
  }

  clearMemory () {
    super.setMemory('0.0')
  }

  calcularRaiz() {
    var n = this.ultimoNumero;
    this.eliminarUltimoNumero();

    this.addNumber(Math.sqrt(n))
    console.log(n);
  }

  calcularFactorial () {
    if(this.ultimoNumero != ''){
      var total = 1; 
      var i;
      for (i=1; i<= this.ultimoNumero; i++) {
        total = total * i; 
      }
      this.eliminarUltimoNumero();
      this.addNumber(total);
    }
  }

  trigonometria(val){
    var n = 0.0;
    switch(val){
      case 'sen':
        n = Math.sin(this.ultimoNumero);
        break;
      case 'cos':
        n = Math.tan(this.ultimoNumero);
        break;
      case 'tan':
        n = Math.tan(this.ultimoNumero);
        break;
    }

    this.eliminarUltimoNumero();
    this.addNumber(n);
  }

  trigonometria(val){
    var n = 0.0;
    switch(val){
      case 'sen':
        n = Math.sin(this.ultimoNumero);
        break;
      case 'cos':
        n = Math.tan(this.ultimoNumero);
        break;
      case 'tan':
        n = Math.tan(this.ultimoNumero);
        break;
    }

    this.eliminarUltimoNumero();
    this.addNumber(n);
  }

  log(){
    var n = Math.log(this.ultimoNumero);
    this.eliminarUltimoNumero();
    this.addNumber(n);
  }

  


}

var calculadoraCientifica = new CalculadoraCientifica()
