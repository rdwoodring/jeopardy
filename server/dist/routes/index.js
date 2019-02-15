"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express'),
//     router = express.Router();
const express_1 = require("express");
const router = express_1.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    // res.render('index', {
    //     title: 'Express'
    // });
    res.send(`
        <html>
            <head>
                <title>Express</title>
            </head>

            <body>
                <h1>Welcome to Express</h1>
            </body>
        </html>
    `);
});
// module.exports = router;
exports.default = router;
//# sourceMappingURL=index.js.map