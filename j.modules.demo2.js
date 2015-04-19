J.addWait(
	"Modules.demo2"
	, [ "Constructors.DemoScript" ]
	, function (ref) {
	
	var dog = {
		someNumber : 1234
		, someObj : {
			withThis : true
			, andThis : "fake"
			, andThisDeeperPart : {
				thatHasThis : true
			}
		}
	}

	function god() {
		console.log("123")
	}

	god()

	return dog

})
.use("test.attach", "j.modules.demo2.test.js")
