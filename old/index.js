// import "core-js";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const app = express();

const PORT = 4000;

// function handleListening() {
//     console.log(`Listening on: http://localhost:${PORT}`);
// }
// function handleHome(req, res) {
//     res.send("Hello from home");
// }
// function handleProfile(req, res) {
//     res.send("You are on my profile");
// }

// ES6 적용 
const handleListening = () => 
    console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => 
    res.send("Hello from home");

const handleProfile = (req, res) => 
    res.send("You are on my profile");

// const betweenHome = (req, res, next) => {
//     console.log("i'm between");
//     next();
// }

// route감지 ""에 해당하는 부분
// betweenHome이 middleware
// 요청("/")과 응답(handleHome) 중간 단계
// 요청과 중간단계 진행을 위해서는 next를 추가 => middleware 쪽

// 하나의 route에만 middleware 적용
// app.get("/", betweenHome, handleHome);

// Global : 모든 route에 middleware 적용 (순서 중요)
// middleware 등록 후 개별 route 진행
// app.use(betweenHome);

// Morgan 활용 (request header 정보 보여줌)
// tiny, common, combined, dev등
app.use(cookieParser());

// bodyParser 서버가 유저로부터 받은 데이터를 이해하는 방법
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extende: true})); 
app.use(helmet());
app.use(morgan("dev"));


// 만약 middleware function 에서 next대신 res.send를 보내게될 경우 연결을 끊고 결과를 바로 보여줌
// const middlewareQuit = (req, res, next) => {
//     res.send("not happening");
// };

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);

