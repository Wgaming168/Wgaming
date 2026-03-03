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
        
        { date: '04 MAR 2026', numbers: '9 6 3 2' }, 
        { date: '03 MAR 2026', numbers: '6 3 2 1' },
        { date: '02 MAR 2026', numbers: '4 6 6 4' },
        { date: '01 MAR 2026', numbers: '2 5 1 2' },
        { date: '28 FEB 2026', numbers: '1 3 3 8' },
        { date: '27 FEB 2026', numbers: '3 9 7 2' },
        { date: '26 FEB 2026', numbers: '7 1 8 9' },
        { date: '25 FEB 2026', numbers: '2 7 9 2' },
        { date: '24 FEB 2026', numbers: '5 8 7 5' },
        { date: '23 FEB 2026', numbers: '1 5 4 0' },
        { date: '22 FEB 2026', numbers: '8 6 9 7' },
        { date: '21 FEB 2026', numbers: '4 1 8 3' },
        { date: '20 FEB 2026', numbers: '3 0 0 5' },
        { date: '19 FEB 2026', numbers: '6 8 3 3' },
        { date: '18 FEB 2026', numbers: '1 9 8 2' },
        { date: '17 FEB 2026', numbers: '8 4 3 6' },
        { date: '16 FEB 2026', numbers: '9 5 1 8' },
        { date: '15 FEB 2026', numbers: '2 8 3 1' },
        { date: '14 FEB 2026', numbers: '3 9 6 2' },
        { date: '13 FEB 2026', numbers: '7 2 3 8' },
        { date: '12 FEB 2026', numbers: '5 9 4 1' },
        { date: '11 FEB 2026', numbers: '4 2 8 4' },
        { date: '10 FEB 2026', numbers: '7 2 3 6' },
        { date: '09 FEB 2026', numbers: '5 4 8 9' },
        { date: '08 FEB 2026', numbers: '8 0 4 1' },
        { date: '07 FEB 2026', numbers: '9 5 6 3' },
        { date: '06 FEB 2026', numbers: '4 4 0 4' },        
        { date: '05 FEB 2026', numbers: '2 6 9 3' },
        { date: '04 FEB 2026', numbers: '6 3 2 2' },
        { date: '03 FEB 2026', numbers: '1 9 9 6' },
        { date: '02 FEB 2026', numbers: '9 4 6 7' },
        { date: '01 FEB 2026', numbers: '5 5 2 3' },     
        { date: '31 JAN 2026', numbers: '7 9 1 6' },
        { date: '30 JAN 2026', numbers: '9 5 3 1' },
        { date: '29 JAN 2026', numbers: '2 6 5 8' },
        { date: '28 JAN 2026', numbers: '8 6 2 5' },
        { date: '27 JAN 2026', numbers: '3 5 8 2' },
        { date: '26 JAN 2026', numbers: '2 5 5 1' },
        { date: '25 JAN 2026', numbers: '2 7 0 9' },
        { date: '24 JAN 2026', numbers: '4 6 4 8' },
        { date: '23 JAN 2026', numbers: '1 0 3 8' },
        { date: '22 JAN 2026', numbers: '3 7 0 2' },
        { date: '21 JAN 2026', numbers: '4 6 4 9' },
        { date: '20 JAN 2026', numbers: '4 4 6 1' },
        { date: '19 JAN 2026', numbers: '2 4 8 0' },
        { date: '18 JAN 2026', numbers: '0 3 8 5' },
        { date: '17 JAN 2026', numbers: '4 8 0 4' },
        { date: '16 JAN 2026', numbers: '7 1 5 8' },
        { date: '15 JAN 2026', numbers: '4 9 0 5' },
        { date: '14 JAN 2026', numbers: '9 5 8 4' },
        { date: '13 JAN 2026', numbers: '2 9 5 4' },
        { date: '12 JAN 2026', numbers: '9 0 2 8' },
        { date: '11 JAN 2026', numbers: '9 6 1 9' },
        { date: '10 JAN 2026', numbers: '7 4 9 2' },
        { date: '09 JAN 2026', numbers: '4 3 8 1' },
        { date: '08 JAN 2026', numbers: '3 8 4 3' },
    
        
        
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
