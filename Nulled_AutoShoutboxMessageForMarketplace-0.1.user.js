// ==UserScript==
// @name         Nulled_AutoShoutboxMessageForMarketplace
// @namespace    https://www.nulled.to/
// @version      0.1
// @description  Automates sending messages in shoutbox Marketplace tab, made in JS (start hacking skids now).
// @author       PARADIES <> https://www.nulled.to/user/4586762-paradies
// @match        https://www.nulled.to/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function postMessage(message) {
        var channelItems = document.querySelectorAll('.channel-item');
        channelItems.forEach(function(item) {
            if (item.textContent.includes('marketplace')) {
                item.click();
                setTimeout(function() {
                    var inputField = document.getElementById('shoutbox-input');
                    inputField.value = message;
                    var sendButton = document.querySelector('input[type="button"][value="Send"]');
                    sendButton.click();
                    // After posting in marketplace, switch back to general tab
                    var generalTab = document.querySelector('.channel-item span');
                    if (generalTab && generalTab.textContent.trim() === "general") {
                        generalTab.click();
                    }
                }, 1000);
                return;
            }
        });
    }

    function runScript() {
        var message = "➜ https://NULLED.EXCHANGE | ✅️VOUCHED✅️ | ⭐ CRYPTO EXCHANGE ⭐ Swap ⇆ 1000+ Coins | Low Fees | No Register | Instant ⚡ & Secure ✅️";
        postMessage(message);
        setTimeout(runScript, 3660000);
    }

    runScript();
})();