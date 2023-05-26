import app from "./app";
import AppDataSource from "./data-source";

(async () => {
  await AppDataSource.initialize()
    .then((res) => {
      console.log("Data Source Initialization Succesfuly");
    })
    .catch((err) => {
      console.error("Error during Data Source initialization", err);
    });

  app.listen(3000, () => {
    console.log("Server is running");
  });
})();
