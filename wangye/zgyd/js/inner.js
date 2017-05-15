// 登录
const deng=document.querySelectorAll(".dropdowndelu");
const dengx=document.querySelectorAll(".dropdown-menulu");
xuanxiangka(deng,dengx)
//营业厅
const ting=document.querySelectorAll(".dropdown");
const tingx=document.querySelectorAll(".dropdown-menu");
xuanxiangka(ting,tingx)
// 地址
const di=document.querySelectorAll(".topcity");
const dix=document.querySelectorAll(".dizhi .dropdown-menuta");
daji(di,dix)
// 首页
const sou=document.querySelectorAll(".dropdown1");
const soux=document.querySelectorAll(".navbar-nav .yd");
xuanxiangka(sou,soux)

const sou1=document.querySelectorAll(".dropdown2");
const soux1=document.querySelectorAll(".navbar-nav .yd");
xuanxiangka(sou1,soux1)
// banner图

// lrCarousel(".bgtt",".carousel-inner",".lbnext",".lbpre",".carousel-indicators li",2000,"#ccc","#E40077")
  var imgs = document.querySelectorAll(".item li");
    var btns = document.querySelectorAll(".carousel-indicators li");
    var box = document.querySelector(".banner");
    var nowbtn = btns[0];
    var nowimg = imgs[0];
    // 轮播图自动轮播
    var t = setInterval(move, 3000);
    var now = 0;
    var z = 10;
    function move() {
        imgs[now].classList.add("leftOut")
        btns[now].classList.remove("active")
        now++;
        if (now == imgs.length) {
            now = 0;
        }
        btns[now].classList.add("active");
        imgs[now].classList.add("leftIn")  //
        imgs[now].style.zIndex = z++;
    }
    imgs.forEach(function (img) {
        img.addEventListener("animationend", function () {
            img.className="";
            flag=true;
        })
    })
    //  清除时间间隔函数
    box.onmouseover = function () {
        clearInterval(t)
    }
    box.onmouseout = function () {
        t = setInterval(move, 3000);
    }
    // 遍历轮播点
    btns.forEach(function (btn, index) {
        // 轮播点的变化
        btn.onclick = function () {
            if (index == now) {  //当前张
                return;
            }
            if (index > now) {
                imgs[now].classList.add("leftOut");
                imgs[index].classList.add("leftIn")  //
//               点击的下标
            } else if (index < now) {
                imgs[now].classList.add("rihgtOut");
                imgs[index].classList.add("rihgtIn")  //  移入
            }
            btns[now].classList.remove("active")
            btns[index].classList.add("active")
            imgs[index].style.zIndex = z++;
            now = index;  //当前
//
        }
    })
    var flag = true;
    var prev = document.querySelector(".prev");
    var next = document.querySelector(".next");
   // 点击左右箭头
    next.onclick = function () {
        if (flag) {
            flag = false;
            move();
        }
    }
//    左键移出
    prev.onclick = function () {
        if(flag){
            flag = false;    
            imgs[now].classList.add("rihgtOut");
            btns[now].classList.remove("active")
            now--;
              if(now==-1){
                now=imgs.length-1;
            }
            imgs[now].classList.add("rihgtIn");
            imgs[now].style.zIndex=z++;
            btns[now].classList.add("active");
        }
      
    }
          



 jiedian(".yhgundong",".indexbox" ,".yhnext",".yhpre",4);