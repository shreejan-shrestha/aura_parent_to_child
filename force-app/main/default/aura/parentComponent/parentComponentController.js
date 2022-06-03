({
	sendValue: function (component, event, helper) {
		var msg = component.get("v.keyword")
		component.set("v.parentValue", msg);
		console.log("value " + msg);
	}
})