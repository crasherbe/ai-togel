function generatePrediksi(bbfs){

let hasil=[]

for(let i=0;i<20;i++){

let num=""

for(let j=0;j<5;j++){

num+=bbfs[Math.floor(Math.random()*bbfs.length)]

}

hasil.push(num)

}

return hasil

}
