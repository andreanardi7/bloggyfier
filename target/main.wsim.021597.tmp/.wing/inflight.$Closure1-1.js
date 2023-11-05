"use strict";
module.exports = function({ $bucket }) {
  class $Closure1 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle(req) {
      const fileName = ((obj, key) => { if (!(key in obj)) throw new Error(`Map does not contain key: "${key}"`); return obj[key]; })(req.vars, "fileName");
      const items = (await $bucket.list());
      if ((!items.includes(fileName))) {
        return ({"status": 404,"body": "File not found"});
      }
      return ({"status": 200,"body": (await $bucket.get(fileName))});
    }
  }
  return $Closure1;
}
