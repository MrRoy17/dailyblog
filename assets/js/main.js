// Fetch blog posts from an API or static JSON data
const blogPosts = [
    { title: "Post 1", category: "technology" },
    { title: "Post 2", category: "lifestyle" },
    { title: "Post 3", category: "travel" },
    // Add more posts as needed
];

// Function to filter and display blog posts
function filterPosts(category) {
    const filteredPosts = category === 'all' ? blogPosts : blogPosts.filter(post => post.category === category);
    const blogPostsContainer = document.getElementById('blog-posts');
    blogPostsContainer.innerHTML = '';
    filteredPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('card', 'mb-3');
        postElement.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">Category: ${post.category}</p>
            </div>
        `;
        blogPostsContainer.appendChild(postElement);
    });
}

// Event listener for filter select
document.getElementById('filter').addEventListener('change', function () {
    filterPosts(this.value);
});

// Initial call to display all blog posts
filterPosts('all');
