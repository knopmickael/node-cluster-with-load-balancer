const cluster = require("cluster");
const os = require("os");

const startMain = () => {
  const totalProcesses = 4 || os.cpus().length;

  console.log(
    `Cluster started with pID: ${process.pid} and ${totalProcesses} workers\n`
  );

  for (let index = 0; index < totalProcesses; index++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(
      `Worker closed with pID: ${worker.process.pid} (CODE: ${code} - SIGNAL: ${signal})`
    );
    cluster.fork();
  });
};

const startWorker = () => {
  require("./server");
};

cluster.isPrimary ? startMain() : startWorker();
