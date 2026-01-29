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
        { date: '07 JAN 2026', numbers: '7 4 8 0' },
        { date: '06 JAN 2026', numbers: '3 3 1 8' },
        { date: '05 JAN 2026', numbers: '4 7 3 0' },
        { date: '04 JAN 2026', numbers: '9 5 5 1' },
        { date: '03 JAN 2026', numbers: '4 4 9 1' },
        { date: '02 JAN 2026', numbers: '2 6 5 5' },
        { date: '01 JAN 2026', numbers: '9 0 0 2' },
        { date: '31 DES 2025', numbers: '1 0 0 9' },
        { date: '30 DES 2025', numbers: '9 8 7 5' },
        { date: '29 DES 2025', numbers: '7 4 7 8' },
        { date: '28 DES 2025', numbers: '4 0 1 6' },
        { date: '27 DES 2025', numbers: '8 8 9 5' },
        { date: '26 DES 2025', numbers: '9 5 8 0' },
        { date: '25 DES 2025', numbers: '6 0 3 1' },
        { date: '24 DES 2025', numbers: '0 3 5 5' },
        { date: '23 DES 2025', numbers: '7 8 9 3' },
        { date: '22 DES 2025', numbers: '9 5 3 6' },
        { date: '21 DES 2025', numbers: '7 2 2 4' },
        { date: '20 DES 2025', numbers: '3 2 9 5' },
        { date: '19 DES 2025', numbers: '1 9 4 3' },
        { date: '18 DES 2025', numbers: '9 5 4 2' },
        { date: '17 DES 2025', numbers: '2 7 1 6' },
        { date: '16 DES 2025', numbers: '4 8 3 5' },
        { date: '15 DES 2025', numbers: '7 6 8 1' },
        { date: '14 DES 2025', numbers: '9 4 5 6' },
        { date: '13 DES 2025', numbers: '1 7 0 2' },
        { date: '12 DES 2025', numbers: '4 7 6 1' },
        { date: '11 DES 2025', numbers: '3 8 6 7' },
        { date: '10 DES 2025', numbers: '6 2 5 1' },
        { date: '09 DES 2025', numbers: '5 1 7 8' },
        { date: '08 DES 2025', numbers: '5 3 9 6' },
        { date: '07 DES 2025', numbers: '6 0 8 7' },
        { date: '06 DES 2025', numbers: '2 8 9 1' },
        { date: '05 DES 2025', numbers: '4 0 7 9' },
        { date: '04 DES 2025', numbers: '5 6 4 7' },
        { date: '03 DES 2025', numbers: '1 4 6 3' },
        { date: '02 DES 2025', numbers: '9 0 9 5' },
        { date: '01 DES 2025', numbers: '8 5 3 0' },
        { date: '30 NOV 2025', numbers: '6 4 4 0' },
        { date: '29 NOV 2025', numbers: '1 7 9 4' },
        { date: '28 NOV 2025', numbers: '0 0 7 0' },
        { date: '27 NOV 2025', numbers: '4 3 2 0' },
        { date: '26 NOV 2025', numbers: '6 5 9 1' },
        { date: '25 NOV 2025', numbers: '7 8 4 3' },
        { date: '24 NOV 2025', numbers: '0 4 5 0' },
        { date: '23 NOV 2025', numbers: '8 4 5 5' },
        { date: '22 NOV 2025', numbers: '6 1 2 4' },
        { date: '21 NOV 2025', numbers: '1 5 5 3' },
        { date: '20 NOV 2025', numbers: '3 2 6 9' },
        { date: '19 NOV 2025', numbers: '5 0 9 1' },
        { date: '18 NOV 2025', numbers: '0 6 5 9' },
        { date: '17 NOV 2025', numbers: '8 4 3 5' },
        { date: '16 NOV 2025', numbers: '4 6 2 5' },
        { date: '15 NOV 2025', numbers: '2 3 0 6' },
        { date: '14 NOV 2025', numbers: '6 8 3 1' },
        { date: '13 NOV 2025', numbers: '4 9 2 0' },
        { date: '12 NOV 2025', numbers: '2 6 0 3' },
        { date: '11 NOV 2025', numbers: '9 5 8 7' },
        { date: '10 NOV 2025', numbers: '4 0 3 6' },
        { date: '09 NOV 2025', numbers: '2 7 6 4' },
        { date: '08 NOV 2025', numbers: '8 9 0 1' },
        { date: '07 NOV 2025', numbers: '5 2 8 7' },
        { date: '06 NOV 2025', numbers: '7 5 3 8' },
        { date: '05 NOV 2025', numbers: '8 3 6 1' },
        { date: '04 NOV 2025', numbers: '2 5 7 4' },
        { date: '03 NOV 2025', numbers: '3 1 9 2' },
        { date: '02 NOV 2025', numbers: '8 5 1 3' },
        { date: '01 NOV 2025', numbers: '3 5 9 6' },
        { date: '31 OCT 2025', numbers: '6 1 9 0' },
        { date: '30 OCT 2025', numbers: '9 0 3 1' },
        { date: '29 OCT 2025', numbers: '4 2 0 7' },
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
