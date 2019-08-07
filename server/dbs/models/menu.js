import mongoose from 'mongoose'
const Schema = mongoose.Schema
const Menu = new Schema({
  name: {
    type: String
  },
  typeList: {
    type: Array
  }
})

export default mongoose.model('Menu', Menu)