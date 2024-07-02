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

const nums=[36,19,10,2,6,13,49];
for(let i=0;i<nums.length;i++){
    console.log(nums[i]);
}
console.log('..........');
for(let n of nums){
    console.log(n);
}

console.log('.......using for each funcction.......');
nums.forEach((a,i)=>{console.log(a,i);});  //first parameter gives the element and the second gives the index third gives the array itself

console.log('.....sq of each element....');
for(let n of nums){
    console.log(n*n);
}

//create a new array containing only even numbers
const evenNums=[];
nums.forEach((n)=>{
    if(n%2==0){
        evenNums.push(n)
    }
}
);
console.log(evenNums);


