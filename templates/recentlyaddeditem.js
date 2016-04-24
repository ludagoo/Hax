/*global JsonML */

/* namespace template */
var template;
if ("undefined" === typeof template) {
	template = {};
}

template.recentlyaddeditem = JsonML.BST(
[
	"li",
	{
		"class": "recentlyaddeditem"
	},
	" ",
	[
		"span",
		{
			"class": "label"
		},
		function() {
	return this.data.label;
}
	],
	" ",
	[
		"div",
		{
			"jbst:visible": 
				function() {
	return !!this.data.thumbnail;
},
			"class": "thumbnail"
		},
		" ",
		[
			"a",
			{
				href: 
					function() {
	return this.data.link;
}
			},
			[
				"img",
				{
					src: 
						function() {
	return this.data.thumbnail;
}
				}
			]
		],
		" "
	],
	" "
]);

