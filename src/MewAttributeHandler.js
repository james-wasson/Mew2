import { parse as parseLoose } from "./lib/acorn-6.2.1/acorn-loose.js";
import { parse } from "./lib/acorn-6.2.1/acorn.js";
import { findGlobals } from "./lib/acorn-globals-4.3.3/acorn-globals.js";

class MewAttributeHandler {
    tagTypes = ["*"];
    loose = true;

    constructor(jsString) {
        let parsed = this.loose === true ? parseLoose(jsString) : parse(jsString);
        console.log(parsed);
    }
};

export {
    MewAttributeHandler
}
