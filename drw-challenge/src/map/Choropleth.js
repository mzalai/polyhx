import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-choropleth";

const style = {
  fillColor: "#F28F3B",
  weight: 2,
  opacity: 1,
  color: "white",
  dashArray: "3",
  fillOpacity: 0.5
};

export default function Choropleth() {
  const { map } = useMap();

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/timwis/leaflet-choropleth/gh-pages/examples/basic/crimes_by_district.geojson"
    )
      .then((response) => response.json())
      .then((geojson) => {
        L.choropleth(geojson, {
          valueProperty: "incidents", // which property in the features to use
          scale: ["white", "red"], // chroma.js scale - include as many as you like
          steps: 5, // number of breaks or steps in range
          mode: "q", // q for quantile, e for equidistant, k for k-means
          style,
          onEachFeature: function (feature, layer) {
            layer.bindPopup(
              "District " +
                feature.properties.dist_num +
                "<br>" +
                feature.properties.incidents.toLocaleString() +
                " incidents"
            );
          }
        }).addTo(map);
      });
  }, []);

  return null;
}