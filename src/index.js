const express = require("express");
const { router } = require("./routes");
const { logger } = require("./middleware/logger");

const PORT = 4000;

const app = express();

app.use(express.json());
app.use(logger);
app.use(router);

const onListen = () => {
  console.log(`Navigate to http://localhost:${PORT}`);
};

app.listen(PORT, onListen);
