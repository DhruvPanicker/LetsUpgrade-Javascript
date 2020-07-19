//Q.5 employee reward criteria, 0-5000 : 2%, 5001-10000 :5% , 10001 - 20000: 7%, above 20000 - 10%

// let sales = prompt("How much sales did you log this year");


if (sales <5000){
   let comm = 0.02*sales
    console.log(comm);
} else if (sales>5000 && sales <10001){
    let comm = 0.05*sales
    console.log(comm);
}else if (sales>10000 && sales <20001){
    let comm = 0.07*sales
    console.log(comm);
}else if (sales >20000 ){
    let comm = 0.1*sales
    console.log(comm);
}
