"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categories = {
    '1': {
        title: 'Same Name',
        questions: [
            '1',
            '2',
            '3',
            '4',
            '5'
        ]
    },
    '2': {
        title: 'Murray Movies',
        questions: [
            '6',
            '7',
            '8',
            '9',
            '10'
        ]
    },
    '3': {
        title: 'Same Name',
        questions: [
            '11',
            '12',
            '13',
            '14',
            '15'
        ]
    },
    '4': {
        title: 'Same Name',
        questions: [
            '16',
            '17',
            '18',
            '19',
            '20'
        ]
    }
};
const router = express_1.Router();
router.get('/api/v1/categories/', (req, res, next) => {
    res.send({
        totalResults: Object.keys(categories).length,
        results: categories
    });
});
router.get('/api/v1/categories/:id', (req, res, next) => {
    res.send({
        totalResults: 1,
        results: categories[req.params.id]
    });
});
exports.default = router;
//# sourceMappingURL=index.js.map