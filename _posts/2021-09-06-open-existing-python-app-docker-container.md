---
author: Le KOj
---

<h4>4 SIMPLE COMMAND TO OPEN AN EXISTING PYTHON APP IN A DOCKER CONTAINER</h4>

In terminal, cd into the root folder of the python application.
Run the following command to start a docker container for the app.

<p class="scripts">docker container run -it –name=[CONTAINER_NAME]  -v $(pwd):/home [IMAGE] bash</p>

In the bash shell of the project container cd into the directory “home”.

<p class="scripts">cd  home</p>

Run the following command to see your app files/folders in the home directory.

<p class="scripts">ls</p>

<section class="note">

<p>NOTE: </p>
	<p>the flag [-v $(pwd):/home] mounts the container’s ‘home’ directory to the app’s root folder</p>
</section>