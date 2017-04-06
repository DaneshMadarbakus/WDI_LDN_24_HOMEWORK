![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# Countries App

### Introduction

Practising what we've done today your task it to make an app that stores countries and continents. You should use the cookbook app that we created today as a reference.

### Requirements

- Each country needs: 
	- `name`
	- `image` of its flag (the image has to be displayed)
	- `size` (how many square miles of surface)
	- `population`
	- a first `language`
	- maybe more (currency, GDP, etc.)
- Each continent needs:
	- `name`

### Tips

1. You should think about the relationship between countries and continents before you start coding. _Will you need to store the country ID in the continent, or the continent ID in the country?_

2. Be very careful when scaffolding your app. You should scaffold continents **before** you scaffold countries.

3. Before you run your migration, read through the migration file in Atom, and make sure you are happy with your spelling. If you are unhappy, you can delete the migration by running the same scaffold command again, but change `-g` to `-d`. **Important!** You can only do this if you haven't already done `rails db:migrate`, so read through your migration file **before** you run `rails db:migrate`.

**Bonus:**

Style it up! Add Bootstrap and/or some custom CSS.