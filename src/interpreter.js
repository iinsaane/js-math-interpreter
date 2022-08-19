import * as nodes from './nodes.js';
import * as values from './values.js';

export class Interpreter {
    visit(node) {
        var method_name = 'visit_' + node.constructor.name;
        return this[method_name](node);
    }

    visit_NumberNode(node) {
        return Number(node.value);
    }

    visit_AddNode(node) {
        return this.visit(node.node_a) + this.visit(node.node_b);
    }

    visit_SubtractNode(node) {
        return this.visit(node.node_a) - this.visit(node.node_b);
    }

    visit_MultiplyNode(node) {
        return this.visit(node.node_a) * this.visit(node.node_b);
    }

    visit_DivideNode(node) {

        try {
            return this.visit(node.node_a) / this.visit(node.node_b);
        } catch (e) {
            //throw an error
            throw new Error('Division by zero');
        }
    }

    visit_PlusNode(node) {
        return this.visit(node);
    }

    visit_MinusNode(node) {
        return new Number ( 0 - this.visit(node));
    }

}