addEventListener("fetch", (event) => {
  const response = new Response("Hello Wurld!", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});