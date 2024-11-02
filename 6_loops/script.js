// for loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//while loop
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

//Do-while loop^
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 10);



// for ...of loop (for arrays)
let arr = [1,2,3]
for (let value of arr){
   console.log(value)
}

// for ...in lop (for objects)
let obj = {a:1,b:2,c:3}
for (let key in obj){
   console.log(key,obj[key])
}