import { app } from "./app";

app.get('/api/v1/', (request, response) => {
    return response.json({
        "message": "Hello, I'am microservice statement.."
    });
});

app.listen(4444, () => console.log(`Statement Microservice running on ${4444} 🚤`));