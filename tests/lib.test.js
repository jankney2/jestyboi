const lib=require('../lib')


describe('absolute', () => {

    it('positive number', ()=>{
        const result=lib.absolute(1)
        expect(result).toBe(1)
    })
    it('negative number', ()=>{
        const result=lib.absolute(-1)
        expect(result).toBe(1)
    })
    
    it(' return 0', ()=>{
        const result=lib.absolute(0)
        expect(result).toBe(0)
    })

});


describe('greet function', () => {
    it('should return greeting message', ()=>{
        const result=lib.greet('mosh')

        expect(result).toMatch(/mosh/)
    })
});

describe('get currencies', () => {
    it('supported currencies', ()=>{
        const result=lib.getCurrencies()
        expect(result).toBeDefined()
    })

});