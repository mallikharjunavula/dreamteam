var idgenerator=0;	
	        	function check(){
	        		var i=	document.getElementsByClassName("inpText");
	        	    var j=0;
	        	    var data=[];
	        	    var name=[];
	        	     for( j=0;j<i.length;j++)
	        	    {    
	        	    	data[j]=i[j].value;
	        	    	name[j]=i[j].getAttribute("name")
	        	    	
	        	    	
	        		    if(data=="")
	        			var flag=1;
	        	    }
	        	    if(flag==1)
	        		alert("please fill all details");
	        	    else
	        	    {
	        	    
	        	    	var res="";

	         	     for(j=0;j<i.length;j++)
	        	     {
	        	      str  = name[j]+"="+data[j]+"&";
	        	      res=res+str;

	        	     }
	        	     res=res+"index="+document.getElementById("index").value;

	        	    
	        	    var xhttp= new XMLHttpRequest();
	        	    var url= "create.py"
	        	    xhttp.open("POST",url,"true");
	        	    xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	        	    xhttp.onreadystatechange = function()
	        	          {
	        	          	
                            if(xhttp.readyState == 4 && xhttp.status == 200)
                           {
                               //perform action
                                var return_data =JSON.parse((xhttp.responseText));
                               
                                var id;
                                 idgenerator++;
                                id="head"+idgenerator;
                               
								var div = document.createElement("ul");
							    div.style.display="flex";
								div.style.marginBottom="5px";
								div.setAttribute("id",id);
								var nuller = document.getElementById("newplay");
								if(nuller == null)
								{
									var news=document.createElement("div");
									news.setAttribute("id","newplay");

								}
								document.getElementById("newplay").appendChild(div);
								var tml=template(idgenerator);
                                document.getElementById(id).innerHTML=tml; 
                                document.getElementById("player"+idgenerator).setAttribute("value",return_data[0]);
                                document.getElementById("points"+idgenerator).setAttribute("value",return_data[1]);
                                 var k=document.getElementById("type"+idgenerator).childNodes;
                                  k[return_data[2]].setAttribute("selected","selected");
                                  document.getElementById("type"+idgenerator).setAttribute("value",return_data[2]);
                                  

                                
                           
                           }
	        	          }
                     xhttp.send(res); 
	        	     
	        	     }
	        	      k=document.getElementsByClassName("inpText");
                      k[0].value="";
                      k[1].value="";
	        		
                    }