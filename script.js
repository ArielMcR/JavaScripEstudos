function calcular(){
    var num = window.document.getElementById('num')
    //var res = window.document.getElementById('res')
    var tab = window.document.getElementById('tabu')

   if(num.value.length == 0){
        window.alert("[ERROR] Verifique os dados e tente novamente")
    } else{
      let n = Number(num.value)
        tab.innerHTML = ``
          for(let cont = 1; cont <= 10; cont++){
             let item = window.document.createElement('option')
             item.text = `${n} x ${cont} = ${n * cont}`
             tab.appendChild(item)
      
    }
  }
}
function entrar(){
    let button = document.getElementById('button')
    button.style.background = 'green'
}
function sair(){
    let button = document.getElementById('button')
    button.style.background = 'white'
}

