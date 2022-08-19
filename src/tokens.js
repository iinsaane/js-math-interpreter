//enum of tokens
export const tokens = {
    NUMBER: 0,
    PLUS: 1,
    MINUS: 2,
    MULTIPLY: 3,
    DIVIDE: 4,
    LPAREN: 5,
    RPAREN: 6,
}

// class "Token" with properties "type" and "value"
export class Token {
    constructor(type, value = null) {
        this.type = type;
        this.value = value;
    }
}