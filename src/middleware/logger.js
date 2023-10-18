const logger = (req, res, next) => {
  const { method, url, body, query, params } = req;

  console.log(req.params);

  console.log(
    `[INFO]: ${method} request to ${url} | body: ${JSON.stringify(
      body
    )} | query: ${JSON.stringify(query)} | params: ${JSON.stringify(params)}`
  );

  next();
};

module.exports = { logger };
