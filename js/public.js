function addEvent(obj,type,fn){//obj目标对象,type事件类型,fn函数回调
    if(typeof obj.addEventListener!=='undefined'){//W3C 标准
        obj.addEventListener(type,fn,false);//type事件名称,fn执行函数,false捕获
    }else if(typeof obj.attachEvent!=='undefined'){//IE
        obj.attachEvent('on'+type,fn);
        fn.call(obj,window.event);//对象冒充

    }

}
