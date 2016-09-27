/**
 *
 * Created by pavelnovotny on 23.08.16.
 */

var convert = require("../../lib/index.js");
var fs = require("fs");
var request = require("request");
var testCommon = require("../test-common.js");
var nconf = require('nconf');

nconf.argv()
    .env()
    .defaults({ env : 'production' })
    .file({ file: 'config-'+nconf.get('env')+'.json' });

var elasticUrl = nconf.get('elastic-url') + "/customer_index_rif/customer/_search?pretty=true";
var customerTemplate = fs.readFileSync('./templates/customerTemplate.hbs', 'utf8');
var testProxyData = JSON.parse(fs.readFileSync('./test/customer/proxyRequest.json', 'utf8'));
testProxyData.general.from = function() {return (testProxyData.general.page-1)*testProxyData.general.size};
var query = convert.searchQuery(customerTemplate, testProxyData);
fs.writeFile("test/customer/testCustomerRequest.json", query, null);
testCommon.convertToStream(query).pipe(request.post(elasticUrl)).pipe(fs.createWriteStream("test/customer/testCustomerResult.json")) ;


