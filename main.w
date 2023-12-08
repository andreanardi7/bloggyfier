bring cloud;
bring http;
bring fs;
//bring ex;
//bring util;
//bring expect;


// We create a bucket with a file inside
let bucket = new cloud.Bucket();
// Here we have the Api Gateway
let api = new cloud.Api();



// -------------------Read the file with GET reqest-------------------
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


// -------------------Write a file with PUT reqest-------------------
//  Create an endpoint for HTTP put requests
api.put("/files/{fileName}", inflight (req: cloud.ApiRequest): cloud.ApiResponse => { 
  let fileName = req.vars.get("fileName");
  let body = req.body;

  // Parse body type str? and need str (use ?? to define the fallback)
  let parsedBody = Json.parse(body??"{}");
  let HtmlFile = parsedBody.get("HtmlFile").asStr();
  let MarkdownFile = parsedBody.get("MarkdownFile").asStr();
  let items = bucket.list();

    bucket.put(fileName+ ".html",HtmlFile);
    bucket.put(fileName+ ".txt",MarkdownFile);

    return cloud.ApiResponse {     
      status: 201,
      body: "Written new File"
    };
});




//let queue = new cloud.Queue();
//let redis = new ex.Redis();
//
//queue.setConsumer(inflight (message) => {
//  redis.set("hello", message);
//}, timeout: 3s);
//
//test "Hello, world!" {
//  queue.push("world!");
//  util.waitUntil(() => {
//    return redis.get("hello") != nil;
//  });
//}