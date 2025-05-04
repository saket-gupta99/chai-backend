import {Schema, model} from "mongoose";

const subscriptionSchema = new Schema({
    subsriber: { //one who is subscribing
        type: Schema.Types.ObjectId,
        ref: "User" 
    },
    channel: { //one the user is subscribing to
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true});

export const Subscription = model("Subscription", subscriptionSchema);