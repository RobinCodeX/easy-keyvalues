
const kvLib = require('../dist/index');
const kv3Lib = require('../dist/kv3');
const path = require('path');
const fs = require('fs');

const kvText = `

// test object
"test"
{
    // comment01
    "key"   "value"

    // comment02
    // comment03
    // comment04
    "children"// this is children
    {
        "c1"    "1" // comment05
        "c2"    "2 \\"two\\""

    // comment07
        // comment08
        "c3"    "sss
    <br/>this is child\\n index 3
    88"
        "c4"   
        {
            "one"   "two"
        }
    }

    "test" 
    {
        "three"   "two"
    }
}
`;

const kvText2 = `
"Ha"
{
	test	"123"
	haha	false
}
`;

const kv3Text = `<!-- kv3 encoding:text:version{e21c7f3c-8a33-41c5-9977-a76d3a32aa0d} format:generic:version{7412167c-06e9-4698-aff2-e63eb59037e7} -->
{
    a05=789
	arrayValue =
	[
		1,
        2,
        {
            a = 123
            b = "456"
            c = -1.5
            g = {a=123 b=["456","789", true, {b=456}]}
            t = [
                3,
                6,
            ]
        }
	]
	objectValue =
	{
		n = 5
        s = "foo"
        h = ["a", 456]
        g = 
        {
            b = 123
        }
        j = {a=123 b=["456","789", true, {b=456}]}
	}
}
`;

function printKV3( obj ) {
    console.log(JSON.stringify(obj, (key, value) => {
        if (key === "Type" && typeof value === "number") {
            return kv3Lib.KeyValues3Type[value];
        }
        return value;
    }, '    '));
}

;(async function() {
    console.log("--> read kv.txt")
    let result = await kvLib.readFromFile(path.join(__dirname, 'kv.txt'));
    console.log(kvLib.formatKeyValues(result));

    console.log("--> read from string")
    result = await kvLib.readFromString(kvText);
    console.log(kvLib.formatKeyValues(result));

    console.log("--> read from kv3 string")
    printKV3( await kv3Lib.readFromFile(path.join(__dirname, 'kv3.txt')) )
    printKV3( await kv3Lib.readFromString(kv3Text) )
})();