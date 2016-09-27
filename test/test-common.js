/**
 * 
 * Created by pavelnovotny on 27.09.16.
 */
var Readable = require('stream').Readable

function convertToStream(string) {
    var stream = new Readable();
    stream.push(string);
    stream.push(null);
    return stream;
}
exports.convertToStream = convertToStream;
