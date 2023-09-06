const { WebPubSubServiceClient } = require("@azure/web-pubsub");
const hub = "Hub";

const connectionString =
  "Endpoint=https://evchat-pub-sub.webpubsub.azure.com;AccessKey=ogBHLVFD704QqgxphW7vfx4gHL143TcihcYCv61FaGQ=;Version=1.0;";
let server = new WebPubSubServiceClient(connectionString, hub);
server.sendToAll(process.argv[2]).then(() => {
  console.log("Sent");
});
