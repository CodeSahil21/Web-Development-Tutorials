// backend/index.js
const express = require('express');
const cors = require("cors");
const rootRouter = require("./routes/index");

const app = express();
app.use(bodyParser.json())
app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

app.listen(3000);