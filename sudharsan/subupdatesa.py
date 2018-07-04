#!C:/Python/python
print ("Content-Type: text/html ")
print()
import cgi;

import json
import gl
import saveDataModule
import pickle

form=cgi.FieldStorage()
TeamList=[[] for x in range(4)]
playerDetails=form.getvalue("playername")
points=form.getvalue("points")
index=int(form.getvalue("inde"))
oldplayername=form.getvalue("oplayer")
oldpoints=form.getvalue("opoints")
oldindex=int(form.getvalue("oindex"))

readdata =open(gl.path+"default.py","rb")
team = pickle.load(readdata)
filename=team+".py"

TeamList=saveDataModule.rDM(gl.path+filename)

team=TeamList;

flag=0

for x in range(len(team[oldindex])):
  if team[oldindex][x][0]==oldplayername :
    if team[oldindex][x][1]==oldpoints :
      flag=1
      k=x
      break

if flag==1 :
  
  team[oldindex].pop(k)
  team[index].insert(0,[playerDetails,points,index])
  saveDataModule.sDM(team,gl.path+filename)
  print(json.dumps(team))
else :
  
  print(json.dumps(filename))




