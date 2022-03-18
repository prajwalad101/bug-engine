import clientPromise from "../../utils/mongoDb";

// utility functions
import dbConnect from "../../utils/dbConnect";
import AppError from "../../utils/appError";
import catchAsync from "../../utils/catchAsync";

// models
import Assignee from "../../models/Assignee";

// middlewares
import globalErrorHandler from "../../middleware/errorMd";

async function handler(req, res) {
  await dbConnect();
  const { method } = req; // request type

  if (method === "POST") {
    const newAssignee = await Assignee.create(req.body);

    res.status(200).json({
      status: "success",
      data: newAssignee,
    });
  } else if (method === "GET") {
    const client = await clientPromise;
    const usersCollection = client.db().collection("users");

    const users = await usersCollection.find({}).toArray();

    return res.status(200).json({
      status: "success",
      data: users,
    });
  } else {
    const err = new AppError(`No route for ${req.url} found`, 400);
    return globalErrorHandler(err, req, res);
  }
}

export default catchAsync(handler);
