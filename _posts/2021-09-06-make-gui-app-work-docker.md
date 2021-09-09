---
author: Le KOj
---

<h4> 3 SIMPLE STEPS TO MAKE A GUI APP WORK IN A DOCKER CONTAINER </h4>

Make sure `x11-server` is installed an up to date by running:

`sudo apt-get install x11-xserver-utils`

Grant full access to the x11-server by running:

`xhost +`

Run the docker container with the following flags `</p>`:

`-e DISPLAY=unix$DISPLAY -v /tmp/.X11-unix:/tmp/.X11-unix`
