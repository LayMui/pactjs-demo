const { Pact } = require('@pact-foundation/pact');
const { Matchers, like } = require('@pact-foundation/pact').Matchers;
const { pactWith } = require('jest-pact');
const axios = require('axios');
const uuid = require("uuid"); // not used
const faker = require('faker'); //not used
const dotenv = require("dotenv").config();


pactWith(
  {
    consumer: 'iConsumer',
    provider: 'iProvider',
  },
  (provider) => {
      describe('get location api', () => {
        const DATA = {
         locationId: 123,
         name: 'my garden',
         size: like(1.1),
         unit: ['acre', 'hectare'],
         country: 'Singapore',
         address: 'Blk 4000, farrer park, singapore'
        };
        const HEADER = {
          'Content-Type': 'application/json',
          'x-api-key': like(process.env.X_API_KEY)
        };
  
        const urlPath = '/v1/address/locations'
  
        beforeEach(() => {
       
          const interaction = {
            state: 'get address details',
            uponReceiving: 'response.status returns locationID',
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