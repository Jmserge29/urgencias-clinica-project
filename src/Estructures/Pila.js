import Node from './Node.js';

export default class Pila {
  constructor() {
    this.top = null;
  }

  InsertarElemento(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
  }

  EliminarElemento() {
    if (!this.top) {
      console.log("La pila está vacía");
      return null;
    }

    const removedData = this.top.data;
    this.top = this.top.next;

    return removedData;
  }

  ImprimirPila() {
    let current = this.top;
    const stackArray = [];

    while (current) {
      stackArray.push(current.data);
      current = current.next;
    }

    console.log("Pila:", stackArray.join(" -> "));
    // Devolver la pila en forma de array
    return stackArray;
  }
}