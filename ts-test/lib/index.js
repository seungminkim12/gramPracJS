"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const net_1 = __importDefault(require("net"));
net_1.default.createServer(socket => {
    console.log(socket);
}).listen(1111);
const bf = Buffer.from('sfsdf1');
console.log(bf.toJSON());
setInterval(() => {
    console.log(new Date, 'tt');
}, 1000);
;
;
;
;
console.log('www');
