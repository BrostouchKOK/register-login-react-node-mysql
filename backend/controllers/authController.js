import db from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

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
    const {email, password} = req.body;
    const [rows] = await db.query("SELECT * FROM users WHERE email = ?",[email]);
    if(rows.length === 0){
        return res.status(404).json({
            success: false,
            message: "User doesn't exist"
        })
    }

    const isMatch = await bcrypt.compare(password,rows[0].password);
    if(!isMatch){
        return res.status(401).json({
            success: false,
            message:"Wrong password!"
        })
    }

    // create token
    const token = jwt.sign({id: rows[0].id}, process.env.JWT_KEY, {expiresIn: '3h'})
    
    return res.status(201).json({
        success: true,
        message: "Login successfully",
        token
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error", error });
  }
};

export { register, login };
