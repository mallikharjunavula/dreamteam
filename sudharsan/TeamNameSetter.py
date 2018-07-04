#!C:/Python/python
print ("Content-Type: text/html ")
print()
import cgi;
import cgitb;cgitb.enable()
import json
import saveDataModule
import pickle
from pathlib import Path



path="C:/xampp/htdocs/project/TeamNames/"

TeamList =[[] for x in range(4)]
form=cgi.FieldStorage()
team=form.getvalue("teamname")
newfile=team+".py"
newPath=path+newfile
my_file=Path(newPath)
if my_file.is_file():
	print("1")
else :
   
	saveDataModule.sDM(team,path+"default.py")
	filename = team + ".py"
	default=open(path+filename,"wb")
	pickle.dump(TeamList,default)
	k=(team)
	print(k)