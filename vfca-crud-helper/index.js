import { appendFile, readFile, writeFile } from "./helper.js";

console.log(await readFile("animals"));

export const createItems = async (fileName, item) => {
  await appendFile(fileName, `${item}`);
  return await readFile(fileName);
};

export const readItems = async (fileName, index) => {
  return await readFile(fileName);
};

export const updateItems = (fileName, targetItem, newItem) => {};

export const deleteItems = (fileName, targetItem) => {};

console.log(await createItems("animals", "horse"));
