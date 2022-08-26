import cluster from "cluster";
import os from "os";
import process from "process";
import http from "http";

if (cluster.isPrimary) {
    //running worker
    console.info(`Primary : ${process.pid}`)
    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork()
    }
    // worker stopped
    cluster.addListener("exit", (worker) => {
        console.info(`Worker-${worker.id} is exit`);
    //    running new worker if worker exit
        cluster.fork();
    })
}

if (cluster.isWorker) {
    console.info(`worker  : ${process.pid}`)
    const server = http.createServer((req, res) => {
        res.write(`Response from process ${process.pid}`);
        res.end();
        process.exit();
    })

    server.listen(3000);
}