import axios from "axios";
import { fetchUserData } from "./githubService";

jest.mock("axios");

describe("GitHub API", () => {
  it("should call the GitHub API with the correct endpoint", async () => {
    axios.get.mockResolvedValue({ data: { login: "octocat" } });

    await fetchUserData("octocat");

    expect(axios.get).toHaveBeenCalledWith(
      "https://api.github.com/users/octocat"
    );
  });
});