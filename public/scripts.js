function fetchData() {
    const cryptocurrency = document.getElementById('cryptocurrency').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

    // Fetch data from backend or API endpoint
    //  fetch('/api/cryptocurrency-data?symbol=' + cryptocurrency + '&start_date=' + startDate + '&end_date=' + endDate)
    //         .then(response => response.json())
    //         .then(data => {
    //             document.getElementById('cryptocurrency-data').innerText = JSON.stringify(data);
    //         });

    // For now, let's just display the fetched data in the console
    console.log('Fetching data for Cryptocurrency:', cryptocurrency);
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
}
