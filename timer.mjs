import timers  from "timers/promises";

// console.info(new Date());
// const name = await timers.setInterval(5000, "Aldi");
// console.info(new Date());
// console.info(name);

for await (const startTimer of timers.setInterval(1000, "ignored")){
    console.info(`start time at ${new Date()}`);
}
