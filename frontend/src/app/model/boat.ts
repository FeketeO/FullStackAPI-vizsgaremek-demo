export class Boat {
  _id: string = '';
  model: string = '';
  year: number = 1990;
  maker: string = '';
  price?: number = 0;
  active?: boolean = true
}



// const mongoose = require('mongoose');

// const BoatSchema = mongoose.Schema({
//     model: {
//         type: String,
//         required: true
//     },
//     year: {
//         type: Number,
//         required: true
//     },
//     maker: {
//         type: String,
//         required: true
//     },
//     price: {
//         type: Number,
//         default: 0
//     },
//     active: {
//         type: Boolean,
//         default: true
//     }

// }, {
//     timestamps: true
// });

// module.exports = mongoose.model('Boat', BoatSchema);
