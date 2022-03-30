import clientPromise from "../../../utils/mongoDb";

// utility functions
import AppError from "../../../utils/appError";
import catchAsync from "../../../utils/catchAsync";

// middlewares
import globalErrorHandler from "../../../middleware/errorMd";
import { ObjectId } from "mongodb";

async function handler(req, res) {
  const { method } = req;
  const { userId } = req.query;

  const client = await clientPromise;
  const usersCollection = client.db().collection("users");

  if (method === "PATCH") {
    const updatedInfo = await usersCollection.updateOne(
      { _id: ObjectId(userId) },
      {
        $set: req.body,
      }
    );

    res.status(200).json({
      status: "success",
      data: updatedInfo,
    });
  } else {
    const err = new AppError(`No route for ${req.url} found`, 404);
    return globalErrorHandler(err, req, res);
  }
}

export default catchAsync(handler);
