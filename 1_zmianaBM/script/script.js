
require (["esri/Map",
        "esri/views/MapView",
        "esri/WebMap",
        "esri/geometry/support/webMercatorUtils",
        "esri/widgets/BasemapToggle",
        "esri/widgets/BasemapGallery",
        "esri/layers/GraphicsLayer",
        "esri/widgets/Sketch",
        "esri/layers/FeatureLayer"
        ],
        function(Map, MapView, WebMap, webMercatorUtils, BasemapToggle, BasemapGallery, GraphicsLayer, Sketch, FeatureLayer)
        {
            const layer = new GraphicsLayer();

            const map4 = new WebMap({
                portalItem: {
                    id: "d05f8e235f0841739d01b160ba94df4d",
                },
                layers: [layer]
            });
            // const map1 = new Map({
            //     basemap:"satellite",
            //     layers: [layer]
            // });
            // const map2 = new Map({
            //     basemap:"topo",
            //     layers: [layer]
            // })
            // const map3 = new Map({
            //     basemap:"osm",
            //     layers: [layer]
            // })


            const view = new MapView({
                container: "mapview",
                map: map4
            });

            var trailheadsLayer = new FeatureLayer({
                url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/ArcGIS/rest/services/USA%20States/FeatureServer/0"
              });

            map4.add(trailheadsLayer);

            
            // mapview.on("click", function(evt){
            //     let cords = webMercatorUtils.webMercatorToGeographic(evt.mapPoint);
            //     console.log(cords.x + ", " + cords.y.toFixed(3));
            // });

            
            const sketch = new Sketch({
                layer: layer,
                view: view,
                // graphic will be selected as soon as it is created
                // creationMode: "update"
              });

            view.ui.add(sketch, "top-right");

            var basemapGallery = new BasemapGallery({
                view: view,
                source: {
                  portal: {
                    url: "https://www.arcgis.com",
                    useVectorBasemaps: true  // Load vector tile basemaps
                  }
                }
              })
            view.ui.add(basemapGallery, "top-right");



            document.getElementById('satellite').addEventListener('click',
                    function (){
                        mapview.map = map1;
                    }
                );

            document.getElementById('topo').addEventListener('click',
                function (){
                    mapview.map = map2;
                }
            );

            document.getElementById('openStreetMaps').addEventListener('click',
                function (){
                    mapview.map = map3;
                }
            );

            document.getElementById('AGOL').addEventListener('click',
            function (){
                mapview.map = map4;
            });

        document.getElementById("ksiazka1").addEventListener('click', function() {
            mapview.center = [110.741, 30.938]
            mapview.zoom = 13
            // map2.add(csvLayer);
        });

        document.getElementById("ksiazka2").addEventListener('click', function() {
            mapview.center = [80.741, 30.938]
            mapview.zoom = 4
            // map2.add(csvLayer);
        });

});

// map2 is not defined


