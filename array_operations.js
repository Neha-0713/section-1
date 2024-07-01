const fruits=['Mango','Banana','Apple','Orange','Pineapple','Grapes','Guava','Papaya']

//access elements from orange to papaya
//remove 3 elements after banana
//insert two elements at second last position
//remove element mango from array

console.log(fruits.slice(3,9));
fruits.splice(1,3)
console.log(fruits);
fruits.splice(-2,0,'Strawberry','blueberry')
console.log(fruits);
console.log(fruits.indexOf('Mango'));
fruits.splice(0,1)
console.log(fruits);



