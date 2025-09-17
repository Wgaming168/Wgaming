document.addEventListener('DOMContentLoaded', function() {
    const resultsContainer = document.getElementById('results-container');
    const paginationContainer = document.getElementById('page-numbers-container');
    const currentPageElement = document.getElementById('current-page');
    const totalPagesElement = document.getElementById('total-pages');
    const prevPageButton = document.getElementById('prev-page');
    const nextPageButton = document.getElementById('next-page');
    const countdownElement = document.getElementById('countdown');

    const resultsPerPage = 5;
    let currentPage = 1;

    const results = [
        { date: '18 SEP 2025', numbers: '7 8 5 3' },
        { date: '17 SEP 2025', numbers: '2 1 8 4' },
        { date: '16 SEP 2025', numbers: '3 7 5 4' },
        { date: '15 SEP 2025', numbers: '3 8 0 6' },
        { date: '14 SEP 2025', numbers: '3 6 9 0' },
        { date: '13 SEP 2025', numbers: '4 0 6 2' },
        { date: '12 SEP 2025', numbers: '4 5 0 9' },
        { date: '11 SEP 2025', numbers: '3 8 6 1' },
        { date: '10 SEP 2025', numbers: '7 7 4 9' },
        { date: '09 SEP 2025', numbers: '0 1 7 7' },
        { date: '08 SEP 2025', numbers: '7 7 0 4' },
        { date: '07 SEP 2025', numbers: '2 6 6 6' },
        { date: '06 SEP 2025', numbers: '9 7 2 2' },
        { date: '05 SEP 2025', numbers: '5 5 1 1' },
        { date: '04 SEP 2025', numbers: '4 4 7 5' },
        { date: '03 SEP 2025', numbers: '8 7 0 1' },
        { date: '02 SEP 2025', numbers: '5 8 5 8' },
        { date: '01 SEP 2025', numbers: '8 1 8 1' },
        
        
        
        
        
        // Add more results here
    ];

    function loadResults(page) {
        const start = (page - 1) * resultsPerPage;
        const end = start + resultsPerPage;
        resultsContainer.innerHTML = '';
        results.slice(start, end).forEach(result => {
            const resultElement = document.createElement('div');
            resultElement.className = 'result';
            resultElement.innerHTML = `
                <div class="date">DATE <span>${result.date}</span></div>
                <div class="numbers">RESULT NUMBER <span>${result.numbers}</span></div>
                <button>More Result</button>
            `;
            resultsContainer.appendChild(resultElement);
        });

        
        renderPagination();
            }

            function renderPagination() {
                const totalPages = Math.ceil(results.length / resultsPerPage);
                totalPagesElement.textContent = totalPages;
                paginationContainer.innerHTML = '';

                const maxPagesToShow = 3;
                let startPage = Math.max(currentPage - Math.floor(maxPagesToShow / 2), 1);
                let endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

                if (endPage - startPage + 1 < maxPagesToShow) {
                    startPage = Math.max(endPage - maxPagesToShow + 1, 1);
                }

                if (currentPage > 1) {
                    const prevPage = document.createElement('a');
                    prevPage.textContent = '«';
                    prevPage.onclick = () => {
                        currentPage--;
                        loadResults(currentPage);
                    };
                    paginationContainer.appendChild(prevPage);
                }

                for (let i = startPage; i <= endPage; i++) {
                    const pageLink = document.createElement('a');
                    pageLink.textContent = i;
                    if (i === currentPage) {
                        pageLink.classList.add('active');
                    }
                    pageLink.onclick = () => {
                        currentPage = i;
                        loadResults(currentPage);
                    };
                    paginationContainer.appendChild(pageLink);
                }

                if (currentPage < totalPages) {
                    const nextPage = document.createElement('a');
                    nextPage.textContent = '»';
                    nextPage.onclick = () => {
                        currentPage++;
                        loadResults(currentPage);
                    };
                    paginationContainer.appendChild(nextPage);
                }
            }

    function startCountdown() {
        function updateCountdown() {
            const now = new Date();
            const targetTime = new Date();
            targetTime.setUTCHours(23);  // 6 AM GMT+7 is 11 PM UTC (previous day)
            targetTime.setUTCMinutes(0);
            targetTime.setUTCSeconds(0);
            if (now >= targetTime) {
                targetTime.setUTCDate(targetTime.getUTCDate() + 1); // move to the next day
            }
            const timeDiff = targetTime - now;

            const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

            countdownElement.textContent = `COUNTDOWN: ${hours}h ${minutes}m ${seconds}s`;

            if (timeDiff <= 0) {
                clearInterval(countdownInterval);
                startCountdown(); // Restart the countdown for the next cycle
            }
        }

        updateCountdown();
        const countdownInterval = setInterval(updateCountdown, 1000);
    }

    loadResults(currentPage);
    startCountdown();
    
    prevPageButton.addEventListener('click', function(event) {
                event.preventDefault();
                if (currentPage > 1) {
                    currentPage--;
                    loadResults(currentPage);
                }
            });

            nextPageButton.addEventListener('click', function(event) {
                event.preventDefault();
                const totalPages = Math.ceil(results.length / resultsPerPage);
                if (currentPage < totalPages) {
                    currentPage++;
                    loadResults(currentPage);
                }
            });
});
