# 更新升级

网站技术日新月异，**更新升级**是维护工作之一，长时间不升级的程序，就如长时间不维护的建筑物一样，会加速老化、功能逐渐缺失直至无法使用。  

这里注意更新与升级这两词的差异（[延伸阅读](https://support.websoft9.com/docs/faq/zh/tech-upgrade.html#更新-vs-升级)），例如：  

- 操作系统打个补丁常称之为**更新**，Ubuntu16.04 变更为 Ubuntu18.04，称之为**升级**
- MySQL5.6.25-->MySQL5.6.30 常称之为**更新**，MySQL5.6->MySQL5.7 称之为**升级**

ZenTao 完整的更新升级包括：系统级更新（操作系统和运行环境）和 ZenTao 程序升级两种类型

## 系统级更新

运行一条更新命令，即可完成系统级更新：

``` shell
#For Centos&Redhat
yum update -y

#For Ubuntu&Debian
apt update && apt upgrade -y
```
> 本部署包已预配置一个用于自动更新的计划任务。如果希望去掉自动更新，请删除对应的Cron


## ZenTao 升级

ZenTao 通过手工上传代码的方式进行升级。在升级之前请做好服务器的快照备份，这个是必须的步骤，因为谁都无法保证升级 100% 成功。

1. [下载](https://www.zentao.net/download.html)最新源码，解压
2. 上传并覆盖服务器上的 ZenTao 源码
3. 本地浏览器访问: *http://服务器公网IP/upgrade.php* 开始升级
4. 如果升级过程报错" Uncaught Error: Call to a member function query() on null in li..."，请给 `zentao/www` 和 `zentao/tmp` 目录递归加下777权限后再试

> 更多升级详情，请参考官方升级文档 [ZenTao 通过源代码方式升级(通用)](https://www.zentao.net/book/zentaopmshelp/67.html)