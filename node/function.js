exports.handler = function (event, context) {

    process.env.PATH = process.env.PATH + ':' + process.env.LAMBDA_TASK_ROOT;

    context.fail('FIX ME');
};
