function addJQuery(callback) {
    var script = document.createElement("script");
    script.setAttribute("src", "about:blank");
    script.addEventListener('load', function () {
        var script = document.createElement("script");
        script.textContent = "(" + callback.toString() + ")();";
        document.head.appendChild(script);
    }, false);
    document.head.appendChild(script);
}

function main() {
    try {
    	var movieTitle = jQuery('h1 span:eq(0)').text();
	jQuery('#info').append('<div><span class="pl">电影下载:</span><a href="http://kat.ph/usearch/' + movieTitle + '" target="_blank"> kat.ph(推荐) /</a> \
							<a href="http://www.yyets.com/php/search/index?keyword= '+ movieTitle +'" target="_blank">人人影视</a><br> \
							<span class="pl">字幕下载:</span> <a href="http://shooter.cn/search/' + movieTitle + '" target="_blank">射手字幕</a><div>');
    }
    catch (e) { }
}
addJQuery(main);
