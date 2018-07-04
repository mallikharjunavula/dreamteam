#!C:/Python/python
print("Content-Type:text/html")
print()
import cgi;
import cgitb;cgitb.enable()
import json
import pickle

team =[[] for x in range(4)]
form=cgi.FieldStorage()
fname=form.getvalue('teamname')
fname=fname+".py"
path="C:/xampp/htdocs/project/TeamNames/"
link=open(path+fname,"rb")
team=pickle.load(link)
z=json.dumps(team)
print(z)