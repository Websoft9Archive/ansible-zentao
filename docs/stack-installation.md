# Initial Installation

If you have completed the ZenTao deployment on Cloud Platform, the following steps is for you to start use it quikly

## Preparation

1. Get the **Internet IP** on your Cloud Platform
2. Check you **[Inbound of Security Group Rule](https://support.websoft9.com/docs/faq/tech-instance.html)** of Cloud Console to ensure the TCP:80 is allowed
3. Make a domain resolution on your DNS Console if you want to use domain for ZenTao

## ZenTao Installation Wizard

1. Using local Chrome or Firefox to visit the URL *https://domain* or *https://Internet IP*, start to install  

2. Choose a language, go to next step 
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/zentao/zentao-installstart-websoft9.png)

3. Accept LICENSE and check the environment for ZenTao
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/zentao/zentao-installsyscheck-websoft9.png)

4. Then configure the database connection information([Don't know password?](https://support.websoft9.com/docs/lamp/stack-accounts.html#mysql))
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/zentao/zentao-installdbconf-websoft9.png)

5. Set your administrator account for ZenTao
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/zentao/zentao-installadmin-websoft9.png)

6. Installed successfully, please delete the `install.php` in the ZenTao directory
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/zentao/zentao-installss-websoft9.png)

7. ZenTao Log in
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/zentao/zentao-login-websoft9.png)

8. ZenTao dashboard
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/zentao/zentao-gui-websoft9.png)

9. Register [ZenTao official account](https://www.zentao.net/user-register.html), make your ZenTao connect to ZenTao's plugins Marketplace

> Refer to [ZenTao Manual](https://www.zentao.pm/book/zentaomanual/) to get more details

## Q&A

#### I can't visit the start page of ZenTao?

Your TCP:80 of Security Group Rules is not allowed so there no response from Chrome or Firefox

#### Which database does this ZenTao package use?

MySQL

#### Can I use Cloud database for ZenTao?

Yes