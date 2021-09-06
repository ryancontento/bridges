# Is the bridge up?

Run Client Side:
```bash
$ cd bridges/client
$ npm install
$ npm run start
```

Run Server Side:
```bash
$ cd bridges/server
$ cp .env.example .env
$ vim .env
$ yarn install
$ yarn start
```


# API Documentation

### `GET` `/capefear`
> Get status of the Cape Fear Bridge

```bash
$ curl http://localhost:4000/capefear
{"open": false}
```

### `GET` `/isabella`
> Get status of the Isabella Holmes Bridge

```bash
$ curl http://localhost:4000/isabella
{"open": true}
```
