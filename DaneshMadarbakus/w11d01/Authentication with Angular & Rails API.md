![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# Authentication with Angular & Rails API

### Introduction

Your task is to practice what we've learnt today by building out a Rails API and Angular app with JWT authentication.

### Requirements

* You should have a user model
* Users should have the following:
	* `username`
	* `email`
	* `password_digest`
* Use Bcrypt to hash the user's password
* Use the JWT gem to issue and decode JWT tokens
* The following user routes should be protected (you should not be able to access them without a token):
	* Index
	* Show
	* Update
	* Destroy

**Important:** Test that this is working via Insomnia before moving on

* Build out your Angular app, with a login and register form
* Add oAuth with Github and Satellizer


### Bonus

* Add Facebook oAuth

