var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    title:{
        type: String
    },
    created_date:{
        type: Date,
        default: Date.now
    },
    content:{
        type: String
    },

},{
    versionKey: false
}

);

module.exports = mongoose.model('Products',ProductSchema);