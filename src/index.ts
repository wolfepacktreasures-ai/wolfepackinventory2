import { setGlobalOptions } from "firebase-functions";
import { onRequest } from "firebase-functions/https";
import * as logger from "firebase-functions/logger";

// Keep global options for performance control
setGlobalOptions({ maxInstances: 10 });

/*
 * Example HTTP function
 * Demonstrates how to handle requests and log output
 */
export const helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

