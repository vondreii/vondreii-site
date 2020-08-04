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
* The `--style` parameter allows you to choose which stylesheet format you would like to use (can be `CSS`, `SCSS`, `Sass`, `Less`, or `Stylus`). For this tutorial we are using CSS.

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

We will now make two basic pages, the `Home` page and the `About` page, for the sake of having minimal navigation.

To open the source code you can open the whole folder in `Visual Studio Code` if you have it [installed](https://code.visualstudio.com/download). Otherwise you can manually edit the files.
In the root of the app's directory, run the following commands one after another in the command window: 
* `ng g c home`
* `ng g c about`

Two components/folders will be created: `src/app/about` and `src/app/home`.

<!-- ----------- Image ----------- -->
<div class="blog-image-container">
	<img src="../../../assets/blog/creating-and-deploying-ann-angular-app-on-netlify/app-structure.PNG" alt="image" class="blog-image"/>
	<div class="content-photo-credit"><p>New app structure</p></div>
</div>
<!-- ----------------------------- -->

In `src/app/home/home.component.html` replace the existing code with:
```Html
<p> HomePage Works! </p>
<p> Go to the About Page: </p>
<button class="button" routerLink="about"> About </button>
```

In `src/app/home/about.component.html` replace the existing code with:
```Html
<p> About page works! </p>
<p> Go back to the Home Page: </p>
<button class="button" routerLink=""> Back to Home </button>
```

In `src/styles.css` replace the existing code with:
```CSS
.button {
    background-color: #e7e7e7; /* Gray */
    border: none;
    color: black;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}

p {
    font-size: 14pt;
    font-family: Arial, Helvetica, sans-serif;
}
```  
  
Now we have to set up the routing so the links on the pages will work. In `src/app/home/app.component.html` replace the existing code with:
```Html
<router-outlet></router-outlet>
```

Go to `src/app/app-routing-module.ts` and make the following modifications:

```Javascript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common'; // add this
import { AboutComponent } from './about/about.component'; // add this
import { HomeComponent } from './home/home.component'; // add this

// add paths for about and home inside the Routes array, like this:
const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'about', component: AboutComponent }
];

@NgModule({
	imports: [
		CommonModule // add this
		RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

```

Now run `ng serve --open` again to see the basic two webpages you have created.



### To be continued


<br><br>

</div>