var d1=new Date()
document.writeln("<h2>")
document.writeln("when their is no parameter : ",d1,"<br>")
var d2 =new Date(2000,9,15,22,23,445)
document.writeln("when you entered the parameter : ",d2,"<br>")
var d3=new Date(98,0,4)
document.writeln("when you entered only year, month, date :",d3,"<br>")
var d4=new Date(20000)
document.writeln(d4)

document.writeln("<b>METHODS FOR DATE OBJECT</b>","<BR>");
var date=new Date();
document.writeln("To get year method(getFullYear) : ",date.getFullYear(),"<br>");
document.writeln("To get Month method(getMonth) : ",date.getMonth(),"<br>");
document.writeln("To get date method(getDate) : ",date.getDate(),"<br>");
document.writeln("To get hours method(getHours) : ",date.getHours(),"<br>");
document.writeln("To get minutes method(getMinutes) : ",date.getMinutes(),"<br>");
document.writeln("To get seconds method(getSeconds) : ",date.getSeconds(),"<br>");