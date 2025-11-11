import type { ChangeEvent } from "react"

export function SearchBar() {

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        // Handle the search input change
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle the form submission
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        // Handle key down events
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            onChange={handleSearch}
            onKeyDown={handleKeyDown}
            placeholder="Search for a track..." />
        </form>
    )
}