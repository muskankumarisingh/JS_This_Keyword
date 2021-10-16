const thapa={
    name:"muskan",
    qualif:"twelve",
    sum: function(){
        var add=2+2;
        console.log("sum of two no is :"+add);
        console.log(this);
    }
}
thapa.sum();

// sum of two no is :4
// { name: 'muskan', qualif: 'twelve', sum: [Function: sum] }