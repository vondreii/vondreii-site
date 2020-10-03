<br>
<div class="writtenContent">

## Hosting An Angular App On Firebase Using A Namecheap Domain
___

###### 03 Oct 2020 by [@Vondreii](https://www.instagram.com/vondreii/?hl=en)
___

If you already have an Angular Project set up, you might want to host it on a domain like http://www.MyWebsite.com. Assuming you already have an Angular project coded up, we will go through step by step how to:
* Creating a project on Firebase (for your app)
* Connect your Angular app to the Firebase Project and host it
* Link a custom namecheap domain name

### Why Firebase?

Firebase is a platform that allows you to not only host your website but to also set up things like a [no-sql realtime updating database](https://firebase.google.com/docs/database). When you start hosting a website on Firebase, you will automatically get a domain name for free which will always end in **domainname.firebaseapp.com** or **domainname.web.app**.

For this tutorial we will assume that:

- You already have a Firebase account
- You already have an Angular project
- You already have a Namecheap account and have bought a domain name.

### Creating a new project on Firebase

Log into your Firebase account and go to the console, and click on add a project.

<!-- ----------- Image ----------- -->
<div class="image-container">
	<img src="../../../assets/articles/web-dev-images/hostingAnAngularAppOnFirebaseUsingANamecheapDomain/firebase-console.PNG" alt="image" class="image-full"/>
	<div class="image-description"><p>Expected result</p></div>
</div>
<!-- ----------------------------- -->

Give a name to your project:

<!-- ----------- Image ----------- -->
<div class="image-container">
	<img src="../../../assets/articles/web-dev-images/hostingAnAngularAppOnFirebaseUsingANamecheapDomain/project-name.PNG" alt="image" class="image-full"/>
	<div class="image-description"><p>Expected result</p></div>
</div>
<!-- ----------------------------- -->

You can choose to enable analytics, which will allow you to see all kinds of statistical data (like user views) on your website:

<!-- ----------- Image ----------- -->
<div class="image-container">
	<img src="../../../assets/articles/web-dev-images/hostingAnAngularAppOnFirebaseUsingANamecheapDomain/analytics.PNG" alt="image" class="image-full"/>
	<div class="image-description"><p>Expected result</p></div>
</div>
<!-- ----------------------------- -->

If you select **yes**, you might have to select a Google Analytics Account. If you already have one, you can select it, otherwise you can use the default one created for your Firebase account.

### Linking your Angular app to the Firebase project

The docs from https://firebase.google.com/docs/hosting/?authuser=1#how_does_it_work, explain what commands you need to run in order to get your local Angular app code connected to Firebase.  

As a summary, you will need to install `firebase npm` first. 

Go to the root folder of your application's source code and open the terminal or command line. To install firebase npm, run the following line:

```bash
npm install -g firebase-tools
```

Wait for it to finish installing. To see if the installation was successful, you can run the command `firebase` to see all the firebase commands and functionality.

After that, you will want to login to your firebase account via your terminal or command line, in order to have access to your projects. 

Run the command:

```bash
firebase login
```

This will open a web browser or prompt that will ask you to sign in to Firebase. Put in your account username and password to authenticate yourself.

Once you've done that, go back to your terminal or command line and run this:

```bash
firebase projects:list
```

If your login was succesfull, running this command will give you a list of all the firebase projects you have in that account. 

<!-- ----------- Image ----------- -->
<div class="image-container">
	<img src="../../../assets/articles/web-dev-images/hostingAnAngularAppOnFirebaseUsingANamecheapDomain/firebase_projects_list.PNG" alt="image" class="image"/>
	<div class="image-description"><p>Expected result</p></div>
</div>
<!-- ----------------------------- -->

This list should correlate with the projects you have listed on your firebase console:

<!-- ----------- Image ----------- -->
<div class="image-container">
	<img src="../../../assets/articles/web-dev-images/hostingAnAngularAppOnFirebaseUsingANamecheapDomain/firebase-console.PNG" alt="image" class="image"/>
	<div class="image-description"><p>Expected result</p></div>
</div>
<!-- ----------------------------- -->


The **blue (current)** directory is the app you are currently in. This is the firebase project we will deploy the application to so we can start hosting it. In this example, it is **khandren-dev**.

If you want to change it and deploy your website on a different firebase app, you can use:

```bash
firebase use <<project id of the project>>
```

After that, you will need to initialize the firebase project in that directory. Run: 

```bash
firebase init
```

You will get some prompts asking you a few questions.

```bash
Are you ready to proceed? // yes
Which Firebase CLI features do you want to set up for this folder? Press Space to select features, then Enter to confirm your choices. 
// Choose the "Hosting: Configure and deploy Firebase Hosting sites"
```

Assuming you have not built your project yet, answer the following questions like this:

```bash
What do you want to use as your public directory? // public (we will change this later)
Configure as a single-page app (rewrite all urls to /index.html)? // No
```

The basic configuration is now set up! Now we will modify a few settings to get it to work.

### Deploying and Hosting your code

Build your project:

```bash
ng build
```

At some point while connecting firebase to your Angular project, a new `firebase.json` file was added. Find it in your Angular project and open it.

<!-- ----------- Image ----------- -->
<div class="image-container">
	<img src="../../../assets/articles/web-dev-images/hostingAnAngularAppOnFirebaseUsingANamecheapDomain/firebase_json.PNG" alt="image" class="image"/>
	<div class="image-description"><p>Expected result</p></div>
</div>
<!-- ----------------------------- -->

This is what it currently looks like:

```js
{
  "hosting": {
    "public": "public", 
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ]
  }
}
```

You want to change the `public` attribute so it reads from the folder that has the build. This will be your `dist/applicationName` folder. 

As an example, the Angular application I am trying to host is called Khandren. So I would change it to `dist/khandren`:

```js
{
  "hosting": {
    "public": "dist/khandren", // change this
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ]
  }
}
```

To find out what you need to write, open your dist folder:

<!-- ----------- Image ----------- -->
<div class="image-container">
	<img src="../../../assets/articles/web-dev-images/hostingAnAngularAppOnFirebaseUsingANamecheapDomain/dist.PNG" alt="image" class="image"/>
	<div class="image-description"><p>Expected result</p></div>
</div>
<!-- ----------------------------- -->

Whatever is inside it, you will use after `dist/`. So that's where we got `dist/khandren` for this example.

<!-- ----------- Image ----------- -->
<div class="image-container">
	<img src="../../../assets/articles/web-dev-images/hostingAnAngularAppOnFirebaseUsingANamecheapDomain/dist-application.PNG" alt="image" class="image"/>
	<div class="image-description"><p>Expected result</p></div>
</div>
<!-- ----------------------------- -->

If you want to first test how the site will look before deploying and hosting, you can run:

```bash
firebase serve
```

You will then have to open a web browser and view it via http://localhost/xxxx.

If you are satisfied with the way it looks you can go ahead and run:

```bash
firebase deploy
```

You can now see which web domain your website is hosting on. As you can see, the default free firebase domain will always end in a 
**domainname.firebaseapp.com** or **domainname.web.app**.

<!-- ----------- Image ----------- -->
<div class="image-container">
	<img src="../../../assets/articles/web-dev-images/hostingAnAngularAppOnFirebaseUsingANamecheapDomain/deployed.PNG" alt="image" class="image-full"/>
	<div class="image-description"><p>Expected result</p></div>
</div>
<!-- ----------------------------- -->


Either way, you can now open any web browser and type in your domain name, you will be able to see your website live and hosted across the web.

If you're happy with the default domain name given, then you are all set with your new hosted website!

Otherwise, if you want to add a custom domain...

### Adding custom domains using Namecheap

Go into your Firebase account and go to the console. Select the project that you deployed your app to. 

<!-- ----------- Image ----------- -->
<div class="image-container">
	<img src="../../../assets/articles/web-dev-images/hostingAnAngularAppOnFirebaseUsingANamecheapDomain/firebase-console.PNG" alt="image" class="image-full"/>
	<div class="image-description"><p>Expected result</p></div>
</div>
<!-- ----------------------------- -->

In the sidebar, click on **Hosting**, then **Add custom domain**. 

<!-- ----------- Image ----------- -->
<div class="image-container">
	<img src="../../../assets/articles/web-dev-images/hostingAnAngularAppOnFirebaseUsingANamecheapDomain/add_custom_domain.PNG" alt="image" class="image-full"/>
	<div class="image-description"><p>Expected result</p></div>
</div>
<!-- ----------------------------- -->

Type in the custom domain you want to add:

<!-- ----------- Image ----------- -->
<div class="image-container">
	<img src="../../../assets/articles/web-dev-images/hostingAnAngularAppOnFirebaseUsingANamecheapDomain/add_custom_domain2.PNG" alt="image" class="image-full"/>
	<div class="image-description"><p>Expected result</p></div>
</div>
<!-- ----------------------------- -->

If you want to redirect it to an existing website, you can add it here too:

<!-- ----------- Image ----------- -->
<div class="image-container">
	<img src="../../../assets/articles/web-dev-images/hostingAnAngularAppOnFirebaseUsingANamecheapDomain/add_custom_domain3.PNG" alt="image" class="image-full"/>
	<div class="image-description"><p>Expected result</p></div>
</div>
<!-- ----------------------------- -->


-------

Then you will get this cuz you'll need to verify your namecheap domain and connect it.

add_txt1.PNG

Go to the domain list of your Namecheap account:

domain_list.PNG

Click on advanced DNS settings:

advancedDNS.PNG

In the dropdown, select TXT Record:

add_txt2.PNG

In the host, type '@'. Then in the Value and copy paste the value from the pop up in Firebase

add_txt3.PNG

Then, add a CName entery with www as the host and your domain name as the value.

add_cName.PNG

Go back to firebase and click **Verify**.

You might get an error the first time and will have to wait for a while or click it a second or third time.

Also, your previous records may have disappeared which is okay.

After that you should get this screen:

recordA1.PNG

Go back to your Namecheap advanced DNS settings.

Add the 'A Record', with the host as '@' and the value as the first IP address (in this case, it's 151.101.1.195).

recordA2.PNG

Add the second 'A Record', also with the host as '@' and the value as the second IP address (in this case, it's Add the 'A Record', with the host as '@' and the value as the first IP address (in this case, it's 151.101.65.195).

recordA3.PNG.

Then press finish.

finish.PNG

If you were to visit your website, it may still not show and 
uou may have to wait up until 24 hours for your website to start showing.

### Resources
* [Firebase - How does it work](https://firebase.google.com/docs/hosting/?authuser=1#how_does_it_work)
* [How to switch apps from the Firebase CLI Stackoverflow question](https://stackoverflow.com/questions/36432458/how-do-i-switch-apps-from-the-firebase-cli)

<br><br>

</div>