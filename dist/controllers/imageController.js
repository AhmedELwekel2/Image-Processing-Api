"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var resizeImage_1 = __importDefault(require("../utilites/resizeImage"));
var IsImageExisted_1 = __importDefault(require("../utilites/IsImageExisted"));
var image_1 = require("../utilites/image");
var imageController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newImage, imageName, width, height, resizedImage, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                newImage = (0, image_1.createImage)(req.query.name, req.query.width, req.query.height);
                imageName = newImage.imageName, width = newImage.width, height = newImage.height;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                // validate the inputs 
                if (!imageName || !parseInt(req.query.width) || !parseInt(req.query.height)) {
                    throw 'something went wrong with the paramaters ,please enter imageName as string and width ,height in numbers';
                    return [2 /*return*/];
                }
                if (width < 0 || height < 0) {
                    throw 'Please provide the width and height in positive terms';
                    return [2 /*return*/];
                }
                // check if the image you want to resize existed
                if (!(0, IsImageExisted_1.default)(imageName)) {
                    throw 'The image doesnt exist';
                    return [2 /*return*/];
                }
                return [4 /*yield*/, (0, resizeImage_1.default)(imageName, width, height)];
            case 2:
                resizedImage = _a.sent();
                return [2 /*return*/, res.status(201).sendFile(resizedImage)];
            case 3:
                err_1 = _a.sent();
                res.status(400).send(err_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.default = imageController;
