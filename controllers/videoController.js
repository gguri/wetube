import {videos} from "../db"

export const home = (req, res) => {
    res.render("home", { pageTitle : "Home", videos});
};

export const search = (req, res) => {
    // const searcingBy = req.query.term; 바닐라문법
    const {
        query: { term: searcingBy }

    } = req; // es6문법
    res.render("search", { 
        pageTitle : "Search"
        , searcingBy});
};
// searcingBy = searcingBy babel 이 있다면 searcingBy만 써도 무방
    
export const upload = (req, res) => res.render("upload", { pageTitle : "Upload"}) 
export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle : "Video Detail"}) 
export const editVideo = (req, res) => res.render("editVideo", { pageTitle : "Edit Video"})
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle : "Delete Video"})