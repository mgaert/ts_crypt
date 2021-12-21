import { crypt3 } from '../src/crypt3';

describe("crypt shoult crypt a value", () => {
    it("salt provided", () => {
        const expected = "LEjrUUyKyWhPM";
        const pw = crypt3.Crypt3.crypt("test","LE001");
        expect(expected).toEqual(pw);
    });
});