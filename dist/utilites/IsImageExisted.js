"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var isImageExisted = function (imageName) {
    var imagePath = path_1.default.join(__dirname, "../../images/".concat(imageName, ".jpg"));
    var imageExisted = fs_1.default.existsSync(imagePath);
    return imageExisted;
};
exports.default = isImageExisted;
