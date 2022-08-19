class NumberNode {
    constructor(value) {
        this.value = value;
    }

    toString() {
        return this.value.toString();
    }
}

class AddNode {
    constructor(node_a, node_b) {
        this.node_a = node_a;
        this.node_b = node_b;
    }

    // represent the node as a string
    toString() {
        return `(${this.node_a.toString()} + ${this.node_b.toString()})`;
    }
}

class SubtractNode {
    constructor(node_a, node_b) {
        this.node_a = node_a;
        this.node_b = node_b;
    }

    // represent the node as a string
    toString() {
        return `(${this.node_a.toString()} - ${this.node_b.toString()})`;
    }
}

class MultiplyNode {
    constructor(node_a, node_b) {
        this.node_a = node_a;
        this.node_b = node_b;
    }

    // represent the node as a string
    toString() {
        return `(${this.node_a.toString()} * ${this.node_b.toString()})`;
    }
}

class DivideNode {
    constructor(node_a, node_b) {
        this.node_a = node_a;
        this.node_b = node_b;
    }

    // represent the node as a string
    toString() {
        return `(${this.node_a.toString()} / ${this.node_b.toString()})`;
    }
}

class PlusNode {
    constructor(node) {
        this.node  = node;
    }

    // represent the node as a string
    toString() {
        return `(+ ${this.node.toString()})`;
    }
}

class MinusNode {
    constructor(node) {
        this.node  = node;
    }

    // represent the node as a string
    toString() {
        return `(- ${this.node.toString()})`;
    }
}


export { NumberNode, AddNode, SubtractNode, MultiplyNode, DivideNode, PlusNode, MinusNode };
