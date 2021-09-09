// ./pact/publish.js
let pact = require('@pact-foundation/pact-node');

let opts = {
  pactBroker: 'http://localhost:9292',
  pacticipants: [{ name: 'common-services', version: '0.0.2' }],
};

pact
  .canDeploy(opts)
  .then((response) => console.log('Pacts successfully published: ', response))
  .catch((error) => console.log('error: ', error));
