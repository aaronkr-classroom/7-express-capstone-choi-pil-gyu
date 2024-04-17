// main.js
// Capstone 2: Express
// main.js
"use strict";

// @TODO: 웹 서버를 만들고 실행한다.
const port = 3000,
    express = require('express'),
    layouts = require('express-ejs-layouts'),
    homeController = require('./controllers/homeController'),
    errorController = require('./controllers/errorController'),
    app = express();

app.set("port", process.env.PORT||port);
app.set("view engine", "ejs");

app.use(layouts);
app.use(express.static("public"));

app.get('/name/:myName', homeController.respondWithName);

app.use(errorController.logErrors);
app.use(errorController.resNotFound);
app.use(errorController.resInternalError);

app.listen(app.get("port"), ()=> {
    console.log(`Server at http://localhost:${app.get("port")}`);
});
// 앱 설정

/**
 * Listing 12.7 (p. 179)
 * ejs 레이아웃 렌더링
 */


/**
 * Listing 12.4 (p. 177)
 * body-parser의 추가
 */


/**
 * Listing 12.6 (p. 178)
 * 각 페이지 및 요청 타입을 위한 라우트 추가
 */


/**
 * Listing 12.12 (p. 184)
 * 에러 처리 라우트 
 */


// 3000번 포트로 리스닝 설정
