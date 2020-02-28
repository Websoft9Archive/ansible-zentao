# 初始化安装

在云服务器上部署 ZenTao 预装包之后，请参考下面的步骤快速入门。

## 准备

1. 在云控制台获取您的 **服务器公网IP地址** 
2. 在云控制台安全组中，检查 **Inbound（入）规则** 下的 **TCP:80** 端口是否开启
3. 若想用域名访问 ZenTao，请先到 **域名控制台** 完成一个域名解析

## ZenTao 安装向导

1. 使用本地电脑的 Chrome 或 Firefox 浏览器访问网址：*http://域名* 或 *http://Internet IP*, 就进入引导首页

2. 根据系统提示，选择语言，然后“开始安装”
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/zentao/zentao-install001-websoft9.png)

3. 安装进入环境检测页面，点击下一步
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/zentao/zentao-install002-websoft9.png)

4. 填写您的数据库参数（[查看数据库账号密码](/zh/stack-accounts.md#mysql)）
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/zentao/zentao-install003-websoft9.png)

5. 设置后台账号信息，请务必设置好并牢记之，然后“保存”（建议勾选导入demo数据，以便理解系统）
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/zentao/zentao-install005-websoft9.png)

6. 系统完成最后一步安装，登录到禅道管理系统，体验并测试系统功能
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/zentao/zentao-install006-websoft9.png)

7. 登录后台
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/zentao/zentao-login-websoft9.png)

8. 体验后台
  ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/zentao/zentao-gui-websoft9.png)

9. [注册 ZenTao 官网账号](https://www.zentao.net/user-register.html)，便于后续在线安装插件

> 需要了解更多 ZenTao 的使用，请参考官方文档：[ZenTao 开源版手册](https://www.zentao.net/book/zentaopmshelp/40.html) 和 [FAQ](https://www.zentao.net/faq.html)


## 常见问题

#### 浏览器打开IP地址，无法访问 ZenTao（白屏没有结果）？

您的服务器对应的安全组80端口没有开启（入规则），导致浏览器无法访问到服务器的任何内容

#### 本部署包采用的哪个数据库来存储 ZenTao 数据？

MySQL

#### 是否可以采用云厂商提供的 RDS 来存储 ZenTao 数据？

可以


