const { readOrders, writeOrders } = require("./storage");

function nextId(orders) {
  const maxId = orders.reduce((max, order) => Math.max(max, order.id), 0);
  return maxId + 1;
}

async function listOrders() {
  return readOrders();
}

async function addOrder(item) {
  if (!item || !item.trim()) {
    throw new Error("Order item cannot be empty.");
  }

  const orders = await readOrders();
  const newOrder = {
    id: nextId(orders),
    item: item.trim(),
    status: "pending"
  };
  orders.push(newOrder);
  await writeOrders(orders);
  return newOrder;
}

async function completeOrder(id) {
  const orderId = Number(id);
  if (!Number.isInteger(orderId) || orderId <= 0) {
    throw new Error("Please provide a valid numeric order ID.");
  }

  const orders = await readOrders();
  const order = orders.find((entry) => entry.id === orderId);
  if (!order) {
    throw new Error(`Order with ID ${orderId} was not found.`);
  }

  order.status = "completed";
  await writeOrders(orders);
  return order;
}

async function removeOrder(id) {
  const orderId = Number(id);
  if (!Number.isInteger(orderId) || orderId <= 0) {
    throw new Error("Please provide a valid numeric order ID.");
  }

  const orders = await readOrders();
  const filtered = orders.filter((entry) => entry.id !== orderId);
  if (filtered.length === orders.length) {
    throw new Error(`Order with ID ${orderId} was not found.`);
  }

  await writeOrders(filtered);
}

async function resetOrders() {
  const initialOrders = [
    { id: 1, item: "Espresso", status: "pending" },
    { id: 2, item: "Iced Latte", status: "pending" },
    { id: 3, item: "Blueberry Muffin", status: "completed" }
  ];
  await writeOrders(initialOrders);
  return initialOrders;
}

module.exports = {
  listOrders,
  addOrder,
  completeOrder,
  removeOrder,
  resetOrders
};
