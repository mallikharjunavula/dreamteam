 var temp_pl_save = {};


function template(id)
{
 var html = 
  '<li id="play'+id+'"class="list_style">'+
    '<form class="main_container">'+
      '<div class="main_con_items ">'+
        '<h4 class="list_level">Player :</h4>'+
          '<div id="pL'+id+'"class="change_section">'+
            '<input type="text" id="player'+id+'" onfocusout="save_background(this);" onclick="change(this,'+id+')" data-chooser="player" onfocus="this.select();"class="list_level " value="undefined"/>'+
          '</div>'+
      '</div>'+
      '<div class="main_con_items ">'+
        '<h4 class="list_level">Points :</h4>'+
        '<div id="po'+id+'" class="change_section">'+
          '<input type="text" id="points'+id+'" onfocusout="save_background(this);" onclick="change(this,'+id+')" data-chooser="points" onfocus="this.select();" class="list_level" value="undefined" />'+
        '</div>'+
      '</div>'+
      '<div class="main_con_items">'+
        '<h4 class="list_level">Type :</h4>'+
        '<div id="ty'+id+'" class="change_section">'+
          '<select id="type'+id+'" class="dropdow" onclick="change(this,'+id+');" data-chooser="type" >'+
            '<option value="0">wicket keeper</option>'+
            '<option value="1">batsman</option>'+
            '<option value="2">All Rounder</option>'+
            '<option value="3">Bowler</option>'+
          '</select>'+
        '</div>'+
      '</div>'+
      '<div id="last_section_id'+id+'" class="last_section">'+
        '<input class="btn_style_delete" id="delete'+id+'" type="button" onclick="clear_details('+id+');" value="Delete"/>'+
      '</div>'+
    '</form>'+
  '</li>';


return html;
}


function change(element,id)
  {    
            document.getElementById("last_section_id"+id).innerHTML ='<input class="btn_style_save" id="delete'+id+'" type="button" '+
           'onclick="save('+id+');" value="save"/>'+'<input class="btn_style_cancel" id="delete'+id+'" type="button" onclick="cancel('+id+');" value="cancel"/>';
           var temp=document.getElementById("player"+id);
           var temp1=document.getElementById("points"+id);
           var temp2=document.getElementById("type"+id);
           temp_pl_save[temp.getAttribute("data-chooser")]=temp.value;
           temp_pl_save[temp1.getAttribute("data-chooser")]=temp1.value;
           temp_pl_save[temp2.getAttribute("data-chooser")]=temp2.value;
          
           
        
    }


    function save(id)
    { 
           var temp=document.getElementById("player"+id);
           var temp1=document.getElementById("points"+id);
           var temp2=document.getElementById("type"+id);
           Oname=temp.getAttribute("value");
            Opoints=temp1.getAttribute("value");
            Oindex=temp2.getAttribute("value");
           temp.setAttribute("value",temp_pl_save[temp.getAttribute("data-chooser")]);
           temp1.setAttribute("value",temp_pl_save[temp1.getAttribute("data-chooser")]);
           temp2.setAttribute("value",temp_pl_save[temp2.getAttribute("data-chooser")]);
           document.getElementById("last_section_id"+id).innerHTML='<input class="btn_style_delete" id="delete'+id+'" type="button" onclick="clear_details('+id+');" value="Delete"/>';
            Pname=temp.value;
            Ppoints=temp1.value;
            Pindex=temp2.value;
           
            no_error=check2(Pname,Ppoints);
            if(no_error==1)
            {
              var data="playername="+Pname+"&points="+Ppoints+"&inde="+Pindex+"&oplayer="+Oname+"&opoints="+Opoints+"&oindex="+Oindex;
              var url="subupdatesa.py"
              console.log(Oname,Opoints,Oindex);
            send(data,url);
             }
            else
            console.log("something is wrong in sending details see save() fuction section");
            
            
            

    }

    function save_background(element)
    {
      element.value;
      temp_pl_save[element.getAttribute("data-chooser")]=element.value; 
    }

    function clear_details(id) 
    { 
         
       playName=document.getElementById("player"+id).getAttribute("value");
       playpoints=document.getElementById("points"+id).getAttribute("value");
       inde=document.getElementById("type"+id).getAttribute("value");
       
       send("playername="+playName+"&inde="+inde,"subupdate2s.py");
        var head=document.getElementById("head"+id);
        head.parentNode.removeChild(head);

    }
  

   function cancel(id)
    {
           var temp=document.getElementById("player"+id);
           var temp1=document.getElementById("points"+id);
           var temp2=document.getElementById("type"+id);
           temp.value=temp.getAttribute("value");
           temp1.value=temp1.getAttribute("value");
           temp2.value=temp2.getAttribute("value");
           console.log(temp1.value,"hello2");
            document.getElementById("last_section_id"+id).innerHTML='<input class="btn_style_delete" id="delete'+id+'" type="button" onclick="clear_details('+id+');" value="Delete"/>';
         
    }



    function send(data,url) {
                
                xhttp= new XMLHttpRequest();
                
                xhttp.open("POST",url,"true");
                xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                  
                xhttp.onreadystatechange = function()
                    {
                            if(xhttp.readyState == 4 && xhttp.status == 200)
                            {
                               
                               var data = JSON.parse((xhttp.responseText));
                               
                               console.log(data);
                                
                               

                            }

                      }
                     
                      
                      
                     xhttp.send(data);

    }



    function check2(pdetails,number) {


               if(pdetails=="")
                 {
                      alert("please fill player name");
                 }
              else
                 {
                      if(number.match(/^[0-9]+$/))
                          return 1;
                      else
                         {
                         alert("fill player points with number values only");
                          return 0;
                        }
                  }


                   }