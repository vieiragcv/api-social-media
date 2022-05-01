# api-social-media

AS A social media startup
I WANT an API: social network (NoSQL) SO THAT I can handle unstructured data

|--- WHEN app is invoked                      ---| 
|--- THEN server starts and models sync to DB ---|
|--- status:        (COMPLETE)                ---|


|--- WHEN I open API routes                  ---|
|--- THEN data in JSON displays              ---| 
|--- status:        (PENDING)                ---|

  USERS     

    GET       /api/users & /api/users/:id   (COMPLETE)
    PUT       /api/users/:id                (COMPLETE)
    POST      /api/users                    (COMPLETE)
    DELETE    /api/users/:id                (COMPLETE)

  FRIENDS LIST

    GET       /api/users/:id               (PENDING)
    PUT       /api/users/:id               (PENDING)

  THOUGHTS  

    GET       /api/thoughts & /api/thoughts/:id       (COMPLETE)
    PUT       /api/thoughts/:id                       (COMPLETE)
    POST      /api/thoughts/<Pass user ID parameter>  (COMPLETE)
    DELETE    /api/thoughts/:id                       (COMPLETE)

  REACTIONS (of thoughts)

    POST      /api/reactions                        (COMPLETE)
    DELETE    /api/reactions/:id                    (COMPLETE)
