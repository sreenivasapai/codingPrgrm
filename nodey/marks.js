//marks.js

function sum(a,b,c){
    return a + b + c;
}
function avg(a,b,c){
    return (a + b + c)/3;
}
function percentage(a,b,c){
    return ((a + b + c)/300)*100;
}

module.exports = { sum, avg, percentage };