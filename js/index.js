window.onload = function(){
    let oPrompt = document.getElementById('prompt');
    let oPic1 = oPrompt.getElementsByClassName('pic')[0];
    let oPicWrap = oPrompt.getElementsByClassName('img')[0];
    let aNum1 = oPrompt.getElementsByClassName('num')[0].getElementsByTagName('li');
    let oHintWextWrap = document.querySelector('#prompt .hint>div');
    let oHintText = oPrompt.getElementsByClassName('text')[0];
    oPic1.index = 0;
    oHintText.top = 0;
    for(let i=0,len=aNum1.length; i<len; i++){      //图片导航按钮
        aNum1[i].onclick = function(){
            oPic1.index = i;
            for(let i=0, len=aNum1.length; i<len; i++){ //定义active
                aNum1[i].className = '';
            }
            aNum1[oPic1.index].className = 'active';
            oPic1.style.left = -oPic1.index*270 + 'px';
        }
    }
    let timer1 = setInterval(timerPic, 2000);
    let timerText = setInterval(moveText, 25);
    clearTimer(oPicWrap, timer1, timerPic, 2000);
    clearTimer(oHintWextWrap, timerText, moveText, 25);

    function timerPic(){                            //移动图片
        oPic1.index++;
        oPic1.index %= aNum1.length;
        for(let i=0, len=aNum1.length; i<len; i++){ //定义active
            aNum1[i].className = '';
        }
        aNum1[oPic1.index].className = 'active';
        oPic1.style.left = -oPic1.index*270 + 'px';
    }
    function moveText(){                            //移动文字
        oHintText.top--;
        if(oHintText.top <= -parseInt(getComputedStyle(oHintText).height) ){
            oHintText.top = 75;
        }
        oHintText.style.top = oHintText.top + 'px';
    }
    function clearTimer(obj, timer, fn, times){     //鼠标移入清除定时器
        obj.onmouseover = function(){
            clearInterval(timer);
        };
        obj.onmouseout = function(){
            clearInterval(timer);
            timer = setInterval(fn, times);
        };
    }

    //模板引擎加入新闻和通知
    renderText(document.querySelector('#news .news>div'), 'newsText', data);
    renderText(document.querySelector('#news .notice>div'), 'noticeText', data);
    function renderText(templateWrap, templateTextId, data){
        let templateText = document.getElementById(templateTextId).innerHTML;
        templateWrap.innerHTML = template(templateText, data);
    }





};