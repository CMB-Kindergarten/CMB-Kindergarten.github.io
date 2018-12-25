addEvent(window,'load',window_renderFn)



function window_renderFn(){

    renderText(document.querySelector('#news .news>div'), 'newsText', data);
    renderText(document.querySelector('#news .notice>div'), 'noticeText', data);
    renderText(document.querySelector('#education .education>div'), 'educationText', data);
    renderText(document.querySelector('#education .care>div'), 'careText', data);
    function renderText(templateWrap, templateTextId, data){
        let templateText = document.getElementById(templateTextId).innerHTML;
        templateWrap.innerHTML = template(templateText, data);
    }



















}
