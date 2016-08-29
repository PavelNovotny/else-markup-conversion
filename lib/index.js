var fs = require("fs");
var Mustache = require("mustache");

exports.searchCustomers = function (searchString) {
    var searchStrings = searchString.split(" ");
    var view = {searchStrings : []};
    for (var i=0; i< searchStrings.length; i++) {
        view.searchStrings.push({searchString : searchStrings[i]});
    }
    var output = Mustache.render(customerTemplate, view);
    console.log(view);
    console.log(output);
    return output;
}

var customerTemplate = fs.readFileSync('customerTemplate.json', 'utf8');
var customerTemplate1 = "{\n" +
    "\"query\" : {\n" +
    "\"bool\" : {\n" +
    "\"must\" : [\n" +
    "{{#searchStrings}}\n" +
    "{\n" +
    "\"query_string\": {\n" +
    "\"query\": \"*{{searchString}}*\",\n" +
    "\"fields\": [\"firstName\",\"lastName\",\"companyName\",\"address.street\",\"address.city\",\"address.zip\",\"birthNumber\",\"ico\"]\n" +
    "}},\n" +
    "{{/searchStrings}}{}\n" +
    "]\n" +
    "}\n" +
    "}\n" +
    "}\n";

