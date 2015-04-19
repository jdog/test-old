J.test.buildTest(
	"Modules.demo3"
	, function(meta, Test, TestWaiter, tools) {

		Test("something else", function() {
			return true
		})

		Test("something else", function() {
			return true
		})

	})
