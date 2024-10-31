// src/BlogListing.js
import React, { useState } from 'react';

const articles = Array.from({ length: 30 }, (_, index) => ({
    title: `Blog Article ${index + 1}`,
    description: `This is a short description of blog article ${index + 1}.`,
    publishDate: new Date(2024, 0, index + 1).toLocaleDateString(),
    link: 'google.com'
}));

const BlogListing = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOrder, setSortOrder] = useState('date');

    const articlesPerPage = 5;
    const totalPages = Math.ceil(articles.length / articlesPerPage);

    const sortedArticles = [...articles].sort((a, b) => {
        if (sortOrder === 'date') {
            return new Date(b.publishDate) - new Date(a.publishDate);
        } else {
            return a.title.localeCompare(b.title);
        }
    });

    const displayedArticles = sortedArticles.slice(
        (currentPage - 1) * articlesPerPage,
        currentPage * articlesPerPage
    );

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-4">Blog Articles</h1>
            <div className="mb-4 flex justify-center">
                <label htmlFor="sort" className="mr-2">Sort By:</label>
                <select
                    id="sort"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="border border-gray-300 p-2 rounded"
                >
                    <option value="date">Publish Date</option>
                    <option value="title">Title</option>
                </select>
            </div>
            <div className=" grid grid-cols-3 gap-3">
                {displayedArticles.map((article, index) => (
                    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{article.title}</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 ">{article.description}</p>
                        <p class="mb-3 font-normal text-gray-700 ">Published on {article.publishDate}</p>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                            Read more
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>

                ))}
            </div>
            <div className="flex justify-center mt-4">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="mr-2 bg-blue-700 text-white py-2 px-4 rounded disabled:opacity-50"
                >
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="ml-2 bg-blue-700 text-white py-2 px-4 rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default BlogListing;
