const { model, Schema } = require("mongoose");
const Covid19 = Schema({
  indicativo: {
    type: Number,
  },
  pais: {
    type: String,
  },
  casos: {
    type: Number,
  },
  mortalidad: {
    type: Number,
  },
  muertes: {
    type: Number,
  },
});

module.exports = model("Covid19", Covid19);
