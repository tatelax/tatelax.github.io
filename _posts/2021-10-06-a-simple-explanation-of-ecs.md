---
layout: post
category: code
title: A Simple Explanation of ECS
date-updated: 10-13-2021
source: https://github.com/tatelax/tatelax.github.io/blob/master/_posts/2021-10-06-a-simple-explanation-of-ecs.md
---

## 💡 About
ECS is an architectural pattern commonly used in video games. It stands for entity, component, and system.

I wrote a very simple open source ECS library for Unity that you can use [here](https://github.com/tatelax/LazyECS) to learn more about ECS. It also has a networking addon that automatically synchronized entity data to other players via [Mirror](https://github.com/vis2k/Mirror).

---

*Note - ECS can be implemented in a variety of ways. My goal isn't to show the most optimal way but rather the simplest way so that you can get a better understanding of how the paradigm works.*

For a very in-depth overview of ECS, see [here.](https://skypjack.github.io/2019-02-14-ecs-baf-part-1/)

## ❓ Why
ECS provides many advantages over other programming architectures. I'm not going to focus on all of them, but I will compare it to the traditional (game)object + component architecture commonly seen in game engines today.

## ⚙️ How
Let's compare ECS to the GameObject architecture we see in Unity today. A GameObject is a "real" object that exists in the game. Attached to it are components. Typically, we would see that the components contain both the business logic and the data related to the object. This approach is fine for small applications, but it does not scale well because data and usually logic are coupled with what we call *"view"* or the object we see on screen.

**ECS decouples logic, data, and view.**

## 📚 What

**Entity**
: Entities aren't GameObjects we see moving around in the application. In its most simple form, it's just an array of components in a class. You can't see entities, but they might have a component which points to a GameObject that you can see.

**Component**
: Components are just data, like a field in a class. In most cases, just 1 point of data such as the player's health.

**System**
: Systems are the logic that manipulates entities and their component values.

## 👨‍💻 Code

Let's take a look at a simple **C#** example. This is a very minimalistic view of ECS. A production ready ECS library will have more code related to optimizations and various checks in place but the principle is the same.

### Entity

```csharp
public class Entity : IEntity
{
    public IComponent[] components;
}
```

### Component
Notice, there's no logic or external referenced here. Just data.[^1]

```csharp
public class HealthComponent : IComponent
{
    public float value;
}
```

### System

```csharp
public class HealthSystem : ISystem
{
    // Every ECS approach handles accessing entities differently
    // For this example, I'm just creating a public field to
    // represent how we access entities
    // In the "real-world" entities are not
    // stored in a system. They are managed by the library
    public Entity[] entities;

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