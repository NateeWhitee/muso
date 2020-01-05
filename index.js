let CSS = document.getElementById('cssFile');
const studentNavBar = document.getElementById('studentNavBar');
const bandInstrumentsNavBar = document.getElementById('bandInstrumentsNavBar');
const pageTitleText = document.getElementById('pageTitleText');
const teacherNavBar = document.getElementById('teacherNavBar');
let pageText = document.getElementById('pageText');


function goToTeacherOrStudentPage() {
    if (confirm('Continue as a student')) {
        showStudentPage();
    } else if (confirm('Continue as a teacher')) {
        showTeacherPage();
    } else {
        showStudentPage();
        console.log('default');
    }
}

function askForDevice() {
    if (confirm('Continue using PC or laptop viewing style?')) {
        CSS.setAttribute('href', 'PC.css');
        console.log('Viewing style set to PC/Laptop')
    } else if (confirm('Continue using tablet viewing style?')) {
        CSS.setAttribute('href', 'tablet.css');
        console.log('Viewing style set to tablet')
    } else if (confirm('Contiue using mobile viewing style?')) {
        CSS.setAttribute('href', 'mobile.css');
        console.log('Viewing style set to mobile')
    } else {
        CSS.setAttribute('href', 'PC.css');
        console.log('Viewing style set to default')
    }
}

function changeText(innerhtml) {
    pageText.innerHTML = innerhtml;
    if (pageText.innerHTML === 'null') {
        pageText.innerHTML = "<h1>Please choose where you'd like to go</h1>";
    }
}

function changeTitle(innerhtml) {
    pageTitleText.innerHTML = innerhtml;
}

function clearActiveBtnBackground() {
    document.getElementById('showInformationPageBtn').setAttribute('class', '');
    document.getElementById('showContactPageBtn').setAttribute('class', '');
    document.getElementById('showRegisterPageBtn').setAttribute('class', '');
    document.getElementById('showStudentPageBtn').setAttribute('class', '');
    document.getElementById('showBandPageBtn').setAttribute('class', '');
    document.getElementById('showOrchestraPageBtn').setAttribute('class', '');
    document.getElementById('showVocalPageBtn').setAttribute('class', '');
    document.getElementById('showTeacherPageBtn').setAttribute('class', '');
    document.getElementById('showHighBrassPageBtn').setAttribute('class', '');
    document.getElementById('showLowBrassPageBtn').setAttribute('class', '');
    document.getElementById('showHighReedsPageBtn').setAttribute('class', '');
    document.getElementById('showLowReedsPageBtn').setAttribute('class', '');
}

function showTeacherPage() {
    changeTitle('<h1>Teachers</h1>');
    changeText('null');
    clearActiveBtnBackground();
    teacherNavBar.style.display = 'inline';
    studentNavBar.style.display = 'none';
    bandInstrumentsNavBar.style.display = 'none';
    console.log('display teacher page');
}

function showInformationPage() {
    changeTitle('<h1>What Next?</h1>');
    changeText("<h1>What is Muso for?</h1><p>Muso was built to help music students find a teacher, as well as to help music teachers find students. The idea came from the great mind of Kalyn Cumley. In order to register as a teacher, please go to the register page. You will find instructions on what to do next.</p>");
    console.log('display teacher information page');
    clearActiveBtnBackground();
    document.getElementById('showInformationPageBtn').setAttribute('class', 'active');
}

function showContactPage() {
    changeTitle('<h1>Contact Us</h1>');
    document.getElementById('showContactPageBtn').setAttribute('class', 'active');
    changeText("<h1>Who to Contact and When</h1><p>You may contact Kalyn Cumley in order to ask for more information about Muso and it's capabilities. If you have an error or complaint about the website, please contact Nate White</p>");
    console.log('display contact us page');
    clearActiveBtnBackground();
    document.getElementById('showContactPageBtn').setAttribute('class', 'active');
}

function showRegisterPage() {
    changeTitle('<h1>Register Now</h1>');
    changeText("<h1>Step by Step</h1><ol><li></li></ol>");
    clearActiveBtnBackground();
    document.getElementById('showRegisterPageBtn').setAttribute('class', 'active');
    console.log('display register page');
}

function showStudentPage() {
    changeText('null');
    changeTitle('<h1>Students</h1>');
    clearActiveBtnBackground();
    teacherNavBar.style.display = 'none';
    studentNavBar.style.display = 'inline';
    console.log('display student page');
}

function showBandPage() {
    changeTitle('<h1>Band Students</h1>');
    changeText('null');
    clearActiveBtnBackground();
    document.getElementById('showBandPageBtn').setAttribute('class', 'active');
    bandInstrumentsNavBar.style.display = 'inline';
    console.log('display band page');
}

function showHighBrassPage() {
    changeTitle('<h1>High Brass Students</h1>');
    changeText('<h1>Trumpet</h1><img src="trumpet.jpg"><p>Some stuff about trumpet. List of teachers in a given area with contact information.</p><h1>French Horn</h1><img src="frenchHorn.png"><p>Some stuff about french horn. List of teachers in a given area with contact information.</p>');
    clearActiveBtnBackground();
    document.getElementById('showHighBrassPageBtn').setAttribute('class', 'active');
    bandInstrumentsNavBar.style.display = 'inline';
    console.log('display high brass page');
}

function showLowBrassPage() {
    changeTitle('<h1>Low Brass Students</h1>');
    changeText('<h1>Trombone</h1><img src="trombone.jpg"><p>Some stuff about trombone. List of teachers in a given area with contact information.</p><h1>Baritone / Euphonium</h1><img src="baritone.jpg"><p>Some stuff about baritone. List of teachers in a given area with contact information.</p><h1>Tuba</h1><img src="tuba.png"><p>Some stuff about tuba. List of teachers in a given area with contact information.</p>');
    clearActiveBtnBackground();
    document.getElementById('showLowBrassPageBtn').setAttribute('class', 'active');
    bandInstrumentsNavBar.style.display = 'inline';
    console.log('display low brass page');
}

function showHighReedsPage() {
    changeTitle('<h1>High Woodwind Students</h1>');
    changeText('<h1>Piccolo / Flute</h1><p>Some stuff about flute. List of teachers in the area with contact information</p><h1>Clarinet</h1><p>Some stuff about clarinet. List of teachers in the area with contact information</p><h1>Oboe</h1><p>Some stuff about Oboe. List of teachers in the area with contact information</p><h1>Alto Saxophone</h1><p>Some stuff about Alto sax. List of teachers in the area with contact information</p><h1><h1>Tenor Saxophone</h1><p>Some stuff about Tenor sax. List of teachers in the area with contact information</p>');
    clearActiveBtnBackground();
    document.getElementById('showHighReedsPageBtn').setAttribute('class', 'active');
    bandInstrumentsNavBar.style.display = 'inline';
    console.log('display high reeds page');
}

function showLowReedsPage() {
    changeTitle('<h1>Low Woodwind Students</h1>');
    changeText('<h1>Baritone Saxophone</h1><p>Some stuff about bari sax. List of teachers in the area with contact information</p><h1>Bass Clarinet</h1><p>Some stuff about bass clarinet. List of teachers in the area with contact information</p><h1>Bassoon</h1><p>Some stuff about Bassoon. List of teachers in the area with contact information</p>');
    clearActiveBtnBackground();
    document.getElementById('showLowReedsPageBtn').setAttribute('class', 'active');
    bandInstrumentsNavBar.style.display = 'inline';
    console.log('display low reeds page');
}

function showOrchestraPage() {
    changeTitle('<h1>Orchestra Students</h1>');
    clearActiveBtnBackground();
    changeText('<h1>Violin</h1><p>Some stuff about Violin. List of teachers in the area with contact information</p><h1>Viola</h1><p>Some stuff about Viola. List of teachers in the area with contact information</p><h1>Cello</h1><p>Some stuff about Cello. List of teachers in the area with contact information</p><h1>Bass</h1><p>Some stuff about Bassists. List of teachers in the area with contact information</p>');
    document.getElementById('showOrchestraPageBtn').setAttribute('class', 'active');
    bandInstrumentsNavBar.style.display = 'none';
    console.log('display orchestra page');
}

function showVocalPage() {
    changeTitle('<h1>Vocal Students</h1>');
    changeText('<h1>Soprano</h1><p>Some stuff about sopranos. List of teachers in the area with contact information</p><h1>Alto</h1><p>Some stuff about altos. List of teachers in the area with contact information</p><h1>Tenor</h1><p>Some stuff about tenors. List of teachers in the area with contact information</p><h1>Bass</h1><p>Some stuff about bass vocalists. List of teachers in the area with contact information</p>');
    clearActiveBtnBackground();
    document.getElementById('showVocalPageBtn').setAttribute('class', 'active');
    bandInstrumentsNavBar.style.display = 'none';
    console.log('display vocal page');
}

askForDevice();
goToTeacherOrStudentPage();