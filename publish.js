// ./pact/publish.js
let pact = require("@pact-foundation/pact-node")
let path = require("path")

let opts = {
  providerBaseUrl: "http://localhost:8080",
  pactFilesOrDirs: [path.resolve(process.cwd(), "pact", "pacts")],
  pactBroker: process.env.PACTBROKERURL,
  pactBrokerToken: process.env.PACTBROKERTOKEN,
  consumerVersion: "0.0.3",
}

pact
  .publishPacts(opts)
  .then(() => console.log("Pacts successfully published"))
