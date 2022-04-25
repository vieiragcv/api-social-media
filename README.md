# api-social-media

AS A social media startup
I WANT an API: social network (NoSQL)
SO THAT I can handle unstructured data

GIVEN a social network API

|--- WHEN app is invoked                      ---| 
|--- THEN server starts and models sync to DB ---|
|---                (COMPLETE)                ---|



|---              WHEN I open API routes                  ---|
|---    THEN Insomnia displays data in formatted JSON     ---| -> (PENDING)

  USERS     

    GET            /api/users & /api/users/:id           (COMPLETE)
    PUT            /api/users/:id                        (PENDING) ->  update Friend's list
    POST           /api/users                            (COMPLETE)
    DELETE         /api/users/:id                        (COMPLETE)

  THOUGHTS  

    GET            /api/thoughts & /api/thoughts/:id     (COMPLETE)
    PUT            /api/users/:id                        (PENDING)
    POST           /api/users/                           (PENDING)
    DELETE         /api/users/:id                        (PENDING)

  REACTIONS (of thoughts)

    POST           /api/reactions                        (PENDING)
    DELETE         /api/reactions/:id                    (PENDING)
