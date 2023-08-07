import http from "./helpers/http";
import { userCreateIterface } from "../interfaces/userCreateInterfaces";
import { errorValidateInterface } from "../interfaces/errorValidateInterface";

function create(): userCreateIterface {
    return {
        user: {
            firstName:'Nome',
            lastName:'Sobrenome',
            email:'email',
            password:'senha',
        },
        createUser: async function () {
            try {
                const { data } = await http.post('/user/create', this.user);
                console.log(data);
            } catch (error: any) {
                const errors = error.response?.data?.errors;
                if (errors) {
                    errors.forEach((element: errorValidateInterface) => {
                        const elementValidation = document.querySelector(
                            `#error-${element.path}`
                        ) as HTMLSpanElement;
                        elementValidation.innerHTML = element.msg;

                        setTimeout(() => {
                            elementValidation.innerHTML = "";
                        }, 3000);
                    });
                }
                console.log();
            }
        },
    };
}

export default create;
