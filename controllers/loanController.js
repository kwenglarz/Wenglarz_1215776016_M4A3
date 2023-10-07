const customerLoan = require('./../model/loanModel');
const APIFeatures = require('../dataBaseManager/loanDbContext');

exports.getAllLoans =   async (req, res) => {
  try {
    // EXECUTE QUERY
    const features = new APIFeatures(customerLoan.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const customerloan = await features.query;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: customerloan.length,
      data: {
        customerLoan
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getLoan = async (req, res) => {
  try {
    const customerloan = await customerLoan.find();
    // Loan.findOne({ _id: req.params.id })

    res.status(200).json({
      status: 'success',
      results: customerloan.length,
      data: {
        customerloan
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getLoanById = async (req, res) => {
  // get specific loan
  const { id } = req.params;
  const customerloan = await customerLoan.find({_id: id });
  res.status(200).json({
    status: 'Success',
    results: customerloan.length,
    data: {
      customerloan
    }
  });
};

exports.createLoan = async  (req, res) => {
    const newLoan = req.body;
    const dateTime = new Date().toISOString();

    const newCustomerLoan = {...newLoan, createdDate: dateTime, insertedDate: dateTime};
  try {
    const savedLoan = await customerLoan.create(newCustomerLoan)
    res.status(201).json({
      status: 'success',
      data: savedLoan
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.updateLoanById = async (req, res) => {
  try {
    const customerloan = await customerLoan.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        customerloan
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.deleteLoanById = async (req, res) => {
  try {
    await customerLoan.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};