---
layout: post
category: code
title: How to setup CI/CD on a Unity project
---

## What?

CI/CD stands for Continuous Integration/Continuous Deployment.

**Continuous Integration** is the process of automatically building and testing your program.

**Continuous Deployment** is the process of automatically deploying your program so your users can always get the latest and greatest fixes and improvements.

Doing this with a Unity project can be challenging. In this post, I will provide a way of doing CI/CD that worked well for me. You should consider all options and choose what's best for your use case. There is no *best* option, only what is more appropriate for your project.

## How?

There are many ways of setting up CI/CD. I'm not going to compare and contrast every option, that you will have to do on your own. From my experience, Jenkins worked the best for Unity because it gives you total control over your pipelines. Sometimes, Unity can have *quirks* that requires work arounds which might not be possible in other CI/CD solutions. Jenkins is also free and only requires a host machine to run.

## Setup

### Build Agent

To get started, install Jenkins on your host machine. I used Ubuntu for my installation. There are many guides online for how to install Jenkins that you can find. I'm not going to go into detail here since that is out of the scope of this article.

Once you have Jenkins installed, you'll want to setup your first agent. An agent in Jenkins is the computer that will actually create the build. It can run on the same machine as your host or it can be a separate machine on your network that connects to the host machine.

For my setup, I did everything on 1 physical machine. I installed Jenkins on my Ubuntu host, then within my Ubuntu host I setup virtual machines using VirtualBox for each build agent.

From my experience with Unity, it's seems to work best to match your operating system with the platform you want. If you're building for iOS/macOS, use a macOS build agent. If you're building for Windows use Windows and for Linux use Ubuntu.

*Tip: [Here's a shell script that automatically sets up a macOS VM in just 1 command!](https://github.com/myspaghetti/macos-virtualbox)*

### Agent Configuration

Once you have your agents up and running. You'll want to install a few things on them in order to make and archive builds. 

For this example, I'm going to use a Windows build agent.

1. Install Unity Hub and the correct Unity version for your project.

   > A note on licensing. Running Unity through the CLI, as we're going to do, on any operating system is supposed to require a separate Build Server license and that you as a developer have a Pro subscription. From my experience, when using Unity via CLI, there is a license error thrown on Linux and macOS but not on Windows. This may be a bug that gets patched in the future.

2. Install 7zip. We'll be using 7zip to automatically archive our build artifacts.

### Jenkins Configuration

1. Setup git SSH keys on your build agent.
2. Setup git SSH keys on your Jenkins host.
3. Install Jenkins Git plugin if not already installed.
4. If you're using Bitbucket, which I would recommend for LFS projects, install the Bitbucket Jenkins plugin.
5. Create a Multibranch Pipeline.
6. Add a Git branch source.
7. Set your git ssh url under "Project Repository".
8. Select your ssh credentials from when you added your SSH keys to your Jenkins host.
9. Under "Behaviors" add "Discover Branches" and "Filter by name". Enter the name of the branch you wish to build automatically when you push changes (main, master, prod, etc.).
10. Also under Behaviors, add an "Advanced checkout behavors". You'll probably want to specify a custom timeout for checkout operations if you have a large repo with a lot of files. It defaults to 10 minutes. I set mine to 45 minutes just to be sure.
11. Add a "Git LFS pull after checkout" if you're using Git LFS and optionally, add a "Wipe out Repository and force clone."
12. Moving on to the "Build Configuration" section, select the Mode to "by Jenkinsfile" and under Script Path, enter the location of where you want to store your Jenkinsfile. I will explain what a Jenkinsfile is later. If you're not sure what to enter, just enter main.jenkinsfile
13. For Bitbucket users, under "Scan Multibranch Pipeline Triggers", tick the checkbox for "Build when a change is pushed to BitBucket" and put the http url to your repo including your username. The format should look like *https://username@bitbucket.org/orgname/reponame.git*
14. I also ticked the box for "Periodically if not otherwise run" with the interval at 1 minute. This will automatically scan the repo branch every 60 seconds for changes and build if it finds new commits.
15. That's it for your multibranch pipeline configuration.

### Unity Project Configuration

When Jenkins runs, we're going to tell Unity to execute some code inside your project. This code is part of Unity's build pipeline. This part is also up to you for what steps you want Unity to take when it creates a build. For example, you might want Unity to build your addressable assets before the actual build takes place.

[Unity CLI Arguments](https://docs.unity3d.com/Manual/CommandLineArguments.html)

[Unity Build Pipeline](https://docs.unity3d.com/ScriptReference/BuildPipeline.BuildPlayer.html)

### Jenkinsfile Configuration

A jenkinsfile is the text file where you configure all of the steps that your pipeline should take when it executes. In the section above, we just created a pipeline and told Jenkins when it should run. In this section, we'll be telling Jenkins what it should do when it executes.

**[Download my example Jenkinsfile here](https://gist.github.com/tatelax/02b5973688c039a937ca603fe6d8b642)**

Commit this file to your repository under the branch you specified under Branch Sources in your pipeline. It's name and directory should match what you specified under "Script Path" in Build Configuration of the pipeline.

At this point, you should configure your own Jenkinsfile for the needs of your project. The most important part is line 26 where Unity is actually started through the command line.

My Jenkinsfile consists of editing a version.txt file in my Unity project's StreamingAssets folder to include the commit hash that Jenkins is using for the build. Since my game is multiplayer, the client sends its commit hash in version.txt to the game server to be checked to see if it matches. This ensures that client and server are running the exact same revision of the codebase.

I'm also using 7zip to zip up the archive which gets sent back to the Jenkins host on line 47.

Jenkinsfiles have their own syntax that you can use to do a lot of neat things. [Here's a link to the documentation](https://www.jenkins.io/doc/book/pipeline/syntax/).