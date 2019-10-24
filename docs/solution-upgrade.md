# Update & Upgrade

Updates and upgrades are one of the maintenance tasks for sytem. Programs that are not upgraded for a long time, like buildings that are not maintained for a long time, will accelerate aging and gradually lose functionality until they are unavailable.

You should know the differences between the terms **Update** and **Upgrade**([Extended reading](https://support.websoft9.com/docs/faq/tech-upgrade.html#update-vs-upgrade))
- Operating system patching is **Update**, Ubuntu16.04 to Ubuntu18.04 is **Upgrade**
- MySQL5.6.25 to MySQL5.6.30 is **Update**, MySQL5.6 to MySQL5.7 is **Upgrade**

For ZenTao maintenance, focus on the following two Update & Upgrade jobs

- Sytem update(Operating System and Running Environment) 
- ZenTao upgrade 

## System Update

Run an update command to complete the system update:

``` shell
#For Centos&Redhat
yum update -y

#For Ubuntu&Debian
apt update && apt upgrade -y
```
> This deployment package is preconfigured with a scheduled task for automatic updates. If you want to remove the automatic update, please delete the corresponding Cron

## ZenTao Upgrade

ZenTao is upgraded by manually uploading code.

1. [Download](https://www.zentao.net/download.html) the latest source code of ZenTao, unzip it

2. Upload and cover your old ZenTao source code on your Server

3. Visit *https://Internet IP/upgrade.php* to start upgrade

4. If error like **" Uncaught Error: Call to a member function query() on null in li..."**, please set **777* permission recursively for the folder `zentao/www` and `zentao/tmp`, then try it again

> More details about upgrade, please refer to [ZenTao Upgrade](https://www.zentao.pm/book/zentaomanual/free-open-source-project-management-software-upgradezentao-18.html)