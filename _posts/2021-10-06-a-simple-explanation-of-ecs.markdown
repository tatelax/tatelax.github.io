---
layout: post
category: code
title: A Simple Explanation of ECS
---

## 💡 About
ECS is an architectural pattern commonly used in video games. It stands for entity, component, and system.

I wrote a very simple open source ECS library for Unity that you can use [here](https://github.com/tatelax/LazyECS) to learn more about ECS. It also has a networking addon that automatically synchronized entity data to other players via [Mirror](https://github.com/vis2k/Mirror).

## ❓ Why
ECS provides many advantages over other programming architectures. I'm not going to focus on all of them, but I will compare it to the traditional (game)object + component architecture commonly seen in game engines today.

## ⚙️ How
Let's compare ECS to the GameObject architecture we see in Unity today. A GameObject is a "real" object that exists in the game. Attached to it are components. Typically, we would see that the components contain both the business logic and the data related to the object. This approach is fine for small applications, but it does not scale well because data and usually logic are coupled with what we call *"view"* or the object we see on screen.

**ECS decouples logic, data, and view.**

## 📚 What

An *entity* isn't a GameObject we see moving around in the application. In its most simple form, it's just an array of components.

A *component* is a piece of data. In most cases, just 1 point of data such as the player's health.

A *system* is the logic that manipulates entities and their component values.

## 👨‍💻 Code

Let's take a look at a simple **C#** example. This is a very minimalistic view of ECS. A production ready ECS library will have more code related to optimizations and various checks in place but the principle is the same.

### Entity
```csharp
public class Entity
{
    public IComponent[] components;
}
```

### Component
Notice, there's no logic or external referenced here. Just data.[^1]
```csharp
public struct HealthComponent : IComponent
{
    public float value;
}
```

### System
```csharp
public class HealthSystem
{
    // Every ECS approach handles accessing "all" entities differently
    // For this example, I'm just creating a public field to
    // represent how we access entities
    // In the "real-world" entities are not
    // stored in a system. They are managed by the library
    public Entities allEntities;

    // Can be called whenever you want, such as every
    // frame in Unity's Update() loop
    public void Execute()
    {
        // Loop over all entities
        for(int i = 0; i < entities.Length; i++)
        {
            // Loop over all the components in entities[i]
            for(int j = 0; j < entities[i].components.Length; j++)
            {
                Entity entity = entities[i];
                IComponent component = entity.components[j];

                // This particular system only 
                // cares about HealthComponents
                if(!component is HealthComponent)
                    continue;

                HealthComponent hc = component as HealthComponent;

                // The business logic in this system
                // is to destroy entities when their
                // health component reaches 0
                if(hc.value <= 0)
                {
                    Destroy(entity);
                }
            }
        }
    }
}
```

---

Footnotes

[^1]: Some ECS libraries allow you to add logic to components. Say for example you wanted to clamp the HealthComponent value between 0 and 100.