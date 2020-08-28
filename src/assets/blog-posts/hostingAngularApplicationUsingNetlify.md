<div class="parallax" style="height: 350px; background-image: url('../../../assets/blog/hosting-angular-application-using-netlify/header.jpg');">
  <div class="imageTextCollage"><a class="photoCred" style="margin-top: 300px; float: right;" href="https://unsplash.com/@domenicoloia" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Igor Miske"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Domenico Loia</span></a></div>
</div>
<br>
<div class="writtenContent">

## Hosting An Angular Application Using Netlify
___

###### 19 Aug 2020 by [@Vondreii](https://www.instagram.com/vondreii/?hl=en)
___

Everything here is just a draft at the moment.

For this tutorial, you will need a working Angular App ready to host, and a GitHub Account already set up.

If you don't have an Angular App, you can follow the steps in this tutorial: [Creating A Simple Angular Web Application](/blog/post/creatingASimpleAngularWebApplication) to make one.
Otherwise, you can download the source code of a working simple Angular App from [here](https://github.com/vondreii/Example-Angular-Project-Tutorial).

If you don't have a Github repository, you can follow the steps in this tutorial: [Setting Up A Github Repository and Creating A Local Copy](/blog/post/settingUpASimpleGithubRemoteAndLocalRepository).

### GitHub with Netlify

Netlify is a free hosting platform where you can host your website live using a customisable domain name provided with a .app extension at the end. 
One way Netlify does this is by connecting to an existing repository and hosting your website code stored there.

In this tutorial we will go through how to host an Angular web application using Netlify in 4 steps:

* Adding your Angular code to your repository
* Creating a Netlify account 
* Linking Netlify to your Github repository
* Changing any additional configurations to host the website successfully

### 1. Adding your Angular code to your repository

If you do not yet have a local copy of the Github repository, navigate to your repository on GiHub.
Click on the **Code** link, and make a note of the link under **Clone with HTTPS**.

<div class="blog-image-container">
    <img src="../../../assets/blog/hosting-angular-application-using-netlify/clone.PNG" alt="image" class="blog-image-full"/>
	<div class="content-photo-credit"><p>Repository settings</p></div>
</div>

Open your command prompt. Navigate to any location, for example, the **Desktop**:

```Bash
cd Desktop
```

Then, run the command: `git clone <<put-the-link-here>>`. For example, my link was `https://github.com/vondreii/my-angular-app-netlify.git`, so I would write:

```Bash
git clone https://github.com/vondreii/my-angular-app-netlify.git
```

For example:

<div class="blog-image-container">
    <img src="../../../assets/blog/hosting-angular-application-using-netlify/git-clone-local.PNG" alt="image" class="blog-image-full"/>
	<div class="content-photo-credit"><p>Running this command will create a new folder</p></div>
</div>

This should automatically create a new folder locally on your computer, which will be linked to your online repository.
In this example, my repository is called `My-Angular-App-Netlify`, so the new folder that was created in my Desktop was also called `My-Angular-App-Netlify`.

You want to add the code to your Angular Wepsite into this folder, insuring that the root of the angular application contains your `e2e`, `node_modules` and `src` folders, as well as other root level files, as shown below:

<div class="blog-image-container">
    <img src="../../../assets/blog/hosting-angular-application-using-netlify/root-application.PNG" alt="image" class="blog-image-full"/>
	<div class="content-photo-credit"><p>Running this command will create a new folder</p></div>
</div>

Now run the following commands to push the code to your remote repository:

```Bash
git add .
```

```Bash
git commit -m "Added Angular Code"
```

```Bash
git push
```

If you already have a repository that stores your Angular code, just ensure that the correct folders and files make up the root folder as shown in the previous image. 

Once you have pushed your code, go to your repository on your Github page. You should be able to see that your repository has now updated with the code to your Angular website.

<div class="blog-image-container">
    <img src="../../../assets/blog/hosting-angular-application-using-netlify/angular-code-pushed-to-github.PNG" alt="image" class="blog-image-full"/>
	<div class="content-photo-credit"><p>Angular code in remote repository</p></div>
</div>

### 3. Creating a Netlify Account 
	
Now that we have a Github repository storing the code online, we can create a Netlify Account. This will be used to host the actual website.

Go to Netlify's [home page](https://www.netlify.com/) and click on Sign up.

<div class="blog-image-container">
    <img src="../../../assets/blog/hosting-angular-application-using-netlify/netlify-sign-up.PNG" alt="image" class="blog-image-full"/>
	<div class="content-photo-credit"><p>[https://www.netlify.com/](https://www.netlify.com/)</p></div>
</div>

You will be given a few different options to choose from of where you want to link Netlify to. Since we are going to be using Gihub, select Github and follow the prompts to sign in.

<div class="blog-image-container">
    <img src="../../../assets/blog/hosting-angular-application-using-netlify/welcome-to-netlify.PNG" alt="image" class="blog-image-full"/>
	<div class="content-photo-credit"><p>[https://www.netlify.com/](https://www.netlify.com/)</p></div>
</div>

Put in your username/email and password for your Github account.

SignUpToGithubViaNetlify.PNG

autho.PNG

### 4. Linking a Netlify Project to your Github repository

Once way that Netlify hosts your website is by connecting to a Github repository that stores the code of your website (this is what we created earlier)! We already have a Github repository that stores your website's code. 
All we have to do now is link that Github repository with Netlify, so Netlify will be able to host it.
That way your website can display using a domain like http://angular-project.web-app.com.

Once you have signed up:

Select 'New Site From Git'

newSiteFromGit.PNG

newSiteFromGit2.PNG

newSiteFromGit3.PNG
newSiteFromGit4.PNG
newSiteFromGit5.PNG (put ng build, leave the app dir empty for now, we will fill it in later)

Now you have linked your github repository to your Netlify account! However your code will not deploy yet and will still be errors if you try to deploy at this stage.
You will need to still complete some extra configurations in order for this to work.  

### 5. Changing any additional configurations to host the site successfully

Copy the _redirects file into your `AngularApp > src` folder.

Create a new file called `_redirects` which has the following code:

```Bash
/*    /index.html    200
```

Remove /dist from the gitignore file (this way it can be uploaded to github and read when compiling over Netlify)


To build the angular project, run the command: 

```Bash
ng build
```

This will create a dist folder in the root of your application dir. 

distFolderCreated.PNG

Then, we want to push the changes to the github repository.

```Bash
git add .
```

```Bash
git commit -m "Added redirects, updated gitignore and built project"
```

```Bash
git push
```
	
If you go to your remote repo you will see that your dist/{project-name} is now stored:

distFolderInRepo.PNG

Finally, go into the settings of Netlify and fill in the info:

DeploySettings.PNG (or similar)

BuildAndDeploySettings1.PNG

BuildAndDeploySettings2.PNG

Build command: ng build (sometimes ng build --prod)

Output dir: dist/{application name} 

(copy exactly the dist path in the application's directory. For example, in the image above, the path is dist/test-angular-app, so here you would write dist/test-angular-app). 

It should now work!


And if you want to you can modify your url: Domain Management > 
nd fill in the info:


Deploy Settings.PNG

And change it to another domain:

anotherDomain.PNG


And now you can access it with your new domain

final.PNG
	 
### Conclusion


Netlify is easy and free to use since it automatically updates the website as you push changes to your code into your associated Github repository.

Something else things.


<br><br>

</div>