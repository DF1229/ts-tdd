export function add(number1: number, number2: number): number {
    return number1 + number2;
}

export function divide(number1: number, number2: number): number {
    if (number2 === 0) number2++;
    return number1 / number2;
}

export function mult(number1: number, number2: number): number {
    return number1 * number2;
}

export function subtract(number1: number, number2: number): number {
    return number1 - number2;
}