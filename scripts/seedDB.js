const mongoose = require("mongoose");
const faker = require('faker');
const db = require("../models");

// This file empties the Example collection and inserts some test documents below
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/finalclassproject"
);

const SEED_AMOUNT = 50;
const questions = [{
  "options": [
    {
      "text": "Director / C-level exec",
      "value": 8
    },
    {
      "text": "Compras",
      "value": 6
    },
    {
      "text": "Supervisor / Encargado de obra",
      "value": 4
    },
    {
      "text": "Ama de casa",
      "value": 2
    }
  ],
  "question": "¿Cuál es su cargo?",
  "category": "Authority"
},
{
  "options": [
    {
      "text": "Si",
      "value": 8
    },
    {
      "text": "No, formo parte del grupo que toma la decisión.",
      "value": 6
    },
    {
      "text": "No, aconsejo a quienes toman la decisión.",
      "value": 4
    },
    {
      "text": "No, solo recopilo información.",
      "value": 2
    }
  ],
  "question": "¿Es usted quien tomará al decision de compra?",
  "category": "Authority",
},
{
  "options": [
    {
      "text": "Si lo conoce",
      "value": 8
    },
    {
      "text": "No lo conoce",
      "value": 4
    }
  ],
  "question": "¿Conoce el proceso de compra?",
  "category": "Authority",
},
{
  "options": [
    {
      "text": "Si",
      "value": 8
    },
    {
      "text": "No, están en concurso",
      "value": 6
    },
    {
      "text": "No, están actualizando precios",
      "value": 4
    }
  ],
  "question": "¿Requieren el material para una obra que están construyendo?",
  "category": "Budget",
},
{
  "options": [
    {
      "text": "Si, sabe",
      "value": 8
    },
    {
      "text": "No sabe solo quiere precio unitario",
      "value": 6
    }
  ],
  "question": "¿Sabe la cantidad de material o solo pide precio unitario?",
  "category": "Budget",
},
{
  "options": [
    {
      "text": "Grande",
      "value": 8
    },
    {
      "text": "Mediana",
      "value": 6
    },
    {
      "text": "Pequeña o no tiene sitio web",
      "value": 4
    }
  ],
  "question": "Buscar en Internet (¿parece ser pequeña, mediana o grande?)",
  "category": "Budget",
},
{
  "options": [
    {
      "text": "Si urge asesoría técnica",
      "value": 8
    },
    {
      "text": "No, solo quiere la cotización",
      "value": 6
    }
  ],
  "question": "¿Manifiesta algún problema o reto?",
  "category": "Need",
},
{
  "options": [
    {
      "text": "Si, explicar",
      "value": 8
    },
    {
      "text": "No, cualquiera sirve",
      "value": 6
    }
  ],
  "question": "¿Hay algúna especificación?",
  "category": "Need",
},
{
  "options": [
    {
      "text": "Si",
      "value": 8
    },
    {
      "text": "No",
      "value": 6
    }
  ],
  "question": "¿Manifiesta urgencia para adquirir los materiales?",
  "category": "Timing",
},
{
  "options": [
    {
      "text": "Ya",
      "value": 8
    },
    {
      "text": "Esta semana",
      "value": 6
    },
    {
      "text": "No sabe",
      "value": 4
    }
  ],
  "question": "¿En caso afirmativo ¿Para cuándo necesita realizar la compra?",
  "category": "Timing",
}
]

db.Example
  .remove({})
  .then(() => db.Question.collection.insertMany(questions))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
