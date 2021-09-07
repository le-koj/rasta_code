---
author: Le KOj
---

<h4> 3 SIMPLE STEPS TO MAKE A GUI APP WORK IN A DOCKER CONTAINER </h4>

Make sure x11-server is installed an up to date by running:

<p class="scripts"> sudo apt-get install x11-xserver-utils </p>

Grant full access to the x11-server by running:

<p class="scripts"> xhost + </p>

Run the docker container with the following flags </p>:

<p class="scripts"> -e DISPLAY=unix$DISPLAY -v /tmp/.X11-unix:/tmp/.X11-unix </p>
