addEventListener("fetch", (event) => {
  const response = new Response("Ray was here", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});