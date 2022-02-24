import globalErrorHandler from "../middleware/errorMd";

function catchAsync(handler) {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (err) {
      globalErrorHandler(err, req, res);
    }
  };
}

export default catchAsync;
