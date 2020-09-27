let var1 = 1;
let var2 = 1;
if (var1 == var2) {
    console.log('var1 == var2');
}
if (var1 === var2) {
    console.log('var1 === var2');
}

var1 = 1;   //number
var2 = '1'; //string
if (var1 == var2) {
    console.log('var1 == var2');
}
if (var1 === var2) {
    console.log('var1 === var2');
} else{
    console.log('var1 !== var2')
}
