
let string = "";
function onNumberclick(item){
  if(item === '='){
    result = eval(string);
    console.log(result);
    document.getElementById("calci").innerHTML= result;
    string="";
    
  
  }else if(item === "c"){
  
        
       document.getElementById("calci").innerHTML= "";
    
  }else{
    string= string+item ;
    document.getElementById("calci").innerHTML= string;
  }
      
  
}  

  


