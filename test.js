const axios = require('axios')

async function run(){

    console.log(await sendPost('getPeers', ''))

}

run();


async function sendPost(methodName, perams) {

    let sendData = {
        jsonrpc: '2.0',
        method: methodName,
        params: perams,
        id: 1
    };

    return axios({
        method: 'post',
        url: '207.148.17.86:7077/rpc',
        data: sendData,
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
    })
        .then(function (response) {
            if (response.data.result == undefined) {
                return response.data;
            }
            return response.data.result;
        })
        .catch(function (error) {
            return error;
        });
};