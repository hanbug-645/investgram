// Function to format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString();
}

// Function to format price change
function formatPriceChange(change) {
    const value = parseFloat(change);
    const color = value > 0 ? 'text-green-500' : value < 0 ? 'text-red-500' : 'text-gray-500';
    const symbol = value > 0 ? '↑' : value < 0 ? '↓' : '→';
    return `<span class="${color}">${symbol} ${Math.abs(value).toFixed(2)}%</span>`;
}

// Function to create a post element
function createPostElement(post) {
    return `
        <article class="border-b border-gray-200 pb-4 mb-4">
            <header class="flex items-center p-3">
                <img src="${post.userAvatar || 'https://via.placeholder.com/40'}" alt="${post.username} Avatar" 
                     class="w-8 h-8 rounded-full mr-3">
                <div class="flex-grow">
                    <span class="font-semibold text-sm text-gray-900">$${post.sector}</span>
                    <div class="text-xs text-gray-500">${post.username} • ${formatPriceChange(post.priceChange)}</div>
                </div>
                <button class="text-gray-500">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                </button>
            </header>

            <div class="relative pb-[100%]">
                <img src="${post.image}" alt="Stock Analysis Visual" 
                     class="top-0 left-0 w-full h-full object-cover">
            </div>

            <div class="p-3">
                <div class="flex items-center mb-3">
                    <button class="mr-4 heart-button" data-post-id="${post.id}">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>
                    <button class="mr-4">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </button>
                    <a href="${post.newsUrl || '#'}" target="_blank" rel="noopener noreferrer" class="mr-4">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                    <button>
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                    </button>
                </div>

                <div class="mb-2">
                    <span class="font-semibold">${post.likes} likes</span>
                </div>

                <div class="mb-2">
                    <span class="font-semibold">$${post.sector}</span>
                    <span class="text-sm">${post.caption}</span>
                </div>

                <div class="text-gray-500 text-xs">
                    ${formatDate(post.date)}
                </div>
            </div>
        </article>
    `;
}

// Function to initialize the discovery feed
async function initializeDiscoveryFeed() {
    try {
        const response = await fetch('/api/discovery');
        const data = await response.json();
        
        if (data.success) {
            const feedContainer = document.getElementById('discoveryFeed');
            feedContainer.innerHTML = data.data.map(post => createPostElement(post)).join('');
            
            // Add event listeners for heart buttons
            document.querySelectorAll('.heart-button').forEach(button => {
                button.addEventListener('click', function() {
                    this.classList.toggle('heart-liked');
                    const likesElement = this.closest('article').querySelector('.font-semibold');
                    let likes = parseInt(likesElement.textContent);
                    if (this.classList.contains('heart-liked')) {
                        likes++;
                    } else {
                        likes--;
                    }
                    likesElement.textContent = `${likes} likes`;
                });
            });
        }
    } catch (error) {
        console.error('Error for loading discovery feed:', error);
    }
}

// Export functions
window.initializeDiscoveryFeed = initializeDiscoveryFeed;
