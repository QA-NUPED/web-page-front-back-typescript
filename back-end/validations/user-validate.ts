import { body } from "express-validator"

export const userStoryValidate = [
    
    body("firstName").escape().not().isEmpty().withMessage("Nome obrigatório"),
    body("lastName").escape().not().isEmpty().withMessage("Sobrenome obrigatório"),
    body("email").escape().not().isEmpty().isEmail().withMessage("E-mail não é valido"),
    body("password").escape().not().isEmpty().withMessage("Nome obrigatório"),

];