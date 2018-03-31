const uuid = require('uuid');

const generateTestFlow = () => {
    let fncNodeId = uuid.v4();
    let resNodeId = uuid.v4();

    let z = uuid.v4();
    return {
        label: 'Test flow',
        nodes: [
            {
                type: 'http in',
                name: 'testapi',
                url: '/testapi',
                method: 'get',
                swaggerDoc: '',
                x: 100,
                y: 100,
                wires: [
                    [
                        fncNodeId
                    ]
                ]
            },
            {
                id: fncNodeId,
                type: 'function',
                name: 'testfnc',
                func: "msg.payload = {test: 'test'}\nreturn msg;",
                outputs: 1,
                noerr: 0,
                x: 300,
                y: 100,
                wires: [
                    [
                        resNodeId
                    ]
                ]
            },
            {
                id: resNodeId,
                type: 'http response',
                name: 'testres',
                statusCode: '200',
                x: 500,
                y: 100,
                wires: [

                ]
            }
        ]
    }
};

module.exports = {
    generateTestFlow
};