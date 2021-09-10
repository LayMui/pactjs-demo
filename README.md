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
  'https://address-service.laymui.io/v1/address/locations/abc’ \
  -H 'accept: application/json' \
  -H 'x-api-key: 1234-3456-6655
  ```

  and the response payload:
  ```
{"status":"SUCCESS",
"errors":{},
"data":
{"locationId”:”1234-45666-333,”myUserId”:”123342-23232,”name":"My garden",
"type":"sunflower",
"size":"0.1",
"unit":"acre",
"latitude":13.741655670568623,"longitude":100.56231563692762,"country":"Singapore",
"dependent":null,
"address":"blk 40000 farrer road 12345",              