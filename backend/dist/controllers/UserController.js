"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var EmailService_1 = __importDefault(require("../services/EmailService"));
var users = [
    { name: 'Bruno', email: 'bruno@santander.com.br' },
    { name: 'Sherlock', email: 'sherlock@holmes.com' }
];
exports.default = {
    index: function (req, res) {
        return res.json(users);
    },
    create: function (req, res) {
        EmailService_1.default.sendMail({
            to: {
                name: 'Bruno',
                email: 'bruno@bruno.com.br'
            },
            message: {
                subject: 'Bem vindo ao sistema!',
                body: 'Seja bem vindo'
            }
        });
        return res.send('Sucesso');
    }
};
