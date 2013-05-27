"use strict";

var sanitize = require("validator").sanitize;

module.exports = function (props, allowedProperties, model) {
    console.dir(props);
    allowedProperties.forEach(function (prop) {
        try {
            if (props[prop]) { model[prop] = sanitize(props[prop]).xss(true, ["iframe"]); }
        } catch (e) {
            console.error(e);
        }
    });
    console.dir(model);
};
