---
description: "Explore our ML-powered Interest Discovery Platform: Reddit-style automatic post classification & personalized FastAPI-driven content feeds for seamless interest discovery."
---

# Interest Discovery Platform

## Introduction
This project was done in collaboration with my classmate and desk partner **Sakriya Pyakurel** who played a crucial role in training the models as well as making the models available using FastApi.

At its core, this project is a web application that functions as a social media platform, closely modeled after Reddit. However, unlike Reddit, where categorization and community engagement rely heavily on user input, our system automatically classifies each post into predefined categories and subreddit-like groupings using a post classification model. This automation allows for a deeper layer of analysis: the categorized content feeds directly into an interest prediction model, which continuously learns about a user’s preferences based on their interactions—what they post, like, or comment on. Together, these models form the foundation for a dynamic, personalized content stream we call the interest feed. The feed evolves as the user engages with the platform, offering a unique form of interest discovery without the need for users to explicitly define their preferences.

### Scope
The Interest Discovery Platform aims to help users uncover hidden interests based on the
analysis of their natural online activities—posts, comments, and material that they enjoy.
Borrowing from Spotify&#39;s approach to recommending music based on listening history,
this platform adapts the idea to much broader domains like hobbies, intellectual pursuits,
and niche topics. Using a dataset of labeled Reddit posts from over 1,000 subreddits, the
system uses a post classification model to annotate content with topic labels and an
interest prediction model to infer user interests. It then delivers a personalized feed which 
we call as interest feed in our web app  that evolves as the user interacts more. The site does not 
require users to explicitly state their interests—instead, it learns from their actions to enable 
organic discovery. This system can facilitate curiosity-driven exploration and self-discovery, enabling 
users to move outside of echo chambers and interact with surprising yet pertinent content.


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
    - User clicks on the predict Interests /  Recalibrate Interests
    - post request will go to  our interests prediction api with the inputs
    - the api responds with the predicted user interest with something like this
    
    ```json
    { "programming":["androiddev","bash","csharp","csshelp","django"
    ,"docker","dotnet","git","golang"],
    	"php":["PHPhelp"]
    }
    ```
    
- Output: User gets to know his interests and it will be presented in the ui as well as saved in the database.


## GitHub repository

[View on GitHub](https://github.com/whoispratik/interest_discovery_platform)

## Live Preview
Coming soon...