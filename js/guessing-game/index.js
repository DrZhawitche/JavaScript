function randomInt(x) {
  let number = Math.floor(Math.random() * x);
  return number;
}
const number = randomInt(11)
console.log(number);

while(true) {
  const guess = prompt('Please guess a number between 0 and 10')

  if (guess == number) {
    alert('You guessed right !')
    break

  } else if(guess > number) {
     alert('You guessed too high! Try again');
  } else if(guess < number) {
      alert('You guessed too low! Try again')
  } else {
      alert('Invalid input! Try again!')
  }
}