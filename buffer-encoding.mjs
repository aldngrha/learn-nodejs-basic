const buffer = Buffer.from("Aldi Nugraha", "utf-8");

console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

const bufferBase64 = Buffer.from("QWxkaSBOdWdyYWhh", "base64");
console.info(bufferBase64.toString("utf-8"));