import { Messages } from '../../src/components/messages.component';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const msgSchema = mongoose.Schema({
    message: {
        type:String,
    },
    sender: {
        type: Schema.Types.ObjectId,
       ref: 'User'
    },
    type : {
        type: String
    },
}, {timestamps: true});

const Messages = mongoose.model('Messages', msgSchema);

module.exports = { Messages }