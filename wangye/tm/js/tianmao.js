const z=document.querySelectorAll(".tu1,.bufen22 ul li,.xialalie li,.top_feichu,.top_fcc")
const w=document.querySelectorAll(".tuz,.liszhe,.caidannn,.top_feichuk,.ewmh")
zhezhao(z,w)

$(function(){
	zlunbo(".btphaha",".xialalie",".xialalie dt",["rgb(137, 27,209)","rgb(245, 58, 111)","rgb(232, 232, 232)","rgb(232, 232, 232)","rgb(0, 157, 114)"],2,"#fff",2000,1,"#666",5)
	// loadd("section","img","imgurl")
	anxujia(".leftce_nav",".leftce","section",".navtop","",["","#EA5F8D","#0AA6E8","#64C333","#F15453","#19C8A9","#F7A945","#DD2727"],700)
})
// ///////////////////////////
const xuan=$(".leftce_top")[0];
const reun=$(".reun")[0];
const body=$("body")[0];
	xuan.onclick=function(){
		animate(body,{scrollTop:0},200);
	}
	reun.onclick=function(){
		animate(body,{scrollTop:0},200);
	}

// ///////////////////////////////
const cu=$(".cuanchu");
const chu=$(".tab_first_left");

	for(let i=0;i<cu.length;i++){
		chu[i].style.right=70+"px";
		chu[i].style.zIndex=3;
		chu[i].style.opacity=0;
		chu[i].style.display="none";
	}
	for(let j=0;j<chu.length;j++){
		hover(cu[j],function(){
			chu[j].style.display="block";
			animate(chu[j],{zIndex:5,opacity:1,right:35},300);
		},function(){
			chu[j].style.display="none"
			animate(chu[j],{zIndex:3,opacity:0,right:70},300);
		})
	}	

// //////////////////////////
const zz=$(".bufen21_sff");
const xx=$(".bufen21_tuss");
// console.log(zz,xx)
xuanwo(zz,xx)
	function xuanwo (zz,xx) {
		for (let i = 0; i < zz.length; i++) {
			xx[i].style.zIndex=1;
			zz[i].onmouseover=function (){//onclick是鼠标点击的效果
				for(let j=0;j<xx.length;j++){
					xx[j].style.zIndex=1;
				}
				xx[i].style.zIndex=100;			
			}
			zz[i].onmouseout=function (){
				// xx[i].style.zIndex=1;
			}
		}
	}


xiaolunbo();
function xiaolunbo(){
	const cccc=$(".bufen21_sf")[0];
	const zxcv=$(".leftann")[0];
	const zaq=$(".rightann")[0];	
	cccc.style.marginLeft=0;
	zxcv.style.display="none";
	zaq.onclick=function(){
		animate(cccc,{marginLeft:-488},200)
		zxcv.style.display="block";
		zaq.style.display="none"
	}
	zxcv.onclick=function(){
		zxcv.style.display="none";
		animate(cccc,{marginLeft:0},200)
		zaq.style.display="block";
	}
}



const mmm=$(".zbxf")[0];
xslb(mmm);
function xslb (mmm) {
	mmm.style.marginTop=0;
	setInterval(function  () {
		animate(mmm,{marginTop:-40},function  () {
			for (let i = 0; i < 1; i++) {
				let first = mmm.firstElementChild;
				// console.log(first)
				mmm.appendChild(first);
				mmm.style.marginTop=0;
			}
		})	
	},3000)	
}
const mmmm=$(".hengh")[0];
const pp=$(".henghf")[0];
const pw=$(".henghff")[0];
const ps=$(".henghfff")[0];
const pd=$(".henghffff")[0];
const pc=$(".henghfffff")[0];
// console.log(pp,pw,ps,pd,pc)
xslb(mmmm);
xslb(pp);
xslb(pw);
xslb(ps);
xslb(pd);
xslb(pc);
