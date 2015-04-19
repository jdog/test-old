J.test.buildTest(
	"Constructors.DemoConstructor"
	, function(thingToTest, meta, tools) {

	tools.Test("Dummy Test", function() {
		var demo = thingToTest()
			, constr = demo()
		return true
	})

	tools.Test("Dummy Test 2", function() {
		var demo = thingToTest()
			, constr = demo()
		return true
	})

	tools.Test("Dummy Test 2", function() {
		var demo = thingToTest()
			, constr = demo()
		return true
	})

	tools.Test("Dummy Test 2", function() {
		var demo = thingToTest()
			, constr = demo()
		return tools.objectCompare(demo, {
		})
	})

	tools.TestWaiter("Dummy Test 3", function(series, go, call) {

		var demo = thingToTest()
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
