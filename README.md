- [x] trigger types
- [x] Events and data
- [x] full function lifecycle
- [x] create each function


# building microservice with google function

## function types
1 HTTP Trigger ==> request(just a simple http request. when you call a url,its going to trigger and process the request)
2 Pub/Sub trigger  ==> Messsage

3 Storage trigger ==> Object change notification(delete and updating file events)

  
## Event Object 
eventI: String

timestamp: String(ISO 8601)

eventType: String

resource: String

data:Object

### Data Property
1 HTTP from Request(Express.js)

2 pub/sub message

3 Cloud storage object






