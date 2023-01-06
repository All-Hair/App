module.exports = (sequelize, DataType) => {
  const Product = sequelize.define("Product", {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    brand: {
      type: DataType.STRING,
      allowNull: true,
    },
    name: {
      type: DataType.STRING,
      allowNull: true,
    },
    price: {
      type: DataType.INTEGER,
      allowNull: true,
    },
    stock: {
      type: DataType.INTEGER,
      allowNull: true,
    },
    color: {
      type: DataType.STRING,
      allowNull: true,
    },
    category: {
      type: DataType.STRING,
      allowNull: true,
    },
    description: {
      type: DataType.TEXT,
      allowNull: true,
    },
    date: {
      type: DataType.STRING,
      allowNull: true,
    },
    image: {
      type: DataType.STRING,
      allowNull: true,
    },
  });
  return Product;
};
