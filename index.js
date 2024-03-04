import cors from "cors";
import express from "express";
import { findAllMonsters, findByMonsters } from "./mongo.js";
const app = express();
const port = process.env.PORT || 3001;



app.get('/all', (req, res) => {
    const { page } = req.query
    findAllMonsters(page).then((data) =>
        res.json(data).status(200)
    )
    console.log(req.query)
});

app.get('/search', (req, res) => {
    const { name, weak, type } = req.query
    if (name) {
        return findByMonsters("name", name).then(data => {
            res.json(data).status(200)
        })
    }
    if (weak) {
        return findByMonsters("weak", weak).then(data => {
            res.json(data).status(200)
        })
    }
    if (type) {

        return findByMonsters("type", type).then(data => {
            res.json(data).status(200)
        })
    }
    else {
        return res.status(400).json({ "error": "parámetro no permitido" })
    }
}

);
app.use(cors)
const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;