import mongoose from "mongoose";
 export const dBconnection =  () => {
    mongoose.connect(process.env.MONGO_URI, {
        dBName : "RESTAURANT",
})
.then(() => {
    console.log("Connected to the database");
}).catch((error) => {
    console.log("Error connecting to the database", `${error}`);
})};