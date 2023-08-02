const myBirth = "28 Jun 2003";

function countdown(){
    const myNewBirth = new Date(myBirth);
    const curnDate = new Date();
    
    const totalSeconds = (myNewBirth - curnDate)/1000;

    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600) % 24;
    const minutes = Math.floor(totalSeconds/60)%60;
    const seconds = Math.floor(totalSeconds%60);


    console.log(days,hours,minutes,seconds);
    document.getElementById('days1').innerHTML= days;
    document.getElementById('hours1').innerHTML= hours;
    document.getElementById('min1').innerHTML= minutes;
    document.getElementById('sec1').innerHTML= seconds;
}
countdown();
setInterval(countdown,1000);
