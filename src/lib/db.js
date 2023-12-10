const {username , password} = process.env;
export const connectionStr = `mongodb+srv://${username}:${password}@cluster0.12ibbb8.mongodb.net/blogweb?retryWrites=true&w=majority`;
