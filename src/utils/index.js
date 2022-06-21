exports.addFilm = async (collection, filmObj) => {
    try {
        // add database entry using built in method of insertOne 
        // and passing the filmObj entered by the user
        const addEntry = await collection.insertOne(filmObj);
        console.log(addEntry);
    } catch (error) {
        console.log(error);
    }
};

exports.listFilms = async (collection) => {
    try {
        const filmList = await collection.find().toArray();
        console.log(filmList);
    } catch (error) {
        console.log(error);
    }
};

// Create function to update one or more database entries. 

// Create function to delete one or more databse entries.