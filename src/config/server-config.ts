// @ts-ignore
if (process.env.BROWSER) {
  throw new Error(
    'Do not import from inside the client-side code.',
  );
}

export default {
  server: true
};
