---
author: Le KOj
---

<h4> 3 SIMPLE STEPS TO MAKE A GUI APP WORK IN A DOCKER CONTAINER </h4>

Make sure `x11-server` is installed and up-to-date by running:

`sudo apt-get install x11-xserver-utils`{: #gui-app1}
<button class="btn code-btn" data-clipboard-target='#gui-app1'>
    <img class="clippy" src="/assets/clippy.svg" alt="copy to clipboard">
</button>

Grant full access to the x11-server by running:

`xhost +`{: #gui-app2}
<button class="btn code-btn" data-clipboard-target='#gui-app2'>
    <img class="clippy" src="/assets/clippy.svg" alt="copy to clipboard">
</button>

Run the docker container with the following flags:

`-e DISPLAY=unix$DISPLAY -v /tmp/.X11-unix:/tmp/.X11-unix`{: #gui-app3}
<button class="btn code-btn" data-clipboard-target='#gui-app3'>
    <img class="clippy" src="/assets/clippy.svg" alt="copy to clipboard">
</button>
