#!C:/Python/python
print ("Content-Type: text/html ")
print()
import cgi;
import cgitb;cgitb.enable()
import json
import os
from os import listdir
from os.path import isfile, join

y=[]

mypath="C:/xampp/htdocs/exp-1/TeamNames/"

form =cgi.FieldStorage();
filename=form.getvalue("file");
filename2=filename+".py";
myfile=mypath+filename2;

## If file exists, delete it ##
if os.path.isfile(myfile):
    os.remove(myfile)
else:    ## Show an error ##
    print("Error: %s file not found" % myfile)