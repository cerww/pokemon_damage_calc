export function deepCopy(thing: any): any {
    if (typeof thing === "string" ||
        typeof thing === "number" ||
        typeof thing === "boolean" ||
        typeof thing === "bigint" ||
        typeof thing === "function" ||
        typeof thing === "symbol" ||
        thing === undefined) {
        return thing;
    }

    if (typeof thing === "object") {
        if (Array.isArray(thing)) {
            return thing.map((a) => deepCopy(a));
        } else {
            let r: { [key: string]: any } = {};
            for (let [k, v] of Object.entries(thing)) {
                r[k] = deepCopy(v);
            }
            return r;
        }
    }

}

export function deepCopyN(thing: any): any {
    if (typeof thing === "string" ||
        typeof thing === "number" ||
        typeof thing === "boolean" ||
        typeof thing === "bigint" ||
        typeof thing === "function" ||
        typeof thing === "symbol" ||
        thing === undefined) {
        return thing;
    }

    if (typeof thing === "object") {
        if (Array.isArray(thing)) {
            return thing.map((a) => deepCopy(a));
        } else {
            let r: { [key: string]: any } = {};
            for (let [k, v] of Object.entries(thing)) {
                r[k] = deepCopy(v);
            }
            return r;
        }
    }

}