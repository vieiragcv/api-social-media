# api-social-media

AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

GIVEN a social network API

|---         WHEN I enter the command to invoke the app         ---| 
|--- THEN my server is started and the Mongoose models are synced to the MongoDB DB  ---| 

|---         WHEN I open API routes:         ---|                        

  USERS     

    GET            /api/users & /api/users/:id                      (COMPLETE)
    PUT            /api/users/:id                                   (COMPLETE)
    POST           /api/users                                       (COMPLETE)
    DELETE         /api/users/:id                                   (COMPLETE)

  THOUGHTS  

    GET            /api/thoughts & /api/thoughts/:id                (COMPLETE)
    PUT            /api/users/:id                                   (PENDING)
    POST           /api/users/                                      (PENDING)
    DELETE         /api/users/:id                                   (PENDING)

  REACTIONS (of thoughts)

    POST           /api/reactions                                   (PENDING)
    DELETE         /api/reactions/:id                               (PENDING)

  FRIENDS  (add and remove friends to a user’s friend list)

    PUT            /api/users/:id                                   (PENDING)

|--- THEN Insomnia displays data in formatted JSON ---|  
