var xhr;

if(window.XMLHttpRequest){
   xhr=new XMLHttpRequest();  
}
else{
   xhr=new ActiveXObject("Microsoft.XMLHTP");
}

xhr=onreadystatechange=function(){
    
   if(xhr.readyState==4 && xhr.status==200){
      document.getElementById('section').innerHTML=xhr.responseText;  
   }
   
   xhr.open("GET","http://example.com/recurso",true);
   xhr.send();
   
   /*
    * Si sabemos que el objeto devuelto va hacer en formato json 
    *$.getJSON({"http://example.com/recurso",function(data){
    *   $("#midiv").html(data);
    *}})
    *  
    * */
    
   
}
