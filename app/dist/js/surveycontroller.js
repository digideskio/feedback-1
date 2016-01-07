var x =document.getElementById("elements").getElementsByTagName("div");
     
    for(var i=0;i<x.length;i++){
      if(i==0)
      {
        x[i].style.display = "block";
      }
     
      else{
         x[i].style.display = "none";
       }
    }