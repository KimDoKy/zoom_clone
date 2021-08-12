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

> 변경사항이 있을시 서버를 재시작

### install babel

```bash
$ npm i @babel/core @babel/cli @babel/node @babel/preset-env -D
```

### setup files

- add files : babel.config.json, nodemon.json 

```json
# nodemon.json
{
    "exec": "babel-node src/server.js"
}
```

> 작성한 코드를 NodeJS로 컴파일시 그 작업을 src/server.js 파일에 진행

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

### run process

npm run dev -> nodemon -> babel-node -> babel.config.json -> exec preset