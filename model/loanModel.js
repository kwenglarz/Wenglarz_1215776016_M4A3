const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema(
  {
    customerName: {
        type: String,
        required: [true, 'A customer must have a name'],
        unique: false,
        trim: true,
        maxlength: [40, 'A customer name must have less than or equal to 40 characters'],
        minlength: [2, 'A customer name must have more than or equal to 2 characters']
     
    },
    phoneNumber:{
        type: Number,
        required: [true, 'A customer must have a phone number'],
        unique: false,
        trim: true,
        maxlength: [10, 'A phone number must have max of 10 characters'],
        maxlength: [10, 'A phone number must have minimum of 10 characters']
    },
    address: {
        type: String,
        required: [true, 'A customer must have an address'],
        unique: false,
        trim: true,
        maxlength: [100, 'An address must have less than or equal to 100 characters'],
        minlength: [10, 'A from  must have more than or equal to 10 characters']
    },
    loanAmount: {
        type: String,
        required: [true, 'A loan amount is required'],
        unique: false,
        trim: true,
        maxlength: [1000000, 'Loan amount must be less than or equal to 1000000'],
        minlength: [1, 'Loan amount must be greater than or equal to 1']
    },
    interest: {
        type: Number,
        default: 1,
        min: [0, 'Interest rate must be greater than or equal to 0'],
        max: [20, 'Interest rate must be less than or equal to 20']
    },
    loanTermYears: {
        type: Number,
        required: [true, 'A loan term is required'],
        default: 5,
        unique: false,
        trim: true,
        maxlength: [30, 'Loan term must be less than or equal to 30'],
        minlength: [1, 'Loan term must be greater than or equal to 1']
    },
    loanType: {
        type: String,
        required: [true, 'A loan type is required'],
        unique: false,
        trim: false,
        maxlength: [30, 'Loan type must be less than or equal to 30 characters'],
        minlength: [3, 'Loan type must be greater than or equal to 3 characters']
    },
    description: {
        type: String,
        required: [true, 'A loan description is required'],
        unique: true,
        trim: true,
        maxlength: [50, 'A description must have less than or equal to 50 characters'],
        minlength: [10, 'A description must have greater than or equal to 10 characters']
    },
    createdDate: {
        type: Date,
        default: Date.now,
        required: [true, 'A created date is required'],
        autopopulate: true,
        trim: false
    },
    insertedDate: {
        type: Date,
        default: Date.now,
        required: [true, 'A inserted date is required'],
        autopopulate: true,
        trim: false
    }

});
const customerLoan = mongoose.model('customerLoan', loanSchema);

module.exports = customerLoan;