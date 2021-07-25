import express from 'express';
import userCtl from '../controllers/user.controller';

const router = express.Router();

router.route('/api/users')
    .get(userCtl.list)
    .post(userCtl.create);

router.route('/api/users/:userId')
    .get(userCtrl.read)
    .put(userCtrl.update)
    .delete(userCtrl.remove);

router.param('userId', userCtl.getUserId);

export default router
