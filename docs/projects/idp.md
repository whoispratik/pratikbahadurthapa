---
description: "Explore our ML-powered Interest Based Platform: Reddit-style automatic post classification & personalized FastAPI-driven content feeds for seamless interest discovery."
---

# Interest Based Platform

## Introduction

This project was done in collaboration with my classmate and desk partner **Sakriya Pyakurel** who played a crucial role in training the models as well as making the models available using FastApi.

Our project is called as interest based platform. The system provides a personalized
feed based on user’s interests. The feed is fully controllable by the user with
mechanisms to keep unwanted content out of it as per user’s wish. The system predicts
user’s interests by monitoring their interactions(posts,likes and comments) within the
platform along with classifying the posts to various topics and genres.  
This system is available as a web application. It is built using modern tools and
technologies such as Vue.js, Inertia.js, Laravel and fastapi. We used a labeled dataset
of Reddit posts from 1,013 subreddits and 39 total unique categories. (collected up to
2018). We created two Api’s: one that classifies the posts, and another that predicts a
user’s interests based on their interactions.

### Scope

The primary objective of this project was to create a platform where users interact and,
after sufficient activity, have their interests predicted by AI. Based on these predicted
interests, users receive a personalized interest feed. Users can engage with the platform
by creating posts with titles and descriptions, liking posts, and commenting on posts.
Using a dataset of labeled Reddit posts from over 1,000 subreddits, the system uses a
post classification API to annotate content with topic labels and an interest prediction
API to infer user interests. It then delivers a personalized feed that evolves as the user
interacts more. The web application is built using Vue.js and Inertia.js on the client side
and Laravel on the server side. The two APIs are made available using FastAPI.

## Module Description

### Post Creation Module

- Purpose: To create a post along with our developed model predicting its category and interest it belongs to
- Inputs: Title and description of the post
- Key Steps:
  - User enters the title and description through our webapp’s interface
  - The title and description will be sent as a dictionary/Object to our category prediction api
  - the server responds with something like
    ```typescript
    	{
    		predicted_subreddt: string,
    		category_1: string,
    		category_2: string
    	}
    ```
  - then the post is created along with these details received from api
- Output: A post is created along with additional details like the categories the post falls into and the subreddit that post falls into

### Interest Prediction Module

- Purpose: To predict users interest based on his interactions on the platform
- Inputs: Details about the posts made by the user, the posts the user has liked, the comments made by user and the posts in which he commented
- Key Steps:
  - User clicks on the predict Interests / Recalibrate Interests
  - post request will go to our interests prediction api with the inputs
  - the api responds with the predicted user interest with something like this
  ```json
  {
    "programming": [
      "androiddev",
      "bash",
      "csharp",
      "csshelp",
      "django",
      "docker",
      "dotnet",
      "git",
      "golang"
    ],
    "php": ["PHPhelp"]
  }
  ```
- Output: User gets to know his interests and it will be presented in the ui as well as saved in the database.

## GitHub repository

[View on GitHub](https://github.com/whoispratik/interest_discovery_platform)

## Live Preview

Coming soon...
