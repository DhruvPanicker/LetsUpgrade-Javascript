let marks = prompt("Type your marks here")
if (marks >= 75) {
    console.log(`You have got A grade`);
} else if (marks>50 && marks<75){
    console.log(`You have got A- grade`)
} else if (marks==50){
    console.log(`You have got B grade`)
} else {
    console.log('You have failed');
}