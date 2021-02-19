<div class="writtenContent">

#### 22 Aug 2020
# Setting Up A Github Repository and Creating A Local Copy
___

<!-- ----------- Intro ----------- -->
<div class="avatar-block">
    <img src="./assets/images/avatar.jpg" loading="lazy" alt="Avatar" class="avatar avatar-align">
    <h5 class="avatar-text avatar-align"> by Vondreii</h5>
</div>
<br>
<!-- ----------------------------- -->

GitHub is a free version control platform where you can store your code online in **repositories**. A repository is basically just a folder where you can store your project. 
When we create a Github repository, we are creating a place online where we can store our code files for a project remotely (a similar analogy is that we use Google Drive or Dropbox to store a backup of our files remotely).
However, Github offers lots of different features too.

This is a simple tutorial that will help you quickly set up an online remote repository on [Github](https://github.com/), which will be linked to a local folder on your computer.

### 1. Creating a GitHub Account 

If you already have a Github Account, you can skip to step 2. Otherwise, go to [Github](https://github.com/) and navigate to the sign up page to create a new account.

<!-- ----------- Image ----------- -->
<div class="image-container">
    <img src="./assets/blog/images/settingUpASimpleGithubRemoteAndLocalRepository/github-home.PNG" loading="lazy" alt="image" class="image-full"/>
	<div class="image-description"><p>Sign up on Github</p></div>
</div>
<!-- ----------------------------- -->

Follow the prompts in order to create your Github account. You will need to verify the email that you use. Github will send an email to the email address used to create the Github account.

Once verified, you will be taken to another page to complete the sign up process.

<!-- ----------- Image ----------- -->
<div class="image-container">
    <img src="./assets/blog/images/settingUpASimpleGithubRemoteAndLocalRepository/Email-was-verified.PNG" loading="lazy" alt="image" class="image-full"/>
	<div class="image-description"><p>Verified email</p></div>
</div>
<!-- ----------------------------- -->

Once the setup is complete, you will be taken to the main Github dashboard page, which will have nothing in it yet.

<!-- ----------- Image ----------- -->
<div class="image-container">
    <img src="./assets/blog/images/settingUpASimpleGithubRemoteAndLocalRepository/main-github-dashboard.PNG" loading="lazy" alt="image" class="image-full"/>
	<div class="image-description"><p>Github dashboard</p></div>
</div>
<!-- ----------------------------- -->

### 2. Creating a Github repository

Now that you already have an account, you can now create a repository to store your code in.
You can do this by selecting **Start project** on the main page, or **New** on the repository page.

Name your project and change any other configurations, as shown below.

<!-- ----------- Image ----------- -->
<div class="image-container">
    <img src="./assets/blog/images/settingUpASimpleGithubRemoteAndLocalRepository/create-repo-settings.PNG" loading="lazy" alt="image" class="image-full"/>
	<div class="image-description"><p>Repository settings</p></div>
</div>
<!-- ----------------------------- -->

Then select **Create Repository**. You will be taken to the repository page (it is going to look empty, since there is no code stored here yet).

We have now successfully set up the remote repository! 

### 3. Cloning the repository to create a local copy

Now we want to set up a local copy of the repository (that is, a folder stored locally on our own computer, that is linked to this remote repository).

This allows you to be able to work on your project and make changes to it using your own computer.
That is - have a folder on your own computer that stores your application's code. Work on it anytime, and when you are ready, you can **push** the local changes onto the remote repository.

Click on the **Code** link, and make a note of the link under **Clone with HTTPS**.

<!-- ----------- Image ----------- -->
<div class="image-container">
    <img src="./assets/blog/images/settingUpASimpleGithubRemoteAndLocalRepository/clone.PNG" loading="lazy" alt="image" class="image-full"/>
	<div class="image-description"><p>Cloning the repository</p></div>
</div>
<!-- ----------------------------- -->

If you get this page instead, just note the link from the **HTTPS** option.

<!-- ----------- Image ----------- -->
<div class="image-container">
    <img src="./assets/blog/images/settingUpASimpleGithubRemoteAndLocalRepository/clone2.PNG" loading="lazy" alt="image" class="image-full"/>
	<div class="image-description"><p>Cloning the repository</p></div>
</div>
<!-- ----------------------------- -->

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

<!-- ----------- Image ----------- -->
<div class="image-container">
    <img src="./assets/blog/images/settingUpASimpleGithubRemoteAndLocalRepository/git-clone-local.PNG" loading="lazy" alt="image" class="image-full"/>
	<div class="image-description"><p>Run the git clone command</p></div>
</div>
<!-- ----------------------------- -->

This should automatically create a new folder. This new folder is an exact copy/clone of the repository you just made on Github. 
In this example, my repository is called `My-Angular-App-Netlify`, so the new folder that was created in my Desktop was also called `My-Angular-App-Netlify`.

<!-- ----------- Image ----------- -->
<div class="image-container">
    <img src="./assets/blog/images/settingUpASimpleGithubRemoteAndLocalRepository/local-folder-created.PNG" loading="lazy" alt="image" class="image"/>
	<div class="image-description"><p>New folder is created</p></div>
</div>
<!-- ----------------------------- -->

### 4. Save code in your local copy of the repository

You can save your code locally in this folder. Add any number of files into this folder. For example, I have added a very simple HTML file, `index.html`:

<!-- ----------- Image ----------- -->
<div class="image-container">
    <img src="./assets/blog/images/settingUpASimpleGithubRemoteAndLocalRepository/Add-file-to-local-repo.PNG" loading="lazy" alt="image" class="image"/>
	<div class="image-description"><p>Added a simple HTML file</p></div>
</div>
<!-- ----------------------------- -->

`index.html` has the following code:

```CSS
<!DOCTYPE html>
<html lang="en">
	<head>
	  <meta charset="utf-8">
	  <title>Test</title>
	  <base href="/">
	  <meta name="viewport" content="width=device-width, initial-scale=1">
	  <link rel="icon" type="image/x-icon" href="favicon.ico">
	</head>
	<!-- Testing hello -->
	<body>
	  <h1>Hello World!</h1>
	</body>
</html>

```

### 5. Push these local changes to the remote repository

Changes you make to the code in your local folder, or any new files added will not automatically update the remote Github repository. 
You will have to run a few commands in order to save it remotely as well.

Open any command prompt or terminal and navigate to the folder's location. For this example, it would be:

```Bash
cd C:\Users\Sharl\Desktop\my-angular-app-netlify

```

Then add the files you have made changes to.

```Bash
git add index.html

```

Alternatively, you can run the command:

```Bash
git add .

```

And this will add all files you have changed without you having to specify them individually.
 
Now, run the command: 

```Bash
git commit -m "Put here a message - for example - Added an image to the html page"

```

Finally, run the command:

```Bash
git push

```

This will push all the local changes you have to the remote repository. Here is an example of all of those commands being run:

<!-- ----------- Image ----------- -->
<div class="image-container">
    <img src="./assets/blog/images/settingUpASimpleGithubRemoteAndLocalRepository/cmd-commands.PNG" loading="lazy" alt="image" class="image-full"/>
	<div class="image-description"><p>Run commands to store the files on the remote repository</p></div>
</div>
<!-- ----------------------------- -->

Now navigate back to the remote repository on Github, you will now see your new file stored there.

<!-- ----------- Image ----------- -->
<div class="image-container">
    <img src="./assets/blog/images/settingUpASimpleGithubRemoteAndLocalRepository/pushed-code.PNG" loading="lazy" alt="image" class="image-full"/>
	<div class="image-description"><p>Run commands to store the files on the remote repository</p></div>
</div>
<!-- ----------------------------- -->

Now you have a local folder where you can make changes to your code or application, and push it to a remote Github repository! 

Everytime you make changes and you want to store it in the remote repository, you will need to run the `git add`, `git commit` and `git push` commands.
	 
### Resources
* https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners
* https://www.freecodecamp.org/news/the-beginners-guide-to-git-github/

<br><br>

</div>