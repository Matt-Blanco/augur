exports.drive = (m) => {

    m.functionCall(0, 0);

    m.push(false);

    m.functionCall(5, 5);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("a");

    m.initVar("b");

    m.initVar("z");

    m.push(false);

    m.writeVar("a");

    m.push(false);

    m.writeVar("b");

    m.readVar("a");

    m.push(false);

    m.binaryOp();

    m.writeVar("a");

    m.writeVar("z");

    m.endExecution();

};

