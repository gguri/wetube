// application 시작
// app.js의 app object를 init에 전달해야함

import app from "./app";

const PORT = 4000;

const handleListening = () =>
    console.log(`Listening on : http://localhost:${PORT}`);

app.listen(PORT, handleListening);
