<!--- ----------------- -->
# Doco Summaries 
<br>

##### Angular • Firebase
<hr>
<br>
<div class="article">
<!--- ----------------- -->

## **About**

<div class="pb-3"></div>

Docosummaries is a place where you can learn about new documentaries, read plot summaries of documentaries, and find links where you could watch the documentaries for free online.

<!-- ----------- Image ----------- --> 
<div class="image-container">
	<img src="./assets/portfolio/images/docosummaries/2.jpg" loading="lazy" alt="image" class="image-75">
</div>
<!-- ----------------------------- -->
  
<div class="pb-3"></div>

* <a class="cyanLink" href="https://github.com/vondreii/docusummaries">View GitHub Repository</a>
* <a class="cyanLink" href="https://docosummaries.com">Visit Doco Summaries</a>
  
<div class="pb-3"></div>

## **Background**

<div class="pb-3"></div>

I am a massive documentary fan and have compiled a list of hundreds of documentaries I have personally watched throughout the years. Some of these documentaries are not very well known and a Google Search doesn't bring up much information. 

<div class="pb-3"></div>

I have compiled my own list of documentaries in one place where I tag them based on their categories and store links to where I have watched them. This was all for hobby purposes. I wanted to learn more about <a class="cyanLink" href="https://angular.io/">Angular</a> so I decided to make this into a mini ongoing pet project.

<div class="pb-3"></div>

## **Design**

<div class="pb-3"></div>

Initially, the design of Docosummeries looked like this:

<!-- ----------- Image ----------- --> 
<div class="image-container">
	<img src="./assets/portfolio/images/docosummaries/1.jpg" loading="lazy" alt="image" class="image-75">
</div>
<!-- ----------------------------- -->

<div class="pb-3"></div>

In the older design:
* There were no Youtube embeds.
* There was no sidebar where you could see the list of all Categories in a sidebar, and expand them to see all tags underneath.
* The colour scheme/theme was not strictly followed.
* Too many clicks. On the path to get to the documentary, there was an empty page that would just list categories, then another empty page that would just list tags (they looked indistinguishable) and it was unintuitive.

<div class="pb-3"></div>

<!-- ----------- Image ----------- --> 
<div class="image-container">
	<img src="./assets/portfolio/images/docosummaries/2.jpg" loading="lazy" alt="image" class="image-75">
</div>
<!-- ----------------------------- -->
  
<div class="pb-3"></div>

The newer design was designed by <a href=" https://www.sorakhan.com/">Sora Khan</a>. He gave me the new designs using Adobe XD, and I changed the website to implement the new design. Now, it has:
* A more dynamic way of searching for documentaries. There is a sidebar that works dynamically and fetches the documentaries the user selects in real time.
* An infinite scroll functionlity for the list that is returned.
* Youtube embeds when you click 'Read More.'
* Much less clicks to get to where you would like.
* Better organisation/clarification between what is a 'Category' and what is a 'Tag'.

<div class="pb-3"></div>

## **Tech Stack**

<div class="pb-3"></div>

* Angular Typescript (including ngx-markdown library)
* Markdown
* Firebase Cloud Firestore
* NodeJS
* Future plans include using APIs to get existing documentaries from established websites but for now the focus is on lesser known documentaries that float around the internet.

<div class="pb-3"></div>

## **What I Learnt or Improved**

<div class="pb-3"></div>

* How to link an Angular website to a Firebase Database 
* Utilising services and Firebase queries to access and retrieve data
* Creating a basic search bar that can search for documentaries based on title, decription, category or keyword
* Database Design 

<div class="pb-3"></div>

<!--- ----------------- -->
</div>