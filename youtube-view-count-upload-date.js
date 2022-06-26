// ==UserScript==
// @name         YouTube view count and upload date fix
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Fix YouTube view count and upload date not visible issue.
// @author       lllo
// @match        https://*.youtube.com/*
// @grant        none
// @license      MIT
// ==/UserScript==

(function () {
  "use strict";

  var style = document.createElement("style");
  style.innerText =
    "#info.ytd-video-primary-info-renderer { flex-direction: column; align-items: start; }";
  document.head.appendChild(style);
})();
