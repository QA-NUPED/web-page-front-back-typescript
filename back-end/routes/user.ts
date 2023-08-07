import express from 'express';

//Controllers
import { store } from '../controllers/User';

//Validation
import { userStoryValidate } from '../validations/user-validate';


const router = express.Router();

router.post('/create', userStoryValidate, store);

export default router