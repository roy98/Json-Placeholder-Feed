import React from 'react'
import renderer from "react-test-renderer"
import { BrowserRouter } from 'react-router-dom'
import Root from "../../routes/Root"

test("renders root page that list all posts", () => {
  const tree = renderer.create(
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  ).toJSON();
  
  expect(tree).toMatchSnapshot();
});