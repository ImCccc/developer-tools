#!/usr/bin/env node
const Koa = require("koa");
const serve = require("koa-static");
const bodyParser = require("koa-bodyparser");
const { router } = require("./router");
const app = new Koa();

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());
app.use(serve(__dirname + "/views", { extensions: ["html"] }));

app.listen(3030, function () {
  console.log("http://localhost:3030/");
});
