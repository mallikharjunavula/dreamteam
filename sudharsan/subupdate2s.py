#!C:/Python/python
print ("Content-Type: text/html ")
print()
import cgi;
import cgitb;cgitb.enable()
import json
import gl
import saveDataModule
import pickle

form=cgi.FieldStorage()
TeamList=[[] for x in range(4)]
playerDetails=form.getvalue("playername")
points=form.getvalue("points")
index=int(form.getvalue("inde"))


readdata =open(gl.path+"default.py","rb")
team = pickle.load(readdata)
filename=team+".py"

TeamList=saveDataModule.rDM(gl.path+filename)

team=TeamList;

flag=0

for x in range(len(team[index])):
  if team[index][x][0]==playerDetails :
    flag=1
    k=x
    break

if flag==1 :
 
  team[index].pop(k)
  
  saveDataModule.sDM(team,gl.path+filename)
  print(json.dumps(team))
else :
  
  raise valueError("team is not saved check all thigs at section subupdatae")




