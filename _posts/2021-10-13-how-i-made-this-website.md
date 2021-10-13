---
layout: post
category: code
title: How I Made This Website
source: https://github.com/tatelax/tatelax.github.io/blob/master/_posts/2021-10-13-how-i-made-this-website.md
---

This website was built using GitHub pages and Jekyll.

[GitHub Pages](https://pages.github.com/)  are a way of creating a free website from a GitHub repository.

[Jekyll](https://jekyllrb.com/) is basically a code generator that generates your website's code from Markdown (and HTML/CSS) files.

GitHub has a direct relationship with Jekyll. When you use Jekyll for your GitHub Page, GitHub will automatically run Jekyll on their end to produce the code for your website whenever you push changes.

You can read more about Markdown on my post [here](https://tate.sh/code/2021/10/11/markdown-everything.html).

## Why

GitHub pages is free and reliable. Compare this to setting up a webserver on S3 or DO and you're setting yourself up for occasional maintenance or failures. Your GitHub page is just a git repository with a web view that GitHub hosts. Jekyll makes it easy to do more advanced things than pure HTML/CSS like blog posts.

## How

[Here's the full instructions for how to use Jekyll and GitHub Pages](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll).

You'll run Jekyll locally on your machine when you develop your site. It acts as a localhost web server that automatically refreshes when you make changes to the code.

I used VS Code as my IDE. [Here's a Jekyll plugin you can use.](https://marketplace.visualstudio.com/items?itemName=Dedsec727.jekyll-run)

When you make a change, just commit and push to your repo as you would normally and GitHub will automatically refresh your site within about 30 seconds.

## Limitations

This only works for those interested in *static* websites. Meaning, no dynamic content that requires a REST API, Database, or other ways of accessing dynamic content. If you just want to toss up some HTML/CSS to the world, this is perfect for that.

## Themes

[Here's](https://jekyllthemes.io/) a link to a website were you can find themes. [This](https://riggraz.dev/no-style-please/) is the theme I started with for my website which I heavily modified to my liking.