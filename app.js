// import "core-js";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes"

const app = express();

const handleHome = (req, res) => 
    res.send("Hello from home");

const handleProfile = (req, res) => 
    res.send("You are on my profile");

app.use(cookieParser());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extende: true})); 
app.use(helmet());
app.use(morgan("dev"));

// use : 경로를 쓰게되면 userRouter 전체를 쓰겠다는 의미
// /user/edit, password 등 기능들을 쪼개서 파일로 관리할 수 있음
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
// 누군가 app.js를 불러올 때 app을 주겠다는 의미