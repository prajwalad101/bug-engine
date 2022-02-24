function catchAsync(handler) {
  return async (req, res) => {
    await handler(req, res).catch((err) => {
      return res.status(400).json({
        status: "fail",
        message: err,
      });
    });
  };
}

export default catchAsync;
