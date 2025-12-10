import jwt from "jsonwebtoken";

export const isLoggedIn = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized - No token provided",
      });
    }

    const tokenData = jwt.verify(token, process.env.JWT_SECRET);
    req.user = tokenData;
    console.log("req.user", req.user);
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized - Invalid or expired token",
    });
  }
};
