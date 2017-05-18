 // $(function(){
      	const lis=document.querySelectorAll(".mulubox li");
      	const con=document.querySelectorAll(".mulu_list");
        xuanxiangka(lis,con)

        const bej=document.querySelectorAll(".tiao_left");
        const div=document.querySelectorAll(".beibox");
        xuanxiangka(bej,div)
        // 下拉网站导航
        const g=document.querySelectorAll(".wzr")
      	const w=document.querySelectorAll(".wzdh")
        xuanxiangka(g,w)
   // 购物车中还没有商品，赶紧选购吧！
        const gw=document.querySelectorAll(".gwc")
        const wx=document.querySelectorAll(".gouwla")
        xuanxiangka(gw,wx)
    // 右侧黑条选项
        // const rt=document.querySelectorAll(".jdm-toolbar-tabs .jdm-toolbar-tab ")
        // const rtb=document.querySelectorAll(".tab-text")
        // xuanxiangka(rt,rtb)
    // 京东下拉
        const j=document.querySelectorAll(".cw-icon")
        const go=document.querySelectorAll(".gouwu")
        xuanxiangka(j,go)
    // 京东二维码部分
        const er=document.querySelectorAll(".zr")
        const erbox=document.querySelectorAll(".erwbox")
        xuanxiangka(er,erbox)

        const er2=document.querySelectorAll(".ewm")
        const erbox2=document.querySelectorAll(".erwbox")
        xuanxiangka(er2,erbox2)


        const er3=document.querySelectorAll(".erweima")
        const erbox3=document.querySelectorAll(".pt_qrcode_pop")
        xuanxiangka(er3,erbox3)

    // 品牌头条下拉
        const pp=document.querySelectorAll(".faxneirong .yier")
        const ppbox=document.querySelectorAll(".xiantiao ")
        xuanxiangka(pp,ppbox)

		const pp11=document.querySelectorAll(".yier")
		const ppbox11=document.querySelectorAll(".chuxian .topnei ")
		xuanxiangka(pp11,ppbox11)

		const pp1=document.querySelectorAll(".faxneirong .shouji")
		const ppbox1=document.querySelectorAll(".xiantiao1")
		xuanxiangka(pp1,ppbox1)

		const pp2=document.querySelectorAll(".faxneirong .kuzi1")
		const ppbox2=document.querySelectorAll(".xiantiao2")
		xuanxiangka(pp2,ppbox2)

		const pp3=document.querySelectorAll(".faxneirong .naifen")
		const ppbox3=document.querySelectorAll(".xiantiao3")
		xuanxiangka(pp3,ppbox3)

		const pp4=document.querySelectorAll(".faxneirong .last")
		const ppbox4=document.querySelectorAll(".xiantiao4")
		xuanxiangka(pp4,ppbox4)

          // 客户服务
          const kh=document.querySelectorAll(".kehufuwu1 ")
          const khbox=document.querySelectorAll(".kefu ")
           xuanxiangka(kh,khbox)

          const kh1=document.querySelectorAll(".bgt13 ")
          const khbox1=document.querySelectorAll(".btnn ")
           xuanxiangka(kh,khbox)

    // 图片点击变化
        const he=$(".faxdaohang a")
        const da=$(".faxneirong .top_content")
         xuanxiangka11(he,da)

       //背景banner
	    // $(function(){
	       // 视频播放部分
	     lrCarousel(".bgt11",".banner1shiping",".bann_right",".bann_left",".banner1shiping ul li",5000,"#fff","red")
	      //页面跳转部分 // 页面加载设置
	     tiaotan(".btnBox",".btnBox li","section",".topjiaz","#918888","red",800,1);

        lunbo(".bgt13",".banner_img3",".bannerBOX ul li","red",3000,2,"red",1,"#fff",".bann_left1",".bann_right1");
        // lunbo(".bgt",".tab_pannel",".nav_trriger li","#e5004f",3000,2,"#e5004f",1,"#7b5e5e",".eva-switchable-prev",".eva-switchable-next")

	     // 节点轮播
        duotu_lunbo(".box_bdneirong",".bann_left2",".bann_right2",".jiedian",5);
        jiedian(".xiaonk",".xiaodi" ,".aig_xia_xxx_zuo",".aig_xia_xxx_you",6);
        jiedian(".xia1",".dongxiao1" ,".left11",".right22",6);
        jiedian(".xia2",".dongxiao2" ,".left12",".right23",6);
        jiedian(".xia3",".dongxiao3" ,".left14",".right24",6);
        jiedian(".xia4",".dongxiao4" ,".left15",".right25",6);
        jiedian(".xia5",".dongxiao5" ,".left16",".right26",6);
        jiedian(".xia6",".dongxiao6" ,".left17",".right27",6);
        jiedian(".xia7",".dongxiao7" ,".left18",".right28",6);
        jiedian(".xia8",".dongxiao8" ,".left19",".right29",6);
        jiedian(".xia9",".dongxiao9" ,".leftt1",".rightt2",6);
        jiedian(".xia11",".dongxiao11" ,".leftt11",".rightt21",6);
        jiedian(".xia12",".dongxiao12" ,".leftt12",".rightt22",6);
        jiedian(".xia13",".dongxiao13" ,".leftt13",".rightt23",6);
        jiedian(".xia14",".dongxiao14" ,".leftt14",".rightt24",6);
        


        //条
        tiaodong(".faxdaohang a",".xiantiao5",".top_content",["translateX(0px)","translateX(70px)","translateX(156px)","translateX(234px)","translateX(312px)"]);
        tiaodong(".r_zhong_s a",".zhong_s_t",".r_zhong_x",["translateX(0px)","translateX(50px)"]);

        const dibu14=document.querySelectorAll(".youu")[0];
        const dintiao15=document.querySelectorAll("body")[0];
        dibu14.onclick=function(){
        animate(dintiao15,{scrollTop:0},200);
        }
        const dingbu=document.querySelectorAll(".dibu11")[0];
        const dintiao=document.querySelectorAll("body")[0];
         dingbu.onclick=function(){
            animate(dintiao,{scrollTop:0},200);
         }
        const dh=$(".dh")[0];
        const dm=$(".dm")[0];
        const ds=$(".ds")[0];
        class djs{
            constructor(h,m,s,date){
                this.h=h;
                this.m=m;
                this.s=s;
                // this.t=t;
                this.date=date;
            }
            play(){
                let map=this.gettime();
                this.writes(map);
                this.update();
            }
            gettime(){
                let now= new Date();
                let chatime=this.date.getTime()-now.getTime();
                chatime/=1000;
                // let t=parseInt(chatime/60/60/24);
                let h=parseInt(chatime/60/60%24);
                let m=parseInt(chatime/60%60);
                let s=parseInt(chatime%60);
                let map =new Map();

                h=h<10?('0'+h):h;
                m=m<10?('0'+m):m;
                s=s<10?('0'+s):s;
                
                map.set("h",h);
                map.set("m",m);
                map.set("s",s);
                return map;
            }
            writes(map){
                this.h.innerHTML=map.get("h");
                this.m.innerHTML=map.get("m");
                this.s.innerHTML=map.get("s");
                
            }
            update(){
                let that=this;
                setInterval(function(){
                    that.writes(that.gettime());
                },1000)
            }
        }
        let wuyi=new Date(2017,8,1,0,0,0)   
        let wydjs1=new djs(dh,dm,ds,wuyi);
        wydjs1.play();
