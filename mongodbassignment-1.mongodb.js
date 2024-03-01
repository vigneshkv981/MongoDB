//1) Write a MongoDB query to display the fields restaurant_id, name, and zip code but exclude the field _id for all the documents in the collection restaurant.
[
    {
        $project: {
            _id: 0,
            restaurant_id: 1,
            name: 1,
            zipcode: 1
        }
    }
],

//2) Write a MongoDB query to arrange the name of the restaurants in ascending order along with all the columns.

[
    { $project: { _id: 0, name: 1 } },
    { $sort: { name: 1 } },
  ],

// 3) Write a MongoDB query to display the first 5 restaurant in ascending order of name field.

[
    { $project: { _id: 0, name: 1 } },
    { $sort: { name: 1 } },
    { $limit: 5 }
],

//4) Write a MongoDB query to display the next 5 restaurants after skipping first 5.

[
    { $sort: { name: 1 } },
    { $skip: 5 },
    { $limit: 5 },
    { $project: { _id: 0, name: 1 } }
],

//5) Write a MongoDB query to find the restaurants who achieved a score more than 90.

[
    {
      $match: {
        "grades.score": {
          $gt: 90,
        },
      },
    },
    {
      $project: {
        _id: 0,
        name: 1,
      },
    },
  ],

  //6) Write a MongoDB query to find the restaurants that achieved a score, more than 80 but less than 100.

  [
    { $unwind: "$grades" },
    { 
        $match: { 
            "grades.score": { $gt: 80, $lt: 100 } 
        } 
    },
    { $project: { _id: 0, name: 1 } }
],

//7) Write a MongoDB query to find the restaurant name, longitude and latitude and cuisine for those restaurants which contain 'Caf' as first three letters of its name.

[
    {
        $match: {
            name: { $regex: /^Caf/i }
        }
    },
    {
        $project: {
            _id: 0,
            name: 1,
            "address.coord": 1,
            cuisine: 1
        }
    }
],

//8) Write a MongoDb query to update grade B to A in all documents.

[
    { $unwind: "$grades" },
    { 
        $match: { 
            "grades.grade": "B" 
        } 
    },
    { 
        $set: { 
            "grades.grade": "A" 
        } 
    }
]