export class Cheese {
    type: string;
    percentEaten: number;

    constructor(type: string = 'oud 48+') {
        this.type = type;
        this.percentEaten = 0;
    }

    eat(percent: number = 0) {
        this.percentEaten += percent;
    }
}