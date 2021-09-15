---
author: Le Koj
---

<h4> 3 SIMPLE STEPS TO MAKE A GUI APP WORK IN A DOCKER CONTAINER </h4>

Make sure `x11-server` is installed and up-to-date by running:

```
sudo apt-get install x11-xserver-utils
```
{: #gui-app1 .code-container}


Grant full access to the x11-server by running:

```
xhost +
```
{: #gui-app2 .code-container}


Run the docker container with the following flags:

```
-e DISPLAY=unix$DISPLAY -v /tmp/.X11-unix:/tmp/.X11-unix
```
{: #gui-app3 .code-container}

