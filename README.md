# sls-nodejs


## setup
### create 

```
serverless create --template aws-nodejs-typescript --name nodejs-service --path nodejs-service
```

## deploy

```
$ cd nodejs-service
$ npm install
$ sls deploy
```

## ejs

```
<% %> : スクリプト記述
<%= %> : HTMLエスケープして出力
<%- %> : HTMLエスケープせずに出力
<%# %> : コメント
```