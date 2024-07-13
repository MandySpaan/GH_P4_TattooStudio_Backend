"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdmin = void 0;
const isAdmin = (req, res, next) => {
    try {
        if (req.tokenData.role != "1") {
            return res.status(403).json({
                success: false,
                message: "You have to be admin for this",
            });
        }
        next();
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error in admin entree",
        });
    }
};
exports.isAdmin = isAdmin;
