import {TaintDescription} from "./types";

// Do the given descriptions of a taint source/sink describe the same thing?
// Two descriptions are considered equal if all of the common taint source/sink
// properties they provide are equal.
export function sameDescription(t1: TaintDescription, t2: TaintDescription) {
    if (typeof t1 !== "object" || typeof t2 !== "object") {
        throw new Error("sameDescription was passed a non-object: "
            + t1.toString()
            + " & "
            + t2.toString());
    }
    return ["type", "name", "fileName"]
        .filter((prop) => t1.hasOwnProperty(prop))
        .filter((prop) => t2.hasOwnProperty(prop))
        .every(prop => t1[prop] === t2[prop]);
}