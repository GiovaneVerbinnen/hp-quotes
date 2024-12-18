import mongoose from 'mongoose';
import { config } from 'dotenv';
config();

const clientOptions = {
  serverApi: { version: '1', strict: true, deprecationErrors: true },
};
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.u6iin.mongodb.net/?retryWrites=true&w=majority&appName=Cluster`;

mongoose.connect(uri, clientOptions);

// async function run() {
//   try {
//     // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
//     await mongoose.connect(uri, clientOptions);
//     await mongoose.connection.db.admin().command({ ping: 1 });
//     console.log(
//       'Pinged your deployment. You successfully connected to MongoDB!'
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await mongoose.disconnect();
//   }
// }
// run().catch(console.dir);

export {};
