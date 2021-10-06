---
layout: post
category: code
title: A Simple Explanation of ECS
---

## 💡 About
ECS is an architectural pattern commonly used in video games. It stands for entity, component, and system. 

## ❓ Why
ECS provides many advantages over other programming architectures. I'm not going to focus on all of them, but I will compare it to the traditional (game)object + component architecture commonly seen in game engines today.

## ⚙️ How
Let's compare ECS to the GameObject architecture we see in Unity today. A GameObject is a "real" object that exists in the game. Attached to it are components. Typically, we would see that the components contain both the business logic and the data related to the object. This approach is fine for small applications, but it does not scale well because data and usually logic are coupled with what we call "view" or the object we see on screen.

**ECS decouples logic, data, and view.**

## 📚 What

An *entity* isn't a GameObject we see moving around in the application. In its most simple form, it's just an array of components.

A *component* is a piece of data. In most cases, just 1 point of data such as the player's health.

A *system* is just some logic that manipulates entities and their component values.

```csharp
public class HelloWorld {
    public void Hello() {
        Console.WriteLine("Hello World!");
    }
}
```