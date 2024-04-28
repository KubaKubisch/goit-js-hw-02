


function makeTransaction(quanity, pricePerDroid) {
   let totalPrice = 
   return `You ordered ${quanity} droids worth ${quanity * pricePerDroid} credits!`;
}

console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));