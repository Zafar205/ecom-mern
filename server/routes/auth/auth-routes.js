const express = require("express");
const { registerUsers, loginUsers, logoutUsers, authMiddleware } = require("../../controllers/auth/auth-controller");


const router = express.Router();
router.post("/register", registerUsers);
router.post("/login", loginUsers);
router.post("/logout", logoutUsers);
router.get("/check-auth", authMiddleware, (req, res) => {
    const user = req.user;
    res.status(200).json({
        success : true,
        message : "authenticated user",
        user
    })
})

module.exports = router;