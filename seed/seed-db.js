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
          diagnosis: "Congenital ptosis, Damage to the eye muscle nerves, Myasthenia gravis"
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
  },
{
  arm: {
    name: 'arm',
    symptoms: [
      
        {
          name: 'Pain in the limbs',
          _id: 10,
          diagnosis: "Influenza, Infectious mononucleosis, Lack of Vitamin D"
        },
        {
          name: 'Swelling in the armpits',
          _id: 11,
          diagnosis: "Infectious mononucleosis, Superficial form of cellulitis, Toxoplasmosis infection"
        },
        {
          name: 'Tremor at rest',
          _id: 12,
          diagnosis: "Hyperventilation, Overproduction of Thyroid hormones, Epileptic seizures"
        }
      ]
  }
},
{
  abdomen: {
    name: 'abdomen',
    symptoms: [
      {
        name: 'Abdominal pain',
        _id: 13,
        diagnosis: "Bloated belly, Gastroenteritis, Constipation, Food poisoning"
      },
      {
        name: 'Nausea',
        _id: 13,
        diagnosis: "Food poisoning, Gastroenteritis, Migraine, Motion sickness(Kinetosis), Lactose intolerance"
      },
      {
        name: 'Reduced Appetite',
        _id: 13,
        diagnosis: "State of stress, Depression, Lack of supply of thyroid hormones, Sleep apnea, Inflammation of the pancreas"
      },
      {
        name: 'Stomach burning',
        _id: 13,
        diagnosis: "Stomach ulcer, Reflux disease, Drug side effect"
      },
      {
        name: 'Vomiting blood',
        _id: 13,
        diagnosis: "Stomach bleeding, Nosebleed, Stomach ulcer, Enlarged veins of the esophagus, Reflux disease"
      },
      {
        name: 'Weight gain',
        _id: 13,
        diagnosis: "Eating disorder, Sleeping disorder, Depression, Constipation"
      }
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


