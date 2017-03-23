我们在编写html页面的时候，不可避免的会遇到元素居中的问题，水平居中还好说 我们可以通过设置margin: auto;text-align: center;来实现水平居中。垂直居中的话，单个标签我们可以通过设置line-height来实现垂直居中，但是多个标签的时候就没法这么做了。 有一种方法就是通过js算出元素的left和top值来实现居中。一般都是获取父元素的宽高，再获取子元素的宽高，父元素的宽高减去子元素的宽高除以二就是元素本身的left和top的值。 为了方便开发，我将居中写成了几个方法，开发的时候直接调用即可，下面是代码的实现。

**js**

```
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
```

---


**html中使用：**

```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title></title>
	<script type="text/javascript" src="js/centerJs.js" ></script>
		<style>
			.parent {
				position: absolute;
				width: 500px;
				height: 300px;
				border: 3px solid red;
			}
			.child {
				width: 100x;
				height: 100px;
				position: absolute;
				border: 2px solid black;
			}
			#p {
				position: absolute;
				width: 300px;
				height: 300px;
				border: 1px solid blue;
			}
			#c {
				position: absolute;
				border: 1px solid green;
			}
		</style>
		<script>
			window.onload=function  () {
				center();
			}
			
			window.onresize=function  () {
				center();
			}
			
			function center () {
				var p=document.getElementsByClassName("parent")[0];
				var c=document.getElementsByClassName("child")[0];
				var p1=document.getElementById("p");
				var c1=document.getElementById("c");
				
				centerParent(p)
				centerverticalWithEle(c,p);
				centerHorizontal(p1);
				centerParentWithEle(c1,p1);
			}
		</script>

	</head>

	<body style="width: 100%;height: 100%;">

		<div class="parent">
		父元素
			<div class="child">子元素</div>
		</div>

		<div id="p">
		父元素
			<div id="c">子元素</div>
		</div>
	
	</body>

</html>
```

![这里写图片描述](http://img.blog.csdn.net/20170323152332801?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQveXV6aGlxaWFuZ18xOTkz/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
