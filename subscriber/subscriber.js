import { WebPubSubClient } from "@azure/web-pubsub-client";

const clientAccessURL =
  "wss://evchat-pub-sub.webpubsub.azure.com/client/hubs/Hub?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ3c3M6Ly9ldmNoYXQtcHViLXN1Yi53ZWJwdWJzdWIuYXp1cmUuY29tL2NsaWVudC9odWJzL0h1YiIsImlhdCI6MTY5MzkyMTMwNSwiZXhwIjoxNjkzOTI0OTA1LCJyb2xlIjpbIndlYnB1YnN1Yi5zZW5kVG9Hcm91cC5Hcm91cDEiLCJ3ZWJwdWJzdWIuam9pbkxlYXZlR3JvdXAuR3JvdXAxIl19.QlgMUsNJcSRzWs2MRAlZ9YfVAryS4HYnw--atcXlPQs";
const client = new WebPubSubClient(clientAccessURL);

// client.on("server-message", (event) => {
//   console.log("Received Message", `${event.data.message}`);
// });
client.on("server-message", (e) => {
  console.log("received message: ", e.message.data);
});

await client.start().then(() => {
  console.log("WebSocket connection established.");
});
