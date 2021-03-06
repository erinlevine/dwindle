
module.exports = function(sequelize, DataTypes){
	var Stats = sequelize.define("Stats", {
		currentWeight: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		initialWeight: {
			type: DataTypes.INTEGER
		},
		goalWeight: {
			type: DataTypes.INTEGER
		}
	},

		{
			classMethods: {
				associate: function(models){
					Stats.belongsTo(models.User, {
						foreignKey: {
							allowNull: false
						}
					});
				}
			}
		}
	);
	return Stats;
}