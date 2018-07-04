#!C:/Python/python
print ("content-Type: text/html ")
print()
import cgi;
import cgitb;cgitb.enable()
import json

from itertools import combinations
from array import array

form=cgi.FieldStorage()
count=form.getvalue('count')
a=int(count)
t1=0
t2=0
t3=0
t4=0
main=[]
wk=[]
bat=[]
all=[]
bow=[]
fina=[]
for x in range(a):
    player=[]
    z="details"+str(x)
    p1=form.getvalue(z)
    b=p1.index(":")
    r=b-1
    name=p1[0:r] 
    team=int(p1[-2])
    q=len(p1)
    p=q-2
    r=b+1
    d=p1[r:p]
    points=float(d)
    index=int(p1[-1])
    player.append(name)
    player.append(points)
    player.append(team)
    if index==0:
        wk.append(player)
        t1=t1+1
    if index==1:
        bat.append(player)
        t2=t2+1
    if index==2:
        all.append(player)
        t3=t3+1
    if index==3:
        bow.append(player)
        t4=t4+1
main.extend(wk)
main.extend(bat)
main.extend(all)
main.extend(bow)
pq=0
wk2=[]
bat2=[]
all2=[]
bow2=[]
for x in range(int(t1)):
    wk2.append(pq)
    pq=pq+1
for x in range(int(t2)):
    bat2.append(pq)
    pq=pq+1
for x in range(int(t3)):
    all2.append(pq)
    pq=pq+1
for x in range(int(t4)):
    bow2.append(pq)
    pq=pq+1
T=11
Tc=0
Top=0
counter=0
z=0
loop=1
final=[0,0,0,0]
arr=[]
wk1 =combinations(wk2,1);
for l in list(wk1):
    #print (l)
    #final[0]=l
    arr = array('i',l)
    for j in range(3,6):
        BAt = combinations(bat2,j)
        for m in list(BAt):
            #print(m)
            #final[1]=m
            arr=arr[:1]
            arr.extend(array('i',m))
            if j==3:
                start=2
                end=3
            if j==4:
                start=1
                end=3
            if j==5:
                start=1
                end = 2
            for k in range(start,end+1):
                Al=combinations(all2,k)
                for n in list(Al):
                    #print(n)
					#final[2]=n
                    arr=arr[:1+j]
                    arr.extend(array('i',n))
                    rem=1+j+k
                    rem2=T-rem
                    #print (rem2)
                    #input()
                    BOW = combinations(bow2,rem2)
                    for o in list(BOW):
                        #print(o)
                        #final[3]=0
                            
                        arr.extend(array('i',o))
                        for item in arr:
                            Top=Top+main[item][1]
                            Tc=Tc+main[item][2]
                        if Top<=100 and (Tc<8 and Tc>3):                          
                            for item in arr:
                                fina.append(main[item][0])
                            counter=counter+1
                            #print(counter)                 
                        Top=0
                        Tc=0
                        #print("\n")
                        arr=arr[:rem]
fin=json.dumps(fina)
print(fin)