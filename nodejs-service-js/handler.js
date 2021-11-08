'use strict';
var validator = require('validatorjs');

let param = {
  username: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  password: 'b',
}
let rules = {username: 'required|max:16',password:'required|max:4|min:4'}

module.exports.hello = async (event) => {
  let validation = new validator(param, rules) 
  if (validation.fails()) {
    console.log(validation.errors.all())
  }

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
