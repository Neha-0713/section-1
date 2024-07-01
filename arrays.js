const arr=[65,'noice',true,console.log, undefined];
console.log(arr);
console.log(typeof arr);
console.log(Array.isArray(arr));

console.log(arr.length); //same for string
console.log('\n\n');

const movies=['300','MI','Deadpool','Expendables','3 Idiots','Inception'];
//indexing
console.log(movies[3] );//also works for string
console.log(movies.indexOf('Inception'));//also works for string
console.log(movies.at(-2));//also works for string
movies[2]='Deadpool & wolverine'
console.log(movies);

//slicing
console.log(movies.slice(2,5));//also works for string
console.log(movies.slice(2));
console.log(movies.slice(-4));
console.log(movies.slice(-4,-2));
console.log(movies);


console.log(movies[2].slice(-9));

//adding & removing elements
movies.push('Kanchana')//adds element at the end
console.log(movies);

movies.unshift('Gangs of wasseypur')//adds element at the start
console.log(movies);

console.log(movies.pop());  //removes element from the end
console.log(movies.shift());  //removes element from the beginning
console.log(movies);

//movies.splice(3,2); remove 2 elements starting from index 3
//movies.splice(3,2, 'John Wick','The Boys','Invincible'); 
//movies.splice(3,0, 'John Wick','The Boys','Invincible');
console.log(movies);



