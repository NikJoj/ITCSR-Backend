module.exports = (sequelize, DataTypes) =>
{
  const heads =
  sequelize.define
  (
  	  'heads',
    {
      head_id :
      {
        type       : DataTypes.INTEGER(),
        autoIncrement: true,
        primaryKey : true
      },
      name: DataTypes.STRING(45),
      remark: DataTypes.JSON()

    }
  );

  return heads;
};