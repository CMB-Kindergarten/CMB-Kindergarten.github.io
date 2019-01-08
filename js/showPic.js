function showPic(picQuery){
    const aImg = document.querySelectorAll(picQuery);
    const filter = document.createElement('div');
    document.body.appendChild(filter);
    filter.style.cssText = `height:${document.documentElement.clientHeight+100}px; width:100%; z-index:1; background:rgba(0,0,0,0.4); position:absolute; display:none; `;
    for(let i=0; i<aImg.length; i++){
        aImg[i].onclick = function(){
            const showImg = document.createElement('img');
            document.body.appendChild(showImg);
            showImg.style.cssText = 'width:840px; position:absolute; z-index:2; ';
            showImg.src = this.src;
            showImg.onload = function(){
                let scrollTop = document.documentElement.scrollTop;
                let windowHeight = document.documentElement.clientHeight;
                let windowLeft = document.documentElement.clientWidth;
                showImg.style.display = 'block';
                filter.style.display = 'block';
                if(parseInt(getStyle(showImg, 'height'))>windowHeight){
                    showImg.style.height = `${windowHeight}px`;
                    showImg.style.width =  'auto';
                }
                filter.style.top = `${document.documentElement.scrollTop-50}px`;
                showImg.style.top = scrollTop+windowHeight/2-parseInt(getStyle(showImg, 'height'))/2 + 'px';
                showImg.style.left = windowLeft/2-parseInt(getStyle(showImg, 'width'))/2 + 'px';
                showImg.onclick = function(){
                    document.body.removeChild(showImg);
                    filter.style.display = 'none';
                };
                filter.onclick = function(){
                    document.body.removeChild(showImg);
                    filter.style.display = 'none';
                };
            };
            window.onscroll = function(){
                let scrollTop = document.documentElement.scrollTop;
                let windowHeight = document.documentElement.clientHeight;
                filter.style.top = `${document.documentElement.scrollTop-50}px`;
                showImg.style.top = scrollTop+windowHeight/2-parseInt(getStyle(showImg, 'height'))/2 + 'px';
            };
        }
    }
}
function getStyle(obj,attr){
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
}