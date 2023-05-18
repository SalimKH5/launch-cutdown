const daysdisplay=document.getElementById('days')
const hoursdisplay=document.getElementById('hours')
const minutesdisplay=document.getElementById('minutes')
const secondsdisplay=document.getElementById('seconds')


var seconds=1000;
var minutes=60*seconds;
var hours=minutes*60;

var days=hours*24;


var countdown= new Date('Aug 1 ,2023 00:00:00').getTime()



var x=setInterval(function(){

        var now =new Date().getTime()
        var distance=countdown-now;


        


        if(distance<0){
                
        daysdisplay.innerHTML="00"
        hoursdisplay.innerHTML="00"
        minutesdisplay.innerHTML="00"
        secondsdisplay.innerHTML="00"
        }else{
        var timedays=Math.floor(distance/(days))
        var timehours=Math.floor((distance%days)/(hours))
        var timeminutes=Math.floor((distance%hours)/(minutes))
        var timeseconds=Math.floor((distance%minutes)/(seconds))
        

        daysdisplay.innerHTML=timedays
        hoursdisplay.innerHTML=timehours
        minutesdisplay.innerHTML=timeminutes
        secondsdisplay.innerHTML=timeseconds
        }         

},1000)
