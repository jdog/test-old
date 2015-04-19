J.test.buildTest(
	"Modules.demo2"
	, function(meta, Test, TestWaiter, tools) {

		Test("something else", function() {
			return true
		})

		Test("something else", function() {
			return true
		})

	})
