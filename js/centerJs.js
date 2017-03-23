/*create by yzq*/
/*以浏览器为基准水平居中*/
function centerHorizontal(ele) {

	var eleW = ele.offsetWidth; //获取元素的宽度
	var width = client().width; //获取窗口的宽度
	var left = (width - eleW) / 2; //窗口宽度减去元素宽度，然后除以二

	ele.style.left=left+"px";
	
}
/*以浏览器为基准垂直居中*/
function centervertical(ele) {
	
	var eleH = ele.offsetHeight;
	var height = client().height;
	var top = (height - eleH) / 2;
	ele.style.top = top + 'px';

}
/*以浏览器为基准垂直水平居中*/
function centerParent(ele) {
	
	var eleW = ele.offsetWidth;
	var eleH = ele.offsetHeight;
	var height = client().height;
	var width = client().width;
	var left = (width - eleW) / 2;
	var top = (height - eleH) / 2;

	ele.style.left=left+"px";
	ele.style.top=top+"px";
}

/*以某个父元素为基准水平居中*/
function centerHorizontalWithEle(child, parent) {
	var Cw = child.offsetWidth; //获取父元素的宽度
	var Pw = parent.offsetWidth; //获取子元素的宽度
	var left = (Pw - Cw) / 2; //父元素宽度减去子元素宽度，然后除以二
	child.style.left=left+"px";

}
/*以某个父元素为基准垂直居中*/
function centerverticalWithEle(child, parent) {
	var Ch = child.offsetHeight;
	var Ph = parent.offsetHeight;
	var top = (Ph - Ch) / 2;
	child.style.top=top+"px";

}
/*以某个父元素为基准居中*/
function centerParentWithEle(child, parent) {
	var Cw = child.offsetWidth;
	var Ch = child.offsetHeight;
	var Pw = parent.offsetWidth;
	var Ph = parent.offsetHeight;
	var left = (Pw - Cw) / 2;
	var top = (Ph - Ch) / 2;
	child.style.left=left+"px";
	child.style.top=top+"px";
	
}

/*浏览器可视区域的宽高*/
function client(){
    if(window.innerWidth){
        return {
            "width":window.innerWidth,
            "height":window.innerHeight
        };
    }else if(document.compatMode === "CSS1Compat"){
        return {
            "width":document.documentElement.clientWidth,
            "height":document.documentElement.clientHeight
        };
    }else{
        return {
            "width":document.body.clientWidth,
            "height":document.body.clientHeight
        };
    }
}