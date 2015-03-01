# **Angular js App from scratch:**

This is a walk through the entire process of creating an Angular App from scratch.


#**Part 1:Settting up the project:**

###1)Checking whether node and bower installed on PC


   _i) Installing necessary package managers_



`node --v`   backend package manager

`bower --v`  front end  package manager
 
You will see the version of them installed

If not install them.We use express which is a server side framework.

Create a folder called **contacts** and install **express** in that folder.

**npm install express** 

Use **sudo** if it is throwing administrator error and you can also install globally as below:

**sudo npm install -g express**


After that we change the **.bowerrc** file to download the dependencies in the specific folder we want, by modifying the directory.

First create  a file **.bowerrc**  in **contacts** folder and in that file mention the folder structure to install the dependencies:


     {
      “directory”:”public/lib”
     }


Installing angular

     bower install angular

Installing bootstrap 

     bower installing bootstrap

Bootstrap also downloads jQuery with it.


Creating two folder views and src in public folder.

     mkdir public/views

     mkdir public/src


##Running server

Create  a file in **contacts** folder called **server.js**

In that write a simple server logic


    var express = require('express'),
       app = express();
     
       app 
          .use(express.static('./public'))
          .get('*', function(req,res){
          res.sendfile('public/main.html');      
          })
         .listen(3000);



Create a **main.html** file in **public** folder :





To make server to restart the server automatically when ever we change the server file 
install nodemon using:

   sudo npm install -g nodemon 

We can run the server :

   nodemon server.js


After installing nodemon, you can run the app using :


    nodemon server.js

>>Including bootswatch in the app


flatly theme into the project.

