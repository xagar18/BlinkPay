import jwt from 'jsonwebtoken';

export const isLoggedIn = async (req, res, next) => {
  console.log('isLoggedIn called');
  try {
    const token = req.cookies.test;
    console.log('token', token);
    if (!token) {
      console.log('no token found');
      return res.status(401).json({
        message: 'Unauthorized',
      });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('decoded', decoded);
    req.user = decoded;
    console.log('req.user', req.user);
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Unauthorized',
    });
  }
};

// 9003143125