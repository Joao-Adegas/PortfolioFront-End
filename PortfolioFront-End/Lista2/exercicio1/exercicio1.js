const numeros = document.querySelector('.numeros')

const vet = [2,5,6,3,9,65,45,23]
const vetDobro = vet.map(n => n**2)     

if(numeros){
    console.log("nao a numeros")
}

numeros.innerHTML = `Lista: ${vet} <br> Lista ao dobro: ${vetDobro}`;
