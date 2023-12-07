let today=new Date();

//To do task1 i.e., to print day

let day=today.getDay();
const dayList=["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.writeln("Today is : ",dayList[day],".","\n");

//To do task2 i.e., to print currenttime

let hours=today.getHours();
let minutes=today.getMinutes();
let seconds=today.getSeconds();

if(hours<=12){
    
    document.writeln("current time is :",hours," AM : ",minutes," : ",seconds);
}
else{
    document.writeln("current time is :",hours-12," PM : ",minutes," : ",seconds);
}




