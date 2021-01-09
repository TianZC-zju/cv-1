var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if (!port) {
    console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
    process.exit(1)
}

var server = http.createServer(function (request, response) {
    var parsedUrl = url.parse(request.url, true)
    var pathWithQuery = request.url
    var queryString = ''
    if (pathWithQuery.indexOf('?') >= 0) { queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) }
    var path = parsedUrl.pathname
    var query = parsedUrl.query
    var method = request.method

    /******** 从这里开始看，上面不要看 ************/

    console.log('有个傻子发请求过来啦！路径（带查询参数）为：' + pathWithQuery)

    if (path === '/') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        response.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <title>JS Bin</title>
            
            </head>
            <body>
            
            <!--这是添加样式的方法-->
            <style id="style"></style>
            <!--把方框固定在右边-->
            <style>
                *{margin: 0;padding: 0;box-sizing: border-box;}
                #div1{
                    position: fixed;
                    right:20px;
                    top:20px;
                    font-size:larger;
                }
                #div1::before{
                    content: '';
                    display: block;
                    position: absolute;
                }
                #div1::after{
                    content: '';
                    display: block;
                    position: absolute;
                }
                #html{
                    word-break: break-all;
                }
            
            
            </style>
            <div id="html">hsh</div>
            <div id="div1"></div>
            
            <!--这里放在head就会导致document.querySelector失效, 只有放在下面-->
             <script src="/y"></script>
            
            </body>
            
            </html>`)
        response.end()
    } else if (path === '/x') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/css;charset=utf-8')
        response.write(``)
        response.end()
    } else if (path === '/y') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/javascript;charset=utf-8')
        response.write(`
            let html = document.querySelector("#html")
            let style = document.querySelector("#style");
            let string = \`
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
            \`
            let string2 =\`\`
            let n = 0;
            let step = () =>{
                setTimeout(()=>{
                    if(string[n]==="\\n"){
                        string2 += \`<br>\`
                    }else if(string[n] === ' '){
                        string2 += \`&nbsp\`
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
        `)
        response.end()
    } else {
        response.statusCode = 404
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        response.write(`你输入的路径不存在对应的内容`)
        response.end()
    }

    /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)