function file_del(element,id)

{
var filename= element.getAttribute("data-text");
var url="deletion.py";
send3(filename,url)	;
var k= document.getElementById("view"+id);
k.parentNode.removeChild(k);
}


function send3(filename ,url) {
               var data; 
                xhttp= new XMLHttpRequest();
                
                xhttp.open("POST",url,"true");
                xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                  
                xhttp.onreadystatechange = function()
                    {
                            if(xhttp.readyState == 4 && xhttp.status == 200)
                            {
                               
                                data = (xhttp.responseText);
                                
                                

                            }

                      }
                      xhttp.send("file="+filename);

	                      }
                     
