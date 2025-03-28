document.getElementById('download').addEventListener('click', () => {
    const cvElement = document.getElementById('page1');
    
    const options = {
        margin: 0,
        filename: 'CV-Carlos-Fernandez.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { 
            scale: 3, 
            useCORS: true,
            scrollY: 0 
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    
    html2pdf().from(cvElement).set(options).save();
});


// document.getElementById('download').addEventListener('click', () => {
//     const cvElement = document.getElementById('page1');

//     const options = {
//         margin: 5, // Márgenes más pequeños para aprovechar el espacio
//         filename: 'CV-Carlos-Fernandez.pdf',
//         image: { type: 'jpeg', quality: 1 }, // Aumenta la calidad de imagen
//         html2canvas: { 
//             scale: 3, // Mejora la resolución del renderizado
//             useCORS: true,
//             scrollY: 0
//         },
//         jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
//     };

//     html2pdf().from(cvElement).set(options).save();
// });
