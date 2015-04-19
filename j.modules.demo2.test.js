J.test.buildTest(
	"Modules.demo2"
	, function(thingToTest, meta, tools) {

		tools.Test("something else", function() {

			var demo2 = thingToTest({ 

				DemoScript : function() {
					return { /* our mock object */ }
				}

			})

			return true
		})

		tools.Test("something else", function() {
			return true
		})

	})
