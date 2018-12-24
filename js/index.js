window.onload = function(){
    let oPrompt = document.getElementById('prompt');
    let oPic1 = oPrompt.getElementsByClassName('pic')[0];
    let oWrap1 = oPrompt.getElementsByClassName('img')[0];
    let aNum1 = oPrompt.getElementsByClassName('num')[0].getElementsByTagName('li');
    oPic1.index = 0;

    let timer1 = setInterval(function(){move1()}, 2000);
    for(let i=0,len=aNum1.length; i<len; i++){
        aNum1[i].onclick = function(){
            oPic1.index = i;
            oPic1.style.left = -oPic1.index*270 + 'px';
        }
    }
    oWrap1.onmouseover = function(){
        clearInterval(timer1);
    };
    oWrap1.onmouseout = function(){
        clearInterval(timer1);
        timer1 = setInterval(function(){move1()}, 2000);
    };
    function move1(){
        oPic1.index++;
        oPic1.index %= aNum1.length;
        oPic1.style.left = -oPic1.index*270 + 'px';
    }










};