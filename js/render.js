addEvent(window,'load',window_renderFn);



function window_renderFn(){

    renderText(document.querySelector('#activity .activity>div'), 'activityText', activity);
    renderText(document.querySelector('#activity .home>div'), 'homeText', home);
    renderText(document.querySelector('#recipe .recipe>div'), 'recipeText', recipe);
    renderText(document.querySelector('#recipe .care>div'), 'careText', care);
    function renderText(templateWrap, templateTextId, data){
        let templateText = document.getElementById(templateTextId).innerHTML;
        templateWrap.innerHTML = template(templateText, data);
    }



















}
