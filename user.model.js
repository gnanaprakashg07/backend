import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    userName : {
        type :String,
        required :true,
        unique:true
    },
    fullName :{
        type : String,
        required : true
    },
    email :{
        type :String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        requied:true,
        minLength:6
    },
    followers :[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            default:[]
        }
    ],
    following:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            default:[]
        }
    ],
    profileImg:{
        type:String,
        default:""
    },
    coverImg:{
        type:String,
        default:""
    },
    bio:{
        type:String,
        default:""
    },
    link:{
        type:String,
        default:""
    }
},{timestamps:true})

const User=mongoose.model("User",UserSchema);
export default User;