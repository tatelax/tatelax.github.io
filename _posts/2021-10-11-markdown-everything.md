---
layout: post
category: code
title: Why You Should Use Markdown Everywhere
---

Markdown is a markup language that allows you to quickly and easily create beautiful documents that are *portable*. In fact, this entire website was made using Markdown and [Jekyll](https://jekyllrb.com/).

It's commonly used today for source code documentation or README files in your git repositories but I recommend taking it a step further than that and using it everywhere you can. Not only in your professional projects, but your personal life as well.

I used to take notes in .txt files, Word documents, Google Docs, or various notetaking apps.

The problem with txt files is the lack of styling.

The problem with Word documents is they need to be stored somewhere and downloaded and often times, a Word document can look completely different if opened in a different version of Word that the original document was made with or even if your recipient opens the document in Word for macOS when the original document was made on Windows.

Google Docs is nice, but it's trapped within your Google Drive which still makes it less usable than Markdown.

## The Best Way to Compose and Read Markdown

[Typora](https://typora.io/) is a great application that allows you to read and write Markdown files with instant previewing of the output. In Typora, you can choose between various themes that can completely change the look and feel of how your Markdown is rendered.

I'd also recommend turning on *Typewriter* mode. This is create for typing because it keeps your active typing line in the center of your screen at all times, instead of going further and further down the page until you're forced to scroll down.

## Portability

One of the main reasons I recommend using Markdown over other formats is due to its ability to be used just about anywhere. If you write all your notes or documentation in Markdown, it can easily be moved to any other host that you wish.

For example, I'm storing my changelog.md in the private git repository of my project, and I'm also using a WordPress plugin to read that file and render it beautifully on my website, without doing any work. Any time we update changelog.md on the prod branch of our repo, the website automatically updates as well, without human intervention and it is formatted automatically to match the theme of our website.

The same markdown file can be rendered in an infinite number of themes.

## Syntax Reference

[Here](https://www.markdownguide.org/basic-syntax/).

## Markdown Samples

Unordered List

* Hello

* World

* Sample Text

  ---

Ordered List

1. Hello

2. World

3. Sample Text

   ---

> This is a quote block.

---

```csharp
// This is an example of a codeblock with syntax highlighting
namespace helloworld
{
    public class ExampleClass
    {
        public void ExampleMethod() 
        {
        	Console.WriteLine("Hello World!");
        }
    }
}
```

