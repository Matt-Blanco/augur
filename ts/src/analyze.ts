import { Analyzer, NPCallbacks, Sandbox } from "./nodeprof";
import StateMachine from "./statemachine";

// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

export default class Analyze implements Analyzer {
    private sandbox: Sandbox;
    private state = new StateMachine({
        sinks: process.env.SINKS.split(","),
        sources: process.env.SOURCES.split(","),
    });

    constructor(sandbox: Sandbox) {
        this.sandbox = sandbox;
    }

    public literal: NPCallbacks.literal = (iid, val, hasGetterSetter) => {
        this.state.push(false);
    }

    public read: NPCallbacks.read = (iid, name, val, isGlobal, isScriptLocal) => {
        this.state.readvar(name);
    }

    public write: NPCallbacks.write = (iid, name, val, originalValue, isGlobal, isScriptLocal) => {
        this.state.writevar(name);
    }

    public invokeFunPre: NPCallbacks.invokeFunPre = (iid, f, rec, args, isC, isM, funId, funSid) => {
        // console.log(f);
    }

    public endExecution: NPCallbacks.endExecution = () => {
        const taints = this.state.getTaint()
            .sort((a, b) => a.localeCompare(b));
        process.stderr.write(JSON.stringify(taints, null, 2));
    }
}
