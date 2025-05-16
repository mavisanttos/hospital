// classe fila
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

// classe pilha
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

// nova fila e nova pilha
const filaAtendimento = new Fila();
const pilhaProntuarios = new Pilha();

// 5 pacientes na fila
const pacientes = ["Duda", "Mavi", "Karol", "Ana", "Paulo"];
pacientes.forEach((nome) => filaAtendimento.enfileirar(nome));

console.log("Fila inicial de pacientes:");
console.log(filaAtendimento.imprimir());

// mostra o próximo paciente que será atendido
console.log("Próximo a ser atendido:", filaAtendimento.espiar());

// atendimento de dois pacientes
for (let i = 0; i < 2; i++) {
  const atendido = filaAtendimento.desenfileirar();
  console.log(`${atendido} foi atendido.`);
  pilhaProntuarios.empilhar(atendido);
}

// pacientes restantes
console.log("Fila restante:");
console.log(filaAtendimento.imprimir());

// pilha de prontuários
console.log("Pilha de prontuários:");
console.log(pilhaProntuarios.imprimir());
