import app from "./app.js";
import cloudinary from "cloudinary";
import dotenv from "dotenv";
import path from "path";

dotenv.config();
const __dirname = path.resolve();

cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});
app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
})


app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});
