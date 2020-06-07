const express = require("express")
const router = express.Router()
const loginController = require("../controller/loginController")

router.get("/login", loginController.login)
router.get("/register", loginController.register)
router.get("/dashboard", loginController.dashboard)
router.get("/bin", loginController.bin)
router.get("/bin_profile", loginController.bin_profile)
router.get("/assign_bin", loginController.assign_bin)
router.get("/user", loginController.user)
router.get("/user_profile", loginController.user_profile)
router.get("/article", loginController.article)
router.get("/add_article", loginController.add_article)
router.get("/goals", loginController.goals)
router.get("/add_goals", loginController.add_goals)
router.get("/rewards", loginController.rewards)
router.get("/add_rewards", loginController.add_rewards)
router.get("/notification", loginController.notification)
router.get("/logout", loginController.logout)
module.exports = router