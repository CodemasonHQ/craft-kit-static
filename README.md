# Craft Kit - Static
This is the official [craft kit](http://mason.ci/docs/craft-kits) for static websites by [Codemason](https://codemason.io). 

```
$ mason craft static
```

Craft kits let you Dockerize your application with one command. They are an excellent way to ease into building Docker powered apps without having to learn the ins and outs of Docker.

Then with [Codemason](https//codemason.io), you can deploy your app to a server in a matter of minutes!

## Requirements 
This guide assumes you have:
- Installed the [Mason CLI](https://codemason.io/docs/installation)

## Quickstart

```
$ mason craft static
```

Add your Docker files to source control.
```
$ git add .
$ git commit -m "Docker"
```

Spin up your development environment with Docker (add the `-d` flag to the command to run in detached mode)
``` 
$ docker-compose up
```

That's all! You're now running your static website with Docker!

You'll be able to access your application at `http://<docker-ip>`, where <docker-ip> is the boot2docker ip or localhost if you are running Docker natively.

## Deployment
Deploying is just as easy with [Codemason](https://codemason.io). For a more detailed guide to deployment, see our [documentation](https://codemason.io/docs/quickstart#deploy-dreams).

Create an application on Codemason for your app
```
$ mason create static-site
```

Push your code to your Codemason Git remote to build it into a Docker image
```
$ git push codemason master 
```

Deploy
```
$ mason services:create static-site/web -p 80:80 
```