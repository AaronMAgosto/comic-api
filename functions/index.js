import functions from "firebase-functions"
import express from "express"
import cors from "cors"
import { getAllImages } from "./comicfunctions.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get('/fisher' ,getAllImages)

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}...`)
})
export const api = functions.https.onRequest( app );