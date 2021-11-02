function openNav() {
    document.getElementById("menu_lateral_sn5").style.display = "none";
    document.getElementById("menu_lateral_sn5_open").style.display = "flex";
    document.getElementById("divIframePrincipal").style.marginLeft = "200px";
    document.getElementById("title_section").style.marginLeft = "200px";
  }
  
  function closeNav() {
    document.getElementById("menu_lateral_sn5").style.display = "flex";
    document.getElementById("menu_lateral_sn5_open").style.display = "none";
    document.getElementById("divIframePrincipal").style.marginLeft = "68px";
    document.getElementById("title_section").style.marginLeft = "68px";
  }