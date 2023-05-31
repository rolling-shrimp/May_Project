篩選

var linkIcon = document.querySelectorAll(".area i");
var view_wraps = document.querySelectorAll(".view_wrap")
// console.log(view_wrap)

linkIcon.forEach(function(link){
    // console.log(link)
    link.addEventListener('click',function(){
        linkIcon.forEach(function(item){
            item.classList.remove("active");
        })
        link.classList.add("active");
        
        var myview =link.getAttribute('data_view');
        console.log(myview);

        view_wraps.forEach(function(view){
            view.style.display ="none";
        })
        if(myview == "view_grid"){
            document.querySelector("." + myview).style.display ="block";
        }else{
            document.querySelector("." + myview).style.display ="block";

        }
    })
})

// var myhover =document.querySelector(".view_item");
// var svgs =gsap.to("svg");

// var TL=gsap.timeline({paused: true});

// TL.to(svgs,{
//   scale: 1.0,
//   duration: 0.6,
//   stagger: 0.1,
//   ease: "back.out(1.7)"
// });
// myhover.addEventListener("mouseenter", () => {
//     TL.play();
// })
// myhover.addEventListener("mouseout", () => {
//     TL.reverse();
//   });

// document.addEventListener('DOMContentLoaded',function(){  
//     const tl = new TimelineMax();
//     tl
//       // Ground
//       .staggerFrom(['.ldl-scale > g >path:nth-child(4)'], 1, {scaleY:0, scaleX: 0, transformOrigin: "center", ease: Bounce.easeOut, stagger:0.2})
//       .staggerFrom(['.ldl-scale > g >path:nth-child(3)'], 1, {scaleY:0, scaleX: 0, transformOrigin: "center", ease: Bounce.easeOut, stagger:0.2})
//       .staggerFrom(['.ldl-scale> g >path:nth-child(2)'], 1, {scaleX: 0, transformOrigin:"right", ease: Bounce.easeOut, stagger:0})
//       .staggerFrom(['.ldl-scale> g >path:nth-child(1)'], 1, {scaleX: 0, transformOrigin:"left", ease: Bounce.easeOut, stagger:0})
      
//     //   tl.addEventListener('mouseover',function(){
//     //     this.style.display = 'block';
//     //   })
//     //   tl.addEventListener('mouseout',function(){
//     //     this.style.display = 'none';
//     //   })
//     }
// )

小草草草
const tl = new TimelineMax()
function plant(){  
    tl
      // Ground
      .staggerFrom(['.ldl-scale > g >path:nth-child(4)'], 0.2, {scaleY:0, scaleX: 0, transformOrigin: "center", ease: Bounce.easeOut, stagger:0})
      .staggerFrom(['.ldl-scale > g >path:nth-child(3)'], 0.1, {scaleY:0, scaleX: 0, transformOrigin: "center", ease: Bounce.easeOut, stagger:0} )
      .staggerFrom(['.ldl-scale> g >path:nth-child(2)',], 0.1, {scaleX: 0, transformOrigin:"right", ease: Elastic.easeOut.config(1,0.2), stagger:0} )
      .staggerFrom(['.ldl-scale> g >path:nth-child(1)'],0.1, {scaleX: 0, transformOrigin:"left", ease: Elastic.easeOut.config(1,0.2), stagger:0} )
      
    //   tl.addEventListener('mouseover',function(){
    //     this.style.display = 'block';
    //   })
    //   tl.addEventListener('mouseout',function(){
    //     this.style.display = 'none';
    //   })
}
// function stopplant(){
//     tl.restart()
// }


動畫
var banner1=document.getElementById("banner1");
// var banner2_1=document.getElementsById("banner2_1");
// var banner2_2=document.getElementsById("banner2_2");
// var banner3_1=document.getElementsById("banner3_1");
// var banner3_2=document.getElementsById("banner3_2");
var banner4 =document.getElementById("banner4");

window.addEventListener('scroll',()=>{
    var value =window.scrollY;

    banner4.style.marginTop =value * 0.9 +"px";
    banner2_1.style.left =value * 2 +"px";
    banner2_2.style.left =value * -2 +"px";
    banner3_1.style.left =value * -0.5 +"px";
    banner3_2.style.left =value * 0.5 +"px";

    console.log(value);
    if(value >= 200){
        banner4.style.display ="none";
    }else{
        banner4.style.display ="block";
    }
    
    // console.log(value);

})
