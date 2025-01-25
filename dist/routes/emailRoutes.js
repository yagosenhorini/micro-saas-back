"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const emailController_1 = require("../controllers/emailController");
const middlewares_1 = require("../middlewares");
const router = (0, express_1.Router)();
router.post("/send-email", middlewares_1.authenticateToken, emailController_1.sendEmailController);
router.get("/get-email", middlewares_1.authenticateToken, emailController_1.getEmails);
exports.default = router;
