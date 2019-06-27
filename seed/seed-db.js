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
          diagnosis: "Conjunctivitus, Cataracts, Pink eye, Blepharitis"
        },
        {
          name: 'Burning eyes',
          _id: 2,
          diagnosis: "Conjunctivitus, Eye corrosion"
        },
        {
          name: 'Drooping eyelid',
          _id: 3,
          diagnosis: "conjunctivitus, cataracts, pink eye, eye death"
        },
        {
          name: 'Ear ache',
          _id: 4,
          diagnosis: "Middle ear infection, Temporomandibular joint dysfunction(TMJ) syndrome, Tooth abcess"
        },
        {
          name: 'Headache',
          _id: 5,
          diagnosis: "Inflammation of paranasal sinuses, Migraine, Concussion"
        },
        {
          name: 'Dizziness',
          _id: 6,
          diagnosis: "Positional vertigo, Low blood pressure, Hyperventilation, Low blood sugar"
        },
        {
          name: 'Paralysis',
          _id: 7,
          diagnosis: "Stroke, Disseminated sclerosis, Sarcoidosis, Meningeal tumor"
        },
        {
          name: 'Lip Swelling',
          _id: 8,
          diagnosis: "Food allergy, Hives, Hypersensitivity reaction"
        },
        {
          name: 'Memory gap',
          _id: 9,
          diagnosis: "Intoxication, Anxiety disorder, Alzheimer's disease"
        }
      ]
    }
  }];

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


