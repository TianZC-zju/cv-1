let html = document.querySelector("#html")
let style = document.querySelector("#style");
let string = `
/*你好,我是一名前端新人
*接下来我要演示一下我的前端功底
*首先我要准备一个div
*/
#div1{
    border:1px solid red;
    width:400px;
    height:400px;
}
/*接下来我要把div1变成一个半白半黑的圆*/
#div1{
    border-radius: 50%;
    border: 1px solid black;
    background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);
}
/*加两个神秘的小球*/
#div1::before{
    width: 200px;
    height: 200px;
    top:0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
}
#div1::after{
    width: 200px;
    height: 200px;
    bottom:0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
}
`
let string2 =``
let n = 0;
let step = () =>{
    setTimeout(()=>{
        if(string[n]==="\n"){
            string2 += `<br>`
        }else if(string[n] === ' '){
            string2 += `&nbsp`
        }
        else{
            string2 += string[n]
        }
        n = n+1
        html.innerHTML = string2
        style.innerHTML = string.substring(0, n)
        scroll(0,document.body.scrollHeight)
        if(n < string.length){
            step()
        }else{
        }
    }, 25)
}
step()
