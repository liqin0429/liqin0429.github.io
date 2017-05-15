// 当页面加载之后执行函数
window.onload=function () {
	// 常量
	// designWidh设计宽度
	const designWidh=768;
	const fontSize=100;
	// 用JS给html设置样式
	// document.querySelector("html").style.fontSize=fontSize+"px";
	function resizeFont(){
		// 变量 var
		var CW = document.documentElement.clientWidth;
		// 浏览器大小
		// console.log(CW); 
		var radio = CW/designWidh;
		var newFontSize= fontSize*radio;
		document.querySelector("html").style.fontSize= newFontSize + "px";
	}
	resizeFont();
	// 窗口大小改变时执行resizeFont
	window.onresize= resizeFont;

}