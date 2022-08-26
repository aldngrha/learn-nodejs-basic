import fs from "fs"

const writer = fs.createWriteStream("target.log");
writer.write("Aldi\n");
writer.write("Nugraha\n");
writer.end();

const read = fs.createReadStream("target.log");
read.addListener("data", (data) => {
    console.info(data.toString());
})