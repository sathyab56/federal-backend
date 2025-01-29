import mongoose from "mongoose";
console
const bankAccSchema = new mongoose.Schema({
    ifsc : {
        type : String,
        required : true,
    },
    bankName: {
        type: String,
        required: true,
    },
    password : {
        type : String,
        required : true
    },
    branchName : {
        type : String,
        required : true,
        unique : true
    },
    logo : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    products : {
        type : Array,
        required : true
    }
}, { minimize : false })

const bankAccModel = mongoose.models.bankAcc || mongoose.model('bankAcc', bankAccSchema)

// Function to initialize the database and insert sample data
const initializeDatabase = async () => {
    try {
        // Sample data to insert
        const sampleData = [
            
            {
                bankName: "THE FEDERAL BANK LTD.",
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                password: 1000,
                branchName: "Patlur Branch",
                address: "No.403/B, Mohana Complex, Kanjappalli Pirivu Junction, Annur- Avinashi Road, Kanjappalli, Coimbatore Dist, Tamil Nadu-641653"
            },
             
            {
                bankName: "THE FEDERAL BANK LTD.",
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                password: 1001,
                branchName: "Kalingarayanpalayam",
                address: "No.403/B, Mohana Complex, Kanjappalli Pirivu Junction, Annur- Avinashi Road, Kanjappalli, Coimbatore Dist, Tamil Nadu-641653"
            },
             
            {
                bankName: "THE FEDERAL BANK LTD.",
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                password: 1002,
                branchName: "Gandipuram",
                address: "No.403/B, Mohana Complex, Kanjappalli Pirivu Junction, Annur- Avinashi Road, Kanjappalli, Coimbatore Dist, Tamil Nadu-641653"
            },
             
            {
                bankName: "THE FEDERAL BANK LTD.",
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                password: 1003,
                branchName: "Aluva",
                address: "No.403/B, Mohana Complex, Kanjappalli Pirivu Junction, Annur- Avinashi Road, Kanjappalli, Coimbatore Dist, Tamil Nadu-641653"
            },
             
            {
                bankName: "THE FEDERAL BANK LTD.",
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                password: 1004,
                branchName: "Thrissu",
                address: "No.403/B, Mohana Complex, Kanjappalli Pirivu Junction, Annur- Avinashi Road, Kanjappalli, Coimbatore Dist, Tamil Nadu-641653"
            },
             
            {
                bankName: "THE FEDERAL BANK LTD.",
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                products: ["Dater", "Mini Dater", "Approval", "Paid", "Locker", "Number", "Fake Note", "Decline"],
                password: 1005,
                branchName: "Sai Baba Colon",
                address: "No.403/B, Mohana Complex, Kanjappalli Pirivu Junction, Annur- Avinashi Road, Kanjappalli, Coimbatore Dist, Tamil Nadu-641653"
            },
            
        ]

        // Insert sample data into the collection
        await bankAccModel.insertMany(sampleData);
        
        console.log("Sample data inserted successfully");
        
    } catch (error) {
        //console.error("Error initializing database:", error);
    } finally {
    }
};

// Call the function to initialize the database
initializeDatabase();  


export default bankAccModel







