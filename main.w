bring cloud;
bring http;
bring fs;


// We create a bucket with a file inside
let bucket = new cloud.Bucket();
// Here we have the Api Gateway
let api = new cloud.Api();



// Read the file with GET reqtest
//  Create an endpoint for HTTP GET requests
api.get("/files/{fileName}", inflight (req: cloud.ApiRequest): cloud.ApiResponse => {
  let fileName = req.vars.get("fileName");
  let items = bucket.list();

  //  If the bucket do not contain the file name
  if (!items.contains(fileName)) {
    return cloud.ApiResponse {
      status: 404,
      body: "File not found"
    };
  }

  //  Otherwise we can safely read it
  return cloud.ApiResponse {
    status: 200,
    body: 
    bucket.get(fileName)
  };
});



//  Create an endpoint for HTTP put requests
api.put("/files/{fileName}", inflight (req: cloud.ApiRequest): cloud.ApiResponse => { 
  let fileName = req.vars.get("fileName");
  let body = req.body;

  // Parse body type str? and need str (use ?? to define the fallback)
  let parsedBody = Json.parse(body??"{}");
  let content = parsedBody.get("content").asStr();
  let plainText = parsedBody.get("text").asStr();
  let items = bucket.list();

    bucket.put(fileName+ ".html",content);
    bucket.put(fileName+ ".txt",plainText);

    return cloud.ApiResponse {     
      status: 201,
      body: "Written new File"
    };
});

