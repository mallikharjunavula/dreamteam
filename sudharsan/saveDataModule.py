import cgi;
import cgitb;cgitb.enable()
import gl
import pickle

team =[[] for x in range(4)]
def sDM(savelist,filename):
    savedata =open(filename,"wb")
    pickle.dump(savelist,savedata)
    savedata.close()

def rDM(filename):
    readdata =open(filename,"rb")
    team = pickle.load(readdata)
    readdata.close()
    return team


