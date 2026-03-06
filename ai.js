function runAI(){

let input=document.getElementById("history").value.trim().split("\n")

let history=input.map(x=>x.trim())

let freq=analisaFrekuensi(history)

let sorted=Object.keys(freq).sort((a,b)=>freq[b]-freq[a])

let bbfs=sorted.slice(0,6)

let pola=analisaPola(history)

let prediksi=generatePrediksi(bbfs)

let html=""

html+="BBFS : "+bbfs.join("")+"<br><br>"

html+="DOUBLE POLA : "+pola.double+"<br><br>"

html+="20 PREDIKSI:<br>"

prediksi.forEach(x=>{
html+=x+"<br>"
})

document.getElementById("hasil").innerHTML=html

}
