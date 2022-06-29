import React from "react";
import "../assets/css/statisticsStyle.css";

export default function StatisticsPage() {
  return (
    <div>
      <h4 className="statistics-header">Accessing forms by cities</h4>
      <iframe
        className="statistics-frame"
        title="Cities"
        src="http://localhost:5601/app/kibana#/visualize/create?embed=true&type=tile_map&indexPattern=50986540-f7c7-11ec-aa38-01e428290dd8&_g=()&_a=(filters:!(),linked:!f,query:(language:kuery,query:''),uiState:(mapCenter:!(44.70057771638303,20.810302533209324),mapZoom:8),vis:(aggs:!((enabled:!t,id:'1',params:(customLabel:Count),schema:metric,type:count),(enabled:!t,id:'2',params:(autoPrecision:!t,customLabel:GeoPoint,field:geoPoint,isFilteredByCollar:!t,mapBounds:(bottom_right:(lat:44.28791668136674,lon:22.04296851530671),top_left:(lat:45.39790817131373,lon:19.027221444994215)),mapCenter:(lat:44.84558587788343,lon:20.53509498015046),mapZoom:9,precision:4,useGeocentroid:!t),schema:segment,type:geohash_grid)),params:(addTooltip:!t,colorSchema:'Yellow+to+Red',dimensions:(geocentroid:(accessor:3,aggType:geo_centroid,format:(id:string),params:()),geohash:(accessor:1,aggType:geohash_grid,format:(id:string),params:(precision:5,useGeocentroid:!t)),metric:(accessor:2,aggType:count,format:(id:number),params:())),heatClusterSize:1.5,isDesaturated:!t,legendPosition:bottomright,mapCenter:!(0,0),mapType:'Scaled+Circle+Markers',mapZoom:2,wms:(enabled:!f,options:(format:image%2Fpng,transparent:!t))),title:'',type:tile_map))"
      ></iframe>
      <br />
      <h4 className="statistics-header">Accessing forms in minutes</h4>
      <iframe
        className="statistics-frame"
        title="Minutes"
        src="http://localhost:5601/app/kibana#/visualize/edit/738adf00-f7cd-11ec-aa38-01e428290dd8?embed=true&_g=()&_a=(filters:!(),linked:!f,query:(language:kuery,query:''),uiState:(),vis:(aggs:!((enabled:!t,id:'1',params:(),schema:metric,type:count),(enabled:!t,id:'2',params:(customLabel:Minutes,drop_partials:!f,extended_bounds:(),field:'@timestamp',interval:m,min_doc_count:1,timeRange:(from:now-15m,to:now),useNormalizedEsInterval:!t),schema:segment,type:date_histogram)),params:(addLegend:!t,addTimeMarker:!f,addTooltip:!t,categoryAxes:!((id:CategoryAxis-1,labels:(filter:!t,show:!t,truncate:100),position:bottom,scale:(type:linear),show:!t,style:(),title:(),type:category)),dimensions:(x:(accessor:0,aggType:date_histogram,format:(id:date,params:(pattern:'HH:mm')),params:(date:!t,format:'HH:mm',interval:PT1M)),y:!((accessor:1,aggType:count,format:(id:number),params:()))),grid:(categoryLines:!f),labels:(show:!f),legendPosition:right,seriesParams:!((data:(id:'1',label:Count),drawLinesBetweenPoints:!t,mode:stacked,show:true,showCircles:!t,type:histogram,valueAxis:ValueAxis-1)),thresholdLine:(color:%2334130C,show:!f,style:full,value:10,width:1),times:!(),type:histogram,valueAxes:!((id:ValueAxis-1,labels:(filter:!f,rotate:0,show:!t,truncate:100),name:LeftAxis-1,position:left,scale:(mode:normal,type:linear),show:!t,style:(),title:(text:Count),type:value))),title:Minutes,type:histogram))"
      ></iframe>
      <br />
      <h4 className="statistics-header">Accessing forms in hours</h4>
      <iframe
        className="statistics-frame"
        title="Hours"
        src="http://localhost:5601/app/kibana#/visualize/edit/738adf00-f7cd-11ec-aa38-01e428290dd8?embed=true&_g=()&_a=(filters:!(),linked:!f,query:(language:kuery,query:''),uiState:(),vis:(aggs:!((enabled:!t,id:'1',params:(),schema:metric,type:count),(enabled:!t,id:'2',params:(customLabel:Minutes,drop_partials:!f,extended_bounds:(),field:'@timestamp',interval:h,min_doc_count:1,timeRange:(from:now-15m,to:now),useNormalizedEsInterval:!t),schema:segment,type:date_histogram)),params:(addLegend:!t,addTimeMarker:!f,addTooltip:!t,categoryAxes:!((id:CategoryAxis-1,labels:(filter:!t,show:!t,truncate:100),position:bottom,scale:(type:linear),show:!t,style:(),title:(),type:category)),dimensions:(x:(accessor:0,aggType:date_histogram,format:(id:date,params:(pattern:YYYY-MM-DD)),params:(date:!t,format:YYYY-MM-DD,interval:P1D)),y:!((accessor:1,aggType:count,format:(id:number),params:()))),grid:(categoryLines:!f),labels:(show:!f),legendPosition:right,seriesParams:!((data:(id:'1',label:Count),drawLinesBetweenPoints:!t,mode:stacked,show:true,showCircles:!t,type:histogram,valueAxis:ValueAxis-1)),thresholdLine:(color:%2334130C,show:!f,style:full,value:10,width:1),times:!(),type:histogram,valueAxes:!((id:ValueAxis-1,labels:(filter:!f,rotate:0,show:!t,truncate:100),name:LeftAxis-1,position:left,scale:(mode:normal,type:linear),show:!t,style:(),title:(text:Count),type:value))),title:'',type:histogram))"
      ></iframe>
    </div>
  );
}
