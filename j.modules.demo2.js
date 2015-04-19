J.addWait(
	"Modules.demo2"
	, [ "Constructors.DemoConstructor" ]
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
		, demoConstructor : null
	}

	function god() {
		console.log("123")
		dog.demoConstructor = ref.DemoConstructor()
	}

	god()

	return dog

})
.use("test.attach", "j.modules.demo2.test.js", "j.modules.demo2.test2.js")
