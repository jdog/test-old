J.addWait(
	"Constructors.DemoConstructor"
	, [ "test" ]
	, function (ref) {
	
	return function DemoConstructor (e_root, options) {

		var dog = {
			someNumber : 1234
			, someObj : {
				withThis : true
				, andThis : "fake"
				, andThisDeeperPart : {
					thatHasThis : true
				}
			}
			, frank : function frank () {
				return 123
			}
		}

		return dog

	}

})
.use("attachTest", "demoScript.test.js")
