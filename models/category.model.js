const mongoose = require ("mongoose");

const category = mongoose.model(
    "Category",
    mongoose.Schema(
        {
            categoryName: {
                type: String,
                required: true,
                unique: true,
            },

            categoryDesc:{
                type : String,
                required : false,
            },

            category

        })
);

module.exports = {
    category, 
}