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
      location: 'Head',
      symptoms: [
        {
          nameWithDiagnosis: ['Eye pain',
          
           "Conjunctivitus, Cataracts, Pink eye, Blepharitis"]
        },
        {
          nameWithDiagnosis: ['Burning eyes',
          
           "Conjunctivitus, Eye corrosion"]
        },
        {
          nameWithDiagnosis: ['Drooping eyelid',
          
           "Congenital ptosis, Damage to the eye muscle nerves, Myasthenia gravis"]
        },
        {
          nameWithDiagnosis: ['Ear ache',
          
           "Middle ear infection, Temporomandibular joint dysfunction(TMJ) syndrome, Tooth abcess"]
        },
        {
          nameWithDiagnosis: ['Headache',
          
           "Inflammation of paranasal sinuses, Migraine, Concussion"]
        },
        {
          nameWithDiagnosis: ['Dizziness',
          
           "Positional vertigo, Low blood pressure, Hyperventilation, Low blood sugar"]
        },
        {
          nameWithDiagnosis: ['Paralysis',
          
           "Stroke, Disseminated sclerosis, Sarcoidosis, Meningeal tumor"]
        },
        {
          nameWithDiagnosis: ['Lip Swelling',
          
           "Food allergy, Hives, Hypersensitivity reaction"]
        },
        {
          nameWithDiagnosis: ['Memory gap',
          
           "Intoxication, Anxiety disorder, Alzheimer's disease"]
        }
      ]
    }
  },
{
  arm: {
    location: 'arm',
    symptoms: [
      
        {
          nameWithDiagnosis: ['Pain in the limbs',
          
           "Influenza, Infectious mononucleosis, Lack of Vitamin D"]
        },
        {
          nameWithDiagnosis: ['Swelling in the armpits',
          
           "Infectious mononucleosis, Superficial form of cellulitis, Toxoplasmosis infection"]
        },
        {
          nameWithDiagnosis: ['Tremor at rest',
          
           "Hyperventilation, Overproduction of Thyroid hormones, Epileptic seizures"]
        }
      ]
  }
},
{
  abdomen: {
    location: 'abdomen',
    symptoms: [
      {
        nameWithDiagnosis: ['Abdominal pain',
        
         "Bloated belly, Gastroenteritis, Constipation, Food poisoning"]
      },
      {
        nameWithDiagnosis: ['Nausea',
        
         "Food poisoning, Gastroenteritis, Migraine, Motion sickness(Kinetosis), Lactose intolerance"]
      },
      {
        nameWithDiagnosis: ['Reduced Appetite',
        
         "State of stress, Depression, Lack of supply of thyroid hormones, Sleep apnea, Inflammation of the pancreas"]
      },
      {
        nameWithDiagnosis: ['Stomach burning',
        
         "Stomach ulcer, Reflux disease, Drug side effect"]
      },
      {
        nameWithDiagnosis: ['Vomiting blood',
        
         "Stomach bleeding, Nosebleed, Stomach ulcer, Enlarged veins of the esophagus, Reflux disease"]
      },
      {
        nameWithDiagnosis: ['Weight gain',
        
         "Eating disorder, Sleeping disorder, Depression, Constipation"]
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


