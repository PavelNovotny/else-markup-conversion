/**
 *
 * Created by pavelnovotny on 23.08.16.
 */

var convert = require("../lib/index.js");
var fs = require("fs");

var customerTemplate = fs.readFileSync('./templates/customerTemplate.hbs', 'utf8');
var data = {
    "general":{
        "gui":"4-3-1",
        //alespon jeden z nasledujicich loginu je povinny
        "login_external":"x0503899",
        "login_internal":"ra123456",
        //default je 1, kdyz nebude poslano
        "page":"1",
        //default je 10, kdyz nebude poslano
        "size":"10",
        "searchStrings": ["Praha", "Novák"],
        //default je false
        "show_inactive":true
    },
    "advanced":{
        "product":{
            //patří do třídy [productFilterGroups.key]
            "class":["something"],
            //jsou na adrese  [instalacni adresa]
            "address":["something"],
            //mají CROSS ID [crossId z jake adresy,instalacni adresa]
            "crossId":["something"],
            //mají název  [productDisplayName]
            "name":["something"],
            //mají produktový kód
            "productCode":["something"],
            //jsou aktivní
            "status":["active"],
            //jsou neaktivní
            "status":["inactive"],
            //jsou dočasně odpojené
            "status":["suspend"],
            //mají doplňkovou službu [productDisplayName na subproduktu]
            "hasSupplementalName":["something"],
            //nemají doplňkovou službu<
            "hasNotSupplementalName":["something"],
            //mají aktivní
            "hasActive":["something"],
            //mají neaktivní
            "hasInactive":["something"],
            //mají parametr
            "parameterName":["something"],
            //mají parametr s hodnotou
            "parameterValue":["something"]
        }
    }
};

console.log(convert.searchQuery(data, customerTemplate));

