// Adds a link to the stats page on stats.wiki.tf to the page title header

function AddWikiFiLink() {
    if (wgCanonicalNamespace == 'Special') {
        return;
    }
    else if (wgCanonicalNamespace == 'User') {
        var user_stats_link = '<a href="http://stats.wiki.tf/user/tf/' + wgTitle.split("/")[0] + '" target="_blank">user stats</a>'
        var page_stats_link = '<a href="http://stats.wiki.tf/page/tf/' + wgPageName + '" target="_blank">page stats</a>'
        var link = ' <span style="font-size:11px">(' + user_stats_link + ' | ' + page_stats_link + ')</span>'
        $("#firstHeading span").append(link);
    }
    else {
        var page_stats_link = '<a href="http://stats.wiki.tf/page/tf/' + wgPageName + '" target="_blank">page stats</a>'
        var link = ' <span style="font-size:11px">(' + page_stats_link + ')</span>'
        $("#firstHeading span").append(link);
    }
}

addOnloadHook(AddWikiFiLink);