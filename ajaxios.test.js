// fetchData.it.js
const axios = require("axios");
const fetchData = require("./ajaxios.js");

jest.mock("axios");

it("fetchData returns data from API", async () => {
  const mockData = { data: "mocked data" };
  axios.get.mockResolvedValue(mockData);

  const data = await fetchData();

  expect(data).toEqual("mocked data");
});
