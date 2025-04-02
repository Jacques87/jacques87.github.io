document.getElementById('printButton').addEventListener('click', function() {
    window.jsPDF = window.jspdf.jsPDF;
    const doc = new jsPDF();
    doc.html(document.querySelector('.container'), {
        callback: function (doc) {
            doc.save('your-cv.pdf');
        },
        margin: [10, 10, 10, 10],
        autoPaging: 'text',
        x: 0,
        y: 0,
        width: 190, //target width in the PDF document
        windowWidth: 650 //window width in CSS pixels
    });
});