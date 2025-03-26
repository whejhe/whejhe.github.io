document.getElementById('download').addEventListener('click', () => {
    const cvElement = document.getElementById('page1');
    
    const options = {
        margin: 0,
        filename: 'CV-Carlos-Fernandez.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    
    html2pdf().from(cvElement).set(options).save();
});
