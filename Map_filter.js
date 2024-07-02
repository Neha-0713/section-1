const nums=[36,19,10,2,6,13,49];
//map function
 const squares=nums.map((a)=>{return a**2});
 console.log(squares);

 const prices=[23.88,274.50,888.90,274.2121,99.99];
 const integer=prices.map((a)=>{return parseInt(a)})
 console.log(integer);

 //filter
 const evenNums=nums.filter((n)=>{return n%2===0});
 console.log(evenNums);
 //filter prices greater than 50 and less than 300

 const avPrices=prices.filter((p)=>{return p>50 && p<300})
 console.log(avPrices);