"use strict"
function sum(){
    var add=2+2
    console.log("sum of two no. is:"+add);
    console.log(this);
}
sum()

//output: sum of two no. is :4
//undefined