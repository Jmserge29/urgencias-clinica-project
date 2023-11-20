import Node from './Node.js';

export default class Cola {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  InsertarElemento(data) {
    const newNode = new Node(data);
    if (!this.front) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  EliminarElemento() {
    if (!this.front) {
      console.log("La cola está vacía");
      return null;
    }

    const removedData = this.front.data;
    this.front = this.front.next;

    if (!this.front) {
      this.rear = null;
    }

    return removedData;
  }

  ImprimirCola() {
    let current = this.front;
    const queueArray = [];

    while (current) {
      queueArray.push(current.data);
      current = current.next;
    }

    console.log("Cola:", queueArray.join(" -> "));
    return queueArray
  }
}
