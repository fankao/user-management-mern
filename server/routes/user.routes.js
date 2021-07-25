import express from 'express';
import userCtl from '../controllers/user.controller';
import authCtrl from '../controllers/auth.controller'

const router = express.Router();

router.route('/api/users')
    .get(authCtrl, userCtl.list)
    .post(userCtl.create);

router.route('/api/users/:userId')
    .get(authCtrl.requireSignin, userCtrl.read)
    .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
    .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove);

router.param('userId', userCtl.getUserId);

export default router
