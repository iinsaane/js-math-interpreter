import { tokens, Token } from "./tokens.js";

function isDigit(ch) {
  return "0" <= ch && ch <= "9";
}

//lexer class
export class Lexer {
  constructor(text) {
    this.text = text;
    this.currentPosition = 0;
    this.advance();
    this.tokens = new Array();
  }

  advance() {
    try {
    //console.log("advanced");
      this.currentChar = this.text[this.currentPosition];
      this.currentPosition++;
    } catch (error) {
        console.log("failed");
      this.currentChar = null;
    }
  }

  //generate tokens
  generateTokens() {
      console.log("generateTokens");
    while (this.currentChar !== null && this.currentChar !== undefined) {
      if (this.currentChar === " ") {
        this.advance();
      } else if (this.currentChar === "." || isDigit(this.currentChar)) {
        //yield the generateNumber();
        //console.log(this.tokens);
        this.tokens.push( this.generateNumber());
      } else if (this.currentChar === "+") {
        this.tokens.push( new Token(tokens.PLUS));
        this.advance();
      } else if (this.currentChar === "-") {
        this.tokens.push( new Token(tokens.MINUS));
        this.advance();
      } else if (this.currentChar === "*") {
        this.tokens.push( new Token(tokens.MULTIPLY));
        this.advance();
      } else if (this.currentChar === "/") {
        this.tokens.push( new Token(tokens.DIVIDE));
        this.advance();
      } else if (this.currentChar === "(") {
        this.tokens.push( new Token(tokens.LPAREN));
        this.advance();
      } else if (this.currentChar === ")") {
        this.tokens.push( new Token(tokens.RPAREN));
        this.advance();
      } else {
        throw new Error(`Invalid character: ${this.currentChar}`);
      }
    }
    return this.tokens;
  }

    //generateNumber
    generateNumber() {
        var decimal_point_count = 0;
        var numberStr = this.currentChar;
        this.advance();

        while (this.currentChar!==null && (isDigit(this.currentChar) || this.currentChar === ".")) {
            if(this.currentChar === ".") {
                decimal_point_count++;
                if(decimal_point_count > 1) {
                    break;
                }
            }
            numberStr += this.currentChar;
            this.advance();
        }
        if(numberStr[0] === ".") {
            numberStr = '0' + numberStr;
        }
        if(numberStr[numberStr.length-1] === ".") {
            numberStr += '0';
        }
        //convert string to number
        return new Token(tokens.NUMBER, parseFloat(numberStr));
    }
}
