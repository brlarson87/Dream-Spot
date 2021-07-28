const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors')

const app = express();

app.use(cors())

connectDB();

const PORT = process.env.PORT || 5000;

app.use(express.json({ extended: false }));

app.use("/api/userAuth", require("./routes/api/userAuth"));
app.use("/api/userInteractive", require("./routes/api/userInteractive"));
app.use("/api/charity", require("./routes/api/charity"));
app.use("/api/prizes", require("./routes/api/prizes"));
app.use("/api/results", require("./routes/api/results"));
app.use("/api/admin", require("./routes/api/admin"));


app.listen(PORT, () => {
    console.log(`SERVER RUNNING! PORT ${PORT}`);
});
