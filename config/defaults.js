define({
    //Default configuration settings for the applciation. This is where you"ll define things like a bing maps key,
    //default web map, default app color theme and more. These values can be overwritten by template configuration settings
    //and url parameters.
	
	// backup web map: 35d5c9a8fd5d47f5a59cea63783b6642  f1464978fa174ecaba8b210b6d71cff3
	
    "appid": "",
    "webmap": "f1464978fa174ecaba8b210b6d71cff3",
    "oauthappid": "arcgisWebApps",
    //Enter the url to the proxy if needed by the applcation. See the "Using the proxy page" help topic for details
    //http://developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
    "proxyurl": "",
    //Example of a template specific property. If your template had several color schemes
    //you could define the default here and setup configuration settings to allow users to choose a different
    //color theme.
    "title": "Oregon Sea Level Rise Impacts Explorer",
    "summary": "Sea Level Rise on the Oregon coast will result in increased storm wave, flooding, and erosion problems. This mapping tool is intended to highlight areas that will be affected by sea level rise related hazards including storm waves, flooding, and erosion in the next 30-50 years. While the north and south coast regions are experiencing slower sea level rise due to tectonic uplift, sea level rise is expected to surpass uplift in the near future. The amount of sea level rise will differ along the coast, so there is no one number that can be applied for all of Oregon. </br></br>The planning area in this tool is a combination of datasets from FEMA, DOGAMI, and the Lower Columbia Estuary Partnership: <ul><li><b>The planning area boundary for the outer coast</b> uses a combination of storm wave, flooding, and coastal erosion zones.</li><li> <b>The planning area boundary for the estuaries</b> (excluding the Columbia River Estuary) includes a 1.5ft sea level rise plus a 100-year flood event (1% chance yearly occurrence or a 26% chance over the course of a 30-year mortgage).</li><li> <b>The planning area boundary for the Columbia River Estuary</b> includes a 4.9ft sea level rise to account for not only sea level rise, but also total water level (including tides, storms, and floods). </li></ul> Planning for sea level rise is essential to prepare for impacts, identify adaptation strategies, and foster healthy, vibrant, and resilient coastal communities.",
    "defaultPanel": "about",
    "enableSummaryInfo": true,
    "enableLegendPanel": true,
    "enableAboutPanel": true,
    "enableLayersPanel": true,
    "enableHomeButton": true,
    "enableLocateButton": true,
    "enableBasemapToggle": true,
    "enableShareDialog": true,
    "enableBookmarks": true,
    "enableOverviewMap": false,
    "openOverviewMap": false,
    "enableModifiedDate": false,
    "enableViewsCount": false,
    "enableMoreInfo": false,
    "enableScalebar": true,
    "defaultBasemap": "gray",
    "nextBasemap": "hybrid",
    "swipeLayer": [{
        "id": "498b7a1354c14d55b4f18231728d78e1",
        "fields": []
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
    "flickrVisible": false,
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
    "sharinghost": "https://geo.maps.arcgis.com/",
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