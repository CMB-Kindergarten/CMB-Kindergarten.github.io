function addEvent(obj,type,fn){//obj目标对象,type事件类型,fn函数回调
    if(typeof obj.addEventListener!=='undefined'){//W3C 标准
        obj.addEventListener(type,fn,false);//type事件名称,fn执行函数,false捕获
    }else if(typeof obj.attachEvent!=='undefined'){//IE
        obj.attachEvent('on'+type,fn);
        fn.call(obj,window.event);//对象冒充

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

function cssDoMove(obj, dir, time, target, endFn){
    setTimeout(function(){              //异步操作，防止多次定义样式覆盖问题
        obj.style[dir] = target + 'px';
        obj.style.transition = time + 's linear';
        setTimeout(function(){
            obj.style.transition = '0s';
            endFn && endFn();
        }, time*1000)
    });
}