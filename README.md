# vue-router

## install 	
`npm install` 	

### watch 	
`npm run watch` 
### build 	
`npm run build` 
### dev 
`npm run dev`   
### pack    
`npm run pack`   
### clean   
`npm run clean` 

### how to use 	
You just need to run `npm run dev`. 	

### how to publish 	
`npm run build` 	

### how to test 
`npm run test`  


### 项目介绍    
1. src/data/ 某些数据   
1. src/libs/ 插件目录   
1. src/modules/ 自定义模块目录 
1. src/store/ vuex目录   
1. src/styles/ css目录    
1. src/view/ 页面目录   
1. src/router vue-router路由文件    
1. images/ 图片目录 
1. images/static/ 此文件夹下 图片/目录 不会被压缩、base64处理     
1. config/ 配置信息 
1. dist/ 输出/上线 目录，所有被编译的文件都会输出到此目录   

*截止到2017-11-30 17:37，package.json模块最新版*   
*如果问题，请[联系我](mailto:hezhe@ihangmei.com)*  


### 项目上线    
上线输出目录dist即可 

### history 后台配置    
##### Apache    
```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
``` 

##### nginx     
```
location / {
  try_files $uri $uri/ /index.html;
}
``` 
##### nodejs    
```
const http = require('http')
const fs = require('fs')
const httpPort = 80

http.createServer((req, res) => {
  fs.readFile('index.htm', 'utf-8', (err, content) => {
    if (err) {
      console.log('We cannot open \'index.htm\' file.')
    }

    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    })

    res.end(content)
  })
}).listen(httpPort, () => {
  console.log('Server listening on: http://localhost:%s', httpPort)
})
```     
##### Caddy     
```
rewrite {
    regexp .*
    to {path} /
}
```     