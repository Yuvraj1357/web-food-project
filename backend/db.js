const mongoose = require('mongoose')
const mongoURI = 'mongodb://root:root@ac-0gns3yj-shard-00-00.5zokdxm.mongodb.net:27017,ac-0gns3yj-shard-00-01.5zokdxm.mongodb.net:27017,ac-0gns3yj-shard-00-02.5zokdxm.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-mn02sh-shard-0&authSource=admin&retryWrites=true&w=majority&appName=gofoodproject' // Customer 
module.exports = function (callback) {
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) console.log("---" + err)
        else {
            console.log("connected to mongo")
            const foodCollection = await mongoose.connection.db.collection("food_items");
            foodCollection.find({}).toArray(async function (err, data) {
                const categoryCollection = await mongoose.connection.db.collection("food_Category");
                categoryCollection.find({}).toArray(async function (err, Catdata) {
                    callback(err, data, Catdata);

                })
            });
        }
    })
};
