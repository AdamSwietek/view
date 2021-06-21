(function () {
    "use strict";

    // TODO: Add your ion access token from cesium.com/ion/
    // Cesium.Ion.defaultAccessToken = '<YOUR ACCESS TOKEN HERE>';
    var lat = 46.11187123294588;
    var lon = 7.006518516446791;
    var altitude = 1121.8110000000452;
    var head = 34.87;
    //////////////////////////////////////////////////////////////////////////    
    // Creating the Viewer
    //////////////////////////////////////////////////////////////////////////
    var rectangle = Cesium.Rectangle.fromDegrees(
        5.013926957923385,
        45.35600133779394,
        11.477436312994008,
        48.27502358353741
      );

    var viewer = new Cesium.Viewer("cesiumContainer", {
        contextOptions:{
            webgl:{preserveDrawingBuffer:true}
        },
        baseLayerPicker: false,
          terrainProvider: new Cesium.CesiumTerrainProvider({
            url:
              "//3d.geo.admin.ch/1.0.0/ch.swisstopo.terrain.3d/default/20160115/4326/"
          }),
          imageryProvider: new Cesium.UrlTemplateImageryProvider({
            // Aerial image
            // url: "//wmts20.geo.admin.ch/1.0.0/ch.swisstopo.swissimage-product/default/current/4326/{z}/{x}/{y}.jpeg",
            // Map
            url:  "//wmts10.geo.admin.ch/1.0.0/ch.swisstopo.swisstlm3d-karte-farbe.3d/default/current/4326/{z}/{x}/{y}.jpeg",
            minimumLevel: 8,
            maximumLevel: 17,
            tilingScheme: new Cesium.GeographicTilingScheme({
              numberOfLevelZeroTilesX: 2,
              numberOfLevelZeroTilesY: 1
            }),
            rectangle: rectangle
          }),
          fullscreenButton: false,
          homeButton: false,
          sceneModePicker: false,
          selectionIndicator: false,
          timeline: false,
          animation: false,
          geocoder: true,
          navigationInstructionsInitiallyVisible: false,
          navigationHelpButton: false,
          scene3DOnly: true
        });

    // Loading Terrain
    //////////////////////////////////////////////////////////////////////////
    var getCesiumTileset = function() {
        return new Cesium.Cesium3DTileset({
          url:
            "https://vectortiles0.geo.admin.ch/3d-tiles/ch.swisstopo.swisstlm3d.3d/20190313/tileset.json"
        });
      };
    var getCesiumTileset2 = function() {
        return new Cesium.Cesium3DTileset({
          url:
            "https://vectortiles0.geo.admin.ch/3d-tiles/ch.swisstopo.vegetation.3d/20190313/tileset.json"
        });
      };
              
    viewer.scene.primitives.add(getCesiumTileset());
    viewer.scene.primitives.add(getCesiumTileset2());

    viewer.scene.globe.depthTestAgainstTerrain = true;
    //////////////////////////////////////////////////////////////////////////
    // Configuring the Scene
    //////////////////////////////////////////////////////////////////////////
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(lon, lat, altitude), 
      orientation: {
        heading: Cesium.Math.toRadians(head),
        pitch: Cesium.Math.toRadians(0),
        roll: 0.0
      },
      duration: 0
    });
}());
// .otherwise(function(error){ // get error if any
// console.log(error);});
// configure settings
