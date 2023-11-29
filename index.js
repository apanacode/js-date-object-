var d1=new Date()
document.writeln("<h2>")
document.writeln("when their is no parameter : ",d1,"<br>")
var d2 =new Date(2000,9,15,22,23,445)
document.writeln("when you entered the parameter : ",d2,"<br>")
var d3=new Date(98,0,4)
document.writeln("when you entered only year, month, date :",d3,"<br>")
var d4=new Date(20000)
document.writeln(d4,"<br>");
document.writeln("<br>")
document.writeln("<b>GET METHODS FOR DATE OBJECT : </b>","<br>");
document.writeln("<br>");
var date=new Date();
document.writeln("To get year method(getFullYear) : ",date.getFullYear(),"<br>");
document.writeln("To get Month method(getMonth) : ",date.getMonth(),"<br>");
document.writeln("To get date method(getDate) : ",date.getDate(),"<br>");
document.writeln("To get hours method(getHours) : ",date.getHours(),"<br>");
document.writeln("To get minutes method(getMinutes) : ",date.getMinutes(),"<br>");
document.writeln("To get seconds method(getSeconds) : ",date.getSeconds(),"<br>");
document.writeln("<br>")
document.writeln("<b>SET METHODS FOR DATE OBJECT : </b><br>");
document.writeln("<br>");
var currentdate=new Date();
document.writeln("New date",currentdate,"<br>");
currentdate.setFullYear(2023);
document.writeln("set new year setFullYear() : ",currentdate,"<br>");
currentdate.setMonth(3);
document.writeln("set month",currentdate,"<br>")
currentdate.setDate(22)
document.writeln("set month : ",currentdate,"<br>");
currentdate.setHours(12)
document.writeln("set hours : ",currentdate,"<br>");
currentdate.setMinutes(33);
document.writeln("set minutes : ",currentdate,"<br>" );
currentdate.setSeconds(45);
document.writeln("set seconds : ",currentdate,"<br>");
currentdate.setMilliseconds(333);
document.writeln("set milliseconds : ",currentdate,"<br>");