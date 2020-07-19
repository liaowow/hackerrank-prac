## System Design Questions

High Level Notes
- There is no right answer
- Every interviewer will expect a different answer
-- ask them: Is there any specific feature you want to focus on?
- Focus is usually on the **data model**
- Don't mention specific technologies
- Draw stuff, diagrams, wireframe, etc
- *Talk*


### How would you design Twitter?

General Strategy
1. Identify 2~3 core **features**
-- Tweeting
-- Feed
2. Possible **implementation**
3. Identify and address difficulties/**challenges**
-- What does a tweet look like in the DB?
-- How to make `#topic` and `@mention` systems?
-- How to show interesting tweets at top of feed?
4. Solutions for **scaling**
-- Caching: User --> Server **( --> Memory Store )** --> DB
-- Deployment options/architecture: User --> **Load Balancer (randomly assign users to different servers)** --> DB 