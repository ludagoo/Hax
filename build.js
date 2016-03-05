var fs = require('fs');


var scripts = [
        'lib/jquery.js',
        'lib/json.js',
        'js/jsonrpc.js',
        'lib/jsonml.js',
        'lib/jsonml-jbst.js',
        'lib/lazyload.js',
        'lib/iscroll.js',
        'lib/hashchange.js',
        'js/hash.js',
        'js/time.js',
        'js/Q.js',
        'js/progress.js',
        'templates/details.js',
        'templates/list.js',
        'templates/listdetails.js',
        'templates/listitem.js',
        'templates/banner.js',
        'templates/banneritem.js',
        'templates/buttons.js',
        'templates/player.js',
        'templates/recentlyaddeditem.js',
        'templates/link.js',
        'templates/settings.js',
        'js/xbmc.js',
        'js/library.js',
        'js/player.js',
        'js/load.js'
]

var HTML = [ fs.readFileSync('base.html') ];
scripts.forEach(function (script) {
	HTML.push('<script>');
	HTML.push(fs.readFileSync(script));
	HTML.push('</script>');
});

fs.writeFile('index.html', HTML, { 'mode': 0644 }, function (err) {});
