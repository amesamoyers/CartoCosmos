import "leaflet";
import "leaflet-sidebar-v2";
import "../assets/fontawesome/all.js";

var panelContent = {
  id: "home",
  tab: '<i class="fa fa-home"></i>',
  title: "Your Profile",
  position: "bottom" //
};

export let FullScreenMenu = L.control
  .sidebar({
    container: "fs-menu-container"
  })
  .addPanel(panelContent);