var users,password,btnIngresar,btnStart,botones;
var datos,ShowRestraint;
var sum,suma,time,contador=30,s=0;
var intervalo,bandera,total;

function inicio(){
botones=$('table input').attr('disabled','true');
users=$('#users');
password=$('#password'); 
btnIngresar=$('#btnIngresar');
btnStart=$('#btnStart');
sum=$('#suma');
time=$('#tiempo');
ShowRestraint=$("#Show_Restraint");
btnIngresar.click(ValidarCampo);
btnStart.click(StartGame);
EventoBotones();
}


function ValidarCampo(){
 if(users.val()=="" || password.val()==""){
 	alert("algun campo vacio");
 	return false;
 }
 else{
    if(Logueo()){
    btnStart.addClass('btnStartt');
    }
 }
 LimpiarForm();
}


function LimpiarForm(datos){
  users.val("");
  password.val("");
  users.focus();
}


function Logueo(){
 if(users.val()=="jorge" && password.val()=="phpjava"){
    return true;	
 }	
 else{
 	return false;
 }
}

function EventoBotones(){
  for(var j=0;j<botones.length;j++){
 botones.eq(j).click(function(e){
   SumandoValores(this);
   
  });
 }
}

function StartGame(){
s=0;
total=0;
bandera=false;
botones.removeAttr('disabled');
GenerarValores();
Show_Restraint();
}

//Mostrar control
function Show_Restraint(){
suma=GenerarSuma();
sum.text(suma);
time.text(30);
GenerarTime();
ShowRestraint.addClass('ControlPuntajeMostrar');
}

function GenerarTime(){
   contador=25;
   intervalo=setInterval("Temporizador()",1000);
}

function Temporizador(){
  contador--;
  if(contador>=0 && bandera==false){
  time.text(contador);
}
else{
  clearInterval(intervalo);
 }
}

function GenerarValores(){
 for(var i=0;i<botones.length;i++){
 var valor=GenerarSuma();
 total+=valor
 botones.eq(i).val(valor);
 }

 console.log(total);
}


function SumandoValores(e){
 var n=parseInt(e.value);
 s+=n;
 console.log(s);
  if(s==suma){
    suma=GenerarSuma();
    sum.text(suma);
    GenerarTime();
    s=0;
  }

  if(s>suma){
  	alert(s+">"+suma);
    botones=$('table input').attr('disabled','true');
    bandera=true;
    s=0;
  }
}

function GenerarSuma(){
var num=Math.floor(Math.random()*8+1);
 return num;
}








