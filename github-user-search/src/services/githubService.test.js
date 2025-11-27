import axios from "axios";
import { searchUsers } from "./githubService";

jest.mock("axios");

describe("GitHub API", () => {
  it("should call the GitHub API with the correct endpoint", async () => {
    axios.get.mockResolvedValue({ data: { items: [] } });

    await searchUsers({ username: "octocat" });

    expect(axios.get).toHaveBeenCalledWith(
      "https://api.github.com/search/users?q=octocat&per_page=20"
    );
  });
});