// 微信部分
const wei=document.querySelectorAll(".log-yt-wechat");
const weix=document.querySelectorAll(".erwei");
xuanxiangka(wei,weix)
// 手机部分
const sj=document.querySelectorAll(".log-phone");
const sjb=document.querySelectorAll(".zhe-phone");
xuanxiangka(sj,sjb)
//我有银泰
const yin=document.querySelectorAll(".log-yt-home");
const yinxia=document.querySelectorAll(".yt-seller-myhome");
xuanxiangka(yin,yinxia)

// 列表选项卡
const lie=document.querySelectorAll(".top-menu .menu-cate-all-out dl");
// console.log(lie)
const liebiao=document.querySelectorAll(".submenu");
// console.log(liebiao)
xuanxiangka(lie,liebiao)
//购物车下拉
const gou=document.querySelectorAll(".icart");
// console.log(gou)
const goub=document.querySelectorAll(".yt-bags")
// console.log(goub)
xuanxiangka(gou,goub)
// 按钮
const an=document.querySelectorAll(".floor_slide");
// console.log(an)
const ann=document.querySelectorAll(".btn")
// console.log(ann)
xuanxiangka(an,ann)

//  const an12=document.querySelectorAll(".pannels");
// const ann12=document.querySelectorAll(".bttt1")
//  xuanxiangka(an12,ann12)

const an1=document.querySelectorAll(".luobo2");
const ann1=document.querySelectorAll(".btnBB")
xuanxiangka(an1,ann1)
// banner轮播
lunbo(".bgt",".tab_pannel",".nav_trriger li","#e5004f",3000,2,"#e5004f",1,"#7b5e5e",".left22",".right22")

tiaodong(".tk_nav a",".eva-active11",".baihuobox",["translateX(0px)","translateX(100px)"]);

tiaodong(".brand_content .eva-switchable li a",".active100 ",".pr_list_t ",["translateX(0px)","translateX(304px)","translateX(608px)"]);

// jiedian(".eva-switchable-panels.luo",".lunbo1" ,".eva-btn",".eva-rignt-btn",6);
// lrCarousel(".bgt11",".bannerBB",".right-btn",".left-btn",".dian li",5000,"#6e6e6e","#d00149")
lrCarousel(".bgt11",".bannerBB",".right-btn",".left-btn",".dian li",5000,"#6e6e6e","#d00149")
lrCarousel(".bgt12",".bann2",".btn2",".btn1",".dian1 li",5000,"#6e6e6e","#d00149")
duotu(".eva-switchable-panels.luo",".eva-rignt-btn",".eva-btn",".lunbo1",6);
duotu(".eva-switchable-panels.errr",".right1",".left1",".lunbo2",6);
duotu(".eva-switchable-panels.sann",".rig2",".lef2",".lunbo3",6);
duotu(".eva-switchable-panels.four",".rig3",".lef3",".lunbo4",6);
duotu(".eva-switchable-panels.five",".rig4",".lef4",".lunbo5",6);
duotu(".eva-switchable-panels.six",".rig5",".lef5",".lunbo6",6);
duotu(".eva-switchable-panels.sven",".rig6",".lef6",".lunbo7",6);
duotu(".eva-switchable-panels.neight",".rig7",".lef7",".lunbo8",6);
duotu(".eva-switchable-panels.nine",".rig8",".lef8",".lunbo9",6);
const btnBox1=$(".float_nav")[0];
const btn1=$(".float_nav a");
const floor1=$(".yt_floor_mp");
let jiazaiheight=1080;
tiaotan(btnBox,btn1,floor,jiazaiheight);
const dingbu=document.querySelectorAll(".float_nav .Y_floor_top")[0];
const dintiao=document.querySelectorAll("body")[0];
 dingbu.onclick=function(){
    animate(dintiao,{scrollTop:0},200);
 }