// homeController.js
// homeController.js
"use strict";

const { name } = require("ejs");

/**
 * Listing 10.2 (p. 159)
 * 컨트롤러 동작에 의한 뷰 렌더링
 */
exports.respondWithName1; // @TODO: 사용자 정의 EJS 뷰를 사용한 응답

/**
 * Listing 10.3 (p. 160)
 * 뷰로의 라우트 매개변수 전달
 */
exports.respondWithName = (req, res) => {
    let paramsName = req.params.myName;
    res.render('index',{
        name: paramsName,
        people: {
            first: {
                name:"pill",
                city:"seonam"
            },
            second: {
                name:"gyu",
                city:"seonam"
            }
        }
    })
}; // @TODO: 요청 매개변수로 지역 변수 할당. 그다음 렌더링된 뷰로 지역 변수 전달.

/**
 * Listing 12.5 (p. 178)
 * 홈 컨트롤러로의 라우팅
 */
exports.showCourses =(req,res) => {
    res.render("courses");
};
exports.showSignUp =(req,res) => {
    res.render("contact");
};
exports.postedContactForm =(req,res) => {
    res.render("thanks");
};


/**
 * Listing 12.9 (p. 182)
 * 콘텐츠의 설정과 렌더링된 뷰에 전달
 * 
 * [노트] 뷰 안에서는 offeredCourses라는 변수명을 통해 배열에 접근할 수 있다.
 * 홈 컨트롤러 내에서 이 배열은 courses라는 이름으로 다룬다.
 */
