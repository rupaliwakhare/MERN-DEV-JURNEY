import express  from "express"

const login = (req, res) => {
  res.send("Login page");
};

const singup = (req, res) => {
  res.send("singup page");
};

export { login, singup };
