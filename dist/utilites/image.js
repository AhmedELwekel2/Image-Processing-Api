"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createImage = void 0;
var createImage = function (imageName, width, height) {
    var newImage = {
        imageName: imageName,
        width: parseInt(width),
        height: parseInt(height)
    };
    return newImage;
};
exports.createImage = createImage;
