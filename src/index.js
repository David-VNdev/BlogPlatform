import express from "express";
import morgan from "morgan"; //logger
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import route from "./routes/index.js";

import { engine, create } from "express-handlebars";
const app = express();
const port = 3000;

// Middlewares
// Static
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, "public")));
// HTTP logger
app.use(morgan("combined"));

// Body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Handle bars template engine
app.set("views", path.resolve(__dirname, "resources", "views"));
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");


// Routes
route(app);
app.listen(3000, () => {
  console.log(`Blog app is listening at http://localhost:${port}`);
});