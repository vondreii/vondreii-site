Assuming you already have an Angular project and a firebase account, and you now want to deploy your Angular site onto firebase.

- You already have a Firebase account
- You already have an Angular project
- You already have a Namecheap account and have bought a domain name.

Follow the docs from https://firebase.google.com/docs/hosting/?authuser=1#how_does_it_work

As a summary:

To install firebase npm:

'
npm install -g firebase-tools
'

Run the command

'
firebase
'

to see all the firebase commands and functionality.

Then 
'
firebase login
'

which should take you to a webpage to login using your Google firebase account

'
firebase projects:list
'

will give you a list of all the firebase projects you have in that account.

firebase_projects_list.PNG

The blue (current) directory is the app you are currently in.

If you want to change it and deploy your website on a different firebase app, you can use:

'
firebase use <project_id>
'

----------------------------
After that, go 
'
firebase init
'

to initialize the firebase project in that directory. 

'
Are you ready to proceed? Yes
Which Firebase CLI features do you want to set up for this folder? Press Space to select features, then Enter to confirm your choices. 

// Choose the "Hosting: Configure and deploy Firebase Hosting sites"
'

Assuming you have not built your project yet, at the following questions:

'
What do you want to use as your public directory? public
Configure as a single-page app (rewrite all urls to /index.html)? No
'

Then you want to go 'ng build'

Go into firebase.json

firebase_json.PNG

This is what it currently looks like:

'
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
'

You want to change the public so it reads from the folder that has the build.

You want to change the public attribute from 'public' to your 'dist/applicationName' folder. You will have another folder inside your dist folder that is named based on your application.

As an example, in this case, it would be:

'
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
'

You can run the command 'firebase serve' to test the website locally (and view it via http://localhost).

If you are satisfied with the way it looks you can go ahead and run 'firebase deploy'.

deployed.PNG

You can now see which web domain your website is hosting on. 

Go and visit them.

As you can see, the default free firebase domain will always end in a 
domainname.firebaseapp.com or domainname.web.app.

Continue on to add custom domains to Firebase via NameCheap.

---------
In Firebase, click Add custom domain 

add_custom_domain.PNG

Type in the custom domain you want to add

add_custom_domain2.PNG

If you want to redirect it to an existing website, you can add it here too

add_custom_domain3.PNG

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

Resources

https://firebase.google.com/docs/hosting/?authuser=1#how_does_it_work
https://stackoverflow.com/questions/36432458/how-do-i-switch-apps-from-the-firebase-cli
firebase.google.com/docs/hosting/?authuser=1#how_does_it_work