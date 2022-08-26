import {Console} from "console";
import fs from "fs";

const file = fs.createWriteStream("application.log");

const log = new Console({
    stdout: file,
    stderr: file,
});

log.info("Hello world")
log.error("Hello world")

const person = {
    firstName: "Aldi",
    lastName: "Nugraha"
}

log.table(person)