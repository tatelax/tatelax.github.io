---
layout: page
title: XR @ Walmart
---

## 💡 About

At Walmart, we had a constant need to show-off our work to stakeholders.

The problem is that showing Mixed Reality content to others is actually pretty difficult. There's nothing like wearing a headset but that requires traveling to a location, in our case, putting the headset on, and hoping for the best.

To solve this, I created a way for us to professionally capture MR content in 4k @ 60fps.

We created a 3D printed bracket that allowed a Magic Leap 2 to sit on top of a Sony FX3. The Magic Leap anchored to an ArUco marker located near the shooting location and began transmitting telemetry to a laptop that was running the app we wanted to shoot.

The app was running inside the Unity editor which had a custom package installed that would emulate the user. This worked in all of our existing apps without needing any retrofitting. We were able to just drag and drop a prefab into the scene.

Then we were able to use OBS to layer the feed from the Sony FX3 on top of the output from the Unity editor. We also had an output from OBS to the monitor on the camera, allowing the cinematographer to see what he was shooting.

The ability for the cinematographer to see in real-time 4k what he was shooting enabled him to get more creative with the shoot, and understand if he's capturing what he wants in the video.

---

[![walmartxrcapture1](/assets/img/portfolio/walmartxrcapture/1.jpg)](/assets/img/portfolio/walmartxrcapture/1.jpg)

> Pro cinematographer, [Samer Abou-Zaki](https://www.linkedin.com/in/samereye/){:target="\_blank"} utilizing my AR content capture tech for the first time.

[![walmartxrcapture2](/assets/img/portfolio/walmartxrcapture/2.jpg)](/assets/img/portfolio/walmartxrcapture/2.jpg)

> Magic Leap 2 mounted on top of the Sony FX3 with a custom 3D printed bracket.

[![walmartxrcapture3](/assets/img/portfolio/walmartxrcapture/3.jpg)](/assets/img/portfolio/walmartxrcapture/3.jpg)

> Prepping for our in-store shoot.

[![walmartxrcapture4](/assets/img/portfolio/walmartxrcapture/4.jpg)](/assets/img/portfolio/walmartxrcapture/4.jpg)

> I'm recording and monitoring the footage from a laptop nearby.

[![walmartxrcapture5](/assets/img/portfolio/walmartxrcapture/5.jpg)](/assets/img/portfolio/walmartxrcapture/5.jpg)

> The completed setup.

---

I want to note that this video has some AR tracking issues! This is because the Magic Leap 2 was having thermal issues and we did not have time to reshoot, sadly.

However, I wanted to provide it because it does give an idea of what we built is capable of.

Unfortunately, Walmart shut down their research division and everyone got laid off before I could polish this useful tech.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%;">
  <iframe
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    src="https://www.youtube.com/embed/IoptQFnqbAM?si=Wn5PsLrpwj7MZJ3h"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>
