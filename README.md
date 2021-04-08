# hyperTyper

## Purpose

The purpose of this project was to learn HTML5, CSS3, and JavaScript, as well as gain some experience building a large project on my own - getting out of "tutorial hell" as it's referred to. This project is entirely my creation, and isn't based on tutorial projects.

This game/application is meant to be an alternative to popular online platforms for practicing typing skills, such as typeracer.com, keybr.com, etc. This is not intended to be commercial software, but rather as a resume project to demonstrate my knowledge and skills in the 3 aforementioned languages and my ability to plan, develop, and maintain a large, real world application. I consider this project unique because it addresses some gripes I had with popular platforms that I used when deciding to learn 10 finger touch typing. I took the features I liked from these platforms and made improvements in areas that I felt were lacking. This is the app I use to continually practice my typing speed, accuracy, and consistency.

## What I Learned

* Fundamentals of web development with **HTML5**, **CSS3**, **JS (ES6)**
* Interacting with and consuming an **API**
* How to use **GitHub** as a repository, as well as a platform to host projects
* **Finding, reading, understanding documentation** related to web development
* Improved my **troubleshooting and debugging** skills
* **DOM traversal** and **manipulation** (used extensively throughout the project)
* Basics of **Regex** (Regular Expression), and using it in JS
* **JSON**

## Code and Style Conventions

This project follows certain conventions, which are laid out in the text files within the **docs** folder. This includes the **general-conventions.txt**, **html-conventions.txt**, **css-conventions.txt**, and **js-conventions.txt** files.

## Terminology

This section will explain certain terminology in this project to make it easier to understand the code.

The term **phrase** refers to a randomly generated string that can consists of
random words, letters, numbers, and symbols with spaces between them. These are called **items**. The user selects what lists they want to include, and the phrase is generated with random items from those selected lists.

The term **quote** refers to a literal quote with an author. This project consumes the api.quotable.io API, and falls back to the quotes in **/js/play/expression-resources/quotes.js** if the API cannot be consumed. Quotes in **quotes.js** are stored as objects with a **"text"** key that holds the quote itself as a string, and an **"author"** key which holds the author's name as a string.

The term **expression** refers to the string of text that appears on the page
for the user to type. This expression can be either a randomly generated
**phrase** or a **quote**, which were discussed above. It cannot be a mix of both, they are separate modes of play.

## Compatibility

This project was developed with the following browsers in mind (in descending priority):

**Google Chrome, Safari, Mozilla Firefox, Microsoft Edge, Opera.**

Functionality and compatibility will be optimized for Chrome, because that is by far the most popular browser at the time of writing and development, and it is the browser I use to develop in. However, this project tries to ensure compatibility for the other aforementioned browsers when possible, but this is not a guarantee. For the best experience, Chrome should be used. Internet Explorer is not supported because it lacks many CSS and JS features that this project utilizes.

## Future

This project will likely be expanded and updated in the future. New features may be added and existing ones overhauled. After releasing version 1.0 I am moving on to other projects, but there is a high chance I will come back to this at some point.