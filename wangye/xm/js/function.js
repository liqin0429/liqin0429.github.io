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


// function Zlunbo(pic,bigbannerBox,lis,colorArr,tuBigZ,liactivebgColor,lunboTime,tuZ,lisColor,leftBtn,rightBtn){
// 	const tu = $(pic);
// 	const banner = $(bigbannerBox)[0];
// 	const li = $(lis);
// 	const color =colorArr;
// 	tu[0].style.zIndex = tuBigZ;
// 	li[0].style.background = liactivebgColor;
// 	banner.style.background = color[0];

// 	var num = 0;
// 	var t = setInterval(move,lunboTime);

// 	banner.onmouseover = function(){
// 		clearInterval(t);
// 	}

// 	banner.onmouseout = function(){
// 		t = setInterval(move,1000);
// 	}

// 	function move(){
// 		num++;
// 		if(num>tu.length-1){
// 			num = 0;
// 		}
// 		for(let i=0;i<tu.length;i++){
// 			tu[i].style.zIndex = tuZ;
// 			li[i].style.background = lisColor;
// 		}
// 		tu[num].style.zIndex = tuBigZ;
// 		li[num].style.background = liactivebgColor;
// 		banner.style.background = color[num];
// 	}

// 	for(let j=0;j<li.length;j++){
// 		li[j].onmouseover = function(){
// 			for(let i=0;i<tu.length;i++){
// 				tu[i].style.zIndex = tuZ;
// 				li[i].style.background = lisColor;
// 			}
// 			tu[j].style.zIndex = tuBigZ;
// 			li[j].style.background = liactivebgColor;
// 			banner.style.background = color[j];
// 			num = j;
// 		}
// 	}
// }	

// 透明度轮播图
// pic 轮播图  (字符串的选择器)
// bigbannerBox  通屏的banner盒子   (字符串的选择器)
// lis      轮播点    (字符串的选择器)
// colorArr     通屏banner盒子的所有颜色   (数组['red','blue','green'])
// tuBigZ    第一张图片默认的透明度
// liactivebgColor 当前轮播焦点颜色
// lunboTime    轮播时间
// tuZ     当前轮播图的透明度
// lisColor  其他轮播焦点的颜色
function zlunbo(pic,bigbannerBox,lis,colorArr,tuactiveZ,liactivebgcolor,LunBoTime,tuZ,lisColor,shu){
			// $(function(){
			const tup=$(pic);
			const banner=$(bigbannerBox)[0];
			const li=$(lis);
			const color=colorArr;
			tup[0].style.zIndex=tuactiveZ;
			// li[0].style.background=liactivebgcolor;
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
				}
				tup[num].style.zIndex=tuactiveZ;
				li[num].style.background=liactivebgcolor;
				banner.style.background=color[num];
			}
	
		}
		



// 选项卡封装
	// 选项卡   
	// btn选项卡按钮及父级   
	// con选项卡内容
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
function zzhao(a,b){
	for(let i=0;i<b.length;i++){
			a[i].onmouseover=function(){
				b[i].style.display="block";
			}
			a[i].onmouseout=function(){
				b[i].style.display="none";
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
		box.style.width=boxw*li.length+"px"

		var t=setInterval(move,2000);//时间间隔

		box.onmouseover=function(){
			clearInterval(t);
		}//鼠标移入盒子,暂停动画
		box.onmouseout=function(){
			t=setInterval(move,2000)
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
			animate(box,{left:-boxw*n},800,function(){//向左移动
				for(let i=0;i<n;i++){
					let first=box.firstElementChild;
					box.appendChild(first);//将第一张图放到最后
				}	
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
			animate(box,{left:0},800);//向右移动
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
		var t = setInterval(movel,1000);
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
        	animate(box,{left:0},5000)
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
			t = setInterval(movel,500);
		}
		rightBtn.onmouseout=function(){
			t = setInterval(movel,500);
		}
	}
//左右轮播

function zuoyou(tuname,imgname,leftname,rightname,liname,bgc,acbgc){
		const tu= $ (tuname);//获取轮播图
		console.log(tu)
		const img= $ (imgname)[0];// 获取轮播图的盒子
		const imgw=parseInt(window.getComputedStyle(img,null).width);//获取轮播图宽度
		const leftbtn=$(leftname)[0];//获取左按钮
		console.log(leftbtn)
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

