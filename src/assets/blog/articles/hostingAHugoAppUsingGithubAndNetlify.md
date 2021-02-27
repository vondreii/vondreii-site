#### 4 Jan 2021
# Hosting a Hugo App Using Github and Netlify
___

<!-- ----------- Intro ----------- -->
<div class="avatar-block">
    <img src="./assets/images/avatar.jpg" loading="lazy" alt="Avatar" class="avatar avatar-align">
    <h5 class="avatar-text avatar-align"> by Vondreii</h5>
</div>
<br>
<!-- ----------------------------- -->

### Prerequisites
You will need:
- A Hugo App ready to host.
- A Github Account set up.
- A repository on your GitHub account where you store your Hugo project.

If you don't have a Hugo App, you can download the source code of a working simple Hugo App from [here](https://github.com/vondreii/hugo-framework).

### Hugo Framework hosted using Netlify
Netlify is a free hosting platform where you can host your website live for free. One way it can do this is by linking to an existing Github repository and hosting your code stored there. If you have a Hugo App stored on a repository, you can use Netlify to host it. All you have to do is buy your own custom domain name and link it to Netlify. Otherwise, Netlify will give you a default extension with a .netlify.app at the end of your website name.

### 1. Creating a Netlify Account 

Go to Netlify's [home page](https://www.netlify.com/) and click on Sign up.

You will be given a few different options to choose from of where you want to link Netlify to. Since we are going to be using Gihub, select Github.

<!-- ----------- Image ----------- -->
<div class="image-container">
    <img src="./assets/blog/images/hostingAHugoAppUsingGithubAndNetlify/1.jpg" loading="lazy" alt="image" class="image-full"/>
	<div class="image-description"><p>Sign up to Netlify using GitHub</p></div>
</div>
<!-- ----------------------------- -->

You will be asked to sign in to your Github account using your username and password. Once You select **Sign in**, you will be asked to Authorize Netlify.

Select **Authorize netlify.**

Now you have your Netlify account setup! You should be able to see your main dashboard and a quick start guide pop-up. You can either read through or exit the quick start guide.

### 2. Linking a Netlify Project to your Github repository

Once way that Netlify hosts your website is by connecting to a Github repository that stores the code of your website. All we have to do for this step is to link Netlify with your Github repository.

Select **New Site From Git:**

<!-- ----------- Image ----------- -->
<div class="image-container">
    <img src="./assets/blog/images/hostingAHugoAppUsingGithubAndNetlify/2.jpg" loading="lazy" alt="image" class="image-full"/>
	<div class="image-description"><p>Select New site from Git</p></div>
</div>
<!-- ----------------------------- -->

On the next page, under **Continuous Deployment**, select **Github**.

Following that, you will be asked to grant permission to Netlify. Select **Authorize Netlify**.

You will then be asked to install Netlify. Here, you are not installing anything on your local computer. You are 'installing' or connecting your Netlify account to be associated with your Github account.

<!-- ----------- Image ----------- -->
<div class="image-container">
    <img src="./assets/blog/images/hostingAHugoAppUsingGithubAndNetlify/3.jpg" loading="lazy" alt="image" class="image-full"/>
	<div class="image-description"><p>Select repositories you will allow Netlify access to</p></div>
</div>
<!-- ----------------------------- -->

You can either choose:
* **All repositories:** Netlify will have access to all repositories that you will have on your account. 
* **Select repositories:** You are only giving Netlify permission to certain repositories of your choice.

In this case, it does not really matter which option you choose as the end result will be the same. 

You can just select the hugo repository to only give Netlify access to this one repository for now, and change it later.  

Select **Install**.

Now select the repository that you want to host (in this case, the repository where your Hugo code is stored).

<!-- ----------- Image ----------- -->
<div class="image-container">
    <img src="./assets/blog/images/hostingAHugoAppUsingGithubAndNetlify/4.jpg" loading="lazy" alt="image" class="image-75"/>
	<div class="image-description"><p>Select the repository you want to host</p></div>
</div>
<!-- ----------------------------- -->

Now you will be presented with a page asking for some information about the deployment of the website:

<!-- ----------- Image ----------- -->
<div class="image-container">
    <img src="./assets/blog/images/hostingAHugoAppUsingGithubAndNetlify/5.jpg" loading="lazy" alt="image" class="image-75"/>
	<div class="image-description"><p>Fill in basic details</p></div>
</div>
<!-- ----------------------------- -->

Keep the **Owner** and **Branch to deploy** fields at the default value (unless you specifically need to change them).

For Basic the Build Setting fields:

**Build command:** Type in `hugo`.

**Publish directory:** Type in `public`.

Finally select **Deploy site.**

Now you have linked your github repository to your Netlify account! You will be redirected to a page that you can use to manage or control your site's deployment settings. 

<!-- ----------- Image ----------- -->
<div class="image-container">
    <img src="./assets/blog/images/hostingAHugoAppUsingGithubAndNetlify/6.jpg" loading="lazy" alt="image" class="image-full"/>
	<div class="image-description"><p>Site deployed</p></div>
</div>
<!-- ----------------------------- -->

Netlify will automatically attempt to build the code. In a few minutes, the code should be hosted and running at a default domain name that was automatically assigned to you. For example, the one above: https://lucid-torvalds-911eb6.netlify.app.

### Change your Domain Name
No one wants a domain name like https://lucid-torvalds-911eb6.netlify.app.

Click on **Site Settings**.

In the side bar, click on **Domain Management**.

Here you have two options:

1. You can click on **Options** to change the name of your site from lucid-torvalds-911eb6 to something more readable. However with this you still must keep the `.netlify.app` extension.
2. **Add custom domain** allows you to link a domain that you already bought. 

<!-- ----------- Image ----------- -->
<div class="image-container">
    <img src="./assets/blog/images/hostingAHugoAppUsingGithubAndNetlify/7.PNG" loading="lazy" alt="image" class="image-75"/>
	<div class="image-description"><p>Change domain name</p></div>
</div>
<!-- ----------------------------- -->

If you choose to add your custom domain name, you will then have to verify it and follow the prompt to add your hosting details.

### Resources
* https://www.freecodecamp.org/news/your-first-hugo-blog-a-practical-guide/
* https://gohugo.io/getting-started/installing/