var size = 0;
var placement = 'point';
function categories_TROLLYSTB_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'CONSERVARE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(203,60,32,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.57}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'DA':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(49,104,30,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.57}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(38,239,189,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.76}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_TROLLYSTB_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("Utilizare");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_TROLLYSTB_1(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
