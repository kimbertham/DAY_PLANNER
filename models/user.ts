import * as mongoose from 'mongoose'
import * as bcrypt from 'bcrypt' 

export interface IUser {
  firstName: string,
    lastName: string,
    email: string,
    password: string,
    validatePassword : (password: string) => boolean
}

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true, maxlength: 50 },
  lastName: { type: String, required: true, maxlength: 50 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
  
}, {
  timestamps: true
})


userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(this: any,  passwordConfirmation : string)   {
    this._passwordConfirmation = passwordConfirmation
  })

userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}
  

userSchema
  .pre('validate', function(next) {
    console.log(this._passwordConfirmation)
    console.log(this.password)
    if (this.isModified('password') && this._passwordConfirmation !== this.password) {
      this.invalidate('passwordConfirmation', 'does not match')
    }
    next()
  })


userSchema.pre('save', function hashPassword(next) {
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
  }
  next()
})


export const userModel = mongoose.model<IUser & mongoose.Document>('User', userSchema)


