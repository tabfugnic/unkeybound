const toolbarItems = document.
    querySelectorAll(".js-toolbar-item[data-toolbar-hotkey='k']");

toolbarItems.forEach(function(item) { item.remove(); });
