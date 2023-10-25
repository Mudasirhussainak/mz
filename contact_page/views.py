from django.shortcuts import render
import mysql.connector as sql
from django.contrib import messages
yourname=''
youremail=''
yourmessage=''
# Create your views here.

def contact(request):
     global yourname,youremail,yourmessage
     if request.method=="POST":
        m=sql.connect(host="localhost",user="root",passwd="Mudasir@20001",database='mywebsite')
        cursor=m.cursor()
        d=request.POST
        for key,value in d.items():
            if key=="name":
                yourname=value
            if key=="email":
                youremail=value
            if key=="message":
                yourmessage=value
        
        c="insert into contact Values('{}','{}','{}')".format(yourname,youremail,yourmessage)
        cursor.execute(c)
        m.commit()
        
        messages.success(request,'Contanct Has Submited')
     return render(request,'contact.html')
