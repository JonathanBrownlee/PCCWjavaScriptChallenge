/**
 * Example problem with existing solution and passing test.
 * See problem 0 in the spec file for the assertion
 * @returns {string}
 */
exports.example = () => 'hello world';

exports.stripPrivateProperties = (suppliedProperties, objects) => objects.map(object => {

    for (let i in suppliedProperties) {
        delete object[suppliedProperties[i]];
    }

    return object;
});

exports.excludeByProperty = (property, objects) => objects.filter(object => !object.hasOwnProperty(property) && object);

exports.sumDeep = (allObjects) => allObjects.map(mainObj => {
    const mainObjCpy = {...mainObj};

    mainObj.objects = 0;

    mainObjCpy.objects.forEach(valObj => {
        mainObj.objects += valObj.val;
    });

    return mainObj;
});

exports.applyStatusColor = ((colours, statuses) => {
    const coloursFlipped = Object.entries(colours).reduce((acc, current) => {
        const [colour, statuses] = current;
        statuses.forEach(val => acc[val] = colour);
        return acc;
    }, {});

    return statuses.map((statusObj) => {
        if (coloursFlipped.hasOwnProperty(statusObj.status)) {
            statusObj["color"] = coloursFlipped[statusObj.status]
            return statusObj;
        }
    }).filter(( e ) => e !== undefined);
});

exports.createGreeting = (greet, message) => (name) => greet(message, name);

exports.setDefaults = ((defaults) => (obj) => {
		for (var prop in defaults) {
			if (!obj.hasOwnProperty(prop)) {
				obj[prop] = defaults[prop];
			}
		}
		return obj;
	}
);


exports.fetchUserByNameAndUsersCompany = async (name, services) => {
	const userArray = await services.fetchUsers();
	const user = userArray.find(element => element.name === name);
	const status = await services.fetchStatus();
	const company = await services.fetchCompanyById(user.companyId);
	
	return {
		company: company, 
		status,
		user: user
	}
};






