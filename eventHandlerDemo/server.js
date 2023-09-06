import express from "express";
import { WebPubSubEventHandler } from "@azure/web-pubsub-express";

const HUB_NAME = "myhub1";
const app = express();

let handler = new WebPubSubEventHandler(HUB_NAME, {
  path: "/eventhandler", //exposes an endpoint for the event handler
  onConnected: async (req) => {
    console.log(`${req.context.userId} connected`);
  },
  handleUserEvent: async (req, res) => {
    if (req.context.eventName === "message") {
      // Handle incoming "message" events from the client
      const message = req.data;
      console.log(`Received message: ${message}`);
    }
  },
});

// Registers the middleware with the express app
app.use(handler.getMiddleware());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(8000, () => console.log("Server started, listening on port 8000"));
