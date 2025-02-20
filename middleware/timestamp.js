const timestamp = (req, res, next) => {
    req.timestamp = new Date();
    console.log(`Middleware 2: Timestamp added - ${req.timestamp}`);
    next();
};

module.exports = timestamp;
