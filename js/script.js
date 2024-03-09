
localStorage.setItem('contador',cont);

let cont=0;


const contador=document.getElementById('contadorVisitas')

const reestablecer=document.getElementById('btnReestablecer');



location.reload.addEventListener('click',()=>{
    cont++
    contador.innerText=cont;
    
})





reestablecer.addEventListener('click',()=>{
    contador.innerText=0;
})
