const { Verifier } = require('@pact-foundation/pact');

const app = require('./server');
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));

describe('Pact Verification', () => {
  test('should validate the expectations of our consumer', (done) => {
    const opts = {
      provider: 'iProvider',
      providerBaseUrl: `http://localhost:${port}`,
      pactBrokerUrl: process.env.PACTBROKERURL,
      pactBrokerToken: process.env.PACTBROKERTOKEN,
      publishVerificationResult: true,
      providerVersion: '1.0.0',
      logLevel: 'DEBUG',
    };

     return new Verifier(opts).verifyProvider();
    
  });
});
