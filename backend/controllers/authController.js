import db from "../config/db.js";
import bcrypt from "bcrypt";

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    if (rows.length > 0) {
      return res.json({
        success: false,
        message: "User already existed",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    await db.query(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, hashPassword],
    );

    res.status(201).json({
        success: true,
        message: "User created successfully!"
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error", error });
  }
};

const login = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error", error });
  }
};

export { register, login };
