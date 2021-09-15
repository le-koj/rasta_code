---
author: Le Koj
---

<h4>4 SIMPLE COMMAND TO OPEN AN EXISTING PYTHON APP IN A DOCKER CONTAINER</h4>

In terminal, `cd` into the root folder of the python application.
Run the following command to start a docker container for the app.

```
docker container run -it –name=[CONTAINER_NAME] -v $(pwd):/home [PYTHON-IMAGE] bash
```
{: #gui-app1 .code-container}

In the bash shell of the project container `cd` into the directory `home`.

```
cd  home
```
{: #gui-app2 .code-container}

Run the following command to see your app files/folders in the home directory.

```
ls
```
{: #gui-app3 .code-container}


<p>NOTE: </p>

the flag [`-v $(pwd):/home`] mounts the container’s `home` directory to the app’s root folder
