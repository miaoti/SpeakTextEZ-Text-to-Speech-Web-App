import { ErrorRequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

const getInfo = (error: Error) => {
  return {
    message: error.message,
  };
};

export const errorHandler = (): ErrorRequestHandler => {
  return (error, req, res, next) => {
    const status = error?.expected
      ? StatusCodes.BAD_REQUEST
      : StatusCodes.INTERNAL_SERVER_ERROR;

    res.status(status).send(getInfo(error));
  };
};
