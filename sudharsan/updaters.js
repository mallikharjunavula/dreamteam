var idgen=0;
	function updateTeam(){

    
        var k= document.getElementById("inputField").value;

        if(k==null || k=="")
        {
          alert("give a team name");


        }
        else
        {



     var xhttp= new XMLHttpRequest();
	        	    var url= "updates.py"
	        	    xhttp.open("POST",url,"true");
	        	    xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	        	    var se   =document.getElementById("inputField").value;
	        	    xhttp.onreadystatechange = function()
	        	        {
                            if(xhttp.readyState == 4 && xhttp.status == 200)
                            {
                               //perform action
                               var return_data = [];
                                 return_data = JSON.parse(xhttp.responseText);
                                 //display function
                                  
                                   if(return_data==1)
                                   { 
                                    document.getElementById("exists").innerText="Team Not Exists";
                                   document.getElementById("open").style.display="none";
                                    document.getElementById("main_box").style.display="flex";
                                     document.getElementById("team_main").innerText=se;
                                    var k=document.getElementById("newplay");

                                   if(k!=null)
                                   {
                                  document.getElementById("allplay").removeChild(k);
                                    console.log("team not exists")
                                    }}
                                 else
                                 {

                                  document.getElementById("main_box").style.display="block";
                                 document.getElementById("team_main").innerText="Team name";
                                 document.getElementById("open").style.display="block";
                                  document.getElementById("exists").innerText=se;
                                 var k=document.getElementById("newplay");
                                 console.log(k);
                                 if(k!=null)
                                 {
                                 document.getElementById("allplay").removeChild(k);
                                  k=document.createElement("div");
                                  k.setAttribute("id","newplay");
                                  document.getElementById("allplay").appendChild(k);
                                  console.log("new play in null");
                                 }
                                 else
                                 {
                                  k=document.createElement("div");
                                  k.setAttribute("id","newplay");
                                   document.getElementById("allplay").appendChild(k);
                                 }
                                 for(var i=0;i<return_data.length;i++)
                                 {
                                 	
                                 	for(var j=0;j<return_data[i].length;j++)
                                 		 
                                        {  idgen++;
                                          id="head"+idgen;
                                        	
                        										var div = document.createElement("ul");
                        									    div.style.display="flex";
                        										div.style.marginBottom="5px";
                        										div.setAttribute("id",id);
                        										document.getElementById("newplay").appendChild(div);
                        										var tml=template(idgen);
			                            document.getElementById(id).innerHTML=tml; 
			                            
                                        
                                       document.getElementById("player"+idgen).setAttribute("value",return_data[i][j][0]);
                                       document.getElementById("points"+idgen).setAttribute("value",return_data[i][j][1]);
                                       document.getElementById("type"+idgen).setAttribute("value",i)
                                        var  k=document.getElementById("type"+idgen).childNodes;
                                        k[i].setAttribute("selected","selected");

                                       

                                    }   } 
                                

                            }
                          }

	        	          }
                     xhttp.send("teamname"+"="+se);
                      document.getElementById("main_view").style.display="none";
            }

	}
