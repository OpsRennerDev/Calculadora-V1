var evento
function number(num){
  var n = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = n + num;
  if(num=='%'){
    var result = n / 100
    document.getElementById('resultado').innerHTML = result.toFixed(4);
  }
}
function clean(){
  document.getElementById('resultado').innerHTML = "";
}
function deleteLast(){
  var n = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = n.substring(0, n.length - 1);
}
function calc(){
  var n = document.getElementById('resultado').innerHTML;
  if(n){
    document.getElementById('resultado').innerHTML = eval(n);
  }else{
    document.getElementById('resultado').innerHTML = "Erro...";
  }
}