'use strict';
var ejs = require('ejs');
const fs = require('fs');
const validator = require('validatorjs');

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

  // HTML出力
  const index = fs.readFileSync('./templates/index.ejs','utf8');
  const data = {
    item: {
      name: 'yosistamp'
    }
  };
  return {
    statusCode: 200,
    headers: {"content-type": "text/html"},
    body: ejs.render(index, data)
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
