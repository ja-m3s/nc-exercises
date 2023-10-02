console.log('Loading function');

exports.handler = async (event, context) => {
    return 'test data entered: '+event.key1;  // Echo back the first key value
};
