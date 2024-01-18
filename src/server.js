const pID = process.pid;

const resolveArg = (expected) => process.argv.some((arg) => arg === expected);
const turnOnLB = resolveArg("load-balancer");
const isATestRun = resolveArg("test");

const server = require("http").createServer((_, res) => {
  if (!isATestRun) {
    res.on("finish", () => {
      console.log(`\nRequest closed at ${pID} pID\n`);
    });
  }

  // don't block the main thread
  // new Promise((resolve) => {
  //   setTimeout(() => {
  //     res.end(`Server ${pID} pID`);
  //     resolve(true);
  //   }, 5e3);
  // });

  // block the mthread
  // for (let index = 0; index < 1e7; index++) {}
  // res.end(`Server ${pID} pID`);

  res.end(`Server ${pID} pID`);
});

server.listen(3000).once("listening", () => {
  console.log(`Started worker with pID: ${pID}`);
});

if (!isATestRun) {
  server.on("connection", () => {
    console.log(`\nRequest received  at ${pID} pID`);
  });
}

if (turnOnLB) {
  setTimeout(() => {
    server.close(() => process.exit());
  }, Math.random() * 1e4);
}
