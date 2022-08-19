/**
 * Equation parser
 */

import {Lexer} from './lexer.js';
import {Parser} from './parser.js';
import {Interpreter} from './interpreter.js';

const text = '(1+2*3)/0';
const lexer = new Lexer(text);
let tokens = lexer.generateTokens();
//console.log(tokens);
let parser = new Parser(tokens);
let tree = parser.parse();
console.log(tree.toString());

if (!tree) {
    console.log('Error parsing the expression');
    //kill the program
    process.exit(1);
}

var interpreter = new Interpreter();
var value = interpreter.visit(tree);
console.log(value);



