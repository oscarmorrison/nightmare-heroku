<p align="center">
  <img src="https://user-images.githubusercontent.com/1651212/27013967-6cbd6b8a-4ebc-11e7-9cd8-e5d0fcb01440.png" alt="logo" width="600px" />
 </p>


# NightmareJS on Heroku <a href="https://heroku.com/deploy" target="_blank"><img src="https://www.herokucdn.com/deploy/button.svg" alt="Heroku deploy" align="right"></a>

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/oscarmorrison/nightmare-heroku/issues)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=plastic)](https://github.com/oscarmorrison/nightmare-heroku/blob/master/LICENSE)  [![GitHub issues](https://img.shields.io/github/issues/oscarmorrison/nightmare-heroku.svg)](https://github.com/oscarmorrison/nightmare-heroku/issues)


## Intro

[NightmareJS](http://www.nightmarejs.org/) is an awesome highlevel webscraping and browser automation library built ontop of electron. This repo is a good starting place to be able to use it with some default setups ontop of heroku using the following instructions. [Read more](http://blog.oscarmorrison.com/nightmarejs-on-heroku-the-ultimate-scraping-setup/)

## Getting started
- `git clone --depth 1 git@github.com:oscarmorrison/nightmare-heroku [new-project-name]`

- `cd [new-project-name]`
- `rm -rf .git`
- `git init`
- setup git remote repository on github.com from existing code
```
git remote add origin git@github.com:[username]/[new-project-name].git
git add -A
git commit -m "Initial commit"
git push -u origin master
```
- `heroku create`
- `heroku stack:set cedar-14`
- set build packs
```
heroku buildpacks:add --index 1 https://github.com/heroku/heroku-buildpack-apt &&
heroku buildpacks:add --index 2 https://github.com/captain401/heroku-buildpack-xvfb.git &&
heroku buildpacks:add --index 3 https://github.com/causztic/heroku-electron-buildpack.git &&
heroku buildpacks:add --index 4 https://github.com/heroku/heroku-buildpack-nodejs.git
```
- `git push heroku master`
- goto heroku dashboard and select created app; install `Heroku Scheduler` add-on
- `heroku ps:scale web=1`
- `node ./index.js` to verify nightmare runs correctly locally; npm install needs to be run. The following output should be seen.
```
Welcome to Nightmare scrape
==========
NightmareJS on Heroku the ultimate scraping setup
=========
All done
```
- Open heroku app from heroku dashboard. 'Application error' is displayed because no routes have been defined yet so this is normal in this case. 
- `heroku logs` to check output for any errors. If everything went well, near the bottom of the output the 'Welcome to Nightmare scrape' messages as displayed above should appear. Now, you can work on the rest of your code knowing that nightmarejs will work on heroku as it works locally.
