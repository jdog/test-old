J.test.buildTest(
	"Constructors.DemoConstructor"
	, function(thingToTest, meta, tools) {

	// use meta.ref to continue to use external libraries
	// to mock the passed in libraries create a new object like so

	var mockRef = {
		J : J
		, PAGE : J
	}

	tools.Test("Dummy Test", function() {
		// var demo = thingToTest(meta.ref)
		var demo = thingToTest(mockRef)
			, constr = demo()
		return true
	})

	tools.Test("Dummy Test 2", function() {
		var demo = thingToTest(mockRef)
			, constr = demo()
		return true
	})

	tools.Test("Dummy Test 2", function() {
		var demo = thingToTest(mockRef)
			, constr = demo()
		return true
	})

	tools.Test("Dummy Test 2", function() {
		var demo = thingToTest(mockRef)
			, constr = demo()
		return tools.objectCompare(demo, {
		})
	})

	tools.TestWaiter("Dummy Test 3", function(series, go, call) {

		var demo = thingToTest(mockRef)
			, constr = demo()

		series.push(function() {
			call({ name : "example", result : true  })
			go()
		})

		series.push(function() {
			call({ name : "example 2", result : false  })
			go()
		})

		go()

	})

})
