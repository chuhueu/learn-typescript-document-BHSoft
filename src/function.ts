// Anonymous function
let addNumbers1 = function (x: number, y: number): number {
    return x + y;
 }

 console.log(addNumbers1(3,4));
//Arrow function
 let total = (n: number[]): number => {
     let total: number = 0;
     for(let i=0; i<n.length; i++){
         total += n[i];
     }
     return total;
}

 console.log(total([1,2,3]));
