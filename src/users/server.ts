import { app } from "./app";

app.get('/api/v1/', (request, response) => {
    return response.json({
        "message": "Hello, I'am microservice user.."
    });
});

app.listen(3434, () => console.log(`User Microservice running on ${3434} 🚤`));