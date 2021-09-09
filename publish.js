// ./pact/publish.js
let pact = require("@pact-foundation/pact-node")
let path = require("path")

let opts = {
  providerBaseUrl: "http://localhost:8080",
  pactFilesOrDirs: [path.resolve(process.cwd(), "pact", "pacts")],
  pactBroker: "http://localhost:9292",
  consumerVersion: "0.0.3",
}

pact
  .publishPacts(opts)
  .then(() => console.log("Pacts successfully published"))
