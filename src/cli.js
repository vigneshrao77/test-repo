const {
  listOrders,
  addOrder,
  completeOrder,
  removeOrder,
  resetOrders
} = require("./ordersService");

function printHelp() {
  console.log("Coffee Orders CLI");
  console.log("");
  console.log("Commands:");
  console.log("  node hello.js list");
  console.log("  node hello.js add \"Flat White\"");
  console.log("  node hello.js done 2");
  console.log("  node hello.js remove 2");
  console.log("  node hello.js reset");
}

function printOrders(orders) {
  if (orders.length === 0) {
    console.log("No orders found.");
    return;
  }

  for (const order of orders) {
    console.log(`#${order.id} | ${order.item} | ${order.status}`);
  }
}

async function run(args) {
  const [command, ...rest] = args;

  switch (command) {
    case "list": {
      const orders = await listOrders();
      printOrders(orders);
      break;
    }
    case "add": {
      const item = rest.join(" ");
      const order = await addOrder(item);
      console.log(`Added order #${order.id}: ${order.item}`);
      break;
    }
    case "done": {
      const id = rest[0];
      const order = await completeOrder(id);
      console.log(`Marked order #${order.id} as completed.`);
      break;
    }
    case "remove": {
      const id = rest[0];
      await removeOrder(id);
      console.log(`Removed order #${id}.`);
      break;
    }
    case "reset": {
      await resetOrders();
      console.log("Orders reset to sample data.");
      break;
    }
    default:
      printHelp();
  }
}

module.exports = { run };
