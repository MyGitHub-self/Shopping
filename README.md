基于微信小程序框架+Vantui+Json-server开发的一个售卖酒类的小商城（部分功能未完善json-server未启动部分页面为空白页属于正常）
---------------------------------------------------------------------------                           





          ├─application                       ---------静态数据存储区
          │      serve.js                     ---------静态数据文件
          │      
          ├─images                            ---------图片资源存储区
          │  │  
          │  └─screenshots                    ---------效果图片存储文件
          │          
          ├─node_modules1                     ---------vant存储包
          │  └─vant-weapp                     ---------vant存储区
          │      │  
          │      └─dist                       ---------vant资源存储块
          │                  
          ├─pages                             ---------静态页面存储区                  
          │  ├─cart                           ---------购物车块    
          │  │  ├─cart                        ---------购物车页             
          │  │  │      
          │  │  └─cart-template               ---------购物车模版页
          │  │          
          │  ├─classify                       ---------分类块
          │  │  ├─classify                    ---------分类页
          │  │  │      
          │  │  └─classify-template           ---------分类模版页
          │  │          
          │  ├─home                           ---------主页块
          │  │  ├─buy                         ---------结算页
          │  │  │      
          │  │  ├─buyer                       ---------详情页     
          │  │  │      
          │  │  ├─home-template               ---------主页模版页   
          │  │  │      
          │  │  ├─index                       ---------主页  
          │  │  │       
          │  │  └─search                      ---------搜索页
          │  │          
          │  └─my                             ---------我块 
          │      ├─my                         ---------我的页  
          │      │      
          │      ├─orderform                  ---------订单信息页
          │      │      
          │      └─site                       ---------我的地址页
          │              
          └─utils                             ---------公共的js存储区   
                  util.js                     ---------公共的js存储文件 

          │  app.js                           ---------全局的js配置文件 
          │  app.json                         ---------全局入口配置文件 
          │  app.wxss                         ---------全局wxss配置文件 
          │  package-lock.json                ---------版本号管理文件
          │  project.config.json              ---------项目配置文件 
          │  sitemap.json                     ---------全局索引文件  
主页  
------
![](https://raw.githubusercontent.com/MyGitHub-self/Mydemo/master/shopping/1.png)  
详情页    
------
![](https://raw.githubusercontent.com/MyGitHub-self/Mydemo/master/shopping/2.png)          
支付页    
------
![](https://raw.githubusercontent.com/MyGitHub-self/Mydemo/master/shopping/3.png)  
分类页    
------
![](https://raw.githubusercontent.com/MyGitHub-self/Mydemo/master/shopping/4.png)  
购物车页    
------
![](https://raw.githubusercontent.com/MyGitHub-self/Mydemo/master/shopping/5.png)  
默认购物车页    
------
![](https://raw.githubusercontent.com/MyGitHub-self/Mydemo/master/shopping/6.png)  
支付页（购物车跳转）    
------
![](https://raw.githubusercontent.com/MyGitHub-self/Mydemo/master/shopping/7.png)  
我的页   
------
![](https://raw.githubusercontent.com/MyGitHub-self/Mydemo/master/shopping/8.png)  
