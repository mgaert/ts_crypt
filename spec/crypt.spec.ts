import { Crypt3 } from '../src/crypt3';

describe("crypt shoult crypt a value", () => {
    it("salt provided and valid pw", () => {
        const expected = "SAx9xSyQ/ZHSY";
        let pw = Crypt3.crypt("pass123","SALT");
        expect(expected).not.toEqual(pw);
        pw = Crypt3.crypt("pass1234","SALT");
        expect(expected).toEqual(pw);
        pw = Crypt3.crypt("pass1234","SAL");
        expect(expected).toEqual(pw);
        pw = Crypt3.crypt("pass1234","SA");
        expect(expected).toEqual(pw);
    });
    it("salt not provided. Random Salt is taken and valid pw", () => {
        const expected = "HNUa53UcR9/Lg";
        const spy1 = spyOn(Math, 'random');
        spy1.and.returnValues(0.1,0.2,0.3,0.4);
        let pw = Crypt3.crypt("pass123","");
        expect(expected).not.toEqual(pw);
        pw = Crypt3.crypt("pass1234","");
        expect(expected).toEqual(pw);
        spy1.calls.reset();
        
        spy1.and.returnValues(0.5,0.6,0.7,0.8);
        pw = Crypt3.crypt("pass1234","S");
        expect("SUdhE/g8OIXhU").toEqual(pw);
    });
});