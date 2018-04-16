const Koa = require('koa');

const app = new Koa();

app.use(async (ctx) => {
  if (ctx.path === '/') {
    ctx.body = 'Hello World';
  } else {
    ctx.body = `${ctx.path.substr(1)}`;
  }
});
app.listen(3000);
