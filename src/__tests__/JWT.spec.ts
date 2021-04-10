import "dotenv/config";
import JWT from "../shared/JWT";

describe("JWT test suite", (): void => {
	const jwt: JWT = new JWT();

	let token: string;

	test("create jwt", (): void => {
		token = jwt.sign({ data: "meow" });

		expect(typeof token).toBe("string");
	});

	test("check jwt", (): void => {
		console.log(token);

		expect(jwt.verify(token)).toBe(true);
	});
});

