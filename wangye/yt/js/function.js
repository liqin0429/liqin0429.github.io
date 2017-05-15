function $(select,obj=document){
	if(typeof select == "function"){
		// window.onload=function(){
		// 	select();
		// }
		window.addEventListener("load",select,false)
	}else if(typeof select == "string"){
		// alert(/^<\w+>$/.test(select));
		if(/^<\w+>$/.test(select)){//开头是小于号,然后是字母数字下划线
			return document.createElement(select.slice(1,-1));
		}else{
			return obj.querySelectorAll(select)
		}
	}
}



//选项卡

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

//遮罩

function zhezhao(q,w){
	for(let i=0;i<q.length;i++){
		q[i].onmouseover=function (){
			for(let j=0;j<w.length;j++){
				w[j].style.display="none"
			}			
		w[i].style.display="block"
		}
		q[i].onmouseout=function (){
			w[i].style.display="none"
		}
	}
}


// 轮播图
	// pic				轮播图						(字符串的选择器)
	// bigbannerBox		通屏的banner盒子			(字符串的选择器)
	// lis				轮播点						(字符串的选择器)
	// colorArr			通屏banner盒子的所有颜色	(数组["red","blue"])
	// tuactiveZ		第一个轮播图的变化后的优先级
	// liactivebgcolor	第一个轮播点的改变颜色
	// LunBoTime		轮播点的变化时间
	// tuZ 				第一个轮播图的初始优先级
	// lisColor 		轮播点原始的颜色
function zlunbo(pic,bigbannerBox,lis,colorArr,tuactiveZ,liactivebgcolor,LunBoTime,tuZ,lisColor,shu){
	// $(function(){
	const tup=$(pic);
	const banner=$(bigbannerBox)[0];
	const li=$(lis);
	const color=colorArr;
	// tup[0].style.opacity="1"
	tup[0].style.zIndex=tuactiveZ;
	li[0].style.background=liactivebgcolor;
	banner.style.background=color[0];
	var num=0;
	var t=setInterval(move,LunBoTime);
	banner.onmouseover=function(){
		clearInterval(t)
	}
	banner.onmouseout=function(){
		t=setInterval(move,LunBoTime)
	}
	for(let j=0;j<li.length;j++){
		li[j].onmouseover=function(){
			for(let i=0;i<tup.length;i++){
				tup[i].style.zIndex=tuZ;
				li[i].style.background=lisColor;
				banner.style.background=color[i];
			}
			tup[j].style.zIndex=tuactiveZ;
			li[j].style.background=liactivebgcolor;
			num=j;
			banner.style.background=color[j]
		}
	}

	function move(){
		num++;
		if(num>shu){
			num=0;
		}
		for(let i=0;i<tup.length;i++){
			tup[i].style.zIndex=tuZ;
			li[i].style.background=lisColor;
			// tup[i].style.opacity="1"
		}
		tup[num].style.zIndex=tuactiveZ;
		li[num].style.background=liactivebgcolor;
		banner.style.background=color[num];
		// tup[num].style.opacity="1"
		// animate(tup[num],{opacity:0},1500);
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
				animate(tu[j],{opacity:2},500);
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
			animate(tu[num],{opacity:0},500);
			li[num].style.backgroundColor=liactivebgColor;
			banner.style.backgroundColor=color[num];
		}
	}




	function lrCarousel(pic,imgBox,leftBtn,rightBtn,lis,lunboTime,lisColor,liactivebgColor){	
		//获取轮播图
		const tu = $(pic);
		console.log(tu)
		//获取轮播图盒子
		const img = $(imgBox)[0];
		console.log(img)
		//获取左按钮
		const leftbtn = $(leftBtn)[0];
		console.log(leftbtn)
		//获取右按钮
		const rightbtn = $(rightBtn)[0];
		console.log(rightbtn)
		const li = $(lis);
		console.log(li)
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


// 节点轮播
//节点轮播
	// box      轮播图盒子
	// li       轮播图
	// boxw     轮播图的宽度
	// leftbtn  左按钮
	// rightbtn 右按钮
	function jiedian(boxname,liname,leftbtnname,rightbtnname,num2){
		const box=$(boxname)[0];//获取轮播图盒子
		console.log(box)
		const li=$(liname);//获取轮播图
		console.log(li)
		const boxw=parseInt(window.getComputedStyle(li[0],null).width);//获取轮播图宽度
		console.log(boxw)
		const leftbtn=$(leftbtnname)[0];//获取左按钮
		console.log(leftbtn)
		const rightbtn=$(rightbtnname)[0];//获取右按钮
		console.log(rightbtn)
		let n=num2;
		let flag=true;//开关
		// box.style.width=boxw*li.length+"px"

		var t=setInterval(move,10000);//时间间隔

		box.onmouseover=function(){
			clearInterval(t);
		}//鼠标移入盒子,暂停动画
		box.onmouseout=function(){
			t=setInterval(move,10000)
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
			animate(box,{left:-boxw*n},500,function(){//向左移动
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
			box.style.left=-boxw*n+"px";//盒子位置
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

	


		// 获取scrollTop的对象
		function scrollobj(){
			let body=document.body;
			let html=document.documentElement;
			body.scrollTop=100;
			html.scrollTop=100;
			let obj;
			if(body.scrollTop==0){
				obj=html;
			}else{
				obj=body;
			}
			body.scrollTop=100;
			html.scrollTop=100;
			return obj;
		}
		
function tiaotan(tubox,btnall,floorcheng,jiazaiheight){
	// const btnBox=$(tubox)[0];
	// console.log(btnBox);
	// const btn=$(btnall);
	// const floor=$(floorcheng);
	// const nav=$(navdaohang)[0];
	// const dibu=$(dibu);
	// 获取屏幕的高度
	const CH=document.documentElement.clientHeight;
	// let sobj=scrollobj();
	let sobj=document.body;
	for(let i=0;i<btn1.length;i++){
		btn1[i].onclick=function(){
		 animate(sobj,{scrollTop:floor1[i].offsetTop},500);
		 console.log(sobj.scrollTop);
		 console.log(floor1[i].offsetTop);
		}
	}
	//开关控制铵钮
	let flagx=true;   //往下走
	let flags=false;
	window.onscroll=function(){
       for(let i=0;i<floor1.length;i++){
       	if(sobj.scrollTop+0.5*CH>=floor1[i].offsetTop){
            for(let j=0;j<btn1.length-1;j++){
				// btn1[j].style.background=btn1nowcolor;
				btn1[j].classList.remove("fixed_active");
            }	
             // btn1[i].style.background=colorArr;
               btn1[i].classList.add("fixed_active");
       		 }
         }
		//设备1
		if(sobj.scrollTop>=jiazaiheight){
			// 如果进不来，说明已经收到消息
			// 执行往下走
			// if(flagx){
			// 	flagx=false;
			// 	flags=true;
			// 	//收到消息  往下走
			// 	animate(nav,{top:0},500,function(){
			// 		//已经走完
			// 	flagx=true;
			// 	});
			// }
			btnBox1.style.display="block";
		}else{
			//设备2
			//往上走
			//设备1打开
			// if(flags){
			// 	flags=false;
			// 	flagx=true;
	  //         animate(nav,{top:-50},500,function(){
			//    flags=true;
		 //    	})
			// }
			 btnBox.style.display="none";
		}
		 
	}
	// setTimeout(function(){
	// 	  animate(nav,{top:-50},function(){
	// 	  	flags=true;
	// 	  })
	// 	},1000)
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



		//加载
		//section 	装图片的盒子ps:可以很大
		// pnc 	图片ps:img标签
		// url 	将src替换成url,再给src幅一个空值
		function loadd(sectionn,pnc,url){
			const section=$(sectionn)
			const ch=document.documentElement.clientHeight;
			// section[0].queryseletorAll("img")
			var obj=scrollobj();

			window.onscroll=function(){
				for(let i=0;i<section.length;i++){
					
					if(obj.scrollTop+ch>=section[i].offsetTop){
							let img=$(pnc,section[i])
							// console.log(img)
						for(let j=0;j<img.length;j++){
							img[j].src=img[j].getAttribute(url)
							
						}
					}

				}
			}
		}








		// 按需加载
		function anxujia(lefttu,left,centertu,nav_top,bgmnow,bgmnexty,navwidth){
			const list=$(lefttu)
			const box=$(left)[0]
			const section=$(centertu)
			const nav=$(nav_top)[0]
			// nav.style.display="none";
			const ch=document.documentElement.clientHeight;
			// section[0].queryseletorAll("img")
			// console.log(nav)
			var obj=scrollobj();
			// console.log(obj)
			for(let i=0;i<list.length-1;i++){
				list[i].onclick=function(){
					animate(obj,{scrollTop:section[i].offsetTop},200)
					// console.log(section[i].offsetTop)
				}	
			}

			let flagx=true;
			let flagy=false;
			window.onscroll=function(){
				for(let i=0;i<section.length;i++){
					if(obj.scrollTop+0.5*ch>=section[i].offsetTop){
						for(let j=0;j<list.length-1;j++){
							list[j].style.background=bgmnow;
						}
						list[i].style.background=bgmnexty[i];
					}
					if(obj.scrollTop+ch>=section[i].offsetTop){
							let img=$("img",section[i])
							// console.log(img)
						for(let j=0;j<img.length;j++){
							img[j].src=img[j].getAttribute("imgUrl")
							
						}
					}

				}
				if(obj.scrollTop>=section[0].offsetTop){
					// nav.style.display="block";
					//设备1与设备2，一个开一个关，在开一的同时要考虑2
					if(flagx){
						flagx=false;
						flagy=true;

						animate(nav,{top:0},function(){flagx=true;})

					}
					// box.style.display="block"
					box.style.transform="scale(1.1)";
					// nav.style.display="none"
				}else{
					if(flagy){
						// flagy=false;
						flagx=true;
						animate(nav,{top:-50},function(){flagy=true;})

					}
					// box.style.display="none"
					box.style.transform="scale(0.01)";
					// nav.style.display="block"
				}
			}
			setTimeout(function(){
				animate(nav,{top:-50},function(){
					flagy=true;
				})
				// nav.style.display="none"
			},1000)
		}


		// 事件触发后执行一次
		// one(obj,type,fn)
		// obj:事件源： 某对象 
		// type:事件：发生的事
		// fn:事件处理程序：去做什么
		function one(obj,type,fn){
			// 添加第一个type类型事件，执行fn
			obj.addEventListener(type,fn,false)
			// 添加第二个type类型事件，执行clear
			obj.addEventListener(type,clear,false)
			function clear(){
				// alert(33)
				// 清除type类型事件中的fn处理程序
				obj.removeEventListener(type,fn,false)
				// 清除type类型事件中的clear处理程序
				obj.removeEventListener(type,clear,false)
			}
		}


		//拖拽
		//box（要拖拽的对象）需要绝对定位，
		function tuozhuai(box) {
			const box = $(bigbox)[0];
			let x;
			let y;
			let boxx;
			let boxy;
			box.addEventListener("mousedown",down,false)
			function down(e){
				box.style.position="absolute";

				x=e.clientX;
				y=e.clientY;

				boxx=box.offsetLeft;
				boxy=box.offsetTop;

				box.addEventListener("mousemove",move,false)
				box.addEventListener("mouseup",function(){
					box.removeEventListener("mousemove",move,false)
				})
			}
			function move(e){
				let mx=e.clientX;
				let my=e.clientY;
				let chax=mx-x;
				// console.log(chax)
				let chay=my-y;
				box.style.left=boxx+chax+"px";
				box.style.top=boxy+chay+"px";
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

function lrCarousel11(pic,imgBox,leftBtn,rightBtn,lis,lunboTime,lisColor,liactivebgColor){	
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
	li[0].style.borderBottomColor=liactivebgcolor;
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
				li[i].style.borderBottomColor=liscolor;
				// li[i].style.borderColor="rgba(255,255,255,0.3)";
			}
			// 提高层级，轮播点变颜色，banner背景也跟着变颜色
			// tu[j].style.zIndex=tuactiveZ;
			animate(tu[j],{opacity:1},1000);
			li[j].style.borderBottomColor=liactivebgcolor;
			// li[j].style.borderColor="rgba(0,0,0,0.4)";
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
			li[i].style.borderBottomColor=liscolor;
			// li[i].style.borderColor="rgba(255,255,255,0.3)";
			}
		// 自动变化，提高层级，变轮播点的颜色，还有banner图的背景
		animate(tu[num],{opacity:1},500,function(){
			flag=true;
		});
		li[num].style.borderBottomColor=liactivebgcolor;
		// li[num].style.borderColor="rgba(0,0,0,0.4)";
		banner.style.backgroundColor=color[num];
	}
}

function tiaodong(btn,con,son,weizhi){
			const btnq=$(btn);
			console.log(btnq)
			const uls=$(son);
			console.log(uls)
			const conq=$(con)[0];
			console.log(conq)
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

		//左右轮播

function zuoyou(tuname,imgname,leftname,rightname,liname,bgc,acbgc){
		const tu= $ (tuname);//获取轮播图
		const img= $ (imgname)[0];// 获取轮播图的盒子
		const imgw=parseInt(window.getComputedStyle(img,null).width);//获取轮播图宽度
		const leftbtn=$(leftname)[0];//获取左按钮
		const rightbtn=$(rightname)[0];//获取右按钮
		const li=$(liname);//获取轮播点
		let flag=true;//开关
		//初始化
		var t=setInterval(move,1000);
		var now=0;
		var next=0;//var next=1;
		// 把所有的图片都移到右边
		for(let i=0;i<tu.length;i++){
			tu[i].style.left=imgw+"px";
		}
		//第一张图显示
		tu[0].style.left=0;
		// 初始化轮播点的白色
		li[0].style.background=bgc;//li[0].classList.add("active");

		//轮播函数
		function move(type){
			flag=false;//当图片移动过程中让他无法点击
			if(type=="l"){//向左移动
				next++;
				if(next>tu.length-1){
					next=0;
				}//如果轮播图超出最后一张 让他从第一张重新开始
				tu[next].style.left=imgw+"px";	//下一张图片的位置			
				animate(tu[now],{left:-imgw},500);//当前图片向左移
			}else if(type=="r"){//向右移动
				next--;
				if(next<0){
					next=tu.length-1;
				}//如果向右移的话 当下一张图片的下标小于0时 让它从最后一张开始
				tu[next].style.left=-imgw+"px";
				animate(tu[now],{left:imgw},500);
			}
			//轮播结束
			animate(tu[next],{left:0},500,function(){
				flag=true;//开关打开 可以继续点击
				li[next].style.background=acbgc;
				//li[next].classList.add("active");
				li[now].style.background=bgc;
				//li[now].classList.remove("active");
				now=next;
			});			
		}
		img.onmouseover=function(){
			clearInterval(t);
		}
		img.onmouseout=function(){
			t=setInterval(move,1000);
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
		leftbtn.onmouseover=function(){
			clearInterval(t);
		}
		rightbtn.onmouseover=function(){
			clearInterval(t);
		}
		window.onblur=function(){
			clearInterval(t)
		}
		window.onfocus=function(){
			t=setInterval(move,1000);
		}
		// 鼠标经过 切换图片 图片暂停
		for(let i=0;i<li.length;i++){
			li[i].onmouseover=function(){
				clearInterval(t);
				if(flag){
					for(let j=0;j<li.length;j++){
					li[j].style.background=bgc;
					//li[now].classList.remove("active");//让所有的li元素变为橙色
					tu[j].style.left=imgw+"px";
					}
				}		
				
				li[i].style.background=acbgc;
				//li[next].classList.add("active");//要来的元素
				tu[i].style.left=0;
				now=i;
				next=i;//当鼠标移走以后 for循环重新开始
			}
		}
}

// 11.楼层跳转（里面还有两个参数为定义：高度和颜色）
	const btnBox = $(".btnBox")[0];
	console.log(btnBox)
	const btn = $(".btnBox li ");
	console.log(btn)
	const floor = $("section");
	console.log(floor)
	// const nav = $("nav")[0];
	const footers = $("footer")[0];
	console.log(footers)
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

