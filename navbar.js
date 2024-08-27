
function clickMenu(){
    if(itens.style.display == 'block'){
      itens.style.display = 'none'
      const close = document.getElementById("burguer")
      close.innerHTML = "menu"
    }
    else{
      itens.style.display = 'block'
      const close = document.getElementById("burguer")
      close.innerHTML = "close"
    }
}