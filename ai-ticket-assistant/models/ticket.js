import mongoose from "mongoose"

const ticketSchema=new mongoose.Schema({
    title:{
        type:String,
    },
    discription:{
        type:String,
    },
    status:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    assignedTo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        default:null
    },
    priority:{
     type: String
    },
    deadline:{
        type:Date
    },
    helpfulNotes:{
        type:String
    },
    relatedSkills:{
        type:[String]
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

export default mongoose.model("Ticket",ticketSchema)