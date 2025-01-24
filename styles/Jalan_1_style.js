var size = 0;
var placement = 'point';
function categories_Jalan_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case 'Jalan utama':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(80,80,80,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 7}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(248,248,248,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 7}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Jalan Utama':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(80,80,80,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 5}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(248,248,248,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Sungai':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(22,108,200,0.305882)', lineDash: null, lineCap: 'square', lineJoin: 'round', width: 8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(152,215,220,0.305882)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 10}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_Jalan_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Jalan");
    var labelText = "";
    size = 0;
    var labelFont = "10.725px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_Jalan_1(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
