const {performance} = require('perf_hooks');
let t0 = performance.now();

done = function done(){
    console.log("Done!");
};


var DUMMY_FILE = './xyzzy';

var command = "$(touch " + DUMMY_FILE + ")";

function dummySource(val){
    command += val;
}

dummySource(' ');

var si = require('systeminformation');

si.cpu(function(data) {
    console.log('CPU-Information:');
    console.log(data);
    console.log("***after call to exec");
    done(); // note: important to call done() here
}, command);

let t1 = performance.now();
let mem = process.memoryUsage().heapUsed / 1024 / 1024;
console.log((t1 - t0)/1000);
console.log(Math.round(mem * 100) / 100);


