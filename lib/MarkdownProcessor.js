// LICENSE : MIT
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _markdownToAst = require("markdown-to-ast");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MarkdownProcessor = function () {
    function MarkdownProcessor(config) {
        _classCallCheck(this, MarkdownProcessor);

        this.config = config;
    }

    _createClass(MarkdownProcessor, [{
        key: "processor",
        value: function processor(ext) {
            return {
                preProcess: function preProcess(text, filePath) {
                    return (0, _markdownToAst.parse)(text);
                },
                postProcess: function postProcess(messages, filePath) {
                    return {
                        messages: messages,
                        filePath: filePath ? filePath : "<markdown>"
                    };
                }
            };
        }
    }], [{
        key: "availableExtensions",
        value: function availableExtensions() {
            return [".md", ".markdown", ".mdown", ".mkdn", ".mkd", ".mdwn", ".mkdown", ".ron"];
        }
    }]);

    return MarkdownProcessor;
}();

exports.default = MarkdownProcessor;
module.exports = exports['default'];
//# sourceMappingURL=MarkdownProcessor.js.map