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
        { date: '28 OCT 2025', numbers: '1 7 5 4' },
        { date: '27 OCT 2025', numbers: '8 3 6 1' },
        { date: '26 OCT 2025', numbers: '3 9 7 6' },
        { date: '25 OCT 2025', numbers: '6 9 4 0' },
        { date: '24 OCT 2025', numbers: '5 6 1 9' },
        { date: '23 OCT 2025', numbers: '7 5 0 6' },
        { date: '22 OCT 2025', numbers: '2 8 9 3' },
        { date: '21 OCT 2025', numbers: '8 0 1 6' },
        { date: '20 OCT 2025', numbers: '3 0 6 5' },
        { date: '19 OCT 2025', numbers: '8 1 5 0' },
        { date: '18 OCT 2025', numbers: '7 6 5 1' },
        { date: '17 OCT 2025', numbers: '2 5 1 3' },
        { date: '16 OCT 2025', numbers: '1 7 4 8' },
        { date: '15 OCT 2025', numbers: '4 1 2 0' },
        { date: '14 OCT 2025', numbers: '9 7 2 8' },
        { date: '13 OCT 2025', numbers: '5 9 1 4' },
        { date: '12 OCT 2025', numbers: '7 8 9 1' },
        { date: '11 OCT 2025', numbers: '5 6 0 2' },
        { date: '10 OCT 2025', numbers: '4 0 6 7' },
        { date: '09 OCT 2025', numbers: '8 7 5 4' },
        { date: '08 OCT 2025', numbers: '4 9 3 5' },
        { date: '07 OCT 2025', numbers: '2 5 1 3' },
        { date: '06 OCT 2025', numbers: '9 8 7 2' },
        { date: '05 OCT 2025', numbers: '3 5 6 9' },
        { date: '04 OCT 2025', numbers: '7 8 6 1' },
        { date: '03 OCT 2025', numbers: '5 9 4 3' },
        { date: '02 OCT 2025', numbers: '3 1 6 4' },
        { date: '01 OCT 2025', numbers: '1 7 8 2' },
        { date: '30 SEP 2025', numbers: '2 6 5 9' },
        { date: '29 SEP 2025', numbers: '7 5 2 0' },
        { date: '28 SEP 2025', numbers: '8 9 6 4' },
        { date: '27 SEP 2025', numbers: '6 9 3 8' },
        { date: '26 SEP 2025', numbers: '9 8 1 7' },
        { date: '25 SEP 2025', numbers: '4 6 2 1' },
        { date: '24 SEP 2025', numbers: '2 4 3 6' },
        { date: '23 SEP 2025', numbers: '1 8 0 2' },
        { date: '22 SEP 2025', numbers: '6 8 5 1' },
        { date: '21 SEP 2025', numbers: '5 4 0 8' },
        { date: '20 SEP 2025', numbers: '9 7 4 3' },
        { date: '19 SEP 2025', numbers: '2 1 0 6' },
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
