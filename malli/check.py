#!C:/Python/python
print ("Content-Type: text/html ")
print()
import cgi;
import cgitb;cgitb.enable()
import json
from os import listdir
from os.path import isfile, join

y=[]

mypath="C:/xampp/htdocs/project/TeamNames/"
onlyfiles = [f for f in listdir(mypath) if isfile(join(mypath, f))]
for x in range(len(onlyfiles)):
    s=onlyfiles[x]
    k=s[:-3]
    if k!="default" :
        y.append(k)
print(json.dumps(y))

