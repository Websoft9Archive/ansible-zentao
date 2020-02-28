# More

Each of the following solutions has been proven to be effective and we hope to be helpful to you.

## Domain binding

The precondition for **Domain binding** is have completed the **Domain resolution** for ZenTao Instance.

From the perspective of server security and subsequent maintenance considerations, the **Domain Binding** step cannot be omitted.

ZenTao domain name binding steps:

1. Connect your Cloud Server
2. Modify [vhost configuration file](/stack-components.md#apache), change the domain name item for you
   ```text
   #### ZenTao (LAMP) bind domain #### 

     <VirtualHost *:80>
     ServerName joomla.mydomain.com # modify it for you
     DocumentRoot "/data/wwwroot/ZenTao"
     ...
     
   #### ZenTao (LEMP) bind domain #### 

     server {
      listen 80;
      server_name joomla.example.com; # modify it for you
     ...

   ```
3. Save it and restart [Web Service](/admin-services.md#apache)

## ZenTao languages

ZenTao supports multiple languages. Here are the main steps to install and set up multiple languages:
![](https://libs.websoft9.com/Websoft9/DocsPicture/en/zentao/zentao-changelanguage-websoft9.png)

## ZenTao install Plugin

ZenTao have provided [Plugins Marketplace](https://www.zentao.net/extension-browse.html) for you to extend functions of ZenTao

1. Log in ZenTao, search the plugins you want to use
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/zentao/zentao-dlplugins-websoft9.png)

2. Intall plugin

> You can download plugin and unzip it, then upload to */zentao/module* for installing also

## ZenTao recover administrator password

If you don't remember your administrator password, please user phpMyAdmin to modify **zt_user** table of ZenTao's database, make the password of your adminitrator's value is `e10adc3949ba59abbe56e057f20f883e`, then your new password is `123456`

## ZenTao CLI

ZentaoPHP framework enables the configuration and maintenance of ZenTao through commands, refer to [Initialize scripts](https://www.zentao.pm/book/zentaomanual/free-open-source-project-management-software-initialize-95.html)

## ZenTao Integrate Git

Refer to [Integrate Git](https://www.zentao.pm/book/zentaomanual/free-open-source-project-management-software-git-105.html)