// $(function(){
	const zhezhaoBox = $(".thumbnail");
	const zhezhao1 =$(".app-block-over");
	zhezhaoO(zhezhaoBox,zhezhao1);

	const zhezhao2=$(".daoBOX");
	const zhezhao3=$(".daohanglis");
	xuanxiangka(zhezhao2,zhezhao3) 
  	lunbo1(".banner-you",".banner-image-screenshots",2,2000,1)
  	 tiaodong(".nav-tabs>li>a",".tiao",".tab-content ",["translateX(0px)","translateX(80px)"]);

	// const zhezhao4=$(".rank_box");
	// const zhezhao4=$(".tabb");
	// xuanxiangka(zhezhao4,zhezhao4) 



	
   
// });
		const llb=$(".rank-item-title");
		const kubi=$(".active")[0];
		const bank=$(".rank-item-content");
		console.log(llb);
		console.log(kubi);
		console.log(bank)
		let flag=true;
		let t;
		kubi.style.height=0.2;
		for(let i=0;i<llb.length;i++){
			t=setTimeout(function(){
			llb[i].onmouseover=function(){
				if(flag){
					flag=false;
					for(let j=0;j<llb.length;j++){
						llb[j].style.borderTop=0;
						bank[j].style.display="none";
					}
			bank[i].style.display="block";					
			animate(kubi,{height:186},100,function(){
			flag=true;
			});
			animate(llb,{height:0},100,function(){
				// llb.style.display="none";
				flag=true;
			});
		}
		}
	},500)
		}
		close.onclick=function(){
			if(t){
					clearTimeout(t);
				}
			if(flag){
				flag=false;
			animate(kubi,{height:0},50,function(){
				flag=true;
			});
			for(let j=0;j<llb.length;j++){
						llb[j].style.borderTop=0;
					}
			lb1.style.display="block"
			animate(lb1,{height:24},100,function(){
				flag=true;
			});
			
		}
		}