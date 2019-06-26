const mongoose = require("mongoose");
const db = require("../models");
const Schema = mongoose.Schema;

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/virtuviodb"
);


const bodySeed = [
  {
    head: {
      name: 'Head',
      symptoms: [
        {
          name: 'Eye pain',
          _id: 1,
          diagnosis: "conjunctivitus, cataracts, pink eye, eye death"
        },
        {
          name: 'Burning eyes',
          _id: 2,
          diagnosis: "conjunctivitus, foreign object"
        },
      ]
    }
  }
];

db.Body
  .remove({})
  .then(() => db.Body.collection.insertMany(bodySeed))
  .then(data => {
    console.log(data.result.n + " parts inserted!");
    console.log("db.body data: " + data)
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

// db.Diagnosis
//   .remove({})
//   .then(() => db.Diagnosis.collection.insertMany(diagnosisSeed))
//   .then(data => {
//     console.log(data.result.n + " diagnosis inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

