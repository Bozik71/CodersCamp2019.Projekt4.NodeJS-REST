import * as express from 'express';
import {RoomSearcher} from "../../roomsearch/RoomSearcher";
import {isDefined} from "../../utils";


export default (roomSearcher: RoomSearcher) => {
    const router: express.Router = express.Router();

    router.get('', async (req, res) => {
        const filter = req.query;
        const offers = await roomSearcher.searchOffersBy(filter);
        res.send(isDefined(offers) ? offers : [])
    });

    return router;
}

export const ROUTE_URL = '/offers';
