"use strict";
module.exports = function({ $bucket, $std_Json }) {
  class $Closure2 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle(req) {
      const fileName = ((obj, key) => { if (!(key in obj)) throw new Error(`Map does not contain key: "${key}"`); return obj[key]; })(req.vars, "fileName");
      const body = req.body;
      const parsedBody = (JSON.parse((body ?? "{}")));
      const content = ((arg) => { if (typeof arg !== "string") {throw new Error("unable to parse " + typeof arg + " " + arg + " as a string")}; return JSON.parse(JSON.stringify(arg)) })(((obj, args) => { if (obj[args] === undefined) throw new Error(`Json property "${args}" does not exist`); return obj[args] })(parsedBody, "content"));
      const items = (await $bucket.list());
      if ((!items.includes(fileName))) {
        (await $bucket.put(fileName, content));
        return ({"status": 201,"body": "Written new File"});
      }
      return ({"status": 400,"body": "File already exist"});
    }
  }
  return $Closure2;
}
