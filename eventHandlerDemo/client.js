import { WebPubSubClient } from "@azure/web-pubsub-client";

const clientAccessURL =
  "wss://evchat-pub-sub.webpubsub.azure.com/client/hubs/myhub1?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ3c3M6Ly9ldmNoYXQtcHViLXN1Yi53ZWJwdWJzdWIuYXp1cmUuY29tL2NsaWVudC9odWJzL215aHViMSIsImlhdCI6MTY5Mzk5OTY4NiwiZXhwIjoxNjk0MDAzMjg2fQ.6WQg3DnEhWDLGBSYwqMPRLWg6XLLgymM9N_5-93UvNk";

const client = new WebPubSubClient(clientAccessURL);
client.on("connected", (e) => {
  console.log(e);
  console.log(`Connection ${e.connectionId} is connected.`);
});

// You must invoke start() on the client object
// to establish connection with your Web PubSub resource
client.start();

client.sendEvent("message", "Hello World!", "text").then((res) => {
  console.log("res", res);
  console.log("sent");
});
