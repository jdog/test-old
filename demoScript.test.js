J.test.buildTest("Constructors.DemoConstructor", function(Constructor, Test, TestWaiter, tools) {

	Test("Dummy Test", function() {
		var demo = Constructor()
		return true
	})

	Test("Dummy Test 2", function() {
		return true
	})

	Test("Dummy Test 2", function() {
		return true
	})

	TestWaiter("Dummy Test 3", function(series, go, call) {

		series.push(function() {
			call({ name : "example", result : true  })
			go()
		})

		go()

	})

})
