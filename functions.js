function addnums(a,b){
    var c=a+b;
    console.log(c);
}
addnums(34,12);
//console.log(c);

const getAvg=function(m1,m2,m3,m4=70){
const avg=(m1+m2+m3+m4)/4;
//console.log(avg);
return avg;
}
const res=getAvg(34,45,56);
console.log(res);

console.log('.....arrow function...');
const factorial=(n)=>{
    let f=1;
    for(let i=2; i<=n; i++){
        f*=i;
    }
     return f;  
}
const ans=factorial(5);
console.log(ans);
console.log('..........array destructuring......');
let [a,b,c]=[7,28,293];
console.log(a);
[b,c]=[c,b];
console.log(b,c);

const[name1,name2, , ,name5]=['ramu','shamu','raju','pinki','kalu']
console.log(name5);

const getReport=(m1,m2,m3,m4,max=100)=>{
    const avg=getAvg(m1,m2,m3,m4)
    const percentage=avg/max*100;
    return[avg,percentage];
}
const[v1,v2]=getReport(132,156,78,90,200)
console.log(v1,v2);

//WAP to take start and end as parameter and print all numbers divisible by 7 in that range
//also print the sum of all such numbers
const getDivisible=(start,end)=>{
let sum=0;
for( let i=start;i<end;i++){
    if(i%7===0){
        console.log(i);
        sum=sum+i;
    }
}
return sum;
}
const s=getDivisible(10,100)
console.log(s);



    
