let obj = {x: 1, y: 2, z: 3};
console.log('x' in obj); //true
console.log('w' in obj); //false    //94

let obje = {x: 1, y: 2, z: 3};
delete obje.x;
console.log('x' in obje); //false   //95




