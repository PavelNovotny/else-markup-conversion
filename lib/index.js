var Mustache = require("mustache");

exports.searchQuery = function (queryRequest, template) {
    return Mustache.render(template, queryRequest);
}

