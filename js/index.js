

addEvent(window, 'load', window_onLoad);


function window_onLoad(){
    moveTopImg();
    moveTopText();
    moveHappyTimeImg();
}




/*function moveTopImg(){
    let oPrompt = document.getElementById('prompt');
    let oPicWrap = oPrompt.getElementsByClassName('img')[0];
    let aImg = oPicWrap.getElementsByTagName('img');
    let aNum1 = oPrompt.getElementsByClassName('num')[0].getElementsByTagName('li');

    let timer = setInterval(nextPic, 2500);
    mouseOverClearTimer(oPicWrap, timer, nextPic, 2500);

    oPicWrap.now = 0;               //记录显示区域中图片下标
    function nextPic(){                         //自动轮播
        for(let i=0, len=aNum1.length; i<len; i++){
            aNum1[i].className = '';
        }
        if(oPicWrap.now === aImg.length-1){
            aNum1[0].className = 'active';
            doMove(aImg[0], 'left', 10, 0);
        }else{
            aNum1[oPicWrap.now+1].className = 'active';
            doMove(aImg[oPicWrap.now+1], 'left', 10, 0);
        }
        doMove(aImg[oPicWrap.now], 'left', 10, -270, function(){
            aImg[oPicWrap.now].style.left = 270 + 'px';
            oPicWrap.now++;
            oPicWrap.now %= aImg.length;
        })
    }

    for(let i=0, len=aNum1.length; i<len; i++){
        aNum1[i].onclick = function(){          //点击列表切换图片
            for(let i=0, len=aNum1.length; i<len; i++){
                aNum1[i].className = '';
            }
            aNum1[i].className = 'active';
            if(i<oPicWrap.now){
                aImg[i].style.left = -270 + 'px';
                doMove(aImg[i], 'left', 10, 0);
                doMove(aImg[oPicWrap.now], 'left', 10, 270, function(){
                    oPicWrap.now = i;
                })
            }else if(i>oPicWrap.now){
                doMove(aImg[oPicWrap.now], 'left', 10, -270);
                doMove(aImg[i], 'left', 10, 0, function(){
                    aImg[oPicWrap.now].style.left = 270 + 'px';
                    oPicWrap.now = i;
                })
            }
        }
    }
}*/






function moveTopImg(){
    let oPrompt = document.getElementById('prompt');
    let oPicWrap = oPrompt.getElementsByClassName('img')[0];
    let aImg = oPicWrap.getElementsByTagName('img');
    let aNum1 = oPrompt.getElementsByClassName('num')[0].getElementsByTagName('li');

    let timer = setInterval(nextPic, 2500);
    mouseOverClearTimer(oPicWrap, timer, nextPic, 2500);

    oPicWrap.now = 0;               //记录显示区域中图片下标

    nextPic();

    function nextPic(){                         //自动轮播
        for(let i=0, len=aNum1.length; i<len; i++){
            aNum1[i].className = '';
        }
        if(oPicWrap.now === aImg.length-1){
            aNum1[0].className = 'active';
            cssDoMove(aImg[0], 'left', 0.5, 0);
        }else{
            aNum1[oPicWrap.now+1].className = 'active';
            cssDoMove(aImg[oPicWrap.now+1], 'left', 0.5, 0);
        }

        cssDoMove(aImg[oPicWrap.now], 'left', 0.5, -270, function(){
            cssDoMove(aImg[oPicWrap.now], 'left', 0, 270);
            oPicWrap.now++;
            oPicWrap.now %= aImg.length;
        })


    }

    for(let i=0, len=aNum1.length; i<len; i++){
        aNum1[i].onclick = function(){          //点击列表切换图片
            for(let i=0, len=aNum1.length; i<len; i++){
                aNum1[i].className = '';
            }
            aNum1[i].className = 'active';
            /*if(i<oPicWrap.now){
                aImg[i].style.left = -270 + 'px';
                cssDoMove(aImg[i], 'left', 0.5, 0);
                cssDoMove(aImg[oPicWrap.now], 'left', 0.5, 270, function(){
                    oPicWrap.now = i;
                })
            }else if(i>oPicWrap.now){
                cssDoMove(aImg[oPicWrap.now], 'left', 0.5, -270);
                cssDoMove(aImg[i], 'left', 0.5, 0, function(){
                    cssDoMove(aImg[oPicWrap.now], 'left', 0, -270);
                    oPicWrap.now = i;
                })
            }*/
        }
    }
}












function moveTopText(){
    let oPrompt = document.getElementById('prompt');
    let oHintWextWrap = document.querySelector('#prompt .hint>div');
    let oHintText = oPrompt.getElementsByClassName('text')[0];

    let timerText = setInterval(moveText, 40);
    mouseOverClearTimer(oHintWextWrap, timerText, moveText, 40);

    oHintText.top = 0;
    function moveText(){                            //移动文字
        oHintText.top--;
        if(oHintText.top <= -parseInt(getComputedStyle(oHintText).height) ){
            oHintText.top = 75;
        }
        oHintText.style.top = oHintText.top + 'px';
    }
}



function moveHappyTimeImg(){
    let picWrap = document.querySelector('#happyTime .pic');
    let aImg = document.querySelectorAll('#happyTime img');
    let prev = document.querySelector('#happyTime .prev');
    let next = document.querySelector('#happyTime .next');
    picWrap.now = 0;            //存放显示区中第一个图片下标
    picWrap.prevBtn = true;
    picWrap.nextBtn = true;

    let timer = setInterval(nextPic, 2000);
    mouseOverClearTimer(picWrap, timer, nextPic, 2000);

    prev.onclick = prevPic;
    next.onclick = nextPic;

    function nextPic(){
        if(!picWrap.nextBtn) return;
        picWrap.nextBtn = !picWrap.nextBtn;
        if(picWrap.now === aImg.length-3){
            doMove(aImg[picWrap.now], 'left', 10, -270);
            doMove(aImg[picWrap.now+1], 'left', 10, 0);
            doMove(aImg[picWrap.now+2], 'left', 10, 270);
            doMove(aImg[0], 'left', 10, 540, endFn);
        }else if(picWrap.now === aImg.length-2){
            doMove(aImg[picWrap.now], 'left', 10, -270);
            doMove(aImg[picWrap.now+1], 'left', 10, 0);
            doMove(aImg[0], 'left', 10, 270);
            doMove(aImg[1], 'left', 10, 540, endFn);
        }else if(picWrap.now === aImg.length-1){
            doMove(aImg[picWrap.now], 'left', 10, -270);
            doMove(aImg[0], 'left', 10, 0);
            doMove(aImg[1], 'left', 10, 270);
            doMove(aImg[2], 'left', 10, 540, endFn);
        }else{
            doMove(aImg[picWrap.now], 'left', 10, -270);
            doMove(aImg[picWrap.now+1], 'left', 10, 0);
            doMove(aImg[picWrap.now+2], 'left', 10, 270);
            doMove(aImg[picWrap.now+3], 'left', 10, 540, endFn);
        }
        function endFn(){
            aImg[picWrap.now].style.left = 810 + 'px';
            picWrap.now++;
            picWrap.now %= aImg.length;
            picWrap.nextBtn = !picWrap.nextBtn;
        }
    }
    function prevPic(){
        if(!picWrap.prevBtn) return;
        picWrap.prevBtn = !picWrap.prevBtn;
        if(picWrap.now === 0){
            aImg[aImg.length-1].style.left = -270 + 'px';
            doMove(aImg[aImg.length-1], 'left', 10, 0);
            doMove(aImg[picWrap.now], 'left', 10, 270);
            doMove(aImg[picWrap.now+1], 'left', 10, 540);
            doMove(aImg[picWrap.now+2], 'left', 10, 810, endFn);
        }else if(picWrap.now === aImg.length-1){
            aImg[picWrap.now-1].style.left = -270 + 'px';
            doMove(aImg[picWrap.now-1], 'left', 10, 0);
            doMove(aImg[picWrap.now], 'left', 10, 270);
            doMove(aImg[0], 'left', 10, 540);
            doMove(aImg[1], 'left', 10, 810, endFn);
        }else if(picWrap.now === aImg.length-2){
            aImg[picWrap.now-1].style.left = -270 + 'px';
            doMove(aImg[picWrap.now-1], 'left', 10, 0);
            doMove(aImg[picWrap.now], 'left', 10, 270);
            doMove(aImg[picWrap.now+1], 'left', 10, 540);
            doMove(aImg[0], 'left', 10, 810, endFn);
        }else{
            aImg[picWrap.now-1].style.left = -270 + 'px';
            doMove(aImg[picWrap.now-1], 'left', 10, 0);
            doMove(aImg[picWrap.now], 'left', 10, 270);
            doMove(aImg[picWrap.now+1], 'left', 10, 540);
            doMove(aImg[picWrap.now+2], 'left', 10, 810, endFn);
        }
        function endFn(){
            picWrap.now--;
            picWrap.now = picWrap.now === -1 ? aImg.length-1 : picWrap.now;
            picWrap.prevBtn = !picWrap.prevBtn;
        }
    }

}




function mouseOverClearTimer(obj, timer, fn, times){     //鼠标移入清除定时器
    obj.onmouseover = function(){
        clearInterval(timer);
    };
    obj.onmouseout = function(){
        clearInterval(timer);
        timer = setInterval(fn, times);
    };
}

function getStyle(obj, attr){
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, false)[attr];
}

function doMove ( obj, attr, dir, target, endFn ){
    dir = parseFloat(getStyle(obj,attr)) < target ? dir : -dir;
    clearInterval( obj.timer );
    obj.timer = setInterval( function(){
        let speed = parseFloat(getStyle(obj,attr)) + dir;
        if( speed < target && dir < 0 || speed > target && dir > 0 ){
            speed = target;
        }
        obj.style[attr] = speed + 'px';
        if( speed === target ){
            clearInterval( obj.timer );
            endFn && endFn();
        }
    }, 20);
}


function cssDoMove(obj, dir, time, target, endFn){
    obj.style[dir] = target + 'px';
    obj.style.transition = time + 's linear';
    setTimeout(function(){
        obj.style.transition = '0s';
        endFn && endFn();
    }, 500)
}