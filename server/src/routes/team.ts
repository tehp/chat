import * as express from 'express';

let router = express.Router();

router.get('/', () => {
  console.log('/team hit');
})

export = router;
