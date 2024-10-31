import { model, Schema } from 'mongoose';
const BlogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        default: "General"
    },
    date: {
        type: Date,
        default: Date.now
    },
});
export default model('blogs', BlogSchema);