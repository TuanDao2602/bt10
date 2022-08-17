// trên lớp  
// bài 1 biến mất
// let div = document.getElementById("exercise");
// let btn= document.getElementById("btn");
// btn.onclick= function(){
//     if(div.style.opacity !== "0"){
//     div.style.opacity = "0";
//     }else{
//      div.style.opacity="1";
//      }
// }


// bài 2  đổi 2 màu
// let div = document.getElementById("exercise");
// let btn= document.getElementById("btn");

// btn.onclick= function(){
//     if(div.style.backgroundColor !== "red"){
//             div.style.backgroundColor = "red";
//     }else{
//         div.style.backgroundColor="lightblue";
//     }   
// }
// .bài 3 Click vào btn ---> Tăng fontSize của thẻ div lên 1px
//     let div = document.getElementById("exercise");
//  let btn= document.getElementById("btn");
//  let c=0;
//  btn.onclick= function(){
//     c=c+1
//     div.style.fontSize= `${14+c}px`
// }

    // bài  4. Click vào btn ---> Giảm fontSize của thẻ div đi 1px
    // let div = document.getElementById("exercise");
    // let btn= document.getElementById("btn");
    // div.style.fontSize= "54px"
    // btn.onclick= function(){
    //     let fontSize = Number(div.style.fontSize.replace("px",""))
    //     fontSize=fontSize-1;
    //     div.style.fontSize=fontSize+"px"
    // }

    // c2 
    // let div = document.getElementById("exercise");
    //  let btn= document.getElementById("btn");
    //  let c=0;
    //  btn.onclick= function(){
    //     c=c-1
    //     div.style.fontSize= `${14+c}px`
    // }


    // bài 5. Click vào btn ---> Mỗi lần click đổi 1 màu ngẫu nhiên
    // đổi màu ngẫu nhiên bằng cách rgb(r,g,b)  r,g,b=[0--255]
// let div = document.getElementById("exercise");
// let btn= document.getElementById("btn");
// btn.onclick= function(){
//     let r = Math.floor((Math.random())*256);//0-255
//     let g = Math.floor((Math.random())*256);//0-255
//     let b = Math.floor((Math.random())*256);//0-255
//     let color = `rgb(${r},${g},${b})`;
//     div.style.backgroundColor = color;
// }


// bài 6 thay vuông thành tròn
let div=document.getElementById("exercise");
let btn = document.getElementById("btn");
btn.onclick = function () {
    if (div.style.borderRadius!=="50%") {
        div.style.borderRadius="50%";
    } else {
        div.style.borderRadius=0;
        
    }
}

    




// Bài về nhà 
// bài 1 biến mất
// let div = document.getElementById("exercise");
// let btn= document.getElementById("btn");
// btn.onclick= function(){
//     if(div.style.opacity !== "0"){
//     div.style.opacity = "0";
//     }else{
//      div.style.opacity="1";
//      }
// }
// bài 2 đổi màu ngẫu nhiên bằng cách rgb(r,g,b)  r,g,b=[0--255]
// let div = document.getElementById("exercise");
// let btn= document.getElementById("btn");
// btn.onclick= function(){
//     let r = Math.floor((Math.random())*256);//0-255
//     let g = Math.floor((Math.random())*256);//0-255
//     let b = Math.floor((Math.random())*256);//0-255
//     let color = `rgb(${r},${g},${b})`;
//     div.style.backgroundColor = color;
// }



//  bài 3 c1 mở tab bên style
// let div2 = document.getElementById("exercise2");
// let div = document.getElementById("exercise");
// let btn= document.getElementById("btn");
// btn.onclick= function(){
//     let contenTemp="";
//     let bgColorTemp="";
//     // hàm getComputedStyle này thay cách khai báo div.
//     let style=getComputedStyle(div);
//     let style2=getComputedStyle(div2);


//     // đổi màu 
//     bgColorTemp=style.backgroundColor;
//     div.style.backgroundColor=style2.backgroundColor;
//     div2.style.backgroundColor=bgColorTemp


//     // đổi chữ
//     contenTemp = div.innerHTML;
//     div.innerHTML=div2.innerHTML;
//     div2.innerHTML=contenTemp;
// }



// bài 4 c1
// let div = document.getElementById("exercise");
// let btn= document.getElementById("btn");
// let c=0;
// btn.onclick= function(){
//     c=c+1
//     div.style.fontSize= `${14+c}px`
// }

// bài 4 c2 thầy cường
// let div = document.getElementById("exercise");
// let btn= document.getElementById("btn");
// div.style.fontSize= "14px"
// btn.onclick= function(){
//     let fontSize = Number(div.style.fontSize.replace("px",""))
//     fontSize=fontSize+1;
//     div.style.fontSize=fontSize+"px"
// }