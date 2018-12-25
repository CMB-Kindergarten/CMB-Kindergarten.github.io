renderText(document.querySelector('#news .news>div'), 'newsText', data);
renderText(document.querySelector('#news .notice>div'), 'noticeText', data);
function renderText(templateWrap, templateTextId, data){
    let templateText = document.getElementById(templateTextId).innerHTML;
    templateWrap.innerHTML = template(templateText, data);
}