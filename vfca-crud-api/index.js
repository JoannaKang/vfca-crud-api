import express from "express";

import { createItems, readItems } from "vfca-crud-helper";

const PORT = 5001;

const app = express();

app.get("/:fileNames", (req, res) => {
  readItems(req.params.fileName).then((items) => res.send(items));
});

app.listen(PORT, () =>
  console.log(`server is running: http:localhost:${PORT}`)
);
