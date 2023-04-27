"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*! coi-serviceworker v0.1.6 - Guido Zuidhof, licensed under MIT */
if (typeof window === 'undefined') {
  self.addEventListener("install", function () {
    return self.skipWaiting();
  });
  self.addEventListener("activate", function (event) {
    return event.waitUntil(self.clients.claim());
  });
  self.addEventListener("message", function (ev) {
    if (ev.data && ev.data.type === "deregister") {
      self.registration.unregister().then(function () {
        return self.clients.matchAll();
      }).then(function (clients) {
        clients.forEach(function (client) {
          return client.navigate(client.url);
        });
      });
    }
  });
  self.addEventListener("fetch", function (event) {
    if (event.request.cache === "only-if-cached" && event.request.mode !== "same-origin") {
      return;
    }

    event.respondWith(fetch(event.request).then(function (response) {
      if (response.status === 0) {
        return response;
      }

      var newHeaders = new Headers(response.headers);
      newHeaders.set("Cross-Origin-Embedder-Policy", "require-corp");
      newHeaders.set("Cross-Origin-Opener-Policy", "same-origin");
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders
      });
    })["catch"](function (e) {
      return console.error(e);
    }));
  });
} else {
  (function () {
    // You can customize the behavior of this script through a global `coi` variable.
    var coi = _objectSpread({
      shouldRegister: function shouldRegister() {
        return true;
      },
      shouldDeregister: function shouldDeregister() {
        return false;
      },
      doReload: function doReload() {
        return window.location.reload();
      },
      quiet: false
    }, window.coi);

    var n = navigator;

    if (coi.shouldDeregister() && n.serviceWorker && n.serviceWorker.controller) {
      n.serviceWorker.controller.postMessage({
        type: "deregister"
      });
    } // If we're already coi: do nothing. Perhaps it's due to this script doing its job, or COOP/COEP are
    // already set from the origin server. Also if the browser has no notion of crossOriginIsolated, just give up here.


    if (window.crossOriginIsolated !== false || !coi.shouldRegister()) return;

    if (!window.isSecureContext) {
      !coi.quiet && console.log("COOP/COEP Service Worker not registered, a secure context is required.");
      return;
    } // In some environments (e.g. Chrome incognito mode) this won't be available


    if (n.serviceWorker) {
      n.serviceWorker.register(window.document.currentScript.src).then(function (registration) {
        !coi.quiet & console.log("COOP/COEP Service Worker registered", registration.scope);
        registration.addEventListener("updatefound", function () {
          !coi.quiet && console.log("Reloading page to make use of updated COOP/COEP Service Worker.");
          coi.doReload();
        }); // If the registration is active, but it's not controlling the page

        if (registration.active && !n.serviceWorker.controller) {
          !coi.quiet && console.log("Reloading page to make use of COOP/COEP Service Worker.");
          coi.doReload();
        }
      }, function (err) {
        !coi.quiet && console.error("COOP/COEP Service Worker failed to register:", err);
      });
    }
  })();
}