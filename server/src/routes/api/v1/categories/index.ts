import {
    Router,
    Request,
    Response,
    NextFunction
} from 'express';


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

const router: Router = Router();

router.get('/api/v1/categories/', (req: Request, res: Response, next: NextFunction) => {
    res.send({
        totalResults: Object.keys(categories).length,
        results: categories
    });
});

router.get('/api/v1/categories/:id', (req: Request, res: Response, next: NextFunction) => {
    res.send({
        totalResults: 1,
        results: categories[req.params.id]
    });
});

export default router;