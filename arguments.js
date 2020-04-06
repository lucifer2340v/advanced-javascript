function add(n1,n2){
    console.log([...arguments]);
    return n1 + n2 +arguments[2];
}
const result = add(2,3,5,7);
console.log(result);