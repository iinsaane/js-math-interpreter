import {
  NumberNode,
  AddNode,
  SubtractNode,
  MultiplyNode,
  DivideNode,
  PlusNode,
} from "./nodes.js";

import { Token, tokens } from "./tokens.js";

export class Parser {
  constructor(tokens) {
    this.tokens = tokens;
    this.currentPosition = 0;
    this.advance();
  }

  advance() {
    //console.log("advance");
    try {
      //console.log("advanced");
      this.currentToken = this.tokens[this.currentPosition];
      this.currentPosition++;
    } catch (error) {
      console.log("failed");
      this.currentToken = null;
    }
    if(this.currentToken == undefined){
      this.currentToken = null;
    }
  }

  parse() {
    if (this.currentToken == undefined) {
      return null;
    }

    var result = this.expr();
    if (this.currentToken !== null) {
      throw new Error(`invalid syntax`);
    }

    return result;
  }

  expr() {
    var result = this.term();

    while (
      this.currentToken !== null &&
      (this.currentToken.type === tokens.PLUS ||
        this.currentToken.type === tokens.MINUS)
    ) {
      if (this.currentToken.type === tokens.PLUS) {
        this.advance();
        result = new AddNode(result, this.term());
      }
      else if (this.currentToken.type === tokens.MINUS) {
        this.advance();
        result = new SubtractNode(result, this.term());
      }
    }
    return result;
  }

  term() {
    var result = this.factor();

    while (
      this.currentToken !== null &&
      (this.currentToken.type === tokens.MULTIPLY ||
        this.currentToken.type === tokens.DIVIDE)
    ) {
      if (this.currentToken.type === tokens.MULTIPLY) {
        this.advance();
        result = new MultiplyNode(result, this.factor());
      }
      else if (this.currentToken.type === tokens.DIVIDE) {
        this.advance();
        result = new DivideNode(result, this.factor());
      }
    }
    return result;
  }

  factor() {

    if (this.currentToken.type == tokens.LPAREN) {
      this.advance();
      var result = this.expr();
      if (this.currentToken.type !== tokens.RPAREN) {
        throw new Error(`invalid syntax`);
      }
      this.advance();
      return result;
    }

    if (this.currentToken.type === tokens.NUMBER) {
      var value = this.currentToken.value;
      this.advance();
      return new NumberNode(value);
    } else if(this.currentToken.type === tokens.PLUS){
      this.advance();
      return PlusNode(this.factor());
    } else if(this.currentToken.type === tokens.MINUS){
      this.advance();
      return new SubtractNode(new NumberNode(0), this.factor());
    } else {
      throw new Error(`invalid syntax`);
    }

  }
}
