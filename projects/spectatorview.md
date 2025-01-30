---
layout: page
title: Spectator View
---

## 💡 About

Spectator View is a tool I created for Walmart to make is fast and easy to see what a user wearing an XR headset is seeing from a 3rd and 1st person perspective. This tool also make it possible to interact with the app the user was running to help guide them press buttons, change settings, or use a virtual laser pointer to direct their attention.

## ❗ Problem

1. Situation: You want a stakeholder or product tester to try an XR app.
2. Confusion: They get stuck or don't know what to do.
3. Result: Negative product experience.

[![spectatorview1](/assets/img/portfolio/spectatorview/1.png)](/assets/img/portfolio/spectatorview/1.png)

## 📖 Context

Many times, we wanted to show off prototypes or MVPs that were still in the process of undergoing UX refinement. Also, we often needed to demonstrate to a group of people in a room what a headset wearer was seeing. With this tool, we were able to show a room of people what a user was doing by letting them hold the iPad, or by using Screen Mirroring on the iPad to stream what the user was seeing via Zoom.

[![spectatorview2](/assets/img/portfolio/spectatorview/2.png)](/assets/img/portfolio/spectatorview/2.png)

## 👀 Dual Perspectives

Spectator View supports both 3rd and 1st person. This means we can see exactly what a user is seeing from their perspective, or we can switch to 3rd person and have a look around the scene. For example, some products required the user to interact with elements that were behind them. With 3rd person, we could look around the world and find elements that the user hadn't found yet. Also, with the laser pointer feature we can point exactly at a particular element we want the user to look at.

[![spectatorview3](/assets/img/portfolio/spectatorview/3.png)](/assets/img/portfolio/spectatorview/3.png)

## How it Works

[![spectatorview5](/assets/img/portfolio/spectatorview/5.png)](/assets/img/portfolio/spectatorview/5.png)

> For 1st person view, we stream the RGB camera on the headset and the virtual camera running in the XR app over to an iPad which combines the streams in real-time and outputs it to the iPad user.

[![spectatorview6](/assets/img/portfolio/spectatorview/6.png)](/assets/img/portfolio/spectatorview/6.png)

> For 3rd person view, we do the same thing, but with a 2nd camera inside the XR app that is aligned with the position of the iPad via an ArUco.

---

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%;">
  <iframe
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    src="https://www.youtube.com/embed/mNKAoGwfXGs?si=fKlmERuXFIYoIsFV"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>

> Here's a demonstration video showcasing Spectator View being used in our test lab in Redmond, WA.
