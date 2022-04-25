# api-social-media

AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

GIVEN a social network API

WHEN I enter the command to invoke the app
THEN my server is started and the Mongoose models are synced to the MongoDB DB

WHEN I open API GET routes in Insomnia for USERS and THOUGHTS
THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test api POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully 
  create, 
  update, and 
  delete USERS and THOUGHTS in my DB

WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to 
thoughts and add and remove friends to a user’s friend list