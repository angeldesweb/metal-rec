import { FormStore } from "./FormStore";
import { ThemeStore } from "./ThemeStore";
import { AuthStore } from './AuthStore';
import { RouterStore } from "./RouterStore";
import { Inbounds, MaterialStore } from "./MaterialsStore";
import { UserStore } from "./UserStore";

export const theme = ThemeStore();

export const forms = FormStore();

export const user = AuthStore();

export const router = RouterStore();

export const step = MaterialStore();

export const minbounds = Inbounds();

export const authUser = UserStore();

