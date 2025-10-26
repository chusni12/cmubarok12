document.addEventListener('DOMContentLoaded', function() {
    const complaintForm = document.getElementById('complaint-form');
    const complaintInput = document.getElementById('complaint-input');
    const complaintsContainer = document.getElementById('complaints-container');

    complaintForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah form dari reload halaman

        const complaintText = complaintInput.value.trim();

        if (complaintText !== '') {
            // Buat elemen baru untuk menampung keluh kesah
            const newComplaint = document.createElement('div');
            newComplaint.classList.add('complaint-post');
            newComplaint.textContent = complaintText;

            // Tambahkan keluh kesah baru ke dalam container
            // insertBefore akan menambahkan elemen baru di atas, bukan di bawah
            complaintsContainer.insertBefore(newComplaint, complaintsContainer.children[1]);


            // Kosongkan textarea setelah dikirim
            complaintInput.value = '';
        }
    });
});
