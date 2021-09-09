const { Pact } = require('@pact-foundation/pact');
const { like, eachLike } = require('@pact-foundation/pact').Matchers;
const { pactWith } = require('jest-pact');
const axios = require('axios');
const uuid = require("uuid");
const faker = require('faker');


pactWith(
  {
    consumer: 'iConsumer',
    provider: 'iProvider',
  },
  (provider) => {
    describe('get location api', () => {
      const DATA = {
       name: 'laymui-toh',
       address: 'blk 4000, farrer road park 12-9999',
      
      };
      const HEADER = {
        'Content-Type': 'application/json',
        'x-api-key': '1234567890'
      };

      const urlPath = '/v1/address/' 

      beforeEach(() => {
     
        const interaction = {
          state: 'get home address',
          uponReceiving: 'response.status returns success',
          withRequest: {
            method: 'GET',
            path: urlPath,
            headers: HEADER,
          },
          willRespondWith: {
            status: 200,
            headers: HEADER,
            body: DATA,
          },
        };
        return provider.addInteraction(interaction);
      });

      it('returns a successful with status=SUCCESS', () => {
        return axios
          .request({
            method: 'GET',
            baseURL: provider.mockService.baseUrl,
            url: urlPath,
            headers: HEADER,
          })
          .then((response) => {
            expect(response.data).toEqual(DATA);
            provider
              .verify()
              .then((response) => {
                console.log(response);
              })
              .catch((error) => console.log(error));
          })
          .catch((error) => {
            console.log(error);
          });
      });
    });
  },
);
