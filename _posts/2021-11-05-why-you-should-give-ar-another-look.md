---
layout: post
category: code
title: Why You Should Give AR Another Look
source: https://github.com/tatelax/tatelax.github.io/blob/master/_posts/2021-11-05-why-you-should-give-ar-another-look.md
--- 

*Recently, I released a simple game on the App Store called Tiny Drive. Other developers have asked me how it was done because they did not realize such accurate and realistic AR was possible. This post is for anyone who was like me and had not developed for AR in many years.*

---

If it's been several years since you developed for AR, it may be worth your time to give it a second look. A lot has changed since the days of Vuforia with trackable image targets. I recently spent some time catching up with the world of AR to see what's changed. It has come a very long way, and seems promising.

During my experience working with AR, I've only worked with iOS. From what I've gathered, Apple's ARKit is far ahead of Google's ARCore and Google is just playing catch up. Apple also has a huge upper hand in that their more expensive Pro model iPhones and iPad's have LiDAR. This enables iOS devices to track real-world space far more accurately and gather depth data about the scene, something very helpful in AR.

*Here's some of the major key points in AR's evolution over the last several years.*

## AR Foundation

AR Foundation is the name of the Unity Package that allows you to write code for AR once (some exceptions apply) and build for both ARKit and ARCore at the same time. Before working with any of the below topics in Unity, you'll want to install this package.

[I'd recommend getting started with the AR Foundation Samples repo from Unity.](https://github.com/Unity-Technologies/arfoundation-samples)

## Object Tracking

Object tracking is the ability to recognize an object and track it in 3D space. AR Foundation allows you to train an algorithm to recognize a certain object. Multiple scans allows objects to be recognized faster in different orientations and lighting conditions. From my experience, this worked *ok* but requires tweaking to get it working reliably.

## Object Occlusion

Object occlusion allows you to hide or *occlude* virtual object behind real world objects. For example, if you were to walk behind a wall, the virtual object would be hidden just as it would be if it were real. Here's an example from my game Tiny Drive:

<img src="/assets/img/IMG_4DCDB475C211-1.jpeg" alt="IMG_4DCDB475C211-1" />

## Meshing

Meshing is the ability to use LiDAR data from the device to generate a mesh in Unity. With the mesh, this means you can add a mesh collider so that your virtual objects have the ability to collide with the real world. The AR Foundation package handles all of this for you, it is very simple to implement and can be found in the AR Foundation Samples project at the top of this post.

## Light Estimation

Light estimation allows virtual objects to be illuminated in a way that matches the real world environment. For example, if there is a lamp in the room, the direction of the light in the AR scene will automatically match that of the light sources in the real world. This is very useful in creating realistic AR experiences.

## More

These are only some of the features that I've experimented with. There are many others such as object classification, collaboration (multiplayer), face tracking and more. I would highly recommend checking out the AR Samples project to learn more.

## Why I Think Any of This Matters

In my opinion, holding up our devices to see into the AR world is just a temporary gimmick to allow developers to become more experienced with working in AR. Mixed Reality (MR) will likely replace AR entirely once the hardware is perfected and becomes available for mass market. For the uninitiated, MR is essentially just AR but with a wearable device over your eyes to alter the reality that you percieve.
