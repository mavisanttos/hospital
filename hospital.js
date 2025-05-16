// Classe Fila
class Fila {
  constructor() {
    this.itens = [];
  }

  enfileirar(elemento) {
    this.itens.push(elemento);
  }

  desenfileirar() {
    return this.itens.shift();
  }

  espiar() {
    return this.itens[0];
  }

  estaVazia() {
    return this.itens.length === 0;
  }

  imprimir() {
    return this.itens.join(", ");
  }

  reiniciar() {
    this.itens = [];
  }
}

// Classe Pilha
class Pilha {
  constructor() {
    this.itens = [];
  }

  empilhar(elemento) {
    this.itens.push(elemento);
  }

  desempilhar() {
    return this.itens.pop();
  }

  espiar() {
    return this.itens[this.itens.length - 1];
  }

  estaVazia() {
    return this.itens.length === 0;
  }

  imprimir() {
    return this.itens.join(", ");
  }

  buscar(paciente) {
    return this.itens.includes(paciente);
  }

  reiniciar() {
    this.itens = [];
  }
}

// Inicializando fila de atendimento e pilha de prontuários
const filaAtendimento = new Fila();
const pilhaProntuarios = new Pilha();

// Adicionando 5 pacientes à fila
const pacientes = ["Duda", "Mavi", "Karol", "Ana", "Paulo"];
pacientes.forEach((nome) => filaAtendimento.enfileirar(nome));

console.log("Fila inicial de pacientes:");
console.log(filaAtendimento.imprimir());

// Mostrando quem será o próximo a ser atendido
console.log("Próximo a ser atendido:", filaAtendimento.espiar());

// Simulando atendimento de dois pacientes
for (let i = 0; i < 2; i++) {
  const atendido = filaAtendimento.desenfileirar();
  console.log(`${atendido} foi atendido.`);
  pilhaProntuarios.empilhar(atendido);
}

// Mostrando fila restante
console.log("Fila restante:");
console.log(filaAtendimento.imprimir());

// Mostrando pilha de prontuários
console.log("Pilha de prontuários:");
console.log(pilhaProntuarios.imprimir());
