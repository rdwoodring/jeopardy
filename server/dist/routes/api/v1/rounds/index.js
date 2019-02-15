"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rounds = {
    '1': {
        valueMultiplier: 100,
        categories: [
            '1',
            '2',
            '3',
            '4'
        ]
    }
};
const router = express_1.Router();
router.get('/api/v1/rounds/', (req, res, next) => {
    res.send({
        totalResults: Object.keys(rounds).length,
        results: rounds
    });
});
router.get('/api/v1/rounds/:id', (req, res, next) => {
    res.send({
        totalResults: 1,
        results: rounds[req.params.id]
    });
});
exports.default = router;
//# sourceMappingURL=index.js.map