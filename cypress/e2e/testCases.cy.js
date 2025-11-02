import testCaseAssert from '../pages/asserts/TestCaseAssert.js';
import HomePage from '../pages/pom/HomePage.js';

describe("Test Case 7: Verify Test Cases Page", () => {
  beforeEach(() => {
    HomePage.visit();
    HomePage.navigateToTestCase();
  });

  it("Test Case 7: Test Case", () => {
   testCaseAssert.assertPageIsVisible();
  });
});
