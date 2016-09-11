// grab the things we need
var mongoose = require('mongoose');
var Currency = require('mongoose-currency');
var Schema = mongoose.Schema;

// create a schema
var promotionSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true,
    },
    label: {
        type: String, 
        default: ''
    },
    price: {
        type: Currency,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var Promotions = mongoose.model('Promotions', promotionSchema);

// make this available to our Node applications
module.exports = Promotions;