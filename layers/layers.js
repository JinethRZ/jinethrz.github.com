var wms_layers = [];


        var lyr_CARTOdark_0 = new ol.layer.Tile({
            'title': 'CARTO dark',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });
var format_Amrica_1 = new ol.format.GeoJSON();
var features_Amrica_1 = format_Amrica_1.readFeatures(json_Amrica_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Amrica_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Amrica_1.addFeatures(features_Amrica_1);
var lyr_Amrica_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Amrica_1, 
                style: style_Amrica_1,
                interactive: true,
                title: '<img src="styles/legend/Amrica_1.png" /> América'
            });
var format_Ros_2 = new ol.format.GeoJSON();
var features_Ros_2 = format_Ros_2.readFeatures(json_Ros_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ros_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ros_2.addFeatures(features_Ros_2);
var lyr_Ros_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ros_2, 
                style: style_Ros_2,
                interactive: true,
                title: '<img src="styles/legend/Ros_2.png" /> Ríos'
            });
var format_Ciudades_3 = new ol.format.GeoJSON();
var features_Ciudades_3 = format_Ciudades_3.readFeatures(json_Ciudades_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ciudades_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ciudades_3.addFeatures(features_Ciudades_3);
var lyr_Ciudades_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ciudades_3, 
                style: style_Ciudades_3,
                interactive: true,
                title: '<img src="styles/legend/Ciudades_3.png" /> Ciudades'
            });

lyr_CARTOdark_0.setVisible(true);lyr_Amrica_1.setVisible(true);lyr_Ros_2.setVisible(true);lyr_Ciudades_3.setVisible(true);
var layersList = [lyr_CARTOdark_0,lyr_Amrica_1,lyr_Ros_2,lyr_Ciudades_3];
lyr_Amrica_1.set('fieldAliases', {'FIPS_CNTRY': 'FIPS_CNTRY', 'GMI_CNTRY': 'GMI_CNTRY', 'CNTRY_NAME': 'CNTRY_NAME', 'SOVEREIGN': 'SOVEREIGN', 'POP_CNTRY': 'POP_CNTRY', 'SQKM_CNTRY': 'SQKM_CNTRY', 'SQMI_CNTRY': 'SQMI_CNTRY', 'CURR_TYPE': 'CURR_TYPE', 'CURR_CODE': 'CURR_CODE', 'LANDLOCKED': 'LANDLOCKED', 'COLOR_MAP': 'COLOR_MAP', });
lyr_Ros_2.set('fieldAliases', {'featurecla': 'featurecla', 'name': 'name', 'strokeweig': 'strokeweig', });
lyr_Ciudades_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'Country': 'Country', 'City_Metro': 'City_Metro', 'Population': 'Population', 'Height': 'Height', 'Source': 'Source', });
lyr_Amrica_1.set('fieldImages', {'FIPS_CNTRY': 'TextEdit', 'GMI_CNTRY': 'TextEdit', 'CNTRY_NAME': 'TextEdit', 'SOVEREIGN': 'TextEdit', 'POP_CNTRY': 'TextEdit', 'SQKM_CNTRY': 'TextEdit', 'SQMI_CNTRY': 'TextEdit', 'CURR_TYPE': 'TextEdit', 'CURR_CODE': 'TextEdit', 'LANDLOCKED': 'TextEdit', 'COLOR_MAP': 'TextEdit', });
lyr_Ros_2.set('fieldImages', {'featurecla': 'TextEdit', 'name': 'TextEdit', 'strokeweig': 'TextEdit', });
lyr_Ciudades_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'Country': 'TextEdit', 'City_Metro': 'TextEdit', 'Population': 'TextEdit', 'Height': 'TextEdit', 'Source': 'TextEdit', });
lyr_Amrica_1.set('fieldLabels', {'FIPS_CNTRY': 'no label', 'GMI_CNTRY': 'no label', 'CNTRY_NAME': 'no label', 'SOVEREIGN': 'no label', 'POP_CNTRY': 'no label', 'SQKM_CNTRY': 'no label', 'SQMI_CNTRY': 'no label', 'CURR_TYPE': 'no label', 'CURR_CODE': 'no label', 'LANDLOCKED': 'no label', 'COLOR_MAP': 'no label', });
lyr_Ros_2.set('fieldLabels', {'featurecla': 'no label', 'name': 'no label', 'strokeweig': 'no label', });
lyr_Ciudades_3.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'Country': 'no label', 'City_Metro': 'no label', 'Population': 'no label', 'Height': 'no label', 'Source': 'no label', });
lyr_Ciudades_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});