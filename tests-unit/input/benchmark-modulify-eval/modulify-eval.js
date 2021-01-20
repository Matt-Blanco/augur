const {performance} = require('perf_hooks');
let t0 = performance.now();

done = function done(){
    console.log("Done!");
};

// var DUMMY_FILE = './xyzzy';
// var payload = "$(touch " + DUMMY_FILE + ")";

/* for the eval benchmarks, the idea is to inject an assignment to a property of "console", and
 later check whether the property was set */
var payload = 'console[\"my-awesome-prop-23-42\"] = 23;';


function dummySource(val){
    payload += val;
}

dummySource(' ');

var modulify = require('modulify');
modulify.string(payload);

if (console["my-awesome-prop-23-42"]){
    console.log("payload was delivered");
} else {
    console.log("payload NOT delivered");
}

let t1 = performance.now();
let mem = process.memoryUsage().heapUsed / 1024 / 1024;
console.log((t1 - t0)/1000);
console.log(Math.round(mem * 100) / 100);
