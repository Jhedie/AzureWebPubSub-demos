import { WebPubSubClient } from "@azure/web-pubsub-client";

const clientAccessURL =
  "wss://ev-charge-chat.webpubsub.azure.com/client/hubs/Hub?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ3c3M6Ly9ldi1jaGFyZ2UtY2hhdC53ZWJwdWJzdWIuYXp1cmUuY29tL2NsaWVudC9odWJzL0h1YiIsImlhdCI6MTY5MzgzMTAxNiwiZXhwIjoxNjkzODM0NjE2LCJyb2xlIjpbIndlYnB1YnN1Yi5zZW5kVG9Hcm91cC5ncm91cDEiLCJ3ZWJwdWJzdWIuam9pbkxlYXZlR3JvdXAuZ3JvdXAxIl19.XF0Mwff0dCJSbwpya1C7k1oel-0MbHBvBAyqVfyzeoQ";

const client = new WebPubSubClient(clientAccessURL);

client.on("group-message", (event) => {
  console.log("Received Message", `${event.data.message}`);
});
client.start().then(() => {
  console.log("WebSocket connection established.");
});

client.sendToGroup("group1", "hello World", "text").then((value) => {
  console.log("Message sent successfully");
});
