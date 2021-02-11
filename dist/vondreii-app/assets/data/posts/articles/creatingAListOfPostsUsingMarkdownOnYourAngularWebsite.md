<div class="writtenContent">

#### 11 Oct 2020
# Creating a list of posts using Markdown on your Angular Website
___

<!-- ----------- Intro ----------- -->
<div class="avatar-block">
    <img src="./assets/images-main/avatar.jpg" loading="lazy" alt="Avatar" class="avatar avatar-align">
    <h5 class="avatar-text avatar-align"> by Vondreii</h5>
</div>
<br>
<!-- ----------------------------- -->

Let's say you want to write your own personal posts (for something like a blog, for example), and compile them as a list of posts on your homepage. If you want to do this yourself without using existing platforms, a good way is to use Markdown files!

The basic idea is that each post or page with content will have their own file (a markdown file... ending in the extension `.md`). A Markdown file is where you can just write the content as plain English - like you would on Microsoft Word - except you can use symbols to signify headings or special styling in your text. For example:

`# Something` is a main heading, like this:  

# Something 

<br>

`## Something` is a next level sub heading, like this:  

## Something 

<br>

`### Something` is an even lower sub level heading, like this: 

### Something

<br>

`**Something**` Will make something bold, like this: **Something** 

`*Something*` Will make something italicized, like this: *Something* 

`[Something](https://www.google.com)` is a link: [Something](https://www.google.com)

There are a few places where you can read some of the syntax used for markdown:
* https://www.markdownguide.org/basic-syntax/
* https://www.markdownguide.org/cheat-sheet/

### Markdown with Angular

The idea is that each post is written in their own markdown file. All these markdown files will be stored in a folder. We will then display each post using the Angular Framework, which makes up the structure of our web application.

Using Angular we will display a preview on the main page which includes the title and description of the post, and a link to the actual page. For example, this is the Vondreii homepage:

<!-- ----------- Image ----------- -->
<div class="image-container">
    <img src="./assets/data/posts/images/creatingAListOfPostsUsingMarkdownOnYourAngularWebsite/vondreii.PNG" loading="lazy" alt="image" class="image"/>
	<div class="image-description"><p>Vondreii home page</p></div>
</div>
<!-- ----------------------------- -->

And clicking on each link will navigate to it's own page.

This tutorial expands on the one from [Add and View Markdown Files in your Angular App](https://sorakhan.com/blog/post/markdown-in-angular-app). An alterative framework to this kind of post/blog-structure is also to use Hugo, which you can read about [here](https://www.freecodecamp.org/news/your-first-hugo-blog-a-practical-guide/) and [here](/posts/createYourOwnBlogUsingHugo).

Here we are assuming that you already have a simple Angular project set up - for example, the one from [Creating A Simple Angular Web Application](/posts/creatingASimpleAngularWebApplication). You can download the source code of this working simple Angular App from [here](https://github.com/vondreii/angular-netlify).

In this example we're going to work with **Posts**. This could be anything... blog posts, news posts, just any list that would be added to over time.

### 1. Installing Markdown npm

If you haven't already, make sure you run:

```bash
npm install

```

Before we can do this, we need to install the markdown npm which will give us the ability to navigate to, read and display content from the markdown files through Angular.

The configurations are all taken from [Add and View Markdown Files in your Angular App](https://sorakhan.com/blog/post/markdown-in-angular-app), so feel free to follow it there as well.

Run:

```bash
npm install ngx-markdown --save

```

And go into `App.Module.ts`, which is in the `src\app` folder, and make these modifications:

```js

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, SecurityContext } from '@angular/core'; // add securityContext
import { AppRoutingModule } from './app-routing.module';
// ...

// Add both of these:
import { MarkdownModule } from 'ngx-markdown'; // add this
import { HttpClientModule, HttpClient } from '@angular/common/http'; // add this

@NgModule({
  declarations: [
    // ...
  ],
  imports: [
    AppRoutingModule,
    // ...
    HttpClientModule, // add this
    MarkdownModule.forRoot({ loader: HttpClient, sanitize: SecurityContext.NONE }) // add this
  ],
  providers: [],
  bootstrap: [AppComponent]
})

```

### 2. Creating each post as a Markdown file

We are going to store them in the assets folder. Navigate to `src\assets`, and create a new folder. You can call it `posts`.
So, the path to the folder where we will be storing your posts is `src\assets\posts`.

Go ahead and make a few example posts. Here I have made 3 files, where I plan to write separate posts about 3 different cheesecake recipes:

<!-- ----------- Image ----------- -->
<div class="image-container">
    <img src="./assets/data/posts/images/creatingAListOfPostsUsingMarkdownOnYourAngularWebsite/markdownFilesAsPosts.PNG" loading="lazy" alt="image" class="image-full"/>
	<div class="image-description"><p>Create markdown files</p></div>
</div>
<!-- ----------------------------- -->

Go ahead and populate some of these files with the content you would like to post. You can just add something small for now. After all, we want to make sure the actual functionality works first.

This is an example of my Chocolate Recipe Post:

```md
<div class="content">

#### 10 Oct 2020

# Delicious Chocolate Recipe
___

This is how you make an awesome Chocolate Cheesecake:

## Ingredients

#### For the base:
* Biscuits 
* Butter 
 
#### For the cheesecake:
* Some sort of cream
* Cream Cheese
* Something else
* Chocolate syrup?

## Steps
* Crush the biscuits
* Mix biscuits into the butter 
* Let it set in the fridge for 10 minutes
* Mix the cream with the strawberry syrup
* Put it ontop of the base
* Put it in the fridge for 10 hours

</div>
```

Please don't quote this recipe.

You can add some very simple styling in your markdown files so they will look consistent with the home page. I've wrapped all the text inside a `<div class="content">`, which we will add to the CSS later.

### 3. Displaying markdown files on the Home page

You first need a component where you will display these posts. If you are using the finished example from [Creating A Simple Angular Web Application](/posts/creatingASimpleAngularWebApplication), you will already have a `Home` component. Otherwise, you can run:

```js
ng g c home

```

This will create a folder with `home.component.html`, `home.component.css`, `home.component.spec.ts` and `home.component.ts`.

Now, we could hard-code the html to display each of these posts like this:

```css
<div class="content">
    <div class="post">
        <h3>Chocolate Cheesecake Recipe:</h3>
        <p>This is a delicious cheesecake Lorem Ipsum blah blah</p>
        <a routerLink="/posts/post/ChocolateCheesecakeRecipe">Read More >></a>
        <br>
    </div>
    <div class="post">
        <h3>Strawberry Cheesecake Recipe:</h3>
        <p>This is a delicious cheesecake Lorem Ipsum blah blah</p>
        <a routerLink="/posts/post/StrawberryCheesecakeRecipe">Read More >></a>
        <br>
    </div>
    <div class="post">
        <h3>Caramel Cheesecake Recipe:</h3>
        <p>This is a delicious cheesecake Lorem Ipsum blah blah</p>
        <a routerLink="/posts/post/CaramelCheesecakeRecipe">Read More >></a>
        <br>
    </div>
</div>

```

However, we don't want to have to hard-code a new post into the html everytime we add a new one. So we will need to do something where we can store posts in the backend TypeScript file, and the html can just iterate over it.

We can see that for each post, we want to store a **title**, **desciption** and a **link** to the page. These are the common attributes that all posts are going to have.

We are going to make class or 'template' of these common attributes.

In your `\src\app` directory, create a new folder called `models`. Inside this new folder, create a file called `post.ts`.

Copy the following code into your new file in `\src\app\models\post.ts`:

```js
export interface Post{
    title: string;
    description: string;
    link: string;
}

```

Now go into your `home.component.ts`. This is the backend Typescript file, so here we are going to initialize a list of all the posts we are going to display on the homepage.

Modify the file to look like this:

```js
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post'; // Add this

// ...
export class HomeComponent implements OnInit {

  // Add this post array:
  posts: Post[] = [
    { 
      "title": "Chocolate Cheesecake Recipe", 
      "description": "This is the recipe for a delicious chocolate cheesecake...",
      "link": "/posts/post/ChocolateCheesecakeRecipe"
    },
    { 
      "title": "Strawberry Cheesecake Recipe", 
      "description": "This is the recipe for a delicious strawberry cheesecake...",
      "link": "/posts/post/StrawberryCheesecakeRecipe"
    },
    { 
      "title": "Caramel Cheesecake Recipe", 
      "description": "This is the recipe for a delicious caramel cheesecake...",
      "link": "/posts/post/CaramelCheesecakeRecipe"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
```

Here we are creating a post array, and we are storing some details about each post, which will be displayed as a list to the user when they click on the home page.

As you can see, there is a list of posts which has the three entries for the **Chocolate Cheesecake**, **Strawberry Cheesecake** and **Caramel Cheesecake**, separated by curly brackets. If you are adding your own custom posts, feel free to change the details based on what your markdown files are about.

This array is just temporary and just for the purposes of the example. At some point in the future you would want to modify this based on the needs of your website, so it would be better to have them dynamically being stored in a database (for example, Firebase or MongoDB) and it can be displayed dynamically as a list via the backend.

Each post will show the title, description and a  `routerLink`. The `routerLink` is the link/route to the page that will be opened when the user clicks on the link (for example, `/posts/post/ChocolateCheesecakeRecipe` which we will configure later on).

The routerLink is based on the filename of your Markdown file. If you had a markdown file called **MyTripToNewYork.md**, the path to that page will be `/posts/post/MyTripToNewYork`.

Now go into `home.component.html` and add this code: 

```css
<div class="content">
    <div class="post" *ngFor="let post of posts; index as i">
        <h3>{{post.title}}</h3>
        <p>{{post.description}}</p>
        <a routerLink="{{post.link}}">Read More >></a>
    </div>
</div>

```

Our html now will never need to change, even if we were to create more markdown files. We can add as many objects as we want to the `posts` array, and the `<div class="post" *ngFor="let post of posts; index as i">` will automatically loop over every object in that array.

As it loops over every object in the array, it will dynamically display a list of all posts, showing the title, description and the link to the new page. 

We can style it using the `src\styles.css`. Feel free to change the styling later on to fit your own website's theme.

```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

.navbar {
    font-family:'Montserrat', sans-serif;
}

.content {
    padding:20px 350px;
    text-align:left;
    text-decoration:none;
    font-size:17px;
    color:rgb(85, 85, 85);
    border:none;
    font-family:'Montserrat', sans-serif;
    line-height:2rem;
}

/* post list - Medium devices (ipads) #2 */
@media screen and (min-width:767px) and (max-width:1100px) {
    .content {
        padding:30px 120px;line-height:1.8rem;
    }
}
/* post list - Smallest screens (phones) */
@media screen and (max-width:766px) {
    .content {
        padding:30px 30px;line-height:1.9rem;
    }
}

.post p {
    padding: 0;
    font-family:'Montserrat', sans-serif;
}
  
.post {
    padding:20px 0px;
    border-bottom: 1px solid rgb(85, 85, 85);
}  

```

Try running the application now. Run the command:

```bash
ng serve --open

```

You can now preview what your webapp looks like, which should open up in a web browser. 

Click on the Home tab and it should looks something like this:

<!-- ----------- Image ----------- -->
<div class="image-container">
    <img src="./assets/data/posts/images/creatingAListOfPostsUsingMarkdownOnYourAngularWebsite/threePosts.PNG" loading="lazy" alt="image" class="image-full"/>
	<div class="image-description"><p>List of posts on the home page</p></div>
</div>
<!-- ----------------------------- -->

If you try to click on a link, you will notice that they are not functional. Now it's time to add the functionality to open the post when you click on the link.

### 4. Opening each post as a separate page

Now we need to create another page, where we will display the content from any given markdown file. Run the command:

```bash
ng g c home/posts

```

This will create a component called `posts`, which will be inside the `home` component.

There should now be four new files generated inside the new `posts` folder: `posts.component.html`, `posts.component.css`, `posts.component.ts` and `posts.component.spec.ts`.

We are going to display the content of the markdown files in a single div. 

Inside the `posts.component.html` file, copy and paste this code:

```css
<div markdown [src]="post"></div>

```

Now go into `posts.component.ts`.

```js
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // add this

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  post: string; // add this
  href: string; // add this

  constructor(private route: ActivatedRoute) { } // Modify this, to add the ActivatedRoute

  ngOnInit(): void {
    let articleName = this.route.snapshot.paramMap.get('article'); // add this
    this.href = window.location.href; // add this
    this.post = './assets/posts/' +  articleName + '.md'; // add this
  }
}
```

Now we want to create the routes, or paths that we will link to, which will be part of the domain name.
We are basically now setting up the `/posts/post/ChocolateCheesecakeRecipe`, `/posts/post/StrawberryCheesecakeRecipe` and `/posts/post/CaramelCheesecakeRecipe` links that we were using earlier. 

When the user clicks on the link, these paths will determine which page is loaded. This is based on the filename of your Markdown file. Just like what was mentioned earlier: if you add a new markdown file called **ChurrosRecipe**, the path to that page will be `/posts/post/ChurrosRecipe`.

To do this, go into your `app-routing.module.ts` file and make the following modifications:

```js
import { PostsComponent } from './home/posts/posts.component'; // Add this

// ...
const routes: Routes = [
  // ...
  { path: 'posts/post/:article', component: PostsComponent }, // Add this
];
// ...

```

Now you can run `ng serve --open` again to view your web application. If everything worked, it should now look something like this:

<!-- ----------- Video ----------- -->
<div class="image-container">
    <video controls="true" preload="none" allowfullscreen="true" poster="./assets/data/posts/images/creatingAListOfPostsUsingMarkdownOnYourAngularWebsite/threePosts.PNG" class="image-full">
    <source src="./assets/data/posts/images/creatingAListOfPostsUsingMarkdownOnYourAngularWebsite/markdownWorks.mp4" loading="lazy" type="video/mp4">
    </video>
</div>
<!-- ----------------------------- -->

As you can see, all your three pages are displayed on the home page, all linking to their corresponding post.

### 5. Adding more posts

Now to add some more posts, go back to the folder that stores your markdown files:

<!-- ----------- Image ----------- -->
<div class="image-container">
    <img src="./assets/data/posts/images/creatingAListOfPostsUsingMarkdownOnYourAngularWebsite/addedMoreMarkdownFiles.PNG" loading="lazy" alt="image" class="image-75"/>
	<div class="image-description"><p>Add more markdown files</p></div>
</div>
<!-- ----------------------------- -->

As you can see I have added two more files, **ChocolateLavaCake.md** and **ChurrosRecipe.md**.

I will also add some content into these new posts:

```md
<div class="content">

#### 11 Oct 2020

# Chocolate Lava Cake
___

Yum

## Ingredients
* Chocolate
* Lava
* ...

## Steps
* Make the cake, but put the chocolate in the middle so when you open the cake it will melt out

Congratulations! Now you have a Chocolate Lava Cake!

### Resources

List of resources

</div>

```

Now that we have the actual posts, we can add them to the list in the `posts` array, with their details.

Go back to `home.component.ts` and add the details for the new two posts at the end of the `posts` array, so it's like this:

```js
posts: Post[] = [
    // ...
    // previous entries
    // ...
    // Add details for the two new posts at the end:
    { 
      "title": "Chocolate Lava Cake", 
      "description": "This is the recipe for a delicious chocolate lava cake...",
      "link": "/posts/post/ChocolateLavaCake"
    },
    { 
      "title": "Churros Recipe", 
      "description": "This is the recipe for churros...",
      "link": "/posts/post/ChurrosRecipe"
    }
  ];
```

Remember there needs to be a comma between each entry.

Also, don't forget that the links `/posts/post/ChocolateLavaCake` and `/posts/post/ChurrosRecipe` are based on the filename of the markdown file. So if you make a new markdown file called **BlackForestCake.md**, the link for this post would be `/posts/post/BlackForestCake`.

Now open up your application again with `ng serve --open`, you should now see your two extra posts added to the list. Clicking on these posts should take you to their corresponding pages. 

<!-- ----------- Image ----------- -->
<div class="image-container">
    <img src="./assets/data/posts/images/creatingAListOfPostsUsingMarkdownOnYourAngularWebsite/allFivePosts.PNG" loading="lazy" alt="image" class="image-full"/>
	<div class="image-description"><p>All five posts</p></div>
</div>
<!-- ----------------------------- -->

You can view the completed source code for this [here](https://github.com/vondreii/angular-markdown).
Don't forget to run `npm install` if you want to compile and view the web application.

### Important Takeaways:
* You will need to install the `ngx-markdown` npm module.
* Each post is going to be written in it's own markdown file.
* You can create a class for the attributes you will display for each post (title, description, link, etc).
* Use arrays `(like the post array)` or any kind of data structure to store and manage a list of each post in the backend typescript files.
* Iterate over the list in the html. 
* Ideally you wouldn't have all the posts hardcoded into the posts array as shown in this tutorial, especially if you have so many. You can now modify your code to dynamically store the data in a database and print it out through the array (or equivalent).

### Resources

* [Add and View Markdown Files in your Angular App](https://sorakhan.com/blog/post/markdown-in-angular-app)
* [npm ngx-markdown](https://www.npmjs.com/package/ngx-markdown)
* [Add a blog to your Angular website using markdown files](https://medium.com/@david.dalbusco/add-a-blog-to-your-angular-website-using-markdown-files-31cdb0627bdd)

<br><br>

</div>