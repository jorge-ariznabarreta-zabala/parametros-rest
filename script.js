let masIngred=document.getElementById('seleccion');
let pedir=document.getElementById('pedido');
pedir.disabled=true;
let lista=[];
masIngred.addEventListener('click', (event)=>{  
    if (lista.includes(event.target.innerText)){
        console.log('ya estaba seleccionado');
    } else {

        lista.push( event.target.innerText);
    }
console.log(lista);
console.log(lista.length==2);
if (lista.length>=2 && lista.length <=6) {
    pedir.disabled=false;
} else{
    pedir.disabled=true;
}
});



console.log(pedir);
pedir.addEventListener('click', ()=>{
    Pedido(lista);
});


function Pedido(...lista){
let texto=`Los ingredientes elegidos son: `;
lista.forEach((ingrediente)=>{
    texto += ingrediente + ','+ " ";
});
console.log(texto);
}