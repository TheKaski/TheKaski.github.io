+++
title = 'Portfolio website using HUGO framework with github pages'
date = "2024-07-19T14:04:20+03:00"
draft = false
summaryText = "In this project I created my first portfolio page from scratch using HUGO framework. If you are reading this there is a high chance you are viewing this page right now. If you want to know more about this project you can read the full article"
+++

# Introduction

I wanted to create a portfolio page with the following features.

1. Interactive
2. Easy to update and maintain
3. Easy to host, prefferably for free
4. No need to compile or download anything to view
5. High level of customization

# Why I chose HUGO?

Hugo generates a static website which can be hosted through GitHub pages for free, perfect for personal portfolio. It is very light, fast and customizable and often used for writing documentation so I figured it could be usefull to learn.

Hugo features a simple content publishing system through markdown which makes updating it relatively easy once you have configured your theme properly. I already use markdown when working with my notes or GitHub README files so I figured this would suit my needs well.

[If you want to know more about HUGO, check out their website](https://gohugo.io/)

# The tutorial part

When setting up my personal portfolio page I had to consider at least the following three things.

1. How to serve your site to customers or future employers?
2. How to keep the page relevant and updated for long periods of time?
3. How to achieve high customizability while still keepping in mind the points 1 & 2

## Serving the site:

For the first part of this puzzle I figured I would have to create the page in web format and host it publicly inorder to make it easily accessible by anyone. I did not want anyone to have to manually clone a repo, install dependencies and compile a project themselves when I could have the option to serve the site for them. Also I could imagine recruitters having hundreds of job applications on their desks, the last thing they are gonna be doing is compiling everyones portfolio pages. So host it but where? The options basically were the following and at this point it might be obvious which one I chose to go with:

1. Host from home with dedicated home server
2. Buy a hosting subscription and a domain name
3. Use github pages for free with your github account

## Choosing the best framework for the use case

The next part was to figure out a way to keep the page relevant and usable in the future. Many of the pages with fancy frameworks like React or 3D libraries like Three.js allow you to create cool 3D animated portfolio pages with intuitive user experiences. However that also takes a lot of time and can be really difficult and even tedious to scale as number of side projects grows. Or the portfolio page itself becomes the only project it is showcasing as it is itself almost too difficult to maintain and create for the use case. I decided to save the time for experimenting with side projects.

I wanted to create something simpler, something where I could create a custom theme and template for my page and after finishing a side project write an update in plain text and move on to next one. I wanted to be a user of my own portfolio page and this is when I came accross HUGO. Hugo ticked every box I needed and I decided to create my portfolio page in the form of a diy blog platform.

## Make it your own

HUGO supports various community developped themes ready to be installed with a few clicks. Using a pre built theme gives you a good looking static website quite easily and ticks two out of three boxes from my requirements. However I wanted to create my own theme completely from scratch as a possibility to learn Hugo and maintain high level of customization.
