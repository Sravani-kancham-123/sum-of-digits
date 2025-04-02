let num = 757696;
let sum = 0;
let dig;
while(num!=0) {
    dig = num%10;
    sum = sum+dig;
    num = Math.floor(num/10);
}
console.log("the sum of the every digit in the given number is:")
console.log(sum)
