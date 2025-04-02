document.getElementById('requestAccessBtn').addEventListener('click', function() {
    document.getElementById('requestAccessForm').style.display = 'block';
    document.getElementById('accessDetailsForm').style.display = 'none';
});

document.getElementById('accessDetailsBtn').addEventListener('click', function() {
    document.getElementById('accessDetailsForm').style.display = 'block';
    document.getElementById('requestAccessForm').style.display = 'none';
});

document.getElementById('sendRequestBtn').addEventListener('click', function() {
    const email = document.getElementById('requestEmail').value;
    console.log('Request sent to:', email);
    // Add your logic to send the request
    alert('Request sent!');
});

document.getElementById('enterBtn').addEventListener('click', function() {
    const email = document.getElementById('accessEmail').value;
    const code = document.getElementById('accessCode').value;
    console.log('Email:', email, 'Code:', code);
    // Add your logic to verify access
    alert('Access verified!');
});