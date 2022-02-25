define({
    //Default configuration settings for the applciation. This is where you"ll define things like a bing maps key,
    //default web map, default app color theme and more. These values can be overwritten by template configuration settings
    //and url parameters.
    "appid": "",
    "webmap": "f1464978fa174ecaba8b210b6d71cff3",
    "oauthappid": "arcgisWebApps",
    //Enter the url to the proxy if needed by the applcation. See the "Using the proxy page" help topic for details
    //http://developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
    "proxyurl": "",
    //Example of a template specific property. If your template had several color schemes
    //you could define the default here and setup configuration settings to allow users to choose a different
    //color theme.
    "title": "",
    "summary": "",
    "defaultPanel": "legend",
    "enableSummaryInfo": true,
    "enableLegendPanel": true,
    "enableAboutPanel": true,
    "enableLayersPanel": true,
    "enableHomeButton": true,
    "enableLocateButton": true,
    "enableBasemapToggle": true,
    "enableShareDialog": true,
    "enableBookmarks": true,
    "enableOverviewMap": true,
    "openOverviewMap": false,
    "enableModifiedDate": true,
    "enableViewsCount": true,
    "enableMoreInfo": true,
    "enableScalebar": false,
    "defaultBasemap": "topo",
    "nextBasemap": "hybrid",
    "swipeLayer": [{
        "fields": [],
        "id": "ee8b369eb44540d49fdd1ec00667daba"
    }],
    "locationSearch": true,
    //When searchExtent is true the locator will prioritize results within the current map extent.
    "searchExtent": false,
    "searchLayers":[{
        "id": "",
        "fields": []
    }],
    "swipeType": "vertical",
    "swipeInvertPlacement": false,
    "hideNotesLayerPopups": true,
    "enableFlickr": true,
    "flickrVisible": true,
    "flickrSearch": "Oregon King Tide",
    "flickrTime": "",
    "enableTwitter": false,
    "twitterVisible": false,
    "twitterSearch": "",
    "enableWebcams": false,
    "webcamsVisible": false,
    "enableYouTube": false,
    "youtubeVisible": false,
    "youtubeSearch": "",
    "youtubeTime": "all_time", // today, this_week, this_month, all_time
    "youtube_key": "AIzaSyBvrlsx50mxX_W-Ra2cJ8PB0jKt0jACZfg",
    "enableDialogModal": false,
    "dialogModalContent": "",
    "dialogModalTitle": "",
    "twitterUrl": "https://utility.arcgis.com/tproxy/proxy/1.1/search/tweets.json",
    "twitterSigninUrl": "https://utility.arcgis.com/tproxy/signin",
    "flickr_key": "404ebea7d5bc27aa5251d1207620e99b",
    "webcams_key": "L0mSb0kxVHmsh2ZeMGs2CqmGERjap1h9oBTjsn3DXhiErQhFiF",
    "enablePrintButton": false,
    //Enter the url to your organizations bing maps key if you want to use bing basemaps
    "bingmapskey": "",
    //Defaults to arcgis.com. Set this value to your portal or organization host name.
    "sharinghost": "https://www.arcgis.com",
    "units": null,
    "helperServices": {
        "geometry": {
            "url": null
        },
        "printTask": {
            "url": null
        },
        "elevationSync": {
            "url": null
        },
        "geocode": [{
            "url": null
        }]
    }
});