const WebSocket = require("ws");
const { WebPubSubServiceClient } = require("@azure/web-pubsub");

async function main() {
  const HUB_NAME = "pubsub";

  let service = new WebPubSubServiceClient(
    process.env.WebPubSubConnectionString,
    HUB_NAME
  );
  let token = await service.getClientAccessToken();

  let ws = new WebSocket(token.url);
  ws.on("open", () => console.log("connected"));

  ws.on("message", (data) => {
    console.log("Message received: %s", data);
  });
}


main();
