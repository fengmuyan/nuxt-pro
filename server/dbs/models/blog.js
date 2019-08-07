import mongoose from 'mongoose'
const Schema = mongoose.Schema
const Blog = new Schema({
  name: {
    type: String,
    default: '博客标题'
  },
  content: {
    type: String,
    default: '博客内容'
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

export default mongoose.model('Blog', Blog)