const Product = function (params) {
    const {
        title, condition, quantity, dateOfRelease
    } = params || {};
    this.title = title;
    this.condition = condition;
    this.quantity = quantity;
    this.dateOfRelease = dateOfRelease;
};
module.exports = Product;
