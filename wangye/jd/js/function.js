// alert(1)

// 判断是否是一个函数。如果是的话执行window.onload
function $(type,obj=document){
	if(typeof type=='function'){
		window.onload = function(){
			type();
		}
	}else if(typeof type =='string'){
		//<af2>    /^</  \w 字母数量下划线  (比一个多加+)
		//alert(/^<\w+>$/.test(type))   //满足为真
		if(/^<\w+>$/.test(type)){
			return document.createElement(type.slice(1,-1));
		}else{
			return obj.querySelectorAll(type);
		}
		
		
	}
}
//层级轮播
//banner
// pic            	轮播图
// bigbannerbox   	通屏的banner盒子
// lis            	轮播点
// colorArr		  	通屏banner盒子的所有颜色
// tuactivez      	默认层级
// lisColor			轮播点换色
// liactivebgColor	轮播点默认颜色
// tuZ              图片层级低
// lbTime         	轮播时间
function lunbo(pic,bigbannerBox,lis,colorArr,second,tuactiveZ,liactivebgcolor,tuZ,liscolor,zuojiant,youjiant){
	const tu = $(pic);
	const banner = $(bigbannerBox)[0];
	const li = $(lis);
	const color = colorArr;
	const leftBtn=$(zuojiant)[0];
	const rightBtn=$(youjiant)[0];
	// 给出初始值
	// tu[0].style.zIndex=tuactiveZ;
	tu[0].style.opacity=1;
	// li[0].style.borderBottomColor=liactivebgcolor;
	li[0].style.backgroundColor=liactivebgcolor;
	banner.style.backgroundColor=color[0];
	var num = 0;
	flag=true;
	var t = setInterval(move,second);
	// 轮播点的变化
	for(let j=0;j<li.length;j++){
		li[j].onmouseover=function(){
			
			// 回到默认样式
			for(let i=0;i<tu.length;i++){
				// tu[i].style.zIndex=tuZ;
				tu[i].style.opacity=0;
				// li[i].style.borderBottomColor=liscolor;
				li[i].style.backgroundColor=liscolor;
			}
			// 提高层级，轮播点变颜色，banner背景也跟着变颜色
			// tu[j].style.zIndex=tuactiveZ;
			animate(tu[j],{opacity:1},1000);
			// li[j].style.borderBottomColor=liactivebgcolor;
			li[j].style.backgroundColor=liactivebgcolor;
			banner.style.backgroundColor=color[j];
			num=j;
		}
	}
	
	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t = setInterval(move,second);
	}
	
	// 点击左箭头
	leftBtn.onclick=function(){
		if(flag){
			move("l");
		}
	}
	// 点击右箭头
	rightBtn.onclick=function(){
		if(flag){
			move("r");
		}
	}
	
	// 轮播图的变化，把他封装到一个函数中
	function move(type="l"){
		flag=false;
		// 开关是判断左箭头还是右箭头
		if(type=="l"){
			num++;
			if(num>tu.length-1){
			num=0;
			}
		}else if(type=="r"){
			num--;
			if(num<0){
			num=tu.length-1;
			}
		}
		for(let i=0;i<tu.length;i++){
			tu[i].style.opacity=0;
			// li[i].style.borderBottomColor=liscolor;
			li[i].style.backgroundColor=liscolor;
			}
		// 自动变化，提高层级，变轮播点的颜色，还有banner图的背景
		animate(tu[num],{opacity:1},500,function(){
			flag=true;
		});
		// li[num].style.borderBottomColor=liactivebgcolor;
		li[num].style.backgroundColor=liactivebgcolor;
		banner.style.backgroundColor=color[num];
	}
}

function lb(pic,bigbannerbox,lis,colorArr,tuactivez,lisColor,liactivebgColor,tuZ,lbTime,shu,leftn,rightn,oa){
		const tu=$(pic);
		const banner=$(bigbannerbox)[0];
		const li=$(lis);
		const color=colorArr;
		const left=$(leftn)[0];
		const right=$(rightn)[0];

		tu[0].style.opcity=1;
		tu[0].style.zIndex=tuactivez;
		li[0].style.background=liactivebgColor;
		banner.style.background=color[0];
		var n=0;
		var t=setInterval(move,lbTime)
		banner.onmouseover=function(){
			clearInterval(t);
			left.style.display="block"
			right.style.display="block"
		}
		banner.onmouseout=function(){
			t=setInterval(move,lbTime);
			left.style.display="none"
			right.style.display="none"
		}
		left.onclick=function(){
			move("l");
		}
		right.onclick=function(){
			move("r");
		}
		left.onmouseover=function(){
			clearInterval(t);
		}
		right.onmouseover=function(){
			clearInterval(t);
		}
		for(let j=0;j<li.length;j++){
			li[j].onmouseover=function(){
				for(let i=0;i<tu.length;i++){
				li[i].style.background=liactivebgColor;
				}
				li[j].style.background=lisColor;
				// li[n].style.background=lisColor;
			}
			li[j].onmouseover=function(){
				for(let i=0;i<tu.length;i++){
				tu[i].style.zIndex=tuZ;
				tu[i].style.opacity=oa;
				li[i].style.background=liactivebgColor;
				}
				tu[j].style.zIndex=tuactivez;
				li[j].style.background=lisColor;
				animate(tu[j],{opacity:1},300);
				n=j;
				banner.style.background=color[j];
			}
			li[j].onmouseout=function(){
				// for(let i=0;i<tu.length;i++){
				// li[i].style.background=liactivebgColor;
				// }
				// li[j].style.background=liactivebgColor;
				// li[n].style.background=lisColor;
			}
			
		}

		function move(type="r"){
			// clearInterval(t)
			if(type=="r"){
				n++;
			if(n>shu){
				n=0;
			}
			for(let i=0;i<tu.length;i++){
				tu[i].style.opacity=oa;
				tu[i].style.zIndex=tuZ;
				li[i].style.background=liactivebgColor;

			}
			tu[n].style.zIndex=tuactivez;
			li[n].style.background=lisColor;
			banner.style.background=color[n];
			animate(tu[n],{opacity:1},300);
		}else if(type=="l"){
				n--;
			if(n<0){
				n=shu;
			}
			for(let i=0;i<tu.length;i++){
				tu[i].style.opacity=oa;
				tu[i].style.zIndex=tuZ;
				li[i].style.background=liactivebgColor;
			}
			tu[n].style.zIndex=tuactivez;
			li[n].style.background=lisColor;
			banner.style.background=color[n];
			animate(tu[n],{opacity:1},300);
		}
			

		}
}


// 创建元素


// 层级轮播图
// pic 轮播图  (字符串的选择器)
// bigbannerBox  通屏的banner盒子   (字符串的选择器)
// lis      轮播点    (字符串的选择器)
// colorArr     通屏banner盒子的所有颜色   (数组['red','blue','green'])
// tuBigZ    第一张图片默认的层级
// liactivebgColor 当前轮播焦点颜色
// lunboTime    轮播时间
// tuZ     当前轮播图的层级
// lisColor  其他轮播焦点的颜色


function Zlunbo(pic,bigbannerBox,lis,colorArr,tuBigZ,liactivebgColor,lunboTime,tuZ,lisColor,leftBtn,rightBtn){
	const tu = $(pic);
	const banner = $(bigbannerBox)[0];
	const li = $(lis);
	const color =colorArr;
	tu[0].style.zIndex = tuBigZ;
	li[0].style.background = liactivebgColor;
	banner.style.background = color[0];

	var num = 0;
	var t = setInterval(move,lunboTime);

	banner.onmouseover = function(){
		clearInterval(t);
	}

	banner.onmouseout = function(){
		t = setInterval(move,1000);
	}

	function move(){
		num++;
		if(num>tu.length-1){
			num = 0;
		}
		for(let i=0;i<tu.length;i++){
			tu[i].style.zIndex = tuZ;
			li[i].style.background = lisColor;
		}
		tu[num].style.zIndex = tuBigZ;
		li[num].style.background = liactivebgColor;
		banner.style.background = color[num];
	}

	for(let j=0;j<li.length;j++){
		li[j].onmouseover = function(){
			for(let i=0;i<tu.length;i++){
				tu[i].style.zIndex = tuZ;
				li[i].style.background = lisColor;
			}
			tu[j].style.zIndex = tuBigZ;
			li[j].style.background = liactivebgColor;
			banner.style.background = color[j];
			num = j;
		}
	}
}	



// 选项卡封装
	// 选项卡   
	// btn选项卡按钮及父级   
	// con选项卡内容
function xuanxiangka11(btn,con){
	for(let i=0;i<btn.length;i++){
		btn[i].onmouseover=function (){//onclick是鼠标点击的效果
			for(let j=0;j<con.length;j++){
			 con[j].style.display="none"
			}			
			 con[i].style.display="block"
		 }
		  btn[i].onmouseout=function (){
			con[i].style.display="block"
		 }
		}
	}
function xuanxiangka(btn,con){
	for(let i=0;i<btn.length;i++){
		btn[i].onmouseover=function (){//onclick是鼠标点击的效果
			for(let j=0;j<con.length;j++){
			 con[j].style.display="none"
			}			
			 con[i].style.display="block"
		 }
		  btn[i].onmouseout=function (){
			con[i].style.display="none"
		 }
		}
	}





// 遮罩 
// a  父级
// b  效果 出现 隐藏的子级
function zzhao(btn,con){
		for(let i=0;i<btn.length;i++){
			btn[i].onmouseover=function(){
				for(let j=0;j<con.length;j++){
					con[j].style.display="none"
				}
				con[i].style.display="block";
			}
			btn[i].onmouseout=function(){
				con[i].style.display="none";
			}
		}
	}



/* 左右轮播
	lrCarousel(pic,imgBox,leftBtn,rightBtn,lis)
	pic 轮播图片(string类型的选择器)
	imgBox 轮播图片所在的盒子
	lis 轮播点(string类型的选择器)
	leftBtn  左按钮  
	rightbtn  右按钮
*/
	function lrCarousel(pic,imgBox,leftBtn,rightBtn,lis,lunboTime,lisColor,liactivebgColor){	
		//获取轮播图
		const tu = $(pic);
		//获取轮播图盒子
		const img = $(imgBox)[0];
		//获取左按钮
		const leftbtn = $(leftBtn)[0];
		//获取右按钮
		const rightbtn = $(rightBtn)[0];
		const li = $(lis);
		//获取轮播图盒子宽度        获取最终样式    window.getComputedStyle(img,null).width
		const imgW = parseInt(window.getComputedStyle(img,null).width);

		//初始化开始----------- 
		//开关
		var  flag = true;
		//将轮播图都置于右边
		for(let i = 0; i < tu.length; i ++){
			tu[i].style.left=imgW + "px";
		}
		//显示第一张图片在中间
		tu[0].style.left=0;
		//显示第一个轮播点激活的颜色
		li[0].style.backgroundColor=liactivebgColor;
		//开始轮播
		var t= setInterval(move,lunboTime);
		var now = 0;
		var next = 0;
		//初始化结束---------------

		//轮播函数
		function move(type="l"){
			//轮播
			flag=false;
			if(type=="l"){
				//左移动
				next++;
				if(next>tu.length-1){
					next = 0;	
				}
				tu[next].style.left=imgW + "px";
				animate(tu[now],{left:-imgW},500);
			}else if(type=="r"){
				//右移动
				next--;
				if(next<0){
					next=tu.length-1;
				}
				tu[next].style.left=-imgW + "px";
				animate(tu[now],{left:imgW},500);
			}
			
			
			
			animate(tu[next],{left:0},500,function(){
				//轮播结束
					flag=true
					li[next].style.backgroundColor=liactivebgColor;
					li[now].style.backgroundColor=lisColor;
					// console.log(`${now}+${next}`);
					now = next;
			});				
		}
		img.onmouseover=function(){
			clearInterval(t);
		}
		img.onmouseout=function(){
			t= setInterval(move,lunboTime);
		}
		leftbtn.onmouseover=function(){
			clearInterval(t);
		}
		rightbtn.onmouseover=function(){
			clearInterval(t);
		}
		leftbtn.onclick=function(){
			if(flag){
				move("l");
			}
		}
		rightbtn.onclick=function(){
			if(flag){
				move("r");
			}
		}

		//鼠标移到轮播点上的效果
		for(let i = 0; i < tu.length; i ++){
			li[i].onmouseover=function(){
				clearInterval(t);
				if(flag){
					//
					for(let j = 0; j < tu.length; j ++){
						li[j].style.backgroundColor=lisColor;
						tu[j].style.left=imgW + "px";		
					}
					//鼠标移到的该轮播点所对应的图置于中间
					tu[i].style.left=0;
					//鼠标移到的该轮播点激活的颜色
					li[i].style.backgroundColor=liactivebgColor;
					now = i;
					next = i;
				}															
			}
		}
	}
		
		function lrCarousel134(pic,imgBox,leftBtn,rightBtn,lis,lunboTime,lisColor,liactivebgColor){	
		//获取轮播图
		const tu = $(pic);
		//获取轮播图盒子
		const img = $(imgBox)[0];
		//获取左按钮
		const leftbtn = $(leftBtn)[0];
		//获取右按钮
		const rightbtn = $(rightBtn)[0];
		const li = $(lis);
		//获取轮播图盒子宽度        获取最终样式    window.getComputedStyle(img,null).width
		const imgW = parseInt(window.getComputedStyle(img,null).width);

		//初始化开始----------- 
		//开关
		var  flag = true;
		//将轮播图都置于右边
		for(let i = 0; i < tu.length; i ++){
			tu[i].style.left=imgW + "px";
		}
		//显示第一张图片在中间
		tu[0].style.left=0;
		//显示第一个轮播点激活的颜色
		li[0].style.backgroundColor=liactivebgColor;
		//开始轮播
		var t= setInterval(move,lunboTime);
		var now = 0;
		var next = 0;
		//初始化结束---------------

		//轮播函数
		function move(type="l"){
			//轮播
			flag=false;
			if(type=="l"){
				//左移动
				next++;
				if(next>tu.length-1){
					next = 0;	
				}
				tu[next].style.left=imgW + "px";
				animate(tu[now],{left:-imgW},500);
			}else if(type=="r"){
				//右移动
				next--;
				if(next<0){
					next=tu.length-1;
				}
				tu[next].style.left=-imgW + "px";
				animate(tu[now],{left:imgW},500);
			}
			
			
			
			animate(tu[next],{left:0},500,function(){
				//轮播结束
					flag=true
					li[next].style.backgroundColor=liactivebgColor;
					li[now].style.backgroundColor=lisColor;
					// console.log(`${now}+${next}`);
					now = next;
			});				
		}
		img.onmouseover=function(){
			clearInterval(t);
		}
		img.onmouseout=function(){
			t= setInterval(move,lunboTime);
		}
		leftbtn.onmouseover=function(){
			clearInterval(t);
		}
		rightbtn.onmouseover=function(){
			clearInterval(t);
		}
		leftbtn.onclick=function(){
			if(flag){
				move("l");
			}
		}
		rightbtn.onclick=function(){
			if(flag){
				move("r");
			}
		}

		//鼠标移到轮播点上的效果
		for(let i = 0; i < tu.length; i ++){
			li[i].onmouseover=function(){
				clearInterval(t);
				if(flag){
					//
					for(let j = 0; j < tu.length; j ++){
						li[j].style.backgroundColor=lisColor;
						tu[j].style.left=imgW + "px";		
					}
					//鼠标移到的该轮播点所对应的图置于中间
					tu[i].style.left=0;
					//鼠标移到的该轮播点激活的颜色
					li[i].style.backgroundColor=liactivebgColor;
					now = i;
					next = i;
				}															
			}
		}
	}
	
// 透明度轮播
	function Carousel(pic,bigbannerBox,lis,colorArr,tuactiveO,liactivebgColor,lunboTime,tuO,lisColor){
		const tu = $(pic);
		const banner = $(bigbannerBox)[0];
		const li = $(lis);
		const color = colorArr;
		
		tu[0].style.opacity=tuactiveO;
		li[0].style.backgroundColor=liactivebgColor;
		banner.style.backgroundColor=color[0];
		var num = 0;
		var t = setInterval(move,lunboTime);
		banner.onmouseover=function(){
			clearInterval(t);
		}
		banner.onmouseout=function(){
			t = setInterval(move,lunboTime);
		}
	
		for(let j =0;j<li.length;j++){

			li[j].onmouseover=function(){
				for(let i = 0; i < tu.length; i ++){
				tu[i].style.opacity=tuO;
				li[i].style.backgroundColor=lisColor;
				// banner.style.backgroundColor=color[0];
				}
				tu[j].style.opacity=tuactiveO;
				// animate(tu[j],{opacity:1},500);
				li[j].style.backgroundColor=liactivebgColor;
				banner.style.backgroundColor=color[j];
				num = j;
			}				
		}

		function move(){
			num++;
			if(num>tu.length-1){
				num = 0;
			}
			for(let i = 0; i < tu.length; i ++){
				tu[i].style.opacity=tuO;
				li[i].style.backgroundColor=lisColor;
			}
			tu[num].style.opacity=tuactiveO;
			// animate(tu[num],{opacity:1},500);
			li[num].style.backgroundColor=liactivebgColor;
			banner.style.backgroundColor=color[num];
		}
	}
	
// 节点



//获取scrollTop对象
function scrollobj(){
	let body=document.body;
	let html=document.documentElement;
	body.scrollTop=1;
	html.scrollTop=1;
	// if(body){

	// }else if(html){

	// }
	return body.scrollTop?body:html;

}
// tubox 装图的盒子  btnall 铵钮的集合   floorcheng楼层跳转页面模块 
//navdaohang 导航条
//btnnowcolor 按钮条现在的颜色
//btnnextcolor  按钮条点击变化的颜色
//jiazaiheight  需要加载页面的高度

function tiaotan(tubox,btnall,floorcheng,navdaohang,btnnowcolor,colorArr,jiazaiheight,shu){
	const btnBox=$(tubox)[0];
	// console.log(btnBox);
	const btn=$(btnall);
	const floor=$(floorcheng);
	const nav=$(navdaohang)[0];
	// const dibu=$(dibu);
	// 获取屏幕的高度
	const CH=document.documentElement.clientHeight;
	let sobj=scrollobj();
	// console.log(sobj);
	for(let i=0;i<btn.length;i++){
		btn[i].onclick=function(){
		 animate(sobj,{scrollTop:floor[i].offsetTop},500);
		}
	}
	//开关控制铵钮
	let flagx=true;   //往下走
	let flags=false;
	window.onscroll=function(){
       for(let i=0;i<floor.length;i++){
       	if(sobj.scrollTop+0.5*CH>=floor[i].offsetTop){
            for(let j=0;j<btn.length-1;j++){
				btn[j].style.background=btnnowcolor;
            }	
             btn[i].style.background=colorArr;
       		 }
         }
		//设备1
		if(sobj.scrollTop>=jiazaiheight){
			// 如果进不来，说明已经收到消息
			// 执行往下走
			if(flagx){
				flagx=false;
				flags=true;
				//收到消息  往下走
				animate(nav,{top:0},500,function(){
					//已经走完
				flagx=true;
				});
			}
			btnBox.style.display="block";
		}else{
			//设备2
			//往上走
			//设备1打开
			if(flags){
				flags=false;
				flagx=true;
	          animate(nav,{top:-50},500,function(){
			   flags=true;
		    	})
			}
			 btnBox.style.display="none";
		}
		 
	}
	setTimeout(function(){
		  animate(nav,{top:-50},function(){
		  	flags=true;
		  })
		},1000)
}

//jiazai
function jiazai(section,imgurl,imgname){
	const fl=$(section);//获取楼层
	const wh=document.documentElement.clientHeight;//获取屏幕高度
	var sobj=scrollobj();
	//滚动
	window.onscroll=function(){
		//btn变色
		for(let i=0;i<fl.length;i++){
			//按区加载
			if(sobj.scrollTop+wh>=fl[i].offsetTop){
				let img=$(imgname,fl[i]);
				for(let j=0;j<img.length;j++){
					img[j].src=img[j].getAttribute(imgurl);
				}		
			}
		}

	}
}



//鼠标移入移出事件
/*
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover (obj,overfun,outfun) {
    if(overfun){
      obj.onmouseover=function  (e) {
        if(checkHover(e,obj)){
           overfun.call(obj,[e]);
        }
      }
    }
    if(outfun){
      obj.onmouseout=function  (e) {
        if(checkHover(e,obj)){
           outfun.call(obj,[e]);
        }
      }
    }
}

//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
  function checkHover (e,target) {
   if(getEvent(e).type=="mouseover"){
      return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
   }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
  }

    //判断某个元素是否包含有另外一个元素
   function contains (parent,child) {
    if(parent.contains){
       return parent.contains(child) && parent!=child;
    }else{
      return (parent.compareDocumentPosition(child)===20);
    }
   }

  function getEvent (e) {
      return e||window.event;
  }
  //节点轮播
	// box      轮播图盒子
	// li       轮播图
	// boxw     轮播图的宽度
	// leftbtn  左按钮
	// rightbtn 右按钮
	function jiedian(boxname,liname,leftbtnname,rightbtnname,num2){
		const box=$(boxname)[0];//获取轮播图盒子
		const li=$(liname);//获取轮播图
		const boxw=parseInt(window.getComputedStyle(li[0],null).width);//获取轮播图宽度
		const leftbtn=$(leftbtnname)[0];//获取左按钮
		const rightbtn=$(rightbtnname)[0];//获取右按钮
		let n=num2;
		let flag=true;//开关
		// box.style.width=boxw*li.length+"px"
		var t=setInterval(move,1500);//时间间隔

		box.onmouseover=function(){
			clearInterval(t);
		}//鼠标移入盒子,暂停动画
		box.onmouseout=function(){
			t=setInterval(move,1500)
		}//鼠标移出盒子,开始动画
		leftbtn.onmouseover=function(){
			clearInterval(t);
		}//鼠标移入按钮暂停动画
		rightbtn.onmouseover=function(){
			clearInterval(t);
		}//鼠标移入按钮暂停动画
		leftbtn.onclick=function(){
			movel();
		}
		rightbtn.onclick=function(){
			move();
		}

		//动画函数
		function move(){
			flag=false;//开关关闭
			animate(box,{left:-boxw},500,function(){//向左移动
				// console.log(box.style.left)
				// for(let i=0;i<n;i++){
				// 	let first=box.firstElementChild;
				// 	box.appendChild(first);//将第一张图放到最后
				// }	
				box.style.left=0;//盒子的位置回到0
				flag=true;
			})
		}
		function movel(){	
			flag=false;
			box.style.left=-boxw+"px";//盒子位置
			for(let i=0;i<n;i++){
				let first=box.firstElementChild;	
				let last=box.lastElementChild;	
				box.insertBefore(last,first);//让最后一张成为第一张
			}			
			animate(box,{left:0},500);//向右移动
			flag=true;
		}
	}
		function duotu(boxdata,leftBtndata,rightBtndata,winsdata,ndata){
		const box = $(boxdata)[0];
		const childlen = box.children.length;
		const leftBtn=$(leftBtndata)[0];
		const rightBtn=$(rightBtndata)[0];
		const wins=$(winsdata)[0];
		const imgW = parseInt(window.getComputedStyle(wins,null).width);
		let flag=true;
		let n=ndata;//传几张图
		var t = setInterval(movel);
		function movel(){
			flag=false;
			let first = box.firstElementChild;		
			animate(box,{left:-imgW},500,function(){
				flag=true;
                for(let i=0; i<n;i++){
                   box.appendChild(first);
                   first=box.firstElementChild;
                }
				box.style.left=0;
			});			
		}
		//按钮
        function moveR(){
        	//box.insertBefore(last,firstChild);
        	for(let i=0;i<n;i++){
        		let firstChild=box.firstElementChild;
				let last=box.lastElementChild;	
				box.insertBefore(last,firstChild);
        	}
        	box.style.left=-imgW+"px";
        	animate(box,{left:0})
        }

		leftBtn.onclick=function(){
			if(flag){
				moveR();
			}
		}
		rightBtn.onclick=function(){
			if(flag){
				movel();
			}
		}
		leftBtn.onmouseover=function(){
			clearInterval(t);
		}
		rightBtn.onmouseover=function(){
			clearInterval(t);
		}
		leftBtn.onmouseout=function(){
			t = setInterval(movel);
		}
		rightBtn.onmouseout=function(){
			t = setInterval(movel);
		}
	}
// 多张图的轮播
function duotu_lunbo(box1,leftBtn1,rightBtn1,wins1,n1){
	const box = $(box1)[0];
	const leftBtn=$(leftBtn1)[0];
	const rightBtn=$(rightBtn1)[0];
	const wins=$(wins1)[0];
	let n=n1;//传几张图
	const imgW = parseInt(window.getComputedStyle(wins,null).width);
	let flag=true;
	const childlen = box.children.length;

	// var t = setInterval(movel,3000);
	function movel(){
		flag=false;
		let first = box.firstElementChild;		
		animate(box,{left:-imgW},1500,function(){
			flag=true;
                  for(let i=0; i<n;i++){
                     box.appendChild(first);
                     first=box.firstElementChild;
                  }
			box.style.left=0;
		});			
	}
	//按钮
          function moveR(){
          	//box.insertBefore(last,firstChild);
          	for(let i=0;i<n;i++){
          		let firstChild=box.firstElementChild;
			let last=box.lastElementChild;	
			box.insertBefore(last,firstChild);
          	}
          	box.style.left=-imgW+"px";
          	animate(box,{left:0},1500);
          }
          
	leftBtn.onclick=function(){
		if(flag){
			moveR();
		}
	}
	rightBtn.onclick=function(){
		if(flag){
			movel();
		}
	}
	// leftBtn.onmouseover=function(){
	// 	clearInterval(t);
	// }
	// rightBtn.onmouseover=function(){
	// 	clearInterval(t);
	// }
	// 循环
	}



// 鼠标滚轮事件  解决兼容性
//mousewheel(box,shang,xia);
//obj 鼠标滚动事件源
//shang鼠标向上滚动时触发的处理程序
//下 鼠标向下时的流动触发的处理程序
function mouseWhell(obj,shang,xia){
	obj.addEventListener("mousewheel",scrollFn,false);
	obj.addEventListener("DOMMouseScroll",scrollFn,false);
	function scrollFn(e){
     if(e.wheelDelta){
     	//谷歌
     	e.preventDefault();  //阻止了浏览器的默认行为
     	if(e.wheelDelta>0){
     		shang()	;
     	}else{
     		xia();
     	} 
 	}else {
 		if(e.wheelDelta>0){
 			//下
 			// xia()
 		}else{
 			// shang()
 		}
 	}
	}
}



function lb(pic,bigbannerbox,lis,colorArr,tuactivez,lisColor,liactivebgColor,tuZ,lbTime,shu,leftn,rightn){
		const tu=$(pic);
		const banner=$(bigbannerbox)[0];
		const li=$(lis);
		const color=colorArr;
		const left=$(leftn)[0];
		const right=$(rightn)[0];

		// tu[0].style.opcity=1;
		tu[0].style.zIndex=tuactivez;
		li[0].style.background=liactivebgColor;
		banner.style.background=color[0];
		var n=0;
		var t=setInterval(move,lbTime)


		banner.onmouseover=function(){
			clearInterval(t);
		}
		banner.onmouseout=function(){
			t=setInterval(move,lbTime);
		}
		left.onclick=function(){
			move("l");
		}
		right.onclick=function(){
			move("r");
		}
		left.onmouseover=function(){
			clearInterval(t);
		}
		right.onmouseover=function(){
			clearInterval(t);
		}
		for(let j=0;j<li.length;j++){
			li[j].onmouseover=function(){
				for(let i=0;i<tu.length;i++){
				li[i].style.background=liactivebgColor;
				}
				li[j].style.background=lisColor;
				li[n].style.background=lisColor;
			}
			li[j].onclick=function(){
				for(let i=0;i<tu.length;i++){
				tu[i].style.zIndex=tuZ;
				li[i].style.background=liactivebgColor;
				}
				tu[j].style.zIndex=tuactivez;
				li[j].style.background=lisColor;
				n=j;
				banner.style.background=color[j];
			}
			
		}

		function move(type){
			clearInterval(t)
			if(type=="r"){
				n++;
			if(n>shu){
				n=0;
			}
			for(let i=0;i<tu.length;i++){
				// tu[i].style.opacity=oa;
				tu[i].style.zIndex=tuZ;
				li[i].style.background=lisColor;

			}
			tu[n].style.zIndex=tuactivez;
			li[n].style.background=liactivebgColor;
			banner.style.background=color[n];
			animate(tu[n],{opacity:1},400);
		}else if(type=="l"){
				n--;
			if(n<0){
				n=shu;
			}
			for(let i=0;i<tu.length;i++){
				// tu[i].style.opacity=oa;
				tu[i].style.zIndex=tuZ;
				li[i].style.background=lisColor;

			}
			tu[n].style.zIndex=tuactivez;
			li[n].style.background=liactivebgColor;
			banner.style.background=color[n];
			// animate(tu[n],{opacity:1},400);
		}
			

		}
}


	function tiaodong(btn,con,son,weizhi){
		const btnq=$(btn);
		const uls=$(son);
		const conq=$(con)[0];
		const wei=weizhi;
		for(let i=0;i<btnq.length;i++){
			btnq[i].onmouseover=function(){
				for(let j=0;j<uls.length;j++){
					uls[j].style.display="none"
				}
				conq.style.transform=weizhi[i];
				uls[i].style.display="block";
			}
		}
	}


	// 导航右面
	//下拉导航
function xiala(ulname,navname){
	const ul=$(ulname);//获取下拉的ul
	const item=$(navname);//获取导航条
	//循环每一个ul
	for(let i=0;i<ul.length;i++){
		//获取ul的高度 用js中函数获取
		let h=parseInt(attr(ul[i],"width"));
		//给Ul添加h属性 属性值为获取的ul的高度
		ul[i].setAttribute("w",h);
		//ul的初始高度为0
		ul[i].style.display="block"

		ul[i].style.width=0;
	}
	//循环每一个导航
	for(let i=0;i<item.length;i++){

				item[i].onmouseover=function(){
						item[i].children[0].style.display="block"
						ul[i].style.width=0;
					if(item[i].children[0]){
						let ul=item[i].children[0];
						animate(item[i].children[0],{width:ul.getAttribute("w")},200)
					}
				}
				item[i].onmouseout=function(){
					if(item[i].children[0]){
						let ul=item[i].children[0];
						item[i].children[0].style.display="none"
						// animate(item[i].children[0],{display:none},100)
					}
				}
	}
}


// 11.楼层跳转（里面还有两个参数为定义：高度和颜色）
	// const btnBox = $(".btnBox")[0];
	// const btn = $(".btnBox li ");
	// const floor = $("section");
	// const nav = $("nav")[0];
	// const footer = $("footer")[0];
	function tiaozhuan(btnBox,btn,floor,footers){
	const CH = document.documentElement.clientHeight;
	let sobj = scrollobj();
	// let sobj = document.body;

	// 楼层跳转
	for(let i=0;i<btn.length;i++){
		btn[i].onclick=function(){
			animate(sobj,{scrollTop:floor[i].offsetTop+255},500);
		}
	}

	// 导航
	let flagx = true;   //开关向下走
	let flags = false;   //开关下上走
	window.onscroll=function(){
		for(let i=0;i<floor.length;i++){
			if(sobj.scrollTop+0.5*CH>=floor[i].offsetTop+255){
				for(let j=0;j<floor.length;j++){
					// btn[j].style.background="#999";
					btn[j].classList.remove("fixed_active");
				}
				// let colorT =$(".beauty_top i",floor[i])[0].style.backgroundColor;
				// btn[i].style.background="red";
				btn[i].classList.add("fixed_active");
			}
			// 按需加载，需要某个楼层的图片再让他出现
			// console.log(floor[i])
			// if(sobj.scrollTop+CH>=floor[i].offsetTop){
			// 	let img = $("img",floor[i]);
			// 	for(let j=0;j<img.length;j++){
			// 	// console.log(img[j])
			// 		img[j].src=img[j].getAttribute("imgurl");
			// 	}
			// }
		}
		// console.log(sobj)
		if(sobj.scrollTop>=1080){
			if(flagx){
				flagx=false;
				flags=true;
				// animate(nav,{top:0},500,function(){
				// 	flagx=true;
				// });
			}
			btnBox.style.display="block";
		}
		else{
			if(flags){
				flags=false;
				flagx=true;
				// animate(nav,{top:-50},500,function(){
				// 	flags=true;
				// });
			}
			btnBox.style.display="none";
		}
	}
	// setTimeout(function(){
	// 	animate(nav,{top:-50},function(){
	// 		flags=true;
	// 	});
	// },1000)
	}

			function zuoyoulunbo(tu1,hezi,zuo,you,t2){
			const tu =$(tu1);//获取轮播图
			const img=$(hezi)[0];//获取轮播图盒子
			const leftBtn=$(zuo)[0];//获取左按钮
			const rightBtn=$(you)[0];//获取右按钮
			// const li=$(lis);//获取轮播点 
			const imgw=parseInt(window.getComputedStyle(img,null).width);//获取轮播图宽度
				// console.log(parseInt(window.getComputedStyle(img,null).width))
			// 初始化
			var flag=true;//定义开关初始值
			for (let i=0; i<tu.length;i++){
				tu[i].style.left=imgw+"px";
			}//遍历轮播图，并把轮播图放在右边
			tu[0].style.left=0;//第一张轮播图放在中间，显示出来

			// li[0].style.background=s2;//初始化第一个轮播点颜色为白色

			// var t=setInterval(move,t1);//自动播放时间//定义自动播放的效果

			var now=0;//当前轮播图初始值--下标
			var next=0;//其他轮播图初始值--下标

			// 轮播效果函数
			function move(type="l"){//默认左按钮入口
				flag=false;//默认开关为关闭状态
				if(type=="l"){//左按钮入口
				next++;//其他轮播图初始值不同于当前轮播图初始值，从右向左
				if(next>tu.length-1){ //移至最后一页
					next=0;//其他轮播图值返回0;
				}	
				tu[next].style.left=imgw+"px";//其他轮播图移出当前画面
				animate(tu[now],{left:-imgw},t2);//动效时间//当前画面用动画播放方式移动	
			}


			else if(type=="r"){  //右按钮入口
				next--;    //其他轮播图初始值不同于当前轮播图初始值，从左向右
				if (next<0){ //移至第一页
					next=tu.length-1;// 其他轮播图值返回最后一页
				}
				tu[next].style.left=-imgw+"px";//其他轮播图移出当前画面
				animate(tu[now],{left:imgw},t2);//当前画面动画播放
			}

				animate(tu[next],{left:0},500,function(){flag=true;//循环播放后开关打开
					// li[next].style.background=s2;//其他轮播点显示白色
					// li[now].style.background=s1;//当前轮播点显示橘色
					now=next;//因为最后一个now后面没有next，把最后一个赋值给now,重新进行下一轮循环 
				});				
}
		
			leftBtn.onclick=function(){
				if(flag){
				move("l");
				}
			}

			rightBtn.onclick=function(){
				if(flag){
					move("r");
				}
			}
		
	}