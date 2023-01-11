// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
//using a sequelize pivot tables (to create a many to many relationship between products and tags)
Product.belongsTo(Category, 
  {
  foreignKey: 'category_id',
  // onDelete: 'CASCADE',
  }
),

//Categories have many Products
Category.hasMany(Product, 
  {
  foreignKey: 'category_id',
  // onDelete: 'CASCADE',
  }
),

// Products belongToMany Tags (through ProductTag)
//passing a string to through, asking sequelize to automatically generate a model ex. ProductTag
Product.belongsToMany(Tag, {
  through: 
  {
    model: ProductTag,
    unique: false
  },
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: 
  {
    model: ProductTag,
    unique: false
  },
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
