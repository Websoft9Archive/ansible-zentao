# 更多...

下面每一个方案，都经过实践证明行之有效，希望能够对你有帮助

## 域名绑定

绑定域名的前置条件是：已经完成域名解析（登录域名控制台，增加一个A记录指向服务器公网IP）  

完成域名解析后，从服务器安全和后续维护考量，需要完成**域名绑定**：

ZenTao 域名绑定操作步骤：

1. 使用 SFTP 工具登录云服务器
2. 修改 [虚拟机主机配置文件](/zh/stack-components.html#apache)，将其中的域名相关的值
   ```text
   #### ZenTao(LAMP) bind domain #### 

     <VirtualHost *:80>
     ServerName  www.mydomain.com # 修改成您的实际域名
     DocumentRoot "/data/wwwroot/zentao"
     ...
     
   #### ZenTao(LNMP) bind domain #### 

     server {
      listen 80;
      server_name zentao.example.com; # 修改成您的实际域名
     ...

   ```
3. 保存配置文件，[重启服务](/zh/admin-services.html#apache)

## ZenTao 多语言

ZenTao 支持多语言，直接到后台切换即可  
![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/zentao/zentao-changelanguage-websoft9.png)

## ZenTao 安装插件

ZenTao 提供了 [插件市场](https://www.zentao.net/extension-browse.html) 以方便用户扩展功能

1. 登录后台，打开**插件市场**，搜寻所需的扩展
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/zentao/zentao-dlplugins-websoft9.png)

2. 点击【下载】，开始安装（安装过程中需要登录 ZenTao 官网）
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/zentao/zentao-installplugin-websoft9.png)

3. 如果是收费插件，需要输入本地电脑的 MAC 地址以验证版权

也可以通过手工安装插件：下载插件，并压缩，然后将目录拷贝到禅道对应的目录，比如 */zentao/module*

## ZenTao 重置管理员密码

禅道管理员密码忘记了，怎么找回？ 使用 phpMyAdmin 登录禅道数据库 **zt_user** 表，找到用户的记录，把 password 的值改成 `e10adc3949ba59abbe56e057f20f883e` ，登录密码重置为：`123456`。

![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/zentao/zentao-recoverpw-websoft9.png)

## ZenTao 命令操作

ZenTao 提供了一套命令操作，详情参考官方文档：[初始化管理脚本](https://www.zentao.net/book/zentaopmshelp/35.html)

## ZenTao 集成 Git

参考官方文档：[集成禅道和Git](https://www.zentao.net/book/zentaopmshelp/207.html)