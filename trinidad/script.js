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
        { date: '05 SEP 2025', numbers: '5 5 1 1' },
        { date: '04 SEP 2025', numbers: '4 4 7 5' },
        { date: '03 SEP 2025', numbers: '8 7 0 1' },
        { date: '02 SEP 2025', numbers: '5 8 5 8' },
        { date: '01 SEP 2025', numbers: '8 1 8 1' },
        { date: '31 AUG 2025', numbers: '0 2 7 7' },
        { date: '30 AUG 2025', numbers: '6 0 5 8' },
        { date: '29 AUG 2025', numbers: '1 2 1 6' },
        { date: '28 AUG 2025', numbers: '9 1 3 3' },
        { date: '27 AUG 2025', numbers: '7 1 9 5' },
        { date: '26 AUG 2025', numbers: '6 9 0 7' },
        { date: '25 AUG 2025', numbers: '3 8 6 3' },
        { date: '24 AUG 2025', numbers: '4 6 6 0' },
        { date: '23 AUG 2025', numbers: '8 3 8 4' },
        { date: '22 AUG 2025', numbers: '6 5 4 6' },
        { date: '21 AUG 2025', numbers: '3 3 9 1' },
        { date: '20 AUG 2025', numbers: '8 1 7 6' },
        { date: '19 AUG 2025', numbers: '5 9 8 1' },
        { date: '18 AUG 2025', numbers: '3 9 1 9' },
        { date: '17 AUG 2025', numbers: '1 7 7 1' },
        { date: '16 AUG 2025', numbers: '9 1 1 1' },
        { date: '15 AUG 2025', numbers: '3 7 8 7' },
        { date: '14 AUG 2025', numbers: '7 7 3 8' },
        { date: '13 AUG 2025', numbers: '0 9 0 4' },
        { date: '12 AUG 2025', numbers: '6 0 5 6' },
        { date: '11 AUG 2025', numbers: '4 9 6 2' }, 
        { date: '10 AUG 2025', numbers: '1 6 0 0' },
        { date: '09 AUG 2025', numbers: '2 6 9 0' },
        { date: '08 AUG 2025', numbers: '4 1 8 6' },
        { date: '07 AUG 2025', numbers: '8 9 2 7' },
        { date: '06 AUG 2025', numbers: '4 3 7 1' },
        { date: '05 AUG 2025', numbers: '0 0 4 6' },
        { date: '04 AUG 2025', numbers: '8 6 5 2' },
        { date: '03 AUG 2025', numbers: '4 9 6 4' },
        { date: '02 AUG 2025', numbers: '1 6 1 1' },
        { date: '01 AUG 2025', numbers: '7 9 0 3' },
        { date: '31 JUL 2025', numbers: '2 9 5 8' },
        { date: '30 JUL 2025', numbers: '7 1 0 5' },
        { date: '29 JUL 2025', numbers: '9 8 2 5' },
        { date: '28 JUL 2025', numbers: '4 0 5 7' },
        { date: '27 JUL 2025', numbers: '8 3 7 9' },
        { date: '26 JUL 2025', numbers: '7 2 5 1' },
        { date: '25 JUL 2025', numbers: '9 7 4 0' },
        { date: '24 JUL 2025', numbers: '3 8 4 2' },
        { date: '23 JUL 2025', numbers: '9 8 2 5' },
        { date: '22 JUL 2025', numbers: '8 4 6 7' },
        { date: '21 JUL 2025', numbers: '4 7 5 2' },
        { date: '20 JUL 2025', numbers: '6 4 0 7' },
        { date: '19 JUL 2025', numbers: '4 1 7 8' },
        { date: '18 JUL 2025', numbers: '7 6 4 3' },
        { date: '17 JUL 2025', numbers: '8 1 2 7' },
        { date: '16 JUL 2025', numbers: '2 8 0 5' },
        { date: '15 JUL 2025', numbers: '2 5 6 4' },
        { date: '14 JUL 2025', numbers: '1 5 0 8' },
        { date: '13 JUL 2025', numbers: '6 8 3 7' },
        { date: '12 JUL 2025', numbers: '8 0 2 1' },
        { date: '11 JUL 2025', numbers: '4 7 6 3' },
        { date: '10 JUL 2025', numbers: '7 6 0 4' },
        { date: '09 JUL 2025', numbers: '5 3 7 9' },
        { date: '08 JUL 2025', numbers: '4 6 1 8' },
        { date: '07 JUL 2025', numbers: '8 9 6 1' },
        { date: '06 JUL 2025', numbers: '9 2 0 4' },
        { date: '05 JUL 2025', numbers: '6 8 3 9' },
        { date: '04 JUL 2025', numbers: '3 1 9 0' },
        { date: '03 JUL 2025', numbers: '5 6 2 3' },
        { date: '02 JUL 2025', numbers: '4 8 6 1' },
        { date: '01 JUL 2025', numbers: '6 3 5 0' },
        { date: '30 JUN 2025', numbers: '5 6 9 2' },
        { date: '29 JUN 2025', numbers: '8 7 0 2' },
        { date: '28 JUN 2025', numbers: '5 1 1 2' },
        { date: '27 JUN 2025', numbers: '2 8 9 9' },
        { date: '26 JUN 2025', numbers: '3 7 7 1' },
        { date: '25 JUN 2025', numbers: '9 4 2 4' },
        { date: '24 JUN 2025', numbers: '7 5 1 3' },
        { date: '23 JUN 2025', numbers: '8 7 0 0' },
        { date: '22 JUN 2025', numbers: '7 4 6 9' },
        { date: '21 JUN 2025', numbers: '0 8 5 2' },
        { date: '20 JUN 2025', numbers: '4 5 0 6' },
        { date: '19 JUN 2025', numbers: '7 8 2 3' },
        { date: '18 JUN 2025', numbers: '4 3 6 6' },
        { date: '17 JUN 2025', numbers: '5 6 4 7' },
        { date: '16 JUN 2025', numbers: '1 9 5 2' },
        { date: '15 JUN 2025', numbers: '0 1 5 5' },
        { date: '14 JUN 2025', numbers: '3 6 6 8' },
        { date: '13 JUN 2025', numbers: '4 7 5 9' },
        { date: '12 JUN 2025', numbers: '5 1 1 4' },
        { date: '11 JUN 2025', numbers: '2 4 9 8' },
        { date: '10 JUN 2025', numbers: '1 5 9 1' },
        { date: '09 JUN 2025', numbers: '3 1 6 0' },
        { date: '08 JUN 2025', numbers: '4 3 2 9' },
        { date: '07 JUN 2025', numbers: '8 4 5 5' },
        { date: '06 JUN 2025', numbers: '2 4 9 1' },
        { date: '05 JUN 2025', numbers: '9 8 2 1' },
        { date: '04 JUN 2025', numbers: '7 9 6 5' },
        { date: '03 JUN 2025', numbers: '0 2 5 7' },
        { date: '02 JUN 2025', numbers: '9 0 3 7' },
        { date: '01 JUN 2025', numbers: '2 1 9 4' },
        
        
        
        
        
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
