const getTimeArea = document.querySelector('.time-area');
const visitHour = 'visitHour';
const visitMin = 'visitMin';
const visitSec = 'visitSec';
const usernameKey2 = 'username';
let timeBoolean = false;

if(localStorage.getItem(usernameKey2)!=null){
    run()
}

function run(){
    if((localStorage.getItem(visitHour)&&localStorage.getItem(visitMin)&&localStorage.getItem(visitSec))===null){
        timer(true);
    }else{
        timer(false);
    }
}


function timer(isFirst){
    let second;
    let min;
    let hour;
    if(isFirst){
        second = 0;
        min = 0;
        hour = 0;    
    }else{
        second = parseInt(localStorage.getItem(visitSec)||0);
        min = parseInt(localStorage.getItem(visitMin)||0);
        hour = parseInt(localStorage.getItem(visitHour)||0); 
    }

    setInterval(()=>{    
        if(second==60){
            second=0;
            min++;
        }
        if(min==60){
            min = 0;
            hour++;
        }
        write(second,min,hour);
        second++;
    
    },1000);
}

function write(second,min,hour){
    localStorage.setItem(visitSec,second);
    localStorage.setItem(visitMin,min);
    localStorage.setItem(visitHour,hour);

    getTimeArea.innerHTML = `<strong>${hour}</strong>시 
                             <strong>${min}</strong>분 
                             <strong>${second}</strong>초째`;
}
