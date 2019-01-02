window.onload = function(){
    const aImg = document.querySelectorAll('#content table img');
    const filter = document.querySelector('.filter');
    const showImg = document.createElement('img');
    document.body.appendChild(showImg);
    for(let i=0; i<aImg.length; i++){
        aImg[i].onclick = function(){
            showImg.src = this.src;
            showImg.onload = function(){
                let scrollTop = document.documentElement.scrollTop;
                let windowHeight = document.documentElement.clientHeight;
                let windowLeft = document.documentElement.clientWidth;
                showImg.style.display = 'block';
                filter.style.display = 'block';
                showImg.style.top = scrollTop+windowHeight/2-parseInt(getStyle(showImg, 'height'))/2 + 'px';
                showImg.style.left = windowLeft/2-parseInt(getStyle(showImg, 'width'))/2 + 'px';
                showImg.onclick = function(){
                    showImg.style.display = 'none';
                    filter.style.display = 'none';
                };
                filter.onclick = function(){
                    showImg.style.display = 'none';
                    filter.style.display = 'none';
                };
                console.log(scrollTop, windowHeight, parseInt(getStyle(showImg, 'height')), scrollTop+windowHeight/2-parseInt(getStyle(showImg, 'height'))/2, showImg.style.top)
            }
        }
    }
};
function getStyle(obj,attr){
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
}