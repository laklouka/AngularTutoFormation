import {Calculator} from "./calculator"


describe('Calculator', ()=> {
    let cal:Calculator
    beforeEach(() => {
        cal = new Calculator()
    })

    it('3 + 4 egale 7', () => {
        expect(cal.addition(3,4)).toEqual(7)
    })
})