function fizzBuzz(array){
  for(let i of array){
    if(i % 3 === 0 && i % 5 === 0){
      console.log('FizzBuzz');
    } else if(i % 3 === 0){
      console.log('Fizz')
    } else if(i % 5 === 0){
      console.log('Buzz')
    } else{
      console.log(i)
    }
  }
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 30]

fizzBuzz(nums)