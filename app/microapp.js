<script>
  function initFreshChat() {
    window.fcWidget.init({
      	 token: "ce73e275-a505-4d32-b8ab-dae656c3f258",
	 host: "https://mtnhelp.freshchat.com",
	 widgetUuid: "7d0b2fd8-1e70-4eb5-bc1d-e77ffbb1ddda"
    });
  }
  function initialize(i,t){var e;i.getElementById(t)?
  initFreshChat():((e=i.createElement("script")).id=t,e.async=!0,
  e.src="https://mtnhelp.freshchat.com/js/widget.js",e.onload=initFreshChat,i.head.appendChild(e))}
  function initiateCall(){initialize(document,"Freshchat-js-sdk")}
  window.addEventListener?window.addEventListener("load",initiateCall,!1):
  window.attachEvent("load",initiateCall,!1);
</script>
