/** Generated from: features\test.feature */
import { test } from "../../steps/fixtures/fixture.ts";

test.describe("Adaptive Form", () => {

  test("signin with CRED", { tag: ["@smoke"] }, async ({ Then, login }) => {
    await Then("Login", null, { login });
    await Then("Credential", null, { login });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("features\\test.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "signin with CRED": {"pickleLocation":"3:1","tags":["@smoke"]},
};