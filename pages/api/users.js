import clientPromise from "../../utils/mongoDb";

// utility functions
import AppError from "../../utils/appError";
import catchAsync from "../../utils/catchAsync";

// middlewares
import globalErrorHandler from "../../middleware/errorMd";

async function handler(req, res) {
  const { method } = req;

  const client = await clientPromise;
  const usersCollection = client.db().collection("users");

  if (method === "GET") {
    const users = await usersCollection.find({}).toArray();

    return res.status(200).json({
      status: "success",
      data: users,
    });
  } else {
    const err = new AppError(`No route for ${req.url} found`, 404);
    return globalErrorHandler(err, req, res);
  }
}

export default catchAsync(handler);
