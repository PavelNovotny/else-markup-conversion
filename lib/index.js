var Mustache = require("mustache");

exports.searchQuery = function (template, queryRequest) {
    return Mustache.render(template, queryRequest);
}

