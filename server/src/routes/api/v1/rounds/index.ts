import {
    Router,
    Request,
    Response,
    NextFunction
} from 'express';

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

const router: Router = Router();

router.get('/api/v1/rounds/', (req: Request, res: Response, next: NextFunction) => {
    res.send({
        totalResults: Object.keys(rounds).length,
        results: rounds
    });
});

router.get('/api/v1/rounds/:id', (req: Request, res: Response, next: NextFunction) => {
    res.send({
        totalResults: 1,
        results: rounds[req.params.id]
    });
});

export default router;