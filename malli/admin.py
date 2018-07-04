#!C:/Python/python
print ("Content-Type: text/html ")
print()
import cgi;
import cgitb;cgitb.enable()
import json

form=cgi.FieldStorage();
name=form.getvalue('username');
password=form.getvalue('password');
if name=="arjun" and password=="arjun1998" :
    print(json.dumps("yes"))
else :
    print(json.dumps("no"))