class Calculadora {
  constructor() {
    this.display = document.querySelector("#display");
  }

  calcular() {
    this.display.value = eval(this.display.value);
  }
  valor(num) {
    this.display.value += num;
  }
  limpar() {
    this.display.value = "";
  }
}
const calc = new Calculadora();