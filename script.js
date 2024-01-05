(function(){
    var script = {
 "mouseWheelEnabled": true,
 "definitions": [{
 "id": "ImageResource_CBD79F27_D9C5_84EC_41E7_0D20D0CE0648",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_C94B1EDF_D9C5_855D_41D2_8E39CDB15F9F_0_0.png",
   "width": 1500,
   "class": "ImageResourceLevel",
   "height": 2000
  },
  {
   "url": "media/popup_C94B1EDF_D9C5_855D_41D2_8E39CDB15F9F_0_1.png",
   "width": 768,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_C94B1EDF_D9C5_855D_41D2_8E39CDB15F9F_0_2.png",
   "width": 384,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "rotationY": 0,
 "yaw": -156.57,
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 4.96,
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_C94B1EDF_D9C5_855D_41D2_8E39CDB15F9F",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_C94B1EDF_D9C5_855D_41D2_8E39CDB15F9F_0_1.png",
    "width": 768,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": -19.71,
 "popupMaxWidth": "95%",
 "popupDistance": 100
},
{
 "rotationY": 0,
 "yaw": -104.3,
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 4.72,
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_D6A3CD79_D9DC_8764_41EA_73355CF10837",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_D6A3CD79_D9DC_8764_41EA_73355CF10837_0_1.png",
    "width": 768,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": -15.09,
 "popupMaxWidth": "95%",
 "popupDistance": 100
},
{
 "fontFamily": "Arial",
 "rollOverFontColor": "#FFFFFF",
 "selectedFontColor": "#FFFFFF",
 "children": [
  {
   "label": "Estudio",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  },
  {
   "label": "360 sala de reuniao",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "label": "Media",
 "id": "Menu_C069CE38_DAC3_84E3_41EA_B74E95C028FC",
 "backgroundColor": "#404040",
 "class": "Menu",
 "opacity": 0.4,
 "rollOverBackgroundColor": "#000000",
 "rollOverOpacity": 0.8,
 "selectedBackgroundColor": "#202020",
 "fontColor": "#FFFFFF"
},
{
 "id": "ImageResource_C868BC54_D9FC_84A3_41D7_007565837900",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_C9929AB1_D9C4_8DE5_41E0_01C317AD44CD_0_0.png",
   "width": 1500,
   "class": "ImageResourceLevel",
   "height": 2000
  },
  {
   "url": "media/popup_C9929AB1_D9C4_8DE5_41E0_01C317AD44CD_0_1.png",
   "width": 768,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_C9929AB1_D9C4_8DE5_41E0_01C317AD44CD_0_2.png",
   "width": 384,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "rotationY": 0,
 "yaw": 53.85,
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.65,
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_C873D13D_D9C7_FCDD_41E8_E2E8695C532A",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_C873D13D_D9C7_FCDD_41E8_E2E8695C532A_0_1.png",
    "width": 768,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": -46.23,
 "popupMaxWidth": "95%",
 "popupDistance": 100
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "camera_C0775E5D_DAC3_855D_41EA_7B111F68D1E5",
 "initialPosition": {
  "yaw": 0.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "items": [
  {
   "media": "this.panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "camera": "this.panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_D64F71B2_D9C7_9FE4_41A7_C2BFCDB25445",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 0)",
   "camera": "this.panorama_D64F71B2_D9C7_9FE4_41A7_C2BFCDB25445_camera",
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "gyroscopeEnabled": true,
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "mouseControlMode": "drag_acceleration"
},
{
 "rotationY": 0,
 "yaw": -42.19,
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 4.25,
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_C8E4A5C4_D9C4_87A3_41E8_75DBC243DED3",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_C8E4A5C4_D9C4_87A3_41E8_75DBC243DED3_0_1.png",
    "width": 768,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": -36.37,
 "popupMaxWidth": "95%",
 "popupDistance": 100
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "id": "ImageResource_CBD2AF25_D9C5_84EC_41E8_D318492C8AAE",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_C9188057_D9C3_FCAC_41DA_828917FBDFA3_0_0.png",
   "width": 1500,
   "class": "ImageResourceLevel",
   "height": 2000
  },
  {
   "url": "media/popup_C9188057_D9C3_FCAC_41DA_828917FBDFA3_0_1.png",
   "width": 768,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_C9188057_D9C3_FCAC_41DA_828917FBDFA3_0_2.png",
   "width": 384,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_C99AA8EA_DA45_8D64_41EA_5A3A7CF013E3",
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_C99AA8EA_DA45_8D64_41EA_5A3A7CF013E3.mp3",
  "oggUrl": "media/audio_C99AA8EA_DA45_8D64_41EA_5A3A7CF013E3.ogg"
 },
 "data": {
  "label": "sair outro ambiente"
 }
},
{
 "id": "ImageResource_CBD07F25_D9C5_84EC_41DB_11FC5AC769AC",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_C8E4A5C4_D9C4_87A3_41E8_75DBC243DED3_0_0.png",
   "width": 1500,
   "class": "ImageResourceLevel",
   "height": 2000
  },
  {
   "url": "media/popup_C8E4A5C4_D9C4_87A3_41E8_75DBC243DED3_0_1.png",
   "width": 768,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_C8E4A5C4_D9C4_87A3_41E8_75DBC243DED3_0_2.png",
   "width": 384,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "rotationY": 0,
 "yaw": -156.7,
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 17.96,
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_D7BCD331_D9DD_FCE4_41E0_C33C8804E50A",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_D7BCD331_D9DD_FCE4_41E0_C33C8804E50A_0_1.png",
    "width": 768,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": -34.5,
 "popupMaxWidth": "95%",
 "popupDistance": 100
},
{
 "id": "ImageResource_C991D408_D9DC_84A3_41E2_CA31256FAFF8",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_D6A3CD79_D9DC_8764_41EA_73355CF10837_0_0.png",
   "width": 1500,
   "class": "ImageResourceLevel",
   "height": 2000
  },
  {
   "url": "media/popup_D6A3CD79_D9DC_8764_41EA_73355CF10837_0_1.png",
   "width": 768,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_D6A3CD79_D9DC_8764_41EA_73355CF10837_0_2.png",
   "width": 384,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "rotationY": 0,
 "yaw": -27.07,
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 23.92,
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_C9929AB1_D9C4_8DE5_41E0_01C317AD44CD",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_C9929AB1_D9C4_8DE5_41E0_01C317AD44CD_0_1.png",
    "width": 768,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": -2.77,
 "popupMaxWidth": "95%",
 "popupDistance": 100
},
{
 "id": "ImageResource_C8FE719D_D9C4_BFDC_41B9_A016FA5C38CC",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_D49F913E_D9BD_FCDC_41D9_18FB6077AC2A_0_0.png",
   "width": 1500,
   "class": "ImageResourceLevel",
   "height": 2000
  },
  {
   "url": "media/popup_D49F913E_D9BD_FCDC_41D9_18FB6077AC2A_0_1.png",
   "width": 768,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_D49F913E_D9BD_FCDC_41D9_18FB6077AC2A_0_2.png",
   "width": 384,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "id": "ImageResource_CBD64F26_D9C5_84EC_41D8_DBFB0D98546F",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_C951A0C3_D9C4_BDA5_41E5_D2C23F6C2A96_0_0.png",
   "width": 1500,
   "class": "ImageResourceLevel",
   "height": 2000
  },
  {
   "url": "media/popup_C951A0C3_D9C4_BDA5_41E5_D2C23F6C2A96_0_1.png",
   "width": 768,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_C951A0C3_D9C4_BDA5_41E5_D2C23F6C2A96_0_2.png",
   "width": 384,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C071BE50_DAC3_84A3_41EA_2D0B2459C11C",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D64F71B2_D9C7_9FE4_41A7_C2BFCDB25445_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "rotationY": 0,
 "yaw": -28.29,
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.2,
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_C9188057_D9C3_FCAC_41DA_828917FBDFA3",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_C9188057_D9C3_FCAC_41DA_828917FBDFA3_0_1.png",
    "width": 768,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 9.87,
 "popupMaxWidth": "95%",
 "popupDistance": 100
},
{
 "id": "ImageResource_CBD75F26_D9C5_84EC_41DF_25BD968F4BF1",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_C873D13D_D9C7_FCDD_41E8_E2E8695C532A_0_0.png",
   "width": 1500,
   "class": "ImageResourceLevel",
   "height": 2000
  },
  {
   "url": "media/popup_C873D13D_D9C7_FCDD_41E8_E2E8695C532A_0_1.png",
   "width": 768,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_C873D13D_D9C7_FCDD_41E8_E2E8695C532A_0_2.png",
   "width": 384,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "hfovMin": "120%",
 "hfov": 360,
 "label": "360 sala de reuniao",
 "adjacentPanoramas": [
  {
   "backwardYaw": -179.81,
   "yaw": 0.31,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB"
  }
 ],
 "thumbnailUrl": "media/panorama_D64F71B2_D9C7_9FE4_41A7_C2BFCDB25445_t.jpg",
 "id": "panorama_D64F71B2_D9C7_9FE4_41A7_C2BFCDB25445",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_C069CE38_DAC3_84E3_41EA_B74E95C028FC",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D64F71B2_D9C7_9FE4_41A7_C2BFCDB25445_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D64F71B2_D9C7_9FE4_41A7_C2BFCDB25445_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D64F71B2_D9C7_9FE4_41A7_C2BFCDB25445_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D64F71B2_D9C7_9FE4_41A7_C2BFCDB25445_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D64F71B2_D9C7_9FE4_41A7_C2BFCDB25445_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D64F71B2_D9C7_9FE4_41A7_C2BFCDB25445_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D64F71B2_D9C7_9FE4_41A7_C2BFCDB25445_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D64F71B2_D9C7_9FE4_41A7_C2BFCDB25445_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D64F71B2_D9C7_9FE4_41A7_C2BFCDB25445_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D64F71B2_D9C7_9FE4_41A7_C2BFCDB25445_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D64F71B2_D9C7_9FE4_41A7_C2BFCDB25445_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D64F71B2_D9C7_9FE4_41A7_C2BFCDB25445_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D64F71B2_D9C7_9FE4_41A7_C2BFCDB25445_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D64F71B2_D9C7_9FE4_41A7_C2BFCDB25445_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D64F71B2_D9C7_9FE4_41A7_C2BFCDB25445_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D64F71B2_D9C7_9FE4_41A7_C2BFCDB25445_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D64F71B2_D9C7_9FE4_41A7_C2BFCDB25445_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D64F71B2_D9C7_9FE4_41A7_C2BFCDB25445_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D64F71B2_D9C7_9FE4_41A7_C2BFCDB25445_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D64F71B2_D9C7_9FE4_41A7_C2BFCDB25445_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D64F71B2_D9C7_9FE4_41A7_C2BFCDB25445_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D64F71B2_D9C7_9FE4_41A7_C2BFCDB25445_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D64F71B2_D9C7_9FE4_41A7_C2BFCDB25445_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D64F71B2_D9C7_9FE4_41A7_C2BFCDB25445_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D64F71B2_D9C7_9FE4_41A7_C2BFCDB25445_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_C8CF60C8_D9C3_FDA4_41DD_5BD3EBE54061",
  "this.overlay_C969F858_DA44_8CA4_41C4_8262FA6B3105"
 ]
},
{
 "id": "ImageResource_CBD3DF24_D9C5_84EC_41D7_13220D9F912F",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_C8F5FF87_D9CD_83AC_41DB_B3CC8D1B905C_0_0.png",
   "width": 1500,
   "class": "ImageResourceLevel",
   "height": 2000
  },
  {
   "url": "media/popup_C8F5FF87_D9CD_83AC_41DB_B3CC8D1B905C_0_1.png",
   "width": 768,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_C8F5FF87_D9CD_83AC_41DB_B3CC8D1B905C_0_2.png",
   "width": 384,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_C85B97C4_DA43_83A3_41DE_F951F8896108",
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_C85B97C4_DA43_83A3_41DE_F951F8896108.mp3",
  "oggUrl": "media/audio_C85B97C4_DA43_83A3_41DE_F951F8896108.ogg"
 },
 "data": {
  "label": "softbox"
 }
},
{
 "label": "VID_20240105_113338",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_C9BC180C_DA45_8CBC_41D6_1EA6B888ADF9_t.jpg",
 "width": 1920,
 "loop": false,
 "id": "video_C9BC180C_DA45_8CBC_41D6_1EA6B888ADF9",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_C9BC180C_DA45_8CBC_41D6_1EA6B888ADF9.mp4"
 }
},
{
 "id": "ImageResource_C86B8C55_D9FC_84AD_41E9_7F35BE59F86B",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_C9EE3748_D9C3_84A4_41E0_E447402B457B_0_0.png",
   "width": 1500,
   "class": "ImageResourceLevel",
   "height": 2000
  },
  {
   "url": "media/popup_C9EE3748_D9C3_84A4_41E0_E447402B457B_0_1.png",
   "width": 768,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_C9EE3748_D9C3_84A4_41E0_E447402B457B_0_2.png",
   "width": 384,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_CBC93635_DA43_84EC_4185_1CBEB1B65D83",
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_CBC93635_DA43_84EC_4185_1CBEB1B65D83.mp3",
  "oggUrl": "media/audio_CBC93635_DA43_84EC_4185_1CBEB1B65D83.ogg"
 },
 "data": {
  "label": "microfone"
 }
},
{
 "rotationY": 0,
 "yaw": -39.63,
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.09,
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_C9EE3748_D9C3_84A4_41E0_E447402B457B",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_C9EE3748_D9C3_84A4_41E0_E447402B457B_0_1.png",
    "width": 768,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": -39.92,
 "popupMaxWidth": "95%",
 "popupDistance": 100
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_C89FDFE0_DA4C_8364_41E2_A0C0FC98E778",
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_C89FDFE0_DA4C_8364_41E2_A0C0FC98E778.mp3",
  "oggUrl": "media/audio_C89FDFE0_DA4C_8364_41E2_A0C0FC98E778.ogg"
 },
 "data": {
  "label": "lampada"
 }
},
{
 "items": [
  {
   "media": "this.video_C9BC180C_DA45_8CBC_41D6_1EA6B888ADF9",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_C0684E37_DAC3_84ED_41D1_38C9CB6D7B72, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_C0684E37_DAC3_84ED_41D1_38C9CB6D7B72, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_C0684E37_DAC3_84ED_41D1_38C9CB6D7B72",
 "class": "PlayList"
},
{
 "id": "ImageResource_C990E409_D9DC_84A5_41E9_33B1AB0274C9",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_D7BCD331_D9DD_FCE4_41E0_C33C8804E50A_0_0.png",
   "width": 1500,
   "class": "ImageResourceLevel",
   "height": 2000
  },
  {
   "url": "media/popup_D7BCD331_D9DD_FCE4_41E0_C33C8804E50A_0_1.png",
   "width": 768,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_D7BCD331_D9DD_FCE4_41E0_C33C8804E50A_0_2.png",
   "width": 384,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Estudio",
 "adjacentPanoramas": [
  {
   "backwardYaw": 0.31,
   "yaw": -179.81,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D64F71B2_D9C7_9FE4_41A7_C2BFCDB25445"
  }
 ],
 "thumbnailUrl": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_t.jpg",
 "id": "panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_C069CE38_DAC3_84E3_41EA_B74E95C028FC",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_D47B881D_D9BC_8CDD_41C6_E50D352B23DE",
  "this.popup_D49F913E_D9BD_FCDC_41D9_18FB6077AC2A",
  "this.overlay_C9267DE9_D9CC_8764_41E0_0493342E5B33",
  "this.overlay_C90420B4_D9CC_BDEC_41E7_656F596F6334",
  "this.overlay_D61DE057_D9C4_9CAD_41E8_58EF3B2BE4D0",
  "this.overlay_D463F9F0_D9C4_8F64_41E2_6FBF49548F4B",
  "this.popup_D77F11AF_D9C4_9FFD_41E4_7C2770C57165",
  "this.overlay_D60CF7F0_D9C3_8363_41E5_8AEF0635960A",
  "this.overlay_C8D98CD8_D9C4_85A4_41E7_BA167AEE188B",
  "this.overlay_C9264C7B_D9C4_8565_41D7_405EB3B34D0A",
  "this.overlay_D72C6178_D9DC_9F63_41E6_3CED84767038",
  "this.popup_D6A3CD79_D9DC_8764_41EA_73355CF10837",
  "this.overlay_C85F8870_D9C5_8D64_41E7_C469DA1C628E",
  "this.overlay_D40E7F28_D9DD_84E4_41E7_6A2203E187C0",
  "this.popup_D7BCD331_D9DD_FCE4_41E0_C33C8804E50A",
  "this.popup_C9929AB1_D9C4_8DE5_41E0_01C317AD44CD",
  "this.popup_C9EE3748_D9C3_84A4_41E0_E447402B457B",
  "this.popup_C8F5FF87_D9CD_83AC_41DB_B3CC8D1B905C",
  "this.popup_C9188057_D9C3_FCAC_41DA_828917FBDFA3",
  "this.overlay_C8AC1825_D9C5_8CED_41DF_52DF11CB1534",
  "this.popup_C8E4A5C4_D9C4_87A3_41E8_75DBC243DED3",
  "this.popup_C873D13D_D9C7_FCDD_41E8_E2E8695C532A",
  "this.popup_C951A0C3_D9C4_BDA5_41E5_D2C23F6C2A96",
  "this.popup_C94B1EDF_D9C5_855D_41D2_8E39CDB15F9F",
  "this.overlay_C82818CE_D9C4_8DBF_41E3_225CDD18CCC0",
  "this.overlay_CBC91BAA_DA47_83E4_41E3_BD8164D27C61",
  "this.overlay_C88A0B30_DA44_8CE3_41E8_957311828655",
  "this.overlay_CECC8421_DA7F_84E5_41D1_7DABF9FF520E",
  "this.panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_tcap0"
 ]
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_CBE46A1A_DA44_8CA7_41D0_12C9CF2C5C17",
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_CBE46A1A_DA44_8CA7_41D0_12C9CF2C5C17.mp3",
  "oggUrl": "media/audio_CBE46A1A_DA44_8CA7_41D0_12C9CF2C5C17.ogg"
 },
 "data": {
  "label": "cadeira"
 }
},
{
 "items": [
  {
   "media": "this.video_C8FAE1A4_DA7C_BFE3_41E9_CA1C517E2EED",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_C0687E37_DAC3_84ED_41E8_B119F99A1625, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_C0687E37_DAC3_84ED_41E8_B119F99A1625, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_C0687E37_DAC3_84ED_41E8_B119F99A1625",
 "class": "PlayList"
},
{
 "rotationY": 0,
 "yaw": 30.39,
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.57,
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_C8F5FF87_D9CD_83AC_41DB_B3CC8D1B905C",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_C8F5FF87_D9CD_83AC_41DB_B3CC8D1B905C_0_1.png",
    "width": 768,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 9.85,
 "popupMaxWidth": "95%",
 "popupDistance": 100
},
{
 "rotationY": 0,
 "yaw": 53.66,
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 4.27,
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_D77F11AF_D9C4_9FFD_41E4_7C2770C57165",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_D77F11AF_D9C4_9FFD_41E4_7C2770C57165_0_1.png",
    "width": 768,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": -51.28,
 "popupMaxWidth": "95%",
 "popupDistance": 100
},
{
 "rotationY": 0,
 "yaw": 29.38,
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 26.52,
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_D49F913E_D9BD_FCDC_41D9_18FB6077AC2A",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_D49F913E_D9BD_FCDC_41D9_18FB6077AC2A_0_1.png",
    "width": 768,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": -3.57,
 "popupMaxWidth": "95%",
 "popupDistance": 100
},
{
 "rotationY": 0,
 "yaw": -106.08,
 "popupMaxHeight": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.17,
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_C951A0C3_D9C4_BDA5_41E5_D2C23F6C2A96",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_C951A0C3_D9C4_BDA5_41E5_D2C23F6C2A96_0_1.png",
    "width": 768,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": -11.52,
 "popupMaxWidth": "95%",
 "popupDistance": 100
},
{
 "label": "VID_20240105_112951",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_C8FAE1A4_DA7C_BFE3_41E9_CA1C517E2EED_t.jpg",
 "width": 1920,
 "loop": false,
 "id": "video_C8FAE1A4_DA7C_BFE3_41E9_CA1C517E2EED",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_C8FAE1A4_DA7C_BFE3_41E9_CA1C517E2EED.mp4"
 }
},
{
 "id": "ImageResource_C9932407_D9DC_84AD_41E5_33F5F42F5806",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_D77F11AF_D9C4_9FFD_41E4_7C2770C57165_0_0.png",
   "width": 1500,
   "class": "ImageResourceLevel",
   "height": 2000
  },
  {
   "url": "media/popup_D77F11AF_D9C4_9FFD_41E4_7C2770C57165_0_1.png",
   "width": 768,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_D77F11AF_D9C4_9FFD_41E4_7C2770C57165_0_2.png",
   "width": 384,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "playbackBarHeadOpacity": 1,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "MainViewer",
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "width": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 50,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "minWidth": 100,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "class": "ViewerArea",
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "height": "100%",
 "shadow": false,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "paddingRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "transitionDuration": 500,
 "playbackBarBottom": 5,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "data": {
  "name": "UIComponent28195"
 },
 "id": "veilPopupPanorama",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 0,
 "backgroundColorDirection": "vertical",
 "minHeight": 0,
 "borderSize": 0,
 "showEffect": {
  "duration": 350,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "bottom": 0,
 "class": "UIComponent",
 "minWidth": 0,
 "backgroundColor": [
  "#000000"
 ],
 "top": 0,
 "backgroundOpacity": 0.55,
 "paddingTop": 0,
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ]
},
{
 "data": {
  "name": "ZoomImage28196"
 },
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 0,
 "backgroundColorDirection": "vertical",
 "minHeight": 0,
 "borderSize": 0,
 "bottom": 0,
 "class": "ZoomImage",
 "minWidth": 0,
 "backgroundColor": [],
 "top": 0,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "scaleMode": "custom",
 "visible": false,
 "propagateClick": false,
 "backgroundColorRatios": []
},
{
 "fontFamily": "Arial",
 "rollOverIconColor": "#666666",
 "data": {
  "name": "CloseButton28197"
 },
 "id": "closeButtonPopupPanorama",
 "fontStyle": "normal",
 "layout": "horizontal",
 "paddingLeft": 5,
 "paddingRight": 5,
 "fontSize": "1.29vmin",
 "right": 10,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 0,
 "fontColor": "#FFFFFF",
 "iconColor": "#000000",
 "borderSize": 0,
 "borderColor": "#000000",
 "horizontalAlign": "center",
 "top": 10,
 "showEffect": {
  "duration": 350,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "verticalAlign": "middle",
 "class": "CloseButton",
 "minWidth": 0,
 "iconLineWidth": 5,
 "fontWeight": "normal",
 "mode": "push",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "label": "",
 "iconHeight": 20,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.3,
 "paddingTop": 5,
 "pressedIconColor": "#888888",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 5,
 "textDecoration": "none",
 "visible": false,
 "propagateClick": false,
 "shadowSpread": 1,
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "iconWidth": 20
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB, this.camera_C0775E5D_DAC3_855D_41EA_7B111F68D1E5); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.44,
   "image": "this.AnimatedImageResource_C955F3E8_DA4D_8364_41E0_95C379304782",
   "pitch": -41.51,
   "yaw": 0.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C8CF60C8_D9C3_FDA4_41DD_5BD3EBE54061",
 "data": {
  "label": "voltar"
 },
 "maps": [
  {
   "hfov": 13.44,
   "yaw": 0.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D64F71B2_D9C7_9FE4_41A7_C2BFCDB25445_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -41.51
  }
 ]
},
{
 "blending": 0,
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_C9BC180C_DA45_8CBC_41D6_1EA6B888ADF9.mp4"
 },
 "hfov": 10.67,
 "autoplay": false,
 "id": "overlay_C969F858_DA44_8CA4_41C4_8262FA6B3105",
 "mouseEnter": "this.overlay_C969F858_DA44_8CA4_41C4_8262FA6B3105.play()",
 "enabledInCardboard": true,
 "loop": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_C969F858_DA44_8CA4_41C4_8262FA6B3105_t.jpg",
    "width": 1920,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ]
 },
 "pitch": -5.85,
 "useHandCursor": true,
 "roll": 0.71,
 "yaw": -1.3,
 "chromaThreshold": 0.1,
 "rotationY": -2.91,
 "rotationX": -32.95,
 "chromaSmoothing": 0.03,
 "data": {
  "label": "Video"
 },
 "chromaColor": "#3C78D3",
 "vfov": 22.97,
 "videoVisibleOnStop": false,
 "class": "VideoPanoramaOverlay",
 "distance": 50
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_D49F913E_D9BD_FCDC_41D9_18FB6077AC2A, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_C8FE719D_D9C4_BFDC_41B9_A016FA5C38CC, null, null, null, null, false); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_C85B97C4_DA43_83A3_41DE_F951F8896108)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 27.83,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0_HS_0_0.png",
      "width": 686,
      "class": "ImageResourceLevel",
      "height": 918
     }
    ]
   },
   "pitch": -3.57,
   "roll": 0,
   "yaw": 29.38,
   "distance": 50
  }
 ],
 "id": "overlay_D47B881D_D9BC_8CDD_41C6_E50D352B23DE",
 "data": {
  "label": "soft box"
 },
 "maps": [
  {
   "hfov": 27.83,
   "yaw": 29.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0_HS_0_1_0_map.gif",
      "width": 149,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -3.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_C8F5FF87_D9CD_83AC_41DB_B3CC8D1B905C, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_CBD3DF24_D9C5_84EC_41D7_13220D9F912F, null, null, null, null, false); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_C85B97C4_DA43_83A3_41DE_F951F8896108)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.43,
   "image": "this.AnimatedImageResource_CBC6BF1E_D9C5_84DC_41B3_6DF1CE7CE956",
   "pitch": 9.85,
   "yaw": 30.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C9267DE9_D9CC_8764_41E0_0493342E5B33",
 "data": {
  "label": "info softbox"
 },
 "maps": [
  {
   "hfov": 7.43,
   "yaw": 30.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 9.85
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_C9188057_D9C3_FCAC_41DA_828917FBDFA3, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_CBD2AF25_D9C5_84EC_41E8_D318492C8AAE, null, null, null, null, false); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_C85B97C4_DA43_83A3_41DE_F951F8896108)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.93,
   "image": "this.AnimatedImageResource_CBC53F1E_D9C5_84DC_41E5_F31AD58B790D",
   "pitch": 9.87,
   "yaw": -28.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C90420B4_D9CC_BDEC_41E7_656F596F6334",
 "data": {
  "label": "info softbox 2"
 },
 "maps": [
  {
   "hfov": 6.93,
   "yaw": -28.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 9.87
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_C9929AB1_D9C4_8DE5_41E0_01C317AD44CD, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_C868BC54_D9FC_84A3_41D7_007565837900, null, null, null, null, false); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_C85B97C4_DA43_83A3_41DE_F951F8896108)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.08,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0_HS_4_0.png",
      "width": 692,
      "class": "ImageResourceLevel",
      "height": 825
     }
    ]
   },
   "pitch": -2.77,
   "roll": 0,
   "yaw": -27.07,
   "distance": 50
  }
 ],
 "id": "overlay_D61DE057_D9C4_9CAD_41E8_58EF3B2BE4D0",
 "data": {
  "label": "soft box"
 },
 "maps": [
  {
   "hfov": 28.08,
   "yaw": -27.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0_HS_4_1_0_map.gif",
      "width": 167,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -2.77
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_D77F11AF_D9C4_9FFD_41E4_7C2770C57165, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_C9932407_D9DC_84AD_41E5_33F5F42F5806, null, null, null, null, false); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_C89FDFE0_DA4C_8364_41E2_A0C0FC98E778)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.01,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0_HS_1_0.png",
      "width": 242,
      "class": "ImageResourceLevel",
      "height": 233
     }
    ]
   },
   "pitch": -51.28,
   "roll": 0,
   "yaw": 53.66,
   "distance": 50
  }
 ],
 "id": "overlay_D463F9F0_D9C4_8F64_41E2_6FBF49548F4B",
 "data": {
  "label": "Luz chao"
 },
 "maps": [
  {
   "hfov": 10.01,
   "yaw": 53.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0_HS_1_1_0_map.gif",
      "width": 121,
      "class": "ImageResourceLevel",
      "height": 116
     }
    ]
   },
   "pitch": -51.28
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_C9EE3748_D9C3_84A4_41E0_E447402B457B, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_C86B8C55_D9FC_84AD_41E9_7F35BE59F86B, null, null, null, null, false); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_C89FDFE0_DA4C_8364_41E2_A0C0FC98E778)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.44,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0_HS_5_0.png",
      "width": 180,
      "class": "ImageResourceLevel",
      "height": 142
     }
    ]
   },
   "pitch": -39.92,
   "roll": 0,
   "yaw": -39.63,
   "distance": 50
  }
 ],
 "id": "overlay_D60CF7F0_D9C3_8363_41E5_8AEF0635960A",
 "data": {
  "label": "Luz chao 2"
 },
 "maps": [
  {
   "hfov": 7.44,
   "yaw": -39.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0_HS_5_1_0_map.gif",
      "width": 90,
      "class": "ImageResourceLevel",
      "height": 71
     }
    ]
   },
   "pitch": -39.92
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_C8E4A5C4_D9C4_87A3_41E8_75DBC243DED3, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_CBD07F25_D9C5_84EC_41DB_11FC5AC769AC, null, null, null, null, false); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_C89FDFE0_DA4C_8364_41E2_A0C0FC98E778)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.66,
   "image": "this.AnimatedImageResource_CBC5EF1F_D9C5_84DC_41AA_07A185036B1E",
   "pitch": -36.37,
   "yaw": -42.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C8D98CD8_D9C4_85A4_41E7_BA167AEE188B",
 "data": {
  "label": "info luz chao"
 },
 "maps": [
  {
   "hfov": 5.66,
   "yaw": -42.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0_HS_11_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -36.37
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_C873D13D_D9C7_FCDD_41E8_E2E8695C532A, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_CBD75F26_D9C5_84EC_41DF_25BD968F4BF1, null, null, null, null, false); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_C89FDFE0_DA4C_8364_41E2_A0C0FC98E778)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.86,
   "image": "this.AnimatedImageResource_CBC5BF1F_D9C5_84DC_41DA_8257DA1229E7",
   "pitch": -46.23,
   "yaw": 53.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C9264C7B_D9C4_8565_41D7_405EB3B34D0A",
 "data": {
  "label": "info luz chao 2"
 },
 "maps": [
  {
   "hfov": 4.86,
   "yaw": 53.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0_HS_12_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -46.23
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_D6A3CD79_D9DC_8764_41EA_73355CF10837, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_C991D408_D9DC_84A3_41E2_CA31256FAFF8, null, null, null, null, false); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_CBC93635_DA43_84EC_4185_1CBEB1B65D83)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.53,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0_HS_2_0.png",
      "width": 279,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ]
   },
   "pitch": -15.09,
   "roll": 0,
   "yaw": -104.3,
   "distance": 50
  }
 ],
 "id": "overlay_D72C6178_D9DC_9F63_41E6_3CED84767038",
 "data": {
  "label": "microfone"
 },
 "maps": [
  {
   "hfov": 11.53,
   "yaw": -104.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0_HS_2_1_0_map.gif",
      "width": 139,
      "class": "ImageResourceLevel",
      "height": 86
     }
    ]
   },
   "pitch": -15.09
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_C951A0C3_D9C4_BDA5_41E5_D2C23F6C2A96, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_CBD64F26_D9C5_84EC_41D8_DBFB0D98546F, null, null, null, null, false); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_CBC93635_DA43_84EC_4185_1CBEB1B65D83)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.89,
   "image": "this.AnimatedImageResource_CBC45F1F_D9C5_84DC_41DC_25F171717D20",
   "pitch": -11.52,
   "yaw": -106.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C85F8870_D9C5_8D64_41E7_C469DA1C628E",
 "data": {
  "label": "info microfone"
 },
 "maps": [
  {
   "hfov": 6.89,
   "yaw": -106.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0_HS_13_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.52
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_D7BCD331_D9DD_FCE4_41E0_C33C8804E50A, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_C990E409_D9DC_84A5_41E9_33B1AB0274C9, null, null, null, null, false); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_CBE46A1A_DA44_8CA7_41D0_12C9CF2C5C17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.39,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0_HS_3_0.png",
      "width": 423,
      "class": "ImageResourceLevel",
      "height": 734
     }
    ]
   },
   "pitch": -34.5,
   "roll": 0,
   "yaw": -156.7,
   "distance": 50
  }
 ],
 "id": "overlay_D40E7F28_D9DD_84E4_41E7_6A2203E187C0",
 "data": {
  "label": "cadeira"
 },
 "maps": [
  {
   "hfov": 17.39,
   "yaw": -156.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0_HS_3_1_0_map.gif",
      "width": 114,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -34.5
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_C94B1EDF_D9C5_855D_41D2_8E39CDB15F9F, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_CBD79F27_D9C5_84EC_41E7_0D20D0CE0648, null, null, null, null, false); var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_CBE46A1A_DA44_8CA7_41D0_12C9CF2C5C17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.62,
   "image": "this.AnimatedImageResource_CBC42F1F_D9C5_84DC_41A5_96436C5E2B08",
   "pitch": -19.71,
   "yaw": -156.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C8AC1825_D9C5_8CED_41DF_52DF11CB1534",
 "data": {
  "label": "info cadeira"
 },
 "maps": [
  {
   "hfov": 6.62,
   "yaw": -156.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0_HS_14_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.71
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D64F71B2_D9C7_9FE4_41A7_C2BFCDB25445, this.camera_C071BE50_DAC3_84A3_41EA_2D0B2459C11C); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.89,
   "image": "this.AnimatedImageResource_C95533E8_DA4D_8364_41E1_6D33210D6D64",
   "pitch": -34.61,
   "yaw": -179.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C82818CE_D9C4_8DBF_41E3_225CDD18CCC0",
 "data": {
  "label": "sair"
 },
 "maps": [
  {
   "hfov": 11.89,
   "yaw": -179.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0_HS_15_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -34.61
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "rollOver": "var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_C99AA8EA_DA45_8D64_41EA_5A3A7CF013E3); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_CBC91BAA_DA47_83E4_41E3_BD8164D27C61",
 "data": {
  "label": "saida"
 },
 "maps": [
  {
   "hfov": 45.36,
   "yaw": -159.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0_HS_16_1_0_map.gif",
      "width": 116,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -13.93
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "rollOver": "var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_C99AA8EA_DA45_8D64_41EA_5A3A7CF013E3); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_C88A0B30_DA44_8CE3_41E8_957311828655",
 "data": {
  "label": "saida 2"
 },
 "maps": [
  {
   "hfov": 32.89,
   "yaw": 165.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0_HS_17_1_0_map.gif",
      "width": 88,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -12.97
  }
 ]
},
{
 "blending": 0,
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_C8FAE1A4_DA7C_BFE3_41E9_CA1C517E2EED.mp4"
 },
 "hfov": 36.46,
 "autoplay": false,
 "id": "overlay_CECC8421_DA7F_84E5_41D1_7DABF9FF520E",
 "enabledInCardboard": true,
 "loop": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_CECC8421_DA7F_84E5_41D1_7DABF9FF520E_t.jpg",
    "width": 1920,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ]
 },
 "pitch": -16.27,
 "useHandCursor": true,
 "roll": 0.27,
 "yaw": 1.97,
 "chromaThreshold": 0.08,
 "rotationY": -4.71,
 "rotationX": 6.33,
 "click": "this.overlay_CECC8421_DA7F_84E5_41D1_7DABF9FF520E.play()",
 "chromaSmoothing": 0.03,
 "data": {
  "label": "EU"
 },
 "chromaColor": "#4E7DD9",
 "stateChange": "if(this.overlay_CECC8421_DA7F_84E5_41D1_7DABF9FF520E.get('state') == 'playing'){ this.pauseGlobalAudios('overlay_CECC8421_DA7F_84E5_41D1_7DABF9FF520E', [this.overlay_CECC8421_DA7F_84E5_41D1_7DABF9FF520E]); } else { this.resumeGlobalAudios('overlay_CECC8421_DA7F_84E5_41D1_7DABF9FF520E'); }",
 "vfov": 72.77,
 "videoVisibleOnStop": true,
 "class": "VideoPanoramaOverlay",
 "distance": 50
},
{
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "hfov": 15,
 "id": "panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 },
 "inertia": false
},
{
 "rowCount": 6,
 "frameCount": 21,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D64F71B2_D9C7_9FE4_41A7_C2BFCDB25445_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_C955F3E8_DA4D_8364_41E0_95C379304782",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0_HS_9_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CBC6BF1E_D9C5_84DC_41B3_6DF1CE7CE956",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0_HS_10_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CBC53F1E_D9C5_84DC_41E5_F31AD58B790D",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0_HS_11_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CBC5EF1F_D9C5_84DC_41AA_07A185036B1E",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0_HS_12_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CBC5BF1F_D9C5_84DC_41DA_8257DA1229E7",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0_HS_13_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CBC45F1F_D9C5_84DC_41DC_25F171717D20",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0_HS_14_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CBC42F1F_D9C5_84DC_41A5_96436C5E2B08",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_D2FA439C_D9BC_83DC_41CD_261980AA72CB_0_HS_15_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_C95533E8_DA4D_8364_41E1_6D33210D6D64",
 "frameDuration": 41
}],
 "start": "this.init()",
 "data": {
  "name": "Player435"
 },
 "children": [
  "this.MainViewer",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "overflow": "visible",
 "minHeight": 20,
 "backgroundPreloadEnabled": true,
 "width": "100%",
 "borderSize": 0,
 "scripts": {
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "registerKey": function(key, value){  window[key] = value; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "unregisterKey": function(key){  delete window[key]; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "existsKey": function(key){  return key in window; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "horizontalAlign": "left",
 "defaultVRPointer": "laser",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "downloadEnabled": false,
 "verticalAlign": "top",
 "class": "Player",
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "height": "100%",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
