const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/virtuviodb"
);

const bodySeed = [
  {
    name: 'Head',
    // _id: 1
    symptoms: [
      {
        type: 1,
        ref: "Symptoms"
      },
      {
        type: 2,
        ref: "Symptoms"
      },
      {
        type: 3,
        ref: "Symptoms"
      }
    ]
  },
  {
    name: 'Arms',
    // _id: 2
  },
  {
    name: 'Chest',
    // _id: 3
  },
  {
    name: 'Stomach',
    // _id: 4
  },
  {
    name: 'Legs',
    // _id: 5
  },
  {
    name: 'Feet',
    // _id: 6
  },
];

const symptomSeed = [
  {
    name: 'Eye pain',
    _id: 1
  },
  {
    name: 'Burning eyes',
    _id: 2
  },
  {
    name: 'Drooping eyelid',
    _id: 3
  },
  {
    name: 'itchy throat',
    _id: 4
  },
  {
    name: 'raspy/dry throat',
    _id: 5
  },
  {
    name: 'bothersome noise',
    _id: 6
  }
]

// const diagnosisSeed = [
//   {
//     name: 'Pink eye',
//     commonName: 'Conjunctivitus',
//     diagnosisId: 1
//   },
//   {
//     name: 'Inflamation of the tonsils',
//     commonName: 'Tonsillitis',
//     diagnosisId: 2
//   },
//   {
//     name: 'Inflamation of the nose and throat',
//     commonName: 'Nasopharyngitis',
//     diagnosisId: 2
//   },
//   {
//     name: 'Food allergy',
//     commonName: 'Anaphylaxis',
//     diagnosisId: 2
//   },
//   {
//     name: 'tinnitus',
//     commonName: 'tinnitus',
//     diagnosisId: 3
//   }
// ]


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
    console.log(data.result.n + " symptoms inserted!");
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

