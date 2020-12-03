<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<h1 align="center">
  TweeterLator
</h1>

**A <a href="https://www.hyperisland.com/" target="_blank">Hyper Island</a> Student Project**

**About:**  

TweeterLator is an app that fetches tweets from users in various cities around Sweden, and visualizes their content based on word frequency analysis, sentiment analysis, Markov chains, and lastly time series analysis.

TweeterLator was born during a brainstorming session for a school project at Hyper Island. For the three-week-long project, we decided to blend our brief (building a webpage using RESTful APIs) with our interest in data visualization and graphs. Therefore, working with Twitter API and analyzing their users' content seemed like compelling territory to explore.

**Data collection and analysis:**

We started with exploring Twitter API and the types of data we could fetch. We limited our sample size to the 500 most recent tweets from each city within a 5km radius from a given set of geographical coordinates. 

We wanted to visualise the text contents of the tweets in some kind of network graph. To do this, we anaylised our corpus with three different approaches. 

We created a simple token frequency dictionary to visualise the most-occuring words, usernames and hashtags in a particular city. These formed the nodes in our graph.

Second, we used a Markov Chain analysis to map frequently occurring bigrams (after the stopwords were removed, so these ended up being words that occurred close together) to graph edges. The more frequent the connection, the heavier the edge.

We also ran a simple sentiment analysis script using an AFINN score that we mapped onto a colour gradient in order to colour the graph. 

Another series of data points we decided to analyze separately was time series. Although, bear in mind that we have <a href="https://en.wikipedia.org/wiki/Database_normalization" target="_blank"> normalized the data</a> and structured it in accordance to our goal. The time data has been scaled by the sum of each row before being visualized in the radial heatmap.

*Exploring some of the libraries for the purpose of analyzing text-based content in this project was to experiment with new tools in the field of front-end development. Please note that we are front-end developers, not data analysts (although with some background knowledge of linguistics), and it’s likely that we have overlooked some of the nuances of data collection and potential biases.*


**Things we learned:**

- Working with API
- Building an app with Gatsby
- Data analysis and visualisation
- Working in Nodejs
- Thinking in terms of React Components
- Collaborating with Agile principles

**Some of the challenges we faced:**

1. We couldn’t collect data at fetch time, hence we decided to do it at build time once a week through a series of node scripts.
Our initial intention was to fetch data at runtime, but we eventually learned that Twitter doesn't support CORS and therefore we couldn't access the API from the client. Instead we decided to fetch the data periodically at built-time running a Node script in the backend. Since we moved to backend, we analyzed most of the data in Node as well.

2. Initially we spent a few days researching graph visualising libraries, and settled on <a href="https://js.cytoscape.org/" target="_blank">Cytoscape.js</a>. It proved to be very complicated to work with, especially with the added complexity of finding a good React wrapper, and Vis.js had much clearer documentation, and nice physics simulations out of the package. 

3. We didn't examine our data closely in the start of the project, and didn't realize that we were getting truncated tweets. This caused a lot of bugs and lost time towards the end of the project.

Overall, we were working with a lot of tools and concepts that were new to all of us, so we were constantly challenged.


**Tools and Tech stack:**

[Gatsbyjs:](https://www.gatsbyjs.com/) “An open-source framework based on React that helps developers build blazing-fast websites and apps.”

[Twitter API:](https://developer.twitter.com/en/docs/twitter-api) “The API provides the tools analyze the conversation happening on Twitter.” *In order to use, developer must request access by filling out a questionnaire.*

[Vis.js:](https://visjs.org/) "A dynamic, browser-based visualization library."

[React-Vis:](https://uber.github.io/react-vis/) "React-vis is a React visualization library." 

[Postman:](https://www.postman.com/) "The Collaboration Platform for API Development."

**Libraries and dependencies:**

[React graph vis:](https://www.npmjs.com/package/react-graph-vis) A React component to display beautiful network graphs using vis.js

[moxy-ta:](https://www.npmjs.com/package/moxy-ta) Text analysis library for MoxyScript.

[text-cleaner:](https://www.npmjs.com/package/text-cleaner) A tool for easily cleaning text.

[ez-markov:](https://www.npmjs.com/package/ez-markov) A library designed to build rudimentary Markov chains.

[Stopword:](https://www.npmjs.com/package/stopword) A module for node and the browser that allows you to strip stopwords from an input text.

[Sentiment:](https://www.npmjs.com/package/sentiment) AFINN-based sentiment analysis for Node.js.

[Sentiment Swedish:](https://www.npmjs.com/package/sentiment-swedish) Swedish translated, AFINN-based sentiment analysis for Node.js.



**Contributors:**

- [Lovisa Elensky](https://github.com/lovisaelensky)
- [Neha Hirve](https://github.com/nehahirve/)
- [Omid Haqbin](https://github.com/omidhq/)

