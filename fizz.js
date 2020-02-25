module.exports={
    fizz:(num)=>{
        if(typeof num !=='number'){
            throw new Error('input should be a number')
        }
        if(num%3===0&&num%5===0){
            return 'fizzbuzz'
        }
        if(num%3===0){
            return 'fizz'
        }

        if(num%5===0){
            return 'buzz'
        }
    }
}