import NodeArbolBinario from './NodeArbolBinario';

export default class ArbolBinario {
  constructor() {
    this.root = null;
  }

  // Método para agregar un nodo al árbol binario
  insert(data) {
    this.root = this._insertNode(this.root, data);
  }

  // Método auxiliar para insertar un nodo en el árbol binario de manera recursiva
  _insertNode(node, data) {
    if (!node) {
      return new BinaryTreeNode(data);
    }

    const nodeValue = typeof data === 'object' ? data.edad : data;

    if (nodeValue < node.data.edad) {
      node.left = this._insertNode(node.left, data);
    } else if (nodeValue > node.data.edad) {
      node.right = this._insertNode(node.right, data);
    }

    return node;
  }

  // Método para imprimir el árbol en orden (Inorder traversal)
  inorder() {
    const result = [];
    this._inorderTraversal(this.root, result);
    console.log("Inorder:", result.join(" -> "));
    return result;
  }

  // Método auxiliar para realizar el recorrido Inorder de manera recursiva
  _inorderTraversal(node, result) {
    if (node) {
      this._inorderTraversal(node.left, result);
      result.push(node.data);
      this._inorderTraversal(node.right, result);
    }
  }

  // Método para imprimir el árbol en preorden (Preorder traversal)
  preorder() {
    const result = [];
    this._preorderTraversal(this.root, result);
    console.log("Preorder:", result.join(" -> "));
    return result;
  }

  // Método auxiliar para realizar el recorrido Preorder de manera recursiva
  _preorderTraversal(node, result) {
    if (node) {
      result.push(node.data);
      this._preorderTraversal(node.left, result);
      this._preorderTraversal(node.right, result);
    }
  }

  // Método para imprimir el árbol en postorden (Postorder traversal)
  postorder() {
    const result = [];
    this._postorderTraversal(this.root, result);
    console.log("Postorder:", result.join(" -> "));
    return result;
  }

  // Método auxiliar para realizar el recorrido Postorder de manera recursiva
  _postorderTraversal(node, result) {
    if (node) {
      this._postorderTraversal(node.left, result);
      this._postorderTraversal(node.right, result);
      result.push(node.data);
    }
  }
}