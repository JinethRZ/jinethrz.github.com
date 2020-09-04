var size = 0;
var placement = 'point';

var style_Ciudades_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Bahnschrift SemiBold\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#ffffff";
    var bufferWidth = 0.8;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("City_Metro") !== null) {
        labelText = String(feature.get("City_Metro"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 3.2 + size,
            stroke: new ol.style.Stroke({color: 'rgba(231,133,130,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(248,5,22,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
