import EditorJS from '@editorjs/editorjs'

const edjsParser = require("editorjs-parser");
const parser = new edjsParser(config, customParsers, embedMarkup);

const markup = parser.parse(output);