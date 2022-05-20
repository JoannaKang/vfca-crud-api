import fs from "fs/promises";

// CREATE
export const appendFile = async (fileName, item) => {
  console.log(fileName, item);
  if (!fileName) throw "The file name is not exist";
  if (!item) throw "item did not added";
  await fs.appendFile(`./data/${fileName}.csv`, `${item}\r\n`);
};

// READ
export const readFile = async (fileName) => {
  if (!fileName) throw "the File name is missing";
  const data = await fs.readFile(`./data/${fileName}.csv`, "utf-8");
  console.log(data);
};

//UPDATE
export const writeFile = () => {};
