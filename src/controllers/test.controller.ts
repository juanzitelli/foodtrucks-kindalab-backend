import { RequestHandler } from "express";

type Developer = {
  stack: string[];
};

const Juan: Developer = {
  stack: ["React", "Node", "TypeScript"],
};


export const TestControllerFunction: RequestHandler = (req, res, next) => {
  type TestBody = { message: string };

  const msg = (req.body as TestBody).message;

  res.status(200).json({
    msg: `Hello ${process.env.MY_NAME}, your stack is ${Juan.stack.map(
      t => `${t}`
    )} and you said ${msg}`,
  });
};
