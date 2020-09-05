import app from "./app";
import { PORT } from "./secret";
// import redis from "./redis";

const port = PORT || 3000;

// Launch Node.js server
const server = app.listen(port as number, () => {
  console.log(`Node.js API server is listening on port ${port}/`);
});

// Shutdown Node.js app gracefully
function handleExit(options: any, err: any) {
  if (options.cleanup) {
    const actions = [server.close]; //, redis.quit
    actions.forEach((close, i) => {
      try {
        close(() => {
          if (i === actions.length - 1) process.exit();
        });
      } catch (errr) {
        if (i === actions.length - 1) process.exit();
      }
    });
  }
  if (err) console.error(err);
  if (options.exit) process.exit();
}

process.on("exit", handleExit.bind(null, { cleanup: true }));
process.on("SIGINT", handleExit.bind(null, { exit: true }));
process.on("SIGTERM", handleExit.bind(null, { exit: true }));
process.on("uncaughtException", handleExit.bind(null, { exit: true }));
