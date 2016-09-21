var Mustache = require("mustache");

exports.searchQuery = function (queryRequest, template) {
    queryRequest = mustacheConvert(queryRequest);
    console.log(JSON.stringify(queryRequest));
    var output = Mustache.render(template, queryRequest);
    return output;
}

function mustacheConvert(queryRequest) {
    var searchStrings = [];
    for (var i=0; i< queryRequest.general.searchStrings.length; i++) {
        searchStrings.push({searchString : queryRequest.general.searchStrings[i]});
    }
    queryRequest.general.searchStrings = searchStrings;
    return queryRequest;
}
exports.mustacheConvert = mustacheConvert;

