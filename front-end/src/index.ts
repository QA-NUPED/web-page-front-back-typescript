import "alpinejs";
import create from "./create";
import { userCreateIterface } from "../interfaces/userCreateInterfaces";

declare global {
    interface Window {
        create: () => userCreateIterface;
    }
}

window.create = create;