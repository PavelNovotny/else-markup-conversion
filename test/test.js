/**
 *
 * Created by pavelnovotny on 23.08.16.
 */

var convert = require("../lib/index.js");
var fs = require("fs");

var customerTemplate = fs.readFileSync('./test/customerTemplate.json', 'utf8');
convert.searchQuery("Joe Pavel", customerTemplate);

