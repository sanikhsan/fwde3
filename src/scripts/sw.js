import "regenerator-runtime/runtime";
import { precacheAndRoute } from "workbox-precaching/precacheAndRoute";
import { cleanupOutdatedCaches } from "workbox-precaching";
import { registerRoute } from "workbox-routing/registerRoute";
import { CacheFirst, StaleWhileRevalidate } from "workbox-strategies";
import { ExpirationPlugin } from "workbox-expiration";
import { skipWaiting, clientsClaim, setCacheNameDetails } from "workbox-core";

skipWaiting();
clientsClaim();
setCacheNameDetails({
  prefix: "restaurant-catalogue",
  precache: "precache",
  runtime: "runtime",
});

precacheAndRoute(
  [
    ...self.__WB_MANIFEST,
    {
      url: "https://fonts.googleapis.com/css?family=Lato:300,400,500",
      revision: 1,
    },
    {
      url: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.css",
      revision: 1,
    },
  ],
  {
    ignoreURLParametersMatching: [/.*/],
  },
);

registerRoute(
  /^https:\/\/restaurant-api\.dicoding\.dev\/(?:(list|detail))/,
  new StaleWhileRevalidate({
    cacheName: "dicoding-restaurant-api",
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 30 * 2,
        maxEntries: 100,
      }),
    ],
  }),
);

registerRoute(
  ({ request }) => request.destination === "image",
  new CacheFirst({
    cacheName: "images",
    plugins: [
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),
    ],
  }),
);

cleanupOutdatedCaches();
