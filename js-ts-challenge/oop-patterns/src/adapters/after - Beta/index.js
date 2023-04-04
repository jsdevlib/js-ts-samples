const Library = require("./ProcessLibrary");
const JsonReadear = require("./JsonReader");
const JsonToXml = require("./JsonToXmlAdapter");

const initialDataInstance = new JsonReadear();

const data = new JsonToXmlAdapter(initialDataInstance).read();

new Library().process(data);