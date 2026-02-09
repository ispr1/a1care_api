export const attachFileUrl = (req, res, next) => {
    if (req.file && req.file.location) {
        req.fileUrl = req.file.location;
    }
    next();
};
//# sourceMappingURL=attackFIle.js.map