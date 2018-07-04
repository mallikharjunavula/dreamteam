function  viewking() 
{
 list=[];
 
 document.getElementById("main_view").style.display="flex";
 send2("check.py")

}



  function send2(url) {
               var data; 
                xhttp= new XMLHttpRequest();
                
                xhttp.open("POST",url,"true");
                xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                  
                xhttp.onreadystatechange = function()
                    {
                            if(xhttp.readyState == 4 && xhttp.status == 200)
                            {
                               
                                data = JSON.parse(xhttp.responseText);
                                
                                if((g=document.getElementById("viewer"))!=null)
                                {
                                	document.getElementById("main_view").removeChild(g);
                                	var n =document.createElement("div")
                                	 n.setAttribute("id","viewer");
                                	 n.setAttribute("display","inline-flex");
                                	document.getElementById("main_view").appendChild(n);
                                }
                                else
                                {var m =document.createElement("div");
                                     m.setAttribute("id","viewer");
                                     n.setAttribute("display","inline-flex");
                                	document.getElementById("main_view").appendChild(m);
                                }
                                for(x=0;x<data.length;x++)
                                {
                                var k=	document.createElement("div");
                                k.setAttribute("id","view"+x);
                                k.setAttribute("display","inline-flex");
                                document.getElementById("viewer").appendChild(k);
                                document.getElementById("view"+x).innerHTML='<div class="view_team"  onclick="viewall('+x+');">'+
		                                                                    '<p>'+data[x]+'</p>'+
                                                                        '<input type="button" data-text="'+data[x]+'"" onclick="file_del(this,'+x+')"; value="delete" style="display:none;margin-left:20px;background:transparent;border:none;" id="open'+x+'"/>'+
	                                                                         '</div>';
                                }

                            }

                      }
                     
                      
                      
                     xhttp.send();
                     

    }




     function viewall(id)
     {
              var k=document.getElementById("open"+id);

          if(k!=null)
          {
        if(k.style.display=="none")
         document.getElementById("open"+id).style.display="flex";
       else
        document.getElementById("open"+id).style.display="none";
      }
   }
