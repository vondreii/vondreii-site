<div class="parallax" style="height: 350px; background-image: url('../../../assets/blog/how-to-be-better-organised/header.jpg');">
  <div class="imageTextCollage"><a class="photoCred" style="margin-top: 300px; float: right;" href="https://unsplash.com/@epicantus" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Igor Miske"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Daria Nepriakhina</span></a></div>
</div>
<br>
<div class="writtenContent">

## Creating and Deploying an Angular App on Netlify
___

###### 04 Aug 2020 by [@Vondreii](https://www.instagram.com/vondreii/?hl=en)
___


This tutorial will go through how you can host an angular web app in 3 stages:

* Creating a simple Angular App
* Pushing the Angular app to a Github repository
* Hosting the app on Netlify via that Github repository


### Creating a simple Angular App

First you will need to install the `Angular CLI` to be able to create Angular projects. You can do this by opening your command prompt or terminal and running:


```bash
npm install -g @angular/cli
```

Navigate to a place in your files directory where you would like to store your project. Make a new folder, for example, `test-angular-app`:

<!-- ----------- Image ----------- -->
<div class="blog-image-container">
	<img src="../../../assets/blog/creating-and-deploying-ann-angular-app-on-netlify/folder.PNG" alt="image" class="blog-image"/>
	<div class="content-photo-credit"><p>Angular app project folder</p></div>
</div>
<!-- ----------------------------- -->

In the command line, navigate to the location of this folder. If your folder location is `C:\Users\user1\Desktop\test-angular-app`, then run the command
`cd C:\Users\user1\Desktop\test-angular-app`:

<!-- ----------- Image ----------- -->
<div class="blog-image-container">
	<img src="../../../assets/blog/creating-and-deploying-ann-angular-app-on-netlify/cmd1.PNG" alt="image" class="blog-image"/>
	<div class="content-photo-credit"><p>Navigating to the folder via the cmd</p></div>
</div>
<!-- ----------------------------- -->

Run the following command to create a new Angular Application:
```bash
ng new test-angular-app --routing=true --style=css
```

You can change this based on your needs:
* The `--routing` parameter adds Angular routing (either `true` or `false`)
* The `--style` parameter allows you to choose which stylesheet format you would like to use (can be `CSS`, `SCSS`, `Sass`, `Less`, or `Stylus`)

Now you have the framework to develop an Angular App. If you open the folder of the source code it should look similar to this:
<!-- ----------- Image ----------- -->
<div class="blog-image-container">
	<img src="../../../assets/blog/creating-and-deploying-ann-angular-app-on-netlify/angular-test-source-code.PNG" alt="image" class="blog-image"/>
	<div class="content-photo-credit"><p>Navigating to the folder via the cmd</p></div>
</div>
<!-- ----------------------------- -->

Navigate to the folder either via the command line or the terminal within Visual Studio Code:

<!-- ----------- Image ----------- -->
<div class="blog-image-container">
	<img src="../../../assets/blog/creating-and-deploying-ann-angular-app-on-netlify/ng-serve.PNG" alt="image" class="blog-image"/>
	<div class="content-photo-credit"><p>ng serve to view the project</p></div>
</div>
<!-- ----------------------------- -->

Run the command `ng serve --open`. A web browser should open with your webpage running locally - if the default angular app page shows then you are on the right track:

<!-- ----------- Image ----------- -->
<div class="blog-image-container">
	<img src="../../../assets/blog/creating-and-deploying-ann-angular-app-on-netlify/default-app-page.PNG" alt="image" class="blog-image"/>
	<div class="content-photo-credit"><p>Default angular opening webpage</p></div>
</div>
<!-- ----------------------------- -->

---------------- Making changes to the web application:

To open the source code you can open the whole folder in `Visual Studio Code` if you have it [installed](https://code.visualstudio.com/download):

<!-- ----------- Image ----------- -->
<div class="blog-image-container">
	<img src="../../../assets/blog/creating-and-deploying-ann-angular-app-on-netlify/open-with-code.PNG" alt="image" class="blog-image"/>
	<div class="content-photo-credit"><p>Opening the project in Visual Studio Code</p></div>
</div>
<!-- ----------------------------- -->


```html

<ul>
	<li>ID Documents</li>
	<li>Medical records (where you put prescriptions, X-ray scans or hospital letters)</li>
	<li>Any printed employment related documents</li>
	<li>Car documents related to insurance, ownership or registration</li>
	<li>Receipts or warranties that you need to keep</li>
	<li>Any important tax or government letters</li>
	<li>Bank Statements</li>
</ul>

```

### Second one

Words

### Conclusion

Being more organised isn't just about getting to places on time. It also involves organising your living spaces and other aspects of you like (such as your computer, your cooking and your finances).
Don't stress about not having all of these down. Life is way too complicated for things like this to be easy. However with a bit of habit forming and discipline, you might be able to get some of these and hopefully feel a bit more organised.

<br><br>

</div>