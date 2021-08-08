const mongoose = require('mongoose');

const BoatSchema = mongoose.Schema({
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    maker: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0
    },
    active: {
        type: Boolean,
        default: true
    }
    
}, {
    timestamps: true
});

module.exports = mongoose.model('Boat', BoatSchema);

/*puska az orderre:
export class Order {
  _id: string = '';
  order: Order = new Order();
  products: Product[] = [];
  time: Date = new Date();
  note: string = '';
}
*/