// import { test, expect } from '@playwright/test';
// import Button from '../src/components/Button';

// test('header title is showing', async ({ page }) => {
//   await page.goto('http://localhost:5173/');

//   // Expect a title "to contain" a substring.
//   await expect(<).toBeTruthy();
// });

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "./Button";

test("loads and displays greeting", async () => {
  // ARRANGE
  render(<Button variant="destructive">Delete</Button>);

  // ACT

  // ASSERT
  expect(screen.getByText("Delete")).toBeDefined();
  // expect(screen.getByRole("button")).toBeDisabled();
});
