var events = require("events");
var eventEmitter = new events.EventEmitter();

// callback as event handler
var connectHandler = function connected() {
    console.log("Connection successful.");

    // Calling the event
    eventEmitter.emit("data_received");
}

// Attaching the event
eventEmitter.addListener("connection", connectHandler)

// Attaching the data received event through inline callback
eventEmitter.once("data_received", function() {
    console.log("data received successfully.");
});

eventEmitter.removeAllListeners('connection', connectHandler);

// Calling the event
eventEmitter.emit("connection")
console.log("Program Ended.")

