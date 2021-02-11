import { Analyzer, main, NPCallbacks, Sandbox } from "../nodeprof";
const {performance} = require('perf_hooks');

// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

// An empty NodeProf analysis for the purpose of instrumenting a JS file to
// observe NodeProf's callbacks.

const interestingBuiltins = new Set([
    "Promise.prototype.then",
]);

function shouldPrintBuiltin(name: string) {
    // return name.indexOf("then") > 0;
    return interestingBuiltins.has(name);
    // return true;
}

export default class Analyze implements Analyzer {
    public sandbox: Sandbox;
    private time: number = 0;

    constructor(sandbox: Sandbox) {
        this.sandbox = sandbox;
    }
    public invokeFunPre: NPCallbacks.invokeFunPre = (iid, f, receiver, args, isConstructor, isMethn, functionIid, functionSid) => {
        // console.log("invokeFunPre", f, receiver, args, isConstructor, isMethn, functionIid, functionSid);
        let start: number = performance.now()/1000;
        let diff = performance.now() / 1000 - start;
        this.time += diff
    }
    public invokeFun: NPCallbacks.invokeFun = (iid,  f, receiver, args, result, isConstructor, isMethod, functionIid, functionSid) => {
    //    console.log("invokeFun",  f, receiver, args, result, isConstructor, isMethod, functionIid, functionSid);
        let start: number = performance.now()/1000;
        let diff = performance.now() / 1000 - start;
        this.time += diff
    }
    public literal: NPCallbacks.literal = (iid, val, hasGetterSetter) => {
        // console.log("literal", val, hasGetterSetter);
        let start: number = performance.now()/1000;
        let diff = performance.now() / 1000 - start;
        this.time += diff
    }
    public getFieldPre: NPCallbacks.getFieldPre = (iid, receiver, offset, isComputed, isOpAssign, isMethodCall) => {
        // console.log("getFieldPre", receiver, offset, isComputed, isOpAssign, isMethodCall);
        let start: number = performance.now()/1000;
        let diff = performance.now() / 1000 - start;
        this.time += diff
    }
    public getField: NPCallbacks.getField = (iid, receiver, offset, val, isComputed, isOpAssin, isMethodCall) => {
    //    console.log("getField", receiver, offset, val, isComputed, isOpAssin, isMethodCall);
        let start: number = performance.now()/1000;
        let diff = performance.now() / 1000 - start;
        this.time += diff
    }
    public putFieldPre: NPCallbacks.putFieldPre = (iid, receiver, offset, val, isComputed, isOpAssin) => {
        // console.log("putFieldPre", receiver, offset, val, isComputed, isOpAssin);
        let start: number = performance.now()/1000;
        let diff = performance.now() / 1000 - start;
        this.time += diff
    }
    public putField: NPCallbacks.putField = (iid, receiver, offset, val, isComputed, isOpAssin) => {
        // console.log("putField", receiver, offset, val, isComputed, isOpAssin);
        let start: number = performance.now()/1000;
        let diff = performance.now() / 1000 - start;
        this.time += diff
    }
    public read: NPCallbacks.read = (iid, name, val, isGlobal, isScriptLocal) => {
        // console.log("read", name, val, isGlobal, isScriptLocal);
        let start: number = performance.now()/1000;
        let diff = performance.now() / 1000 - start;
        this.time += diff
    }
    public write: NPCallbacks.write = (iid, name, val, originalValue, isGlobal, isScriptLocan) => {
        // console.log("write", name, val, originalValue, isGlobal, isScriptLocan);
        let start: number = performance.now()/1000;
        let diff = performance.now() / 1000 - start;
        this.time += diff
    }
    public functionEnter: NPCallbacks.functionEnter = (iid, f, receiver, args) => {
        // console.log("functionEnter", f, receiver, args);
        let start: number = performance.now()/1000;
        let diff = performance.now() / 1000 - start;
        this.time += diff
    }
    public functionExit: NPCallbacks.functionExit = (iid,  returnVal, wrappedExceptionVal?) => {
        // console.log("functionExit",  returnVal, wrappedExceptionVal);
        let start: number = performance.now()/1000;
        let diff = performance.now() / 1000 - start;
        this.time += diff
    }
    public binaryPre: NPCallbacks.binaryPre = (iid, op, left, right, isOpAssign, isSwitchCaseComparison, isComputed) => {
        // console.log("binaryPre", op, left, right, isOpAssign, isSwitchCaseComparison, isComputed);
        let start: number = performance.now()/1000;
        let diff = performance.now() / 1000 - start;
        this.time += diff
    }
    public binary: NPCallbacks.binary = (iid, op, left, right, result, isOpAssign, isSwitchCaseComparison, isComputed) => {
        // console.log("binary", op, left, right, result, isOpAssign, isSwitchCaseComparison, isComputed);
        let start: number = performance.now()/1000;
        let diff = performance.now() / 1000 - start;
        this.time += diff
    }
    public unaryPre: NPCallbacks.unaryPre = (iid, op, left) => {
        // console.log("unaryPre", op, left);
        let start: number = performance.now()/1000;
        let diff = performance.now() / 1000 - start;
        this.time += diff
    }
    public unary: NPCallbacks.unary = (iid, op, left, result) => {
        // console.log("unary", op, left, result);
        let start: number = performance.now()/1000;
        let diff = performance.now() / 1000 - start;
        this.time += diff
    }
    public conditional: NPCallbacks.conditional = (iid, result) => {
        // console.log("conditional", result);
        let start: number = performance.now()/1000;
        let diff = performance.now() / 1000 - start;
        this.time += diff
    }
    public endExecution: NPCallbacks.endExecution = () => {
        // console.log("endExecution");
        let start: number = performance.now()/1000;
        let diff = performance.now() / 1000 - start;
        this.time += diff
    }
    public forObject: NPCallbacks.forObject = (iid, isForIn) => {
        // console.log("forinObject", isForIn);
        let start: number = performance.now()/1000;
        let diff = performance.now() / 1000 - start;
        this.time += diff
    }
    public declare: NPCallbacks.declare = (iid, name, type) => {
        // console.log("declare", name, type);
        let start: number = performance.now()/1000;
        let diff = performance.now() / 1000 - start;
        this.time += diff
    }
    // public declare: NPCallbacks.declare = (iid, name, val, isArgument, argumentIndex, isCatchParam) => {
    //     console.log("declare", name, val, isArgument, argumentIndex, isCatchParam);
    // }
    public _return: NPCallbacks._return = (iid, val) => {
        // console.log("_return", val);
        let start: number = performance.now()/1000;
        let diff = performance.now() / 1000 - start;
        this.time += diff
    }
    public _throw: NPCallbacks._throw = (iid, val) => {
        // console.log("_throw", val);
        let start: number = performance.now()/1000;
        let diff = performance.now() / 1000 - start;
        this.time += diff
    }
    public _with: NPCallbacks._with = (iid, val) => {
        // console.log("_with", val);
        let start: number = performance.now()/1000;
        let diff = performance.now() / 1000 - start;
        this.time += diff
    }
    public builtinEnter: NPCallbacks.builtinEnter = (name, f, receiver, args) => {
        let start: number = performance.now()/1000;
        if (shouldPrintBuiltin(name)) {
            // console.log("builtinEnter", name, f, receiver, args);
        }
        let diff = performance.now() / 1000 - start;
        this.time += diff
    }
    public builtinExit: NPCallbacks.builtinExit = (name, returnVal) => {
        let start: number = performance.now()/1000;
        if (shouldPrintBuiltin(name)) {
            // console.log("builtinExit", name, returnVal);
        }
        let diff = performance.now() / 1000 - start;
        this.time += diff
    }
    public evalFunctionPre: NPCallbacks.evalFunctionPre = (iid, f, receiver, args) => {
        // console.log("evalFunctionPre", f, receiver, args);
        let start: number = performance.now()/1000;
        let diff = performance.now() / 1000 - start;
        this.time += diff
    }
    public evalFunctionPost: NPCallbacks.evalFunctionPost = (iid, f, receiver, args, ret) => {
        // console.log("evalFunctionPost", f, receiver, args, ret);
        let start: number = performance.now()/1000;
        let diff = performance.now() / 1000 - start;
        this.time += diff
    }
    public evalPre: NPCallbacks.evalPre = (iid, str) => {
        // console.log("evalPre", str);
        let start: number = performance.now()/1000;
        let diff = performance.now() / 1000 - start;
        this.time += diff
    }
    public evalPost: NPCallbacks.evalPost = (iid, str) => {
        // console.log("evalPost", str);
        let start: number = performance.now()/1000;
        let diff = performance.now() / 1000 - start;
        this.time += diff
    }

    public startStatement: NPCallbacks.startStatement = (iid, type) => {
        // console.log("startStatement", iid, type);
        let start: number = performance.now()/1000;
        let diff = performance.now() / 1000 - start;
        this.time += diff
    }

    public endStatement: NPCallbacks.endStatement = (iid, type) => {
        // console.log("endStatement", iid, type);
        let start: number = performance.now()/1000;
        let diff = performance.now() / 1000 - start;
        this.time += diff
    }

    public startExpression: NPCallbacks.startExpression = (iid, type) => {
        // console.log("startExpression", iid, type);
        let start: number = performance.now()/1000;
        let diff = performance.now() / 1000 - start;
        this.time += diff
    }

    public endExpression: NPCallbacks.endExpression = (iid) => {
        // console.log("endExpression", iid);
        let start: number = performance.now()/1000;
        let diff = performance.now() / 1000 - start;
        this.time += diff
    }

    public onReady: NPCallbacks.onReady = () => {
        // console.log("onReady");
        let start: number = performance.now()/1000;
        let diff = performance.now() / 1000 - start;
        this.time += diff
    }
}
