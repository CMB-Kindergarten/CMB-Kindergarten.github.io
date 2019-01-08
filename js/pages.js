function page(opt){
    //把变量挂载到顶级window下，确保模板引擎和主页js都能获取
    //now/len/data(算长度)/templateTextQuery/renderWrapQuery/renderData
    opt.endFn = opt.endFn || [];

    window.now = opt.now;
    window.len = opt.len;
    window.page = Math.ceil(opt.dataLen / len);

    const changePage = document.querySelectorAll('.page span');
    const jump = document.querySelector('.page input[type="text"]');
    const GO = document.querySelector('.page input[type="button"]');

    render();
    judge();
    turnPagePrev();
    turnPageNext();

    GO.onclick = function () {
        if (!(jump.value > 0 && jump.value <= page && parseInt(jump.value) === parseFloat(jump.value))) {
            jump.value = '';
            alert('页码范围越界或格式有误');
            return;
        }
        now = parseInt(jump.value);
        render();
        judge();
        jump.value = '';
    };

    function turnPagePrev() {
        if (page === 1) return;      //若只有一页，则禁止翻页
        changePage[0].onclick = function () {
            now = 1;
            render();
            judge();
        };
        changePage[1].onclick = function () {
            now--;
            render();
            judge();
        };
    }

    function turnPageNext() {
        if (page === 1) return;
        changePage[2].onclick = function () {
            now++;
            render();
            judge();
        };
        changePage[3].onclick = function () {
            now = page;
            render();
            judge();
        };
    }

    function render() {      //渲染数据
        let templateText = document.querySelector(opt.templateTextQuery).innerHTML;
        let wrap = document.querySelector(opt.renderWrapQuery);
        wrap.innerHTML = template(templateText, opt.renderData);
        for(let i=0; i<opt.endFn.length; i++){
            opt.endFn[i] && opt.endFn[i](opt.endFnOpt[i]);
        }
    }

    function judge() {       //判断是否为首页或尾页
        if (page === 1) {
            changePage[0].className = changePage[1].className = 'disable';
            changePage[2].className = changePage[3].className = 'disable';
        } else if (now === 1) {
            changePage[0].className = changePage[1].className = 'disable';
            changePage[2].className = changePage[3].className = '';
            changePage[0].onclick = changePage[1].onclick = null;
            turnPageNext();
        } else if (now === page) {
            changePage[0].className = changePage[1].className = '';
            changePage[2].className = changePage[3].className = 'disable';
            changePage[2].onclick = changePage[3].onclick = null;
            turnPagePrev();
        } else {
            changePage[0].className = changePage[1].className = '';
            changePage[2].className = changePage[3].className = '';
            turnPagePrev();
            turnPageNext();
        }
    }
}