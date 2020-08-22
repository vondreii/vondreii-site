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

For this tutorial, it is assumed that you already have a working Angular App ready to host. If you don't, you can follow the steps on [this page](/blog/post/creatingASimpleAngularWebApplication) to make one.
Otherwise, you can download the source code of a working simple Angular App from [here](https://github.com/vondreii/Example-Angular-Project-Tutorial).


### GitHub with Netlify

Netlify is a free hosting platform where you can host your website live using a customisable domain name provided with a .app extension at the end. 
In this tutorial we will go through how to host an Angular web application using Netlify in 5 steps:

* Creating a Github account
* Creating a Github repository and adding your application's code
* Creating a Netlify account 
* Linking Netlify to your Github repository
* Changing any additional configurations to host the website successfully

### Using GitHub

First, you need a Github repository. A repository is basically just a folder where you can store your project. 
When we create a Github repository, we are creating a place online where we can store our code files for the website remotely (in a similar way where you would use Google Drive or Dropbox to store a backup of your files remotely).

### 1. Creating a GitHub Account 

If you already have a Github Account, you can skip to step 2. Otherwise, go to [Github](https://github.com/) and navigate to the sign up page to create a new account.

<div class="blog-image-container">
    <img src="../../../assets/blog/hosting-angular-application-using-netlify/github-home.PNG" alt="image" class="blog-image-full"/>
	<div class="content-photo-credit"><p>Sign up on Github</p></div>
</div>

Follow the prompts in order to create your Github account. 
 
<div class="blog-image-container">
    <img src="../../../assets/blog/hosting-angular-application-using-netlify/verifyAccount.PNG" alt="image" class="blog-image-full"/>
	<div class="content-photo-credit"><p>Verify that you are not a robot</p></div>
</div>

You will also have to verify the email that you use. Github will send an email to the email address used to create the Github account.
Once verified, you will be taken to another page to complete the sign up process.

<div class="blog-image-container">
    <img src="../../../assets/blog/hosting-angular-application-using-netlify/Email-was-verified.PNG" alt="image" class="blog-image-full"/>
	<div class="content-photo-credit"><p>Verified email</p></div>
</div>

Once the setup is complete, you will be taken to the main Github dashboard page, which will have nothing in it yet.

<div class="blog-image-container">
    <img src="../../../assets/blog/hosting-angular-application-using-netlify/main-github-dashboard.PNG" alt="image" class="blog-image-full"/>
	<div class="content-photo-credit"><p>Github dashboard</p></div>
</div>

### 2. Creating a Github repository and adding your application's code

Now that you already have an account, you can now create a repository to store your code in.
You can do this by selecting **Start project** on the main page, or **New** on the repository page.

<div class="blog-image-container">
    <img src="../../../assets/blog/hosting-angular-application-using-netlify/create-repo.PNG" alt="image" class="blog-image-full"/>
	<div class="content-photo-credit"><p>Create repository</p></div>
</div>
<div class="blog-image-container">
    <img src="../../../assets/blog/hosting-angular-application-using-netlify/create-repo-2.PNG" alt="image" class="blog-image-full"/>
	<div class="content-photo-credit"><p>Create repository</p></div>
</div>

Name your project and change any other configurations, as shown below.

<div class="blog-image-container">
    <img src="../../../assets/blog/hosting-angular-application-using-netlify/create-repo-settings.PNG" alt="image" class="blog-image-full"/>
	<div class="content-photo-credit"><p>Repository settings</p></div>
</div>

Then select **Create Repository**. You will be taken to the repository page (it is going to look empty, since there is no code stored here yet).

We have now successfully set up a remote repository! Now we want to set up a local copy of the repository (that is, a folder stored locally on our own computer, that is linked to this remote repository).


Click on the **Code** link, and make a note of the link under **Clone with HTTPS**.

<div class="blog-image-container">
    <img src="../../../assets/blog/hosting-angular-application-using-netlify/clone.PNG" alt="image" class="blog-image-full"/>
	<div class="content-photo-credit"><p>Repository settings</p></div>
</div>

We will now create a folder, locally on your computer where you will store a local version of the repository.
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

This should automatically create a new folder. This new folder is an exact copy/clone of the repository you just made on Github. 
In this example, my repository is called `My-Angular-App-Netlify`, so the new folder that was created in my Desktop was also called `My-Angular-App-Netlify`.
You can save your code locally in this folder.


// ToDo: Screenshots of creating a repository
// ToDo: Screenshots of cloning the repo to the desktop

This will create a folder... blah

You can add your code to this folder. If you downloaded the sample code from [here](https://github.com/vondreii/Example-Angular-Project-Tutorial), it would look like this:

// ToDo: Screenshots of the source code root folder and how to copy it into the github repo properly.

// ToDo: Screenshots of committing and pushing the code
// ToDo: Screenshots of what the GitHub repository looks like on the GitHub repo page once it's pushed


### 3. Creating a Netlify Account 
	
Now that we have a Github repository storing the code online, we can create a Netlify Account. This will be used to host the actual website.

// ToDo: Screenshots of creating a Netlify Account

### 4. Linking a Netlify Project to your Github repository

Once way that Netlify hosts your website is by connecting to a Github repository that stores the code of your website (this is what we created earlier)! We already have a Github repository that stores your website's code. 
All we have to do now is link that Github repository with Netlify, so Netlify will be able to host it.
That way your website can display using a domain like http://angular-project.web-app.com.

// ToDo: Screenshots of creating a project
// ToDo: Screenshots of logging into the Github account through Netlify, etc.
	
### 5. Changing any additional configurations to host the site successfully
	
// ToDo: Address any possible errors that may happen.
	
// ToDo: Screenshots of things.
	 
### Conclusion


Netlify is easy and free to use since it automatically updates the website as you push changes to your code into your associated Github repository.

Something else things.


<br><br>

</div>