const fs = require("fs/promises");
const path = require("path");

const dataFilePath = path.join(__dirname, "..", "data", "orders.json");

async function readOrders() {
  const raw = await fs.readFile(dataFilePath, "utf8");
  return JSON.parse(raw);
}

async function writeOrders(orders) {
  const content = JSON.stringify(orders, null, 2);
  await fs.writeFile(dataFilePath, `${content}\n`, "utf8");
}

module.exports = {
  readOrders,
  writeOrders
};
