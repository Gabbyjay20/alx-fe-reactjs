import axios from "axios";
import { fetchUserData } from "./githubService";
import { vi, test, expect } from "vitest";

vi.mock("axios");

test("calls GitHub user API with correct username", async () => {
  axios.get.mockResolvedValue({ data: { login: "gabbyjay20" } });

  const username = "gabbyjay20";
  const result = await fetchUserData(username);

  expect(axios.get).toHaveBeenCalledWith(`https://api.github.com/users/${username}`);
  expect(result.login).toBe("gabbyjay20");
});