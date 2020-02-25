const fb=require('../fizz.js')


describe('fizzbuzz test suite', () => {
    it('divisible by 3 returns fizz', ()=>{
        let result=fb.fizz(3)
        expect(result).toMatch(/fizz/)
    })
    it('divisible 5 returns buzz', ()=>{
        let result=fb.fizz(5)
        expect(result).toMatch(/buzz/)
    })
    it('divisible 3 and 5 returns fizzbuzz', ()=>{
        let result=fb.fizz(15)
        expect(result).toMatch(/fizzbuzz/)
    })
    it('string throws error', ()=>{

        expect(()=>{fb.fizz('15')}).toThrow()
    })
});