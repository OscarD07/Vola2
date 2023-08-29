const swaggerDefinition = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "Vola2 Backend Express API with Swagger",
            version: "0.1.0",
            description:
                "This is a simple Software Engineering II project using Express and documented with Swagger",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "Adhisson Cedeño",
                url: "https://logrocket.com",
                email: "adhisson.cedeno@epn.edu.ec",
            },
        },
        servers: [
            {
                url: "http://localhost:3600",
            },
        ],
    },
    apis: ["./routes/vola2.routes.js"],

};


export default swaggerDefinition;
