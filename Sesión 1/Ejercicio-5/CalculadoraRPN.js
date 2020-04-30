class CalculadoraRpn{
  display;
  constructor(){
    this.display=new Array(10);
    this.display[9]=0.0;
    this.display[8]=0.0;
    this.display[7]=0.0;
    this.display[6]=0.0;
    this.display[5]=0.0;
    this.display[4]=0.0;
    this.display[3]=0.0;
    this.display[2]=0.0;
    this.display[1]=0.0;
    this.display[0]=0.0;
    
  }
  
  anadirNumero(val){
    if(this.display[0] == 0)
      this.display[0] = parseFloat(val);
    else
      this.display[0] =  parseFloat(this.display[0] + '' + parseFloat(val));
    this.actualizarDisplay();
  }

  push(val){
    this.display[9] = this.display[8];
    this.display[8] = this.display[7];
    this.display[7] = this.display[6];
    this.display[6] = this.display[5];
    this.display[5] = this.display[4];
    this.display[4] = this.display[3];
    this.display[3] = this.display[2];
    this.display[2] = this.display[1];
    this.display[1] = this.display[0];
    this.display[0] = val;
    this.actualizarDisplay();
  }

  pop(){
    
    var salida = this.display[0];
    this.display[0] = this.display[1];
    this.display[1] = this.display[2];
    this.display[2] = this.display[3];
    this.display[3] = this.display[4];
    this.display[4] = this.display[5];
    this.display[5] = this.display[6];
    this.display[6] = this.display[7];
    this.display[7] = this.display[8];
    this.display[8] = this.display[9];
    this.display[9] = 0.0;
    this.actualizarDisplay();
    return salida;
  }

  actualizarDisplay(){
    document.getElementById('display4').value = "E:" + this.display[4];
    document.getElementById('display3').value = "D:" + this.display[3];
    document.getElementById('display2').value = "C:" + this.display[2];
    document.getElementById('display1').value = "B:" + this.display[1];
    document.getElementById('display0').value = "A:" + this.display[0];
  }

 operacion(v){
      if (v == '+') {
          var res = this.pop() + this.pop();
          this.push(res);
          return;
      }
      if (v == '*') {
          var res = this.pop() * this.pop();
          this.push(res);
          return;
      }
      if (v == '-') {
          var res = this.pop() - this.pop();
          this.push(res);
          return;
      }
      if (v == '/') {
          var res = this.pop() / this.pop();
          this.push(res);
          return;
      }
      if (v == 'sen') {
        this.push(Math.sin(this.pop()));
        return;
      }
      if (v == 'cos') {
        this.push(Math.cos(this.pop()));
        return;
      }
      if (v == 'tan') {
        this.push(Math.tan(this.pop()));
        return;
      }
      if (v == 'log') {
        this.push(Math.log(this.pop()));
        return;
      }
      if (v == 'sqrt') {
        this.push(Math.sqrt(this.pop()));
        return;
      }
      if (v == '1/x') {
        this.push(1/this.pop());
        return;
      }
      if (v == 'a^b') {
        this.push(this.pop() ** this.pop());
        return;
      }
      if (v == '+-') {
        this.push(this.pop() * (-1));
        return;
      }
      if (v == 'pi') {
        this.push(3.1415926);
        return;
      }
      this.push(v);
  }

  removeAll(){
    this.display[9]=0.0;
    this.display[8]=0.0;
    this.display[7]=0.0;
    this.display[6]=0.0;
    this.display[5]=0.0;
    this.display[4]=0.0;
    this.display[3]=0.0;
    this.display[2]=0.0;
    this.display[1]=0.0;
    this.display[0]=0.0;
    this.actualizarDisplay();

  }

  remove(){
    this.display[0]=0.0;
    this.actualizarDisplay();
  }

  anadirPunto(){
    var aux = this.display[0] + '';
    if(!aux.includes('.')) 
      this.display[0] += '.';

    this.actualizarDisplay();
  }



  resetDisplay(){
    this.display[0] = 0;
    this.actualizarDisplay();
  }
  }

var calculadoraRpn = new CalculadoraRpn();