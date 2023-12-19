const jwt = require('jsonwebtoken');
const { options } = require('../routes/auth');

const extractBearerToken = (headerValue) => {
    if (typeof headerValue !== 'string') {
      return false;
    }
    const matches = headerValue.match(/(bearer)\s+(\S+)/i);
    return matches && matches[2];
  };
  
  const checkTokenMiddleware = (req, res, next) => {
    const token = req.headers.authorization && extractBearerToken(req.headers.authorization);
  
    if (!token) {
      return res.status(401).json({ message: 'need a token' });
    }
  
    jwt.verify(token, process.env.SECRET, options, (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ message: 'bad token' });
      }
      else{
        req.userId = decodedToken.id; 
      }
    });
  
    next();
  };

module.exports = { checkTokenMiddleware, extractBearerToken };