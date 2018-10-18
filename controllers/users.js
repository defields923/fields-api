async function hello(ctx) {
  const user = 'Hello!';
  ctx.ok({ user });
}

module.exports = {
  hello,
};
