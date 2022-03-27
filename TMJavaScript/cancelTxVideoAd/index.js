// ==UserScript==
// @name         腾讯视频暂停广告取消
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       xkl
// @match        https://v.qq.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=qq.com
// @grant        none
// ==/UserScript==

(function () {
  ("use strict");
  let mainContent = this.parent.document;
  window.onload = function () {
    console.log("%c remove video ads start", "color: yellow");
    let videoEl = mainContent.querySelector("video");
    videoEl.addEventListener("pause", () => {
      removeAd();
      removeMask();
    });
    console.log("%c remove video ads end", "color: green");
  };

  function removeAd() {
    let adEl = mainContent.querySelector(".txp_zt_video_content");
    adEl && adEl.remove();
  }
  function removeMask() {
    let maskEl = mainContent.querySelector(".txp_zt_video_ad_mask");
    maskEl && maskEl.remove();
  }
})();
