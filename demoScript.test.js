J.test.buildTest("Constructors.DemoConstructor", function(Constructor, Test, TestWaiter, tools) {

	Test("Dummy Test", function() {
		var demo = Constructor()
		return true
	})

	Test("Dummy Test 2", function() {
		var demo = Constructor()
		return true
	})

	Test("Dummy Test 2", function() {
		var demo = Constructor()
		return true
	})

	Test("Dummy Test 2", function() {
		var demo = Constructor()
		return tools.objectCompare(demo, {
		})
	})

	TestWaiter("Dummy Test 3", function(series, go, call) {

		var demo = Constructor()

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
