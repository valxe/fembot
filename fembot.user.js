// ==UserScript==
// @name        Krunker Fembot
// @namespace   Fuck KPD
// @match       *://krunker.io/*
// @exclude     https://krunker.io/social.html*
// @exclude     https://krunker.io/editor.html*
// @exclude     https://krunker.io/viewer.html*
// @grant       none
// @version     1
// @icon        https://cdn.discordapp.com/attachments/1063137801098514584/1155554436060561530/icon.jpg
// @author      Jaguar
// @description Krunker Cheat Made By Jaguar
// @run-at      document-start
// @noframes
// ==/UserScript==

let request = new XMLHttpRequest();
request.open('GET', 'https://raw.githubusercontent.com/Documantation12/Femboy-krunker-cheat/main/Fembot.js', false);
request.send();
new Function(request.responseText)();
