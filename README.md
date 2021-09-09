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