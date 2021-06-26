addEventListener("fetch", (event) => {
  const response = new Response("No, this is Patrick.", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});