module.exports = (sequelize, DataTypes) =>
{
  const proposal =
  sequelize.define
  (
  	  'proposal',
    {
      project_id :
      {
        type       : DataTypes.INTEGER(),
        autoIncrement: true,
        primaryKey : true,
        // defaultValue:'0'
      },
     
      file_no: DataTypes.STRING(45),
      principal_investigator_id: DataTypes.INTEGER(),
      name:DataTypes.STRING(45),
     data: DataTypes.JSON(),
     start_date:DataTypes.DATE(),
     duration:DataTypes.INTEGER()

    }
  );

  proposal.associate = function(models){
    proposal.belongsTo(models.people, {foreignKey: 'principal_investigator_id', targetKey: 'people_id'});
  }

  return proposal;
};