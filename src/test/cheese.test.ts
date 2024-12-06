import { Cheese } from "../cheese";

describe('The Cheese class', () => {
    it('should default to the type "oud 48+"', () => {
        const cheese = new Cheese();
        expect(cheese.type).toEqual('oud 48+');
    });

    it('should accept and use the type parameter', () => {
        const cheese = new Cheese('jong');
        expect(cheese.type).toEqual('jong');
    })

    it('should be edible', () => {
        let cheese = new Cheese();
        expect(cheese.percentEaten).toEqual(0);
        
        cheese.eat();
        expect(cheese.percentEaten).toEqual(0);
        
        cheese.eat(5);
        expect(cheese.percentEaten).toEqual(5);

        cheese.eat(10);
        expect(cheese.percentEaten).toEqual(15);
    });
})