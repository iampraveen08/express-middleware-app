const logger = (req, res, next) => {
    console.log(`Middleware 1: ${req.method} ${req.url}`);
    next();
};

module.exports = logger;
