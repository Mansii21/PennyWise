const {
  addExpense,
  getExpense,
  deleteExpense,
} = require("../controllers/expense");
const {
  addIncome,
  getIncomes,
  deleteIncome,
} = require("../controllers/income");
const {
  userRegisterCtrl,
  loginUserCtrl,
  fetchUsersCtrl,
  userProfileCtrl,
  updateUserCtrl,
  deleteUsersCtrl,
  fetchUserDetailsCtrl,
} = require("../controllers/user");
const authMiddleware = require("../middleware/authMiddleware");
const router = require("express").Router();

router
  .post("/add-income", addIncome)
  .get("/get-incomes", getIncomes)
  .delete("/delete-income/:id", deleteIncome)
  .post("/add-expense", addExpense)
  .get("/get-expense", getExpense)
  .delete("/delete-expense/:id", deleteExpense)
  .post("/register", userRegisterCtrl)
  .post("/login", loginUserCtrl)
  .get("/", authMiddleware, fetchUsersCtrl)
  .get("/users", fetchUsersCtrl)
  .get("/profile/", authMiddleware, userProfileCtrl)
  .put("/:id", authMiddleware, updateUserCtrl)
  .delete("/:id", deleteUsersCtrl)
  .get("/:id", fetchUserDetailsCtrl);
module.exports = router;
