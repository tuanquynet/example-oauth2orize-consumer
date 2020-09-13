'use strict';

module.exports = {
	provider: {
		protocol: "http",
		host: "localhost:3000",
		// profileUrl: "/api/userinfo"
		profileUrl: "/users/me"
	},
	consumer: {
		protocol: "http",
		host: "localhost:3001"
	}
};
