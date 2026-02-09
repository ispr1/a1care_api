import { createClient } from 'redis';
import dotenv from 'dotenv';
dotenv.config();
console.log(process.env.REDIS_USERNAME);
const RedisClient = createClient({
    username: process.env.REDIS_USERNAME,
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: 18171
    }
});
// RedisClient.on('error', err => console.log('Redis Client Error', err));
await RedisClient.connect().then(() => {
    console.log("Redis is connected successfully");
}).catch((error) => {
    console.log("Error in connecting redis client", error);
});
export default RedisClient;
//# sourceMappingURL=redisConnect.js.map