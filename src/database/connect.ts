import * as mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}, (): void => {
	console.log("connected to database");
});

