# api-social-media

AS A social media startup
I WANT an API: social network (NoSQL) SO THAT I can handle unstructured data

|--- WHEN app is invoked                      ---| 
|--- THEN server starts and models sync to DB ---|


|--- WHEN I open API routes                  ---|
|--- THEN data in JSON displays              ---| 


  USERS     

    GET       /api/users                    
    POST      /api/users                  

    GET       /api/users/:id                
    PUT       /api/users/:id               
    DELETE    /api/users/:id                

  FRIENDS LIST

    POST      /api/users/:id/friends            

    DELETE    /api/users/:id/friends/:friendId  

  THOUGHTS  

    GET       /api/thoughts   
    POST      /api/thoughts/  

    GET       /api/thoughts/:id  
    PUT       /api/thoughts/:id              
    DELETE    /api/thoughts/:id

  REACTIONS (of thoughts)

    POST      /api/:thoughtId/reactions

    DELETE    /api/:thoughtId/reactions/:reactionId  
