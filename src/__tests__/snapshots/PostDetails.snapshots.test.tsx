import React from 'react'
import renderer from "react-test-renderer"
import { BrowserRouter } from "react-router-dom"
import PostDetails from "../../routes/PostDetails"

test("renders details page of a post", () => {
  const tree = renderer.create(
    <BrowserRouter>
        <PostDetails />
    </BrowserRouter>
  ).toJSON();
  
  expect(tree).toMatchSnapshot();
});