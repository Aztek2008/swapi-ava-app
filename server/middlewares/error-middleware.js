import ApiError from '../exceptions/api-error.js';

function apiErrorMvr(err, req, res, next) {
  console.log(`Error log in middleware: `, err);

  if (err instanceof ApiError) {
    return res
      .status(err.status)
      .json({ message: err.message, errors: err.errors });
  }

  return res.status(500).json({ message: 'Unknown server error ' });
}

export default apiErrorMvr;
