import app from "./app/app.js";
import connectToDb from "./db/dbConnection.js";
import config from "dotenv/config";

connectToDb()
	.then(() => {
		app.listen(process.env.PORT, () => {
			console.log(`app is listening on port ${process.env.PORT}`);
		});
	})
	.catch((error) => {
		console.log(error);
	});
