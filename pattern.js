function analisaPola(history){

let pola={
double:0,
repeat:0
}

history.forEach(num=>{

if(/(\d)\1/.test(num)){
pola.double++
}

})

return pola

}
