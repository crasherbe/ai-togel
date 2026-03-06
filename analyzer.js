function analisaFrekuensi(history){

let freq={}

for(let i=0;i<=9;i++){
freq[i]=0
}

history.forEach(num=>{

num.split("").forEach(d=>{
freq[d]++
})

})

return freq

}
