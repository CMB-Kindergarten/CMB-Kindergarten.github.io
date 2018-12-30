addEvent(window,'load',window_renderFn);



function window_renderFn(){




    renderText('#activity .activity>div', 'activityText', activity);
    renderText('#activity .home>div', 'homeText', home);
    renderText('#happyTime .content>div', 'happyTimeText', activity);
    renderText('#recipe .recipe>div', 'recipeText', recipe);
    renderText('#recipe .care>div', 'careText', care);
    function renderText(templateWrapId, templateTextId, data){
        let templateText = document.getElementById(templateTextId).innerHTML;
        document.querySelector(templateWrapId).innerHTML = template(templateText, data);
    }





}
