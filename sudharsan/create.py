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
temp=[]
temp2=[]
TeamList=[[] for x in range(4)]
default=0
playerDetails=form.getvalue("player")
points=form.getvalue("points")
index=int(form.getvalue("index"))
temp.append(playerDetails)
temp.append(points)
temp.append(index)


readdata =open(gl.path+"default.py","rb")
team = pickle.load(readdata)
filename=team+".py"
TeamList=saveDataModule.rDM(gl.path+filename)
TeamList[index].append(temp)
saveDataModule.sDM(TeamList,gl.path+filename)
temp2.append(playerDetails)
temp2.append(points)
temp2.append(index)
k=json.dumps(temp2)
print(k)
	

