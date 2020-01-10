TravelApp

this is a mock app, where users can see reviews about a destination,discription and a few images.
None of the data is fetched, it's all hardcoded.

Initialize app:

npm install -g expo
expo init <project name>
choose blank template
create two directories : screens, navigation 
screens: List.js , Article.js
navigation: Tavel.js 
##
set up navigation configurations so that  will be able to navigate from screen to screen in  app. 
For that install the react-navigation package along with its supporting dependent packages :
    *expo install react-navigation
    *expo install react-native-gesture-handler
    *expo install react-navigation-stack

Import the createStackNavigator function from the react-navigation-stack package. This createStackNavigator function enables to stack our screens in
others to configure an app container with screens to navigate. Then, we have also imported the List and Article screensfrom the ‘./screens/’ directory. 
Then, all the screens are included in the createStackNavigator function as the 1st parameter. In the 2nd parameter,
we have set a default initial route as List screen.

Now, in the App.js file, we need to create an app container to hold this stack navigator. For that, we need to import  Travel.js file in App.js file .
Then, pass the Travel navigator into the createAppContainer function as a parameter that is being exported.


##Separating Different UI sections for List screen
divide the List screen into three different UI sections. The three different sections are going to be a Header section, destinations section and 
recommended section.


## making styling file
This will make things easier to assign styles to different components




#  Travel App 
##  Check out the deployed version here! 

![DEMO Travel App](https://github.com/Lydia-coder/portfolio-project/blob/master/travelApp.gif)
## What this project is about

This is a travel app, where a user can read about a destination, vieuw images of the destination and read reviews and ratings. It was my frist time using react native so this was a bit of a introduction project for me. Most of the styling is inline styling with some libraries, please checkout: **[Goals for this project](#goals-for-this-project)**

## Table of contents:

- **[Technologies used](#technologies-used)**
- **[Goals for this project](#goals-for-this-project)**




## Technologies used

#### 👀👇 Click links to view some samples in this project 👇👀

- **[react-native](./screens/List.js)**   
- **[CSS](./screens/theme.js)**  
- **[react-native-vector-icons/MaterialIcons](./screens/Article.js)**  
- **[react-navigation-stack](./navigations/Travel.js)**  



## Goals for this project:

- To make a travel app using react native
- To learn how to make a well designed travel app in react native





## My git workflow

In this project I tried to use:

- Good commit messages

If you have feedback to improve my git usage: **[please drop me a line!](https://www.linkedin.com/in/lydia-michael-smeets/)** 






## Create React Native App

This project was bootstrapped with Create React Native App.

- **[The standard create-react-native-app docs can be found in here](https://github.com/facebook/react-native/blob/master/README.md)**



