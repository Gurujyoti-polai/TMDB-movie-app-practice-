const apiConfig = {
  baseUrl: "http://image.tmdb.org/t/p/",
  apiKey: "357f9c92e545ddad08c8cf07acfb069c",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
