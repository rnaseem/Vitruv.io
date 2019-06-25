const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/virtuviodb"
);

const symptomSeed = [
  {
    name: 'Eye pain'
  },
  {
    name: 'Buring eyes'
  },
  {
    name: 'Drooping eyelid'
  },
  {
    name: 'Ear ache'
  },
  {
    name: 'Headache'
  }
]

const diagnosisSeed = [
  {
    name: 'Inflamation of the tonsils',
    commonName: 'Tonsillitis'
  },
  {
    name: 'Inflamation of the nose and throat',
    commonName: 'Nasopharyngitis'
  },

]

const bodySeed = [
  {
    name: 'Head'
  },
  {
    name: 'Arms'
  },
  {
    name: 'Chest'
  },
  {
    name: 'Stomach'
  },
  {
    name: 'Legs'
  },
  {
    name: 'Feet'
  },
];

db.Body
  .remove({})
  .then(() => db.Body.collection.insertMany(bodySeed))
  .then(data => {
    console.log(data.result.n + " parts inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Symptoms
  .remove({})
  .then(() => db.Symptoms.collection.insertMany(symptomSeed))
  .then(data => {
    console.log(data.result.n + " diagnosis inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Diagnosis
  .remove({})
  .then(() => db.Diagnosis.collection.insertMany(diagnosisSeed))
  .then(data => {
    console.log(data.result.n + " diagnosis inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

