# pactjs-demo
a simple example using pactjs

Setup pact broker at localhost:9292

git clone https://github.com/pact-foundation/pact-broker-docker

```
1. install postgres using brew install postgre
2. brew service start postgresql
3. configure postgresql:
    
    create role pact_broker with login password 'password'
    set PACT_BROKER_DATABASE_URL to postgres://pact_broker:password@localhost/mydb
    
```

How does my API looks like?
here is the curl command
```
curl -X 'GET' \
  'https://address-service.laymui.io/v1/address/locations’ \
  -H 'accept: application/json' \
  -H 'x-api-key: 1234-3456-6655
  ```

  and the response payload:
  ```
{
  "locationId”:”1234-45666-333,
  ”name":"My garden",
  "type":"sunflower",
  "size":"0.1",
  "unit":"acre",
  "country":"Singapore",
  "address":"blk 40000 farrer road 12345",              
}
Note for using matcher for size: like(1.0)
Also note, because JS, 1.0 gets converted to 1 and becomes an integer match.

reference: https://github.com/pact-foundation/pact-js#match-common-formats

## use Express to set up the application to run the provider test
Setup a route and return static data

1. npm install express
npm i body-parser
2. Accessing the server and returning data
The server should be running by now, and you can visit http://localhost:3000 to see it in action.

By default, it doesn't return a great deal, but if you visit http://localhost:3001/users -- which will automatically issue a GET request to our running API server -- you'll see a simple JSON object populated with some dummy user data.

2.add to circleCI