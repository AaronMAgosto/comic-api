import functions from "firebase-functions"
import express from "express"
import cors from "cors"

const app = express();
app.use(express.json());
app.use(cors());




export const api = functions.https.onRequest( app );