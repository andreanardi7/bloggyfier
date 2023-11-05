"use strict";
module.exports = function({ $bucket }) {
  class $Closure2 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle(req) {
      const fileName = ((obj, key) => { if (!(key in obj)) throw new Error(`Map does not contain key: "${key}"`); return obj[key]; })(req.vars, "fileName");
      const text = ((obj, key) => { if (!(key in obj)) throw new Error(`Map does not contain key: "${key}"`); return obj[key]; })(req.vars, "text");
      const items = (await $bucket.list());
      if ((!items.includes(fileName))) {
        (await $bucket.put(fileName, text));
        return ({"status": 201,"body": "Written new File"});
      }
      return ({"status": 400,"body": "File already exist"});
    }
  }
  return $Closure2;
}
