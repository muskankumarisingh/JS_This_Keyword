"use strict"
const thapa={
    name:"muskan",
    qualif:"twelve",
    sum: function(){
        add=2+2;
        console.log("sum of two no is :"+add);
        console.log(this.name)
        console.log(this);
    }
}
thapa.sum();

//add is not defined 