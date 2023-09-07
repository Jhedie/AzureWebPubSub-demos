const { WebPubSubServiceClient } = require("@azure/web-pubsub");

const HUB_NAME = "pubsub";
let service = new WebPubSubServiceClient(
  process.env.WebPubSubConnectionString,
  HUB_NAME
);

service.sendToAll(process.argv[2], { contentType: "text/plain" });
