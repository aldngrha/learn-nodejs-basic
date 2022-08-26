import https from "https"

// end point API
const endpoint = "https://hookb.in/Lg3Jjd81PoF1lrp1agoY";

// meke request to server
const request = https.request(endpoint, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}, (response) => {
    response.addListener("data", (data) => {
        console.info(`Receive data : ${data.toString()}`);
    });
});


const body = JSON.stringify({
    firstName: "Aldi",
    lastName: "Nugraha"
});

request.write(body);
request.end();