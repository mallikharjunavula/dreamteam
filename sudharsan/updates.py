#!C:/Python/python
print ("Content-Type: text/html ")
print()
import cgi;
import cgitb;cgitb.enable()
import json
import gl
import saveDataModule
import pickle
from pathlib import Path


form=cgi.FieldStorage()
team=form.getvalue("teamname")
TeamList=[[] for x in range(4)]
saveDataModule.sDM(team,gl.path+"default.py")
filename=team+".py"
newPath=gl.path+filename
my_file=Path(newPath)
if my_file.is_file():
	TeamList=saveDataModule.rDM(gl.path+filename)
	k=json.dumps(TeamList)
	print(k)
else :
	print(1)

