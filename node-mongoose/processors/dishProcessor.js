module.exports = function(db, Dishes) {
    // create a new dish
    Dishes.create({
        "name": "Uthapizza",
        "image": "images/uthapizza.png",
        "category": "mains",
        "label": "Hot",
        "price": "4.99",
        "description": "A unique . . .",
        "comments": [
            {
                "rating": 5,
                "comment": "Imagine all the eatables, living in conFusion!",
                "author": "John Lemon"
            },
            {
                "rating": 4,
                "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                "author": "Paul McVites"
            }
        ]
    }, function (err, dish) {
        if (err) throw err;
        console.log('Dish created!');
        console.log(dish);

        var id = dish._id;

        // get all the dishes
        setTimeout(function () {
            Dishes.findByIdAndUpdate(id, {
                    $set: {
                        description: 'Updated Test'
                    }
                }, {
                    new: true
                })
                .exec(function (err, dish) {
                    if (err) throw err;
                    console.log('Updated Dish!');
                    console.log(dish);

                    dish.comments.push({
                        rating: 5,
                        comment: 'I\'m getting a sinking feeling!',
                        author: 'Leonardo di Carpaccio'
                    });

                    dish.save(function (err, dish) {
                        console.log('Updated Comments!');
                        console.log(dish);

                        db.collection('dishes').drop(function () {
                            console.log("*** dropped the dishes collection ***");
                            db.close();
                        });
                    });
                });
        }, 3000);
    });
}