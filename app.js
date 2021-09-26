/* ============= Using MongoClient driver in a node.js application ============== */

// Import MongoClient
const { MongoClient } = require("mongodb");

// Connection URI
const uri =
  "mongodb://localhost:27017";

// Create a new MongoClient
const client = new MongoClient(uri);

// Running
async function run() {
  try {

    // Connect the client to the server
    await client.connect();

    // Create a new database and collection inside the database
    const database = client.db("University");
    const Students = database.collection("Students");

    // Students information to be inserted
    const docs = [{
            Student_id: 14801012018,
            Full_Name: "Ishika Bansal",
            Batch: "2018-2022",
            DOB: "04-08-2000",
            Branch: "CSE"
        },
        {
            Student_id: 12001012018,
            Full_Name: "Neha Pandey",
            Batch: "2018-2022",
            DOB: "28-11-2000",
            Branch: "CSE"
        },
        {
            Student_id: 14901012018,
            Full_Name: "Pariksha Prajapati",
            Batch: "2018-2022",
            DOB: "15-05-2001",
            Branch: "CSE"
        },
        {
            Student_id: 14801012018,
            Full_Name: "Sanjana Singh",
            Batch: "2018-2022",
            DOB: "02-02-2000",
            Branch: "CSE"
        },
        {
            Student_id: 15001012018,
            Full_Name: "Aditi Anand",
            Batch: "2018-2022",
            DOB: "08-08-2000",
            Branch: "IT"
        },
        {
            Student_id: 15101012018,
            Full_Name: "Himanshi Goyal",
            Batch: "2018-2022",
            DOB: "04-04-2000",
            Branch: "IT"
        },
        {
            Student_id: 2401032018,
            Full_Name: "Shreya Singh",
            Batch: "2018-2022",
            DOB: "10-08-2000",
            Branch: "MAE"
        },
        {
            Student_id: 2901012018,
            Full_Name: "Vanshika Uniyal",
            Batch: "2018-2022",
            DOB: "18-06-2000",
            Branch: "MAE"
        }
    ];

    // Insert Operation ============

    const insertCheck = await Students.insertMany(docs);
    if(insertCheck){
        console.log("Information successfully entered into the database!");
    }


    // Find Operation =============

    const branch = "CSE";
    const findCheck = Students.find({Branch: branch});

    if(findCheck){
        console.log("Information of students of Branch " + branch + " has been successfully found and filtered from the database!");
        await result.forEach(console.dir);
    }


    // Update Operation ===========
    const filter = { Student_id: 2901012018 }; // Creating a filter so as to update which entry? 
    const newRollNumber = 2801012018; // New Value of Roll Number

    const updateDoc = {
        $set: {
          Student_id: newRollNumber
        }, 
      };   // Setting new roll number with an updated number
  
     const updateCheck = Students.updateOne(filter, updateDoc);
    if(updateCheck){
         console.log("Successfully updated the roll number");
    }
 

    // Delete Operation ===========
    const st_id = 14801012018;
    const deleteCheck = await Students.deleteMany({Student_id: st_id});

    if(deleteCheck){
        console.log("Information of students with an id " + st_id + " has been successfully removed from the database");
    }
   
} 
  
    finally {
    
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

// Error Handling by catching them.
run().catch(console.dir);
