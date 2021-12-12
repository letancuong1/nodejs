module.exports={
	mongooesToObject:function(variables){
		return variables.map(variable=>variable.toObject())
	},
	mongonoObject:function(variables) {
		return variables?variables.toObject():variables;
	}
}