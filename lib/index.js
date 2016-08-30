var Mustache = require("mustache");

exports.searchQuery = function (searchString, template) {
    var searchStrings = searchString.split(" ");
    var view = {searchStrings : []};
    for (var i=0; i< searchStrings.length; i++) {
        view.searchStrings.push({searchString : searchStrings[i]});
    }
    var output = Mustache.render(template, view);
    console.log(view);
    console.log(output);
    return output;
}


