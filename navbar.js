
function mudaTamanho(){
    if(window.innerWidth >=768){
      itens.style.display = 'flex'
    }
    else{
      itens.style.display = 'none'
    }
}
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