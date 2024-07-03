const user={
    name:'Raju',
    email:'raju@mail.com',
    password:'abs123',
    age:34
};

console.log(user);
console.log(user.name);
console.log(user['email']);

user.address='lucknow';
user.age=22;
console.log(user);

user['roll-no']=27654;
console.log(user['roll-no']);

const key='address';
console.log(user[key]);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

user.contact=[8318156368,7839118489]
console.log(user);
console.log(user.contact[0]);

const smartphone={
    brand:'Apple',
    model:'Iphone 16',
    price:79999,
    colors:['white','green','black']

}
//syntax to access 2nd color of the smartphones
console.log(smartphone.colors[1]);
console.log(smartphone.colors[1][3]);

//replace green with two green color variants
smartphone.colors.splice(1,1,'forest green','sea green');
console.log(smartphone.colors);

const smartphoneArray=[
    {
    brand:'Apple',
    model:'Iphone 16',
    price:79999,
    colors:['white','green','black'],
    ram:['6GB','8GB']
},
    {
    brand:'Mi',
    model:'Poco X2',
    price:16000,
    colors:[,'gray','black'],
    ram:['16GB','4GB']
},
    {
    brand:'Samsung',
    model:'s24 ultra',
    price:110000,
    colors:['silver','gold','black'],
    ram:['32GB','8GB']
},
    {
    brand:'OnePlus',
    model:'12R',
    price:36000,
    colors:['blue','pink','black'],
    ram:['8GB','64GB']
},
    {
    brand:'Motorola',
    model:'Edge50',
    price:24000,
    colors:['white','black'],
    ram:['2GB','10GB']
}
];

//1.Access price of the 2nd smartphone
console.log(smartphoneArray[1].price);

//2.add new color in third smartphone
smartphoneArray[2].colors.push('white')
console.log(smartphoneArray[2].colors);

//3.create an array containing all the brand of smartphone
const brand=smartphoneArray.map((n)=>{return n.brand})
console.log(brand);

//4.filter all smartphones containing white color
const white=smartphoneArray.filter((a)=>{return (a.colors.includes('white'))})
console.log(white);





