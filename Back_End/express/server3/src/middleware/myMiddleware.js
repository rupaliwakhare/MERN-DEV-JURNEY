const myMiddleware = (req, res, next) => {
  let data = req.headers["x-api-key"];
  if (!data) {
    return res.send("missing");
  }
  if (data !== "12345") {
    return res.send("invalid");
  }

  next();
};
export default myMiddleware;
