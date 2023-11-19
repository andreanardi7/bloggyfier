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
      const HtmlFile = ((arg) => { if (typeof arg !== "string") {throw new Error("unable to parse " + typeof arg + " " + arg + " as a string")}; return JSON.parse(JSON.stringify(arg)) })(((obj, args) => { if (obj[args] === undefined) throw new Error(`Json property "${args}" does not exist`); return obj[args] })(parsedBody, "HtmlFile"));
      const MarkdownFile = ((arg) => { if (typeof arg !== "string") {throw new Error("unable to parse " + typeof arg + " " + arg + " as a string")}; return JSON.parse(JSON.stringify(arg)) })(((obj, args) => { if (obj[args] === undefined) throw new Error(`Json property "${args}" does not exist`); return obj[args] })(parsedBody, "MarkdownFile"));
      const items = (await $bucket.list());
      (await $bucket.put((fileName + ".html"), HtmlFile));
      (await $bucket.put((fileName + ".txt"), MarkdownFile));
      return ({"status": 201,"body": "Written new File"});
    }
  }
  return $Closure2;
}
