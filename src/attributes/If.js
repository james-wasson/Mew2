import { MewAttribute, DefineMewAttribute } from "../MewAttribute.js";

class If extends MewAttribute {
    static namespace = "";
    static global = true;
    static control = true;
    static priority = 2;
}

DefineMewAttribute(If);

export {
    If
}
