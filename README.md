Evaluation CCP1 DWWM Projet Forum de discussion

- [Introduction](#introduction)
- [Aim](#aim)
- [Language used](#language-used)
- [Figma](#figma)
- [Repo](#repo)
  - [Index](#index)
  - [Register form](#register-form)
  - [Login page](#login-page)
  - [Welcome page](#welcome-page)
  - [Category](#category)
  - [Topic page](#topic-page)


#  Introduction
Hi everyone, here's my project for a discussion forum about Airsoft. Airsoft is a role-playing hobby. Players dress like army soldiers and use firearm replica which use little plastic bullets of 6mm diameter. Airsoft's game are very similar to Paintball game : two or more team has to complete objectives to win the game. Most of them are played on Sunday, each event can last all day. The game is based on fair-play and having fun.

# Aim
The goal of this discussion forum is to have a website to discuss about this hobby, to talk about incomming events, and to have a market place.

# Language used
The language used for this website is :
 - HTML
 - CSS
 - Javascript
 - Bootstrap framework

# Figma

Here's the [Figma's link](https://www.figma.com/file/iCkI0YaRPMRXaTaldxz31C/Untitled?type=design&node-id=0%3A1&mode=design&t=dcf2ROrfQb8LPvEz-1)

# Repo

To download this repo, copy [repo's code](https://github.com/juliensrvng/evalCCP1.git) and clone it on Visual Studio code with the terminal command :
"git clone https://github.com/juliensrvng/evalCCP1.git"

## Index

On this website, you'll be able to register or login to the Welcome page.

## Register form

The register page is a form where you have to put your name, first name, username (which will be use in the forum), your e-mail address, and your password. Name and first name can't be shorter than 3 characters and no digit. The username is free to use but can't be already used by another user. E-mail address must be valid and not already used by another user. Password must contain at least 8 characters including : one uppercase letter, one lowercase letter, a number and one of these special character : "#+-^[]". There's a show/hide password button to see your input.

## Login page

The login page will gives you access to the welcome page with your e-mail address and password you used at the register page. If you're already logged in, the page will redirect you to the Welcome page.

## Welcome page

On the welcome page :
You'll find a header with a welcome message, the date of the day, and the time you last logged in. The Welcome page gives you possibilities to navigate through 3 categogries and to logout.

## Category

On each category, you'll be able to start a new topic or answer to an already existing topic.

When you click "add a topic", a new table row will be created thanks to a JavaScript function, in which many table data will also follow.

The new table row createad will only show the topic subject, if you want to know more about it, you can click on the topic to show the topic message. A button will give you access to the topic page. You'll also be able to delete a previous topic.

## Topic page

On the topic page, you'll be able to answer to the topic. You'll also be able to delete your answer.

## More info

Log out : if you log out, you won't be able to navigate through pages with even if you have the url to other pages. Each page where you have to be logged in will check if you are logged in or not. If not, the page will redirect you to the index (where you can either register or log in).