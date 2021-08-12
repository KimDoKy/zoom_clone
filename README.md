# [Zoom Clone coding - nomadcoder](https://nomadcoders.co/noom/lobby)

---

이 강의로 내가 얻을 것 

- WebRTC
- WebSocket

---

## setup

### install nodemon

```bash
$ npm i nodemon -D
```

### install babel

```bash
$ npm i @babel/core @babel/cli @babel/node @babel-preset-env -D
```

### setup files

- add files : babel.config.json, nodemon.json 

```json
# nodemon.json
{
    "exec": "babel-node src/server.js"
}
```

```json
# babel.config.json
{
    "presets": "@babel/preset-env"
}
```

```json
# add package-json
{
    ...
    "scripts": {
        "dev": "nodemon",
    },
    ...
}
```

### install express

```bash
$ npm i express
```

### install pug

```bash
$ npm i pug
```

## run

```bash
$ npm run dev
```
