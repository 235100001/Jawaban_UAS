var wms_layers = [];
var format_Wilayah_0 = new ol.format.GeoJSON();
var features_Wilayah_0 = format_Wilayah_0.readFeatures(json_Wilayah_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wilayah_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Wilayah_0.addFeatures(features_Wilayah_0);var lyr_Wilayah_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Wilayah_0, 
                style: style_Wilayah_0,
    title: 'Wilayah<br />\
    <img src="styles/legend/Wilayah_0_0.png" /> Wilayah<br />\
    <img src="styles/legend/Wilayah_0_1.png" /> Ruamah<br />\
    <img src="styles/legend/Wilayah_0_2.png" /> Rumah<br />\
    <img src="styles/legend/Wilayah_0_3.png" /> <br />'
        });var format_Jalan_1 = new ol.format.GeoJSON();
var features_Jalan_1 = format_Jalan_1.readFeatures(json_Jalan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Jalan_1.addFeatures(features_Jalan_1);var lyr_Jalan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_1, 
                style: style_Jalan_1,
    title: 'Jalan<br />\
    <img src="styles/legend/Jalan_1_0.png" /> Jalan utama<br />\
    <img src="styles/legend/Jalan_1_1.png" /> Jalan Utama<br />\
    <img src="styles/legend/Jalan_1_2.png" /> Sungai<br />'
        });var format_DesaIndonesia_2 = new ol.format.GeoJSON();
var features_DesaIndonesia_2 = format_DesaIndonesia_2.readFeatures(json_DesaIndonesia_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaIndonesia_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DesaIndonesia_2.addFeatures(features_DesaIndonesia_2);var lyr_DesaIndonesia_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DesaIndonesia_2, 
                style: style_DesaIndonesia_2,
                title: '<img src="styles/legend/DesaIndonesia_2.png" /> DesaIndonesia'
            });

lyr_Wilayah_0.setVisible(true);lyr_Jalan_1.setVisible(true);lyr_DesaIndonesia_2.setVisible(true);
var layersList = [lyr_Wilayah_0,lyr_Jalan_1,lyr_DesaIndonesia_2];
lyr_Wilayah_0.set('fieldAliases', {'id': 'id', 'Wilayah': 'Wilayah', });
lyr_Jalan_1.set('fieldAliases', {'id': 'id', 'Jalan': 'Jalan', });
lyr_DesaIndonesia_2.set('fieldAliases', {'DESA': 'DESA', 'KECAMATAN': 'KECAMATAN', 'KABUPATEN': 'KABUPATEN', 'PROPINSI': 'PROPINSI', 'LUAS': 'LUAS', 'MI_PRINX': 'MI_PRINX', });
lyr_Wilayah_0.set('fieldImages', {'id': 'TextEdit', 'Wilayah': 'TextEdit', });
lyr_Jalan_1.set('fieldImages', {'id': 'TextEdit', 'Jalan': 'TextEdit', });
lyr_DesaIndonesia_2.set('fieldImages', {'DESA': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KABUPATEN': 'TextEdit', 'PROPINSI': 'TextEdit', 'LUAS': 'TextEdit', 'MI_PRINX': 'TextEdit', });
lyr_Wilayah_0.set('fieldLabels', {'id': 'no label', 'Wilayah': 'inline label', });
lyr_Jalan_1.set('fieldLabels', {'id': 'no label', 'Jalan': 'inline label', });
lyr_DesaIndonesia_2.set('fieldLabels', {'DESA': 'inline label', 'KECAMATAN': 'inline label', 'KABUPATEN': 'inline label', 'PROPINSI': 'no label', 'LUAS': 'inline label', 'MI_PRINX': 'no label', });
lyr_DesaIndonesia_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});