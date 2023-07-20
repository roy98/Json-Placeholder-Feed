import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Posts from '../components/posts/Posts'
import { mockPosts } from '../utils/mockData'

describe('Posts component', () => {

    it('should display posts components with fake posts', () => {
        render(
            <BrowserRouter>
                <Posts posts={mockPosts} />
            </BrowserRouter>
        )

        const postGrid = screen.getByTestId('posts-grid-1') as HTMLDivElement

        expect(postGrid).toBeVisible()
    })

    it('should not display the list of posts', () => {
        render(
            <BrowserRouter>
                <Posts posts={[]} />
            </BrowserRouter>
        )

        const noData = screen.getByTestId('no-data-1') as HTMLParagraphElement

        expect(noData).toBeVisible()
    })

    it('should render and update the search input text correctly', () => {

        render(
            <BrowserRouter>
                <Posts posts={mockPosts} />
            </BrowserRouter>
        )

        const searchText = "qui est esse"
        const searchElement = screen.getByTestId('search-1') as HTMLInputElement

        fireEvent.input(searchElement, { target: { value: searchText } })

        expect(searchElement.value).toBe(searchText)
    })

    it('should render the searched element at first', () => {

        render(
            <BrowserRouter>
                <Posts posts={mockPosts} />
            </BrowserRouter>
        )

        const searchText = "qui est"
        const searchElement = screen.getByTestId('search-1') as HTMLInputElement

        fireEvent.input(searchElement, { target: { value: searchText } })
        fireEvent.keyDown(searchElement, { key: "Enter" })

        const postGrid = screen.getByTestId('posts-grid-1') as HTMLDivElement

        expect(postGrid.firstElementChild?.innerHTML).toContain(searchText)
    })

})