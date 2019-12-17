# Macro Fit

The excuses for ignoring our health are boundless. The two most common to be encountered are:

* Lack of Time
* Lack of Know How

With this app we are looking to solve just that. With the ability to put the power of a trainer 
within the palm of your hand. 

Please Demo the app here:

[Demo Link](https://bt-project-2.herokuapp.com/)


Once inside the app please login as a new client. Create a profile and begin filling in macro intake to 
view functionality of the app. Try out the workout section and enjoy. 

## Overview

**Calorie - Macro Counts:**

* Upon login the client will have there daily calorie and macro information calculated and stored
* These calculations are based directly off of there body composition, age and activity level
* Allows the client to easily navigate how many calories they should be consuming:
    - caloric deficit based on activity level and fitness goals
    - macro ratios based on fitness goals
    - macro breakdown in to protein, carbs, and fat grams



**Workout Routine:**

* Workout routines are based on time frame breakdown:
    - Full-body routine can be completed 2 to 3 days a week
    - Upper body & Lower body routine can be complete 2 to 4 days a week
    - Muscle groups routine can completed in 6 days or extended to encompass
        3 or 4 muscle groups per week 
* Each routine will provide info including the exercises, equipment, sets, reps, and type of exercise


### Technologies

**Macro Fit** is a `node` & `express` server based app. 

* It utilizes the MVC `model/view/controller` format for better application handling.
* NPM packages included:
    - `express` - server
    - `express-handlebars` - used to dynamically produce the multiple views
    - `sequelize` - simplified pulling info from database
    - `mysql2` - sequelize and mysql call assistance
    - `dotenv` - config protection
* New technologies:
    - MySQL stored procedures
    - password encryption for added security
    - handle multiple simultaneously through the database
* `mocha` and `chai` for testing
* `eslint` for standardized writing


## Installation

Fork the the repo for your your own. Add into your github and clone the repo to your local machine.
Npm install all necessary packages. 
Add own database connection into `config.json` or connect 
and deploy from `heroku` utilizing their built in database `jaws_db`. 


### MacroFit


![MacroFit](https://media.giphy.com/media/fqshrY9xCfFrxzExf5/giphy.gif)




- - -

### Hosting on Heroku

Now that we have a backend to our applications, we use Heroku for hosting. Please note that while **Heroku is free**, it will request credit card information if you have more than 5 applications at a time or are adding a database.

Please see [Heroku’s Account Verification Information](https://devcenter.heroku.com/articles/account-verification) for more details.

- - -
