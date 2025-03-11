import { test, expect } from "@playwright/test";

test.describe("list view", () => {
  test("should display 4 files", async ({ page }) => {
    await page.goto("http://localhost:4200/");
    await expect(page.getByTestId("files-list-name")).toHaveText([
      "screenshots",
      "example.component.ts",
      "README.md",
      "LICENSE.md",
    ]);
  });
});
