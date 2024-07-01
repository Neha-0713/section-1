// Wap to check if a number is prime 
// Wap to check if a number is palindrome 
// Wap to reverse a number.
// Wap to print all prime numbers in a range.
// Wap to print Fibonacci series.

//solution 1
const prime=(n)=>{
    let count=0;
    for(let i=1; i<n; i++){
        if(n%i===0){
            count++;
        }

    }
    if(count>1){
        return('not prime');
    }
    else{
        return('prime');
    }
}
const r=prime(67);
console.log(r);

//palindrome

const palindrome=(n)=>{
    org=n;
    rev=0;
    while(n>0){
        dig=n%10;
        rev=rev*10+dig;
        n=parseInt(n/10);
    }
    if(org==rev){
        return('is pallindeome');

    }
    else{
        return('not pallindrome');
    }
}
const res=palindrome(121);
console.log(res);

//reverse of number
const reverse=(n)=>{
    org=n;
    let rev=0;
    while(n>0){
        let dig=n%10;
        rev=rev*10+dig;
        n=parseInt(n/10);
        
    }
    return rev;
}
const result=reverse(156);
console.log(result);