var wms_layers = [];


        var lyr_CartoDB__0 = new ol.layer.Tile({
            'title': 'CartoDB_',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_TROLLYSTB_1 = new ol.format.GeoJSON();
var features_TROLLYSTB_1 = format_TROLLYSTB_1.readFeatures(json_TROLLYSTB_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TROLLYSTB_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TROLLYSTB_1.addFeatures(features_TROLLYSTB_1);
var lyr_TROLLYSTB_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TROLLYSTB_1, 
                style: style_TROLLYSTB_1,
                popuplayertitle: 'TROLLYSTB',
                interactive: true,
    title: 'TROLLYSTB<br />\
    <img src="styles/legend/TROLLYSTB_1_0.png" /> CONSERVARE<br />\
    <img src="styles/legend/TROLLYSTB_1_1.png" /> DA<br />\
    <img src="styles/legend/TROLLYSTB_1_2.png" /> <br />' });
var format_DEPOURI_2 = new ol.format.GeoJSON();
var features_DEPOURI_2 = format_DEPOURI_2.readFeatures(json_DEPOURI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEPOURI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEPOURI_2.addFeatures(features_DEPOURI_2);
var lyr_DEPOURI_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DEPOURI_2, 
                style: style_DEPOURI_2,
                popuplayertitle: 'DEPOURI',
                interactive: true,
                title: '<img src="styles/legend/DEPOURI_2.png" /> DEPOURI'
            });

lyr_CartoDB__0.setVisible(true);lyr_TROLLYSTB_1.setVisible(true);lyr_DEPOURI_2.setVisible(true);
var layersList = [lyr_CartoDB__0,lyr_TROLLYSTB_1,lyr_DEPOURI_2];
lyr_TROLLYSTB_1.set('fieldAliases', {'Sector': 'Sector', 'Utilizare': 'Utilizare', });
lyr_DEPOURI_2.set('fieldAliases', {'Nume': 'Nume', });
lyr_TROLLYSTB_1.set('fieldImages', {'Sector': 'TextEdit', 'Utilizare': 'TextEdit', });
lyr_DEPOURI_2.set('fieldImages', {'Nume': 'TextEdit', });
lyr_TROLLYSTB_1.set('fieldLabels', {'Sector': 'no label', 'Utilizare': 'no label', });
lyr_DEPOURI_2.set('fieldLabels', {'Nume': 'inline label - always visible', });
lyr_DEPOURI_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});