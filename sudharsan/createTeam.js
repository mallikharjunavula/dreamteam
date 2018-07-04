function myFunction() {
                    var tm=document.getElementById("inputField").value;
                      
                  if(tm.match(/^[^-\s][a-zA-Z0-9_\s-]+$/))
                  {
                    alert("give proper team name");
                    

                  }
                  else
                  {

                    
                    var xhttp= new XMLHttpRequest();
	        	    var url= "TeamNameSetter.py"
	        	    xhttp.open("POST",url,"true");
	        	    xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	        	    var tm=document.getElementById("inputField").value;
                    var tm2=document.getElementById("inputField").getAttribute("name")
	        	    var se=tm2+"="+tm
	        	    xhttp.onreadystatechange = function()
	        	        {
                            if(xhttp.readyState == 4 && xhttp.status == 200)
                            {
                               //perform action
                                var return_data = xhttp.responseText;
                                if(Number(return_data)==1)
                                {	
                                
                                 document.getElementById("exists").innerText="Team Exists";
                                 document.getElementById("open").style.display="none";
                                 document.getElementById("main_box").style.display="flex";
                                 document.getElementById("team_main").innerText=tm;
                                 var k=document.getElementById("newplay");
                                 if(k!=null)
                                 document.getElementById("allplay").removeChild(k);
                                 }
                                else
                                {
                                 document.getElementById("exists").innerHTML=return_data;
                                 document.getElementById("main_box").style.display="block";
                                 document.getElementById("team_main").innerText="Team name";
                                 document.getElementById("open").style.display="block";

                                 var k=document.getElementById("newplay");
                                 
                                 if(k!=null)
                                 {
                                 document.getElementById("allplay").removeChild(k);
                                  k=document.createElement("div");
                                  k.setAttribute("id","newplay");
                                  document.getElementById("allplay").appendChild(k);
                                 }
                                 }
                            }

	        	          }
                     xhttp.send(se);
                     
                     document.getElementById("main_view").style.display="none";
                    
                     }
}


                 