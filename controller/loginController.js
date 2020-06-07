const Login = require("../model/Login")

module.exports = {
    login: (req, res) => {
        res.render("login")
    },

    register: (req, res) => {
        res.render("register");
    },

    dashboard: (req, res) => {
        res.render("dashboard")
    },

    bin: (req, res) => {
        res.render("bin")
    },

    bin_profile: (req, res) => {
        res.render("bin_profile")
    },

    assign_bin: (req, res) => {
        res.render("assign_bin")
    },

    user: (req, res) => {
        res.render("user")
    },

    user_profile: (req, res) => {
        res.render("user_profile")
    },

    article: (req, res) => {
        res.render("article")
    },

    add_article: (req, res) => {
        res.render("add_article")
    },

    goals: (req, res) => {
        res.render("goals")
    },

    add_goals: (rew, res) => {
        res.render("add_goals")
    },

    rewards: (req, res) => {
        res.render("rewards")
    },

    add_rewards: (req, res) => {
        res.render("add_rewards")
    },

    notification: (req, res) => {
        res.render("notification")
    },

    logout: function(req, res) {
        firebase.auth().signOut();
        res.cookie('userLogin', "", { maxAge: 0 });
        res.redirect("/")
    },

    save: (req, res) => {

    },

    update: (req, res) => {

    },

    destroy: (req, res) => {

    }
}