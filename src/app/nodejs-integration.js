const os = require("os").platform(),
    log = document.querySelector("[data-nodejs-integration] > span");
log.innerHTML = os;
