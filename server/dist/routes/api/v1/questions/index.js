"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const questions = {
    '1': {
        question: 'Orioles Hall-of-Famer Eddie Murray shares a last name with this Ghostbusters actor.',
        answer: 'Bill Murray'
    },
    '2': {
        question: 'Multiple Grand Slam winner Andy Murray shares a last name with this Groundhog Day actor.',
        answer: 'Bill Murray'
    },
    '3': {
        question: 'Former President Bill Clinton shares a first name with this Scrooged actor.',
        answer: 'Bill Murray'
    },
    '4': {
        question: 'Pro wake-boarder Shaun Murray shares a last name with this Kingpin actor.',
        answer: 'Bill Murray'
    },
    '5': {
        question: 'Author Bill Bryson shares a first name with this Stripes actor.',
        answer: 'Bill Murray'
    },
    '6': {
        question: 'Orioles Hall-of-Famer Eddie Murray shares a last name with this Ghostbusters actor.',
        answer: 'Bill Murray'
    },
    '7': {
        question: 'Multiple Grand Slam winner Andy Murray shares a last name with this Groundhog Day actor.',
        answer: 'Bill Murray'
    },
    '8': {
        question: 'Former President Bill Clinton shares a first name with this Scrooged actor.',
        answer: 'Bill Murray'
    },
    '9': {
        question: 'Pro wake-boarder Shaun Murray shares a last name with this Kingpin actor.',
        answer: 'Bill Murray'
    },
    '10': {
        question: 'Author Bill Bryson shares a first name with this Stripes actor.',
        answer: 'Bill Murray'
    },
    '11': {
        question: 'Orioles Hall-of-Famer Eddie Murray shares a last name with this Ghostbusters actor.',
        answer: 'Bill Murray'
    },
    '12': {
        question: 'Multiple Grand Slam winner Andy Murray shares a last name with this Groundhog Day actor.',
        answer: 'Bill Murray'
    },
    '13': {
        question: 'Former President Bill Clinton shares a first name with this Scrooged actor.',
        answer: 'Bill Murray'
    },
    '14': {
        question: 'Pro wake-boarder Shaun Murray shares a last name with this Kingpin actor.',
        answer: 'Bill Murray'
    },
    '15': {
        question: 'Author Bill Bryson shares a first name with this Stripes actor.',
        answer: 'Bill Murray'
    },
    '16': {
        question: 'Orioles Hall-of-Famer Eddie Murray shares a last name with this Ghostbusters actor.',
        answer: 'Bill Murray'
    },
    '17': {
        question: 'Multiple Grand Slam winner Andy Murray shares a last name with this Groundhog Day actor.',
        answer: 'Bill Murray'
    },
    '18': {
        question: 'Former President Bill Clinton shares a first name with this Scrooged actor.',
        answer: 'Bill Murray'
    },
    '19': {
        question: 'Pro wake-boarder Shaun Murray shares a last name with this Kingpin actor.',
        answer: 'Bill Murray'
    },
    '20': {
        question: 'Author Bill Bryson shares a first name with this Stripes actor.',
        answer: 'Bill Murray'
    }
};
const router = express_1.Router();
router.get('/api/v1/questions/', (req, res, next) => {
    res.send({
        totalResults: Object.keys(questions).length,
        results: questions
    });
});
router.get('/api/v1/questions/:id', (req, res, next) => {
    res.send({
        totalResults: 1,
        results: questions[req.params.id]
    });
});
exports.default = router;
//# sourceMappingURL=index.js.map