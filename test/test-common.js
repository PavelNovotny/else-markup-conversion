/**
 * 
 * Created by pavelnovotny on 27.09.16.
 */
var Readable = require('stream').Readable;
var convert = require("../lib/index.js");
var fs = require("fs");
var request = require("request");
var nconf = require('nconf');


function convertToStream(string) {
    var stream = new Readable();
    stream.push(string);
    stream.push(null);
    return stream;
}
exports.convertToStream = convertToStream;


exports.query = function(searchId) {
    nconf.argv()
        .env()
        .defaults({ env : 'production' })
        .file({ file: 'config-'+nconf.get('env')+'.json' });
    var search = nconf.get(searchId);

    var elasticUrl = nconf.get('elastic-url') + search.queryUrl;
    var template = fs.readFileSync(search.template, 'utf8');
    var testProxyData = JSON.parse(fs.readFileSync(search.testData, 'utf8'));
    testProxyData.general.from = function() {return (testProxyData.general.page-1)*testProxyData.general.size};
    var query = convert.searchQuery(template, testProxyData);
    fs.writeFile(search.request, query, null);
    convertToStream(query).pipe(request.post(elasticUrl)).pipe(fs.createWriteStream(search.result)) ;
}

