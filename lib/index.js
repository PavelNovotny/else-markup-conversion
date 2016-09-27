var Mustache = require("mustache");

exports.searchQuery = function (queryRequest, template) {
    console.log(JSON.stringify(queryRequest));
    return Mustache.render(template, queryRequest);
}

