
// variables
let CSS = document.getElementById('cssFile');
const studentNavBar = document.getElementById('studentNavBar');
const bandInstrumentsNavBar = document.getElementById('bandInstrumentsNavBar');
const pageTitleText = document.getElementById('pageTitleText');
const teacherNavBar = document.getElementById('teacherNavBar');
let pageText = document.getElementById('pageText');

// Teachers
// band
// high brass
const trumpetTeacherList = {
    mo: {
        springfield: '<ol><li>John Smith: email</li></ol>',
        nixa: '<ol><li>John Smith: email</li></ol>',
    }
}
const frenchHornTeacherList = {
    mo: {
        springfield: '<ol><li>John Smith: email</li></ol>',
        nixa: '<ol><li>John Smith: email</li></ol>',
    }
}

// low brass
const tromboneTeacherList = {
    mo: {
        springfield: '<ol><li>John Smith: email</li></ol>',
        nixa: '<ol><li>John Smith: email</li></ol>',
    }
}
const baritoneTeacherList = {
    mo: {
        springfield: '<ol><li>John Smith: email</li></ol>',
        nixa: '<ol><li>John Smith: email</li></ol>',
    }
}
const tubaTeacherList = {
    mo: {
        springfield: '<ol><li>John Smith: email</li></ol>',
        nixa: '<ol><li>John Smith: email</li></ol>',
    }
}

// high woodwinds
const fluteTeacherList = {
    mo: {
        springfield: '<ol><li>John Smith: email</li></ol>',
        nixa: '<ol><li>John Smith: email</li></ol>',
    }
}
const clarinetTeacherList = {
    mo: {
        springfield: '<ol><li>John Smith: email</li></ol>',
        nixa: '<ol><li>John Smith: email</li></ol>',
    }
}
const oboeTeacherList = {
    mo: {
        springfield: '<ol><li>John Smith: email</li></ol>',
        nixa: '<ol><li>John Smith: email</li></ol>',
    }
}
const altoSaxTeacherList = {
    mo: {
        springfield: '<ol><li>John Smith: email</li></ol>',
        nixa: '<ol><li>John Smith: email</li></ol>',
    }
}
const tenorSaxTeacherList = {
    mo: {
        springfield: '<ol><li>John Smith: email</li></ol>',
        nixa: '<ol><li>John Smith: email</li></ol>',
    }
}
        
// low woodwinds
const bariSaxTeacherList = {
    mo: {
        springfield: '<ol><li>John Smith: email</li></ol>',
        nixa: '<ol><li>John Smith: email</li></ol>',
    }
}
const bassClarinetTeacherList = {
    mo: {
        springfield: '<ol><li>John Smith: email</li></ol>',
        nixa: '<ol><li>John Smith: email</li></ol>',
    }
}
const bassoonTeacherList = {
    mo: {
        springfield: '<ol><li>John Smith: email</li></ol>',
        nixa: '<ol><li>John Smith: email</li></ol>',
    }
}

// orchestra
const violinTeacherList = {
    mo: {
        springfield: '<ol><li>John Smith: email</li></ol>',
        nixa: '<ol><li>John Smith: email</li></ol>',
    }
}
const violaTeacherList = {
    mo: {
        springfield: '<ol><li>John Smith: email</li></ol>',
        nixa: '<ol><li>John Smith: email</li></ol>',
    }
}
const celloTeacherList = {
    mo: {
        springfield: '<ol><li>John Smith: email</li></ol>',
        nixa: '<ol><li>John Smith: email</li></ol>',
    }
}
const stringBassTeacherList = {
    mo: {
        springfield: '<ol><li>John Smith: email</li></ol>',
        nixa: '<ol><li>John Smith: email</li></ol>',
    }
}

// vocal
const sopranoTeacherList = {
    mo: {
        springfield: '<ol><li>John Smith: email</li></ol>',
        nixa: '<ol><li>John Smith: email</li></ol>',
    }
}
const altoTeacherList = {
    mo: {
        springfield: '<ol><li>John Smith: email</li></ol>',
        nixa: '<ol><li>John Smith: email</li></ol>',
    }
}
const tenorTeacherList = {
    mo: {
        springfield: '<ol><li>John Smith: email</li></ol>',
        nixa: '<ol><li>John Smith: email</li></ol>',
    }
}
const bassTeacherList = {
    mo: {
        springfield: '<ol><li>John Smith: email</li></ol>',
        nixa: '<ol><li>John Smith: email</li></ol>',
    }
}
    
// customize viewing style
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

// navigation
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
    document.getElementById('showDataBaseOfTeachers').setAttribute('class', '');
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
    changeText('<h1>Trumpet</h1><img src="trumpet.jpg"><br/><input type="button" value="find teachers near me!" onclick="getTeachersTrumpet()"><h1>French Horn</h1><img src="frenchHorn.png"><br/><input type="button" value="find teachers near me!" onclick="getTeachersFrenchHorn()">');
    clearActiveBtnBackground();
    document.getElementById('showHighBrassPageBtn').setAttribute('class', 'active');
    bandInstrumentsNavBar.style.display = 'inline';
    console.log('display high brass page');
}

function showLowBrassPage() {
    changeTitle('<h1>Low Brass Students</h1>');
    changeText('<h1>Trombone</h1><img src="trombone.jpg"><br/><input type="button" value="find teachers near me!" onclick="getTeachersTrombone()"><h1>Baritone / Euphonium</h1><img src="baritone.jpg"><br/><input type="button" value="find teachers near me!" onclick="getTeachersBaritone()"><h1>Tuba</h1><img src="tuba.png"><br/><input type="button" value="find teachers near me!" onclick="getTeachersTuba()">');
    clearActiveBtnBackground();
    document.getElementById('showLowBrassPageBtn').setAttribute('class', 'active');
    bandInstrumentsNavBar.style.display = 'inline';
    console.log('display low brass page');
}

function showHighReedsPage() {
    changeTitle('<h1>High Woodwind Students</h1>');
    changeText('<h1>Piccolo / Flute</h1><img src="flute.jpg"><br/><input type="button" onclick="getTeachersFlute()" value="Find teachers near me!"></p><h1>Clarinet</h1><img src="clarinet.jpg"><br/><input type="button" onclick="getTeachersClarinet()" value="Find teachers near me!"><h1>Oboe</h1><img src="oboe.jpg"><br/><input type="button" onclick="getTeachersOboe()" value="Find teachers near me!"><h1>Alto Saxophone</h1><img src="altoSax.jpg"><br/><input type="button" onclick="getTeachersAltoSax()" value="Find teachers near me!"><h1>Tenor Saxophone</h1><img src="tenorSax.jfif"><br/><input type="button" onclick="getTeachersTenorSax()" value="Find teachers near me!">');
    clearActiveBtnBackground();
    document.getElementById('showHighReedsPageBtn').setAttribute('class', 'active');
    bandInstrumentsNavBar.style.display = 'inline';
    console.log('display high reeds page');
}

function showLowReedsPage() {
    changeTitle('<h1>Low Woodwind Students</h1>');
    changeText('<h1>Baritone Saxophone</h1><img src="bariSax.jpg"><br/><input type="button" value="find teachers near me!" onclick="getTeachersBariSax()"><h1>Bass Clarinet</h1><img src="bassClarinet.jpg"><br/><input type="button" value="find teachers near me!" onclick="getTeachersBassClarinet()"><h1>Bassoon</h1><img src="bassoon.jpg"><br/><input type="button" value="find teachers near me!" onclick="getTeachersBassoon()">');
    clearActiveBtnBackground();
    document.getElementById('showLowReedsPageBtn').setAttribute('class', 'active');
    bandInstrumentsNavBar.style.display = 'inline';
    console.log('display low reeds page');
}

function showOrchestraPage() {
    changeTitle('<h1>Orchestra Students</h1>');
    clearActiveBtnBackground();
    changeText('<h1>Violin</h1><img src="violin.jpg"><br/><input type="button" onclick="getTeachersViolin()" value="find a teacher near you!"><h1>Viola</h1><img src="viola.webp"><br/><input type="button" onclick="getTeachersViola()" value="find a teacher near you!"><h1>Cello</h1><img src="cello.jpg"><br/><input type="button" onclick="getTeachersCello()" value="find a teacher near you!"><h1>String Bass</h1><img src="stringBass.jfif"><br/><input type="button" onclick="getTeachersStringBass()" value="find a teacher near you!">');
    document.getElementById('showOrchestraPageBtn').setAttribute('class', 'active');
    bandInstrumentsNavBar.style.display = 'none';
    console.log('display orchestra page');
}

function showVocalPage() {
    changeTitle('<h1>Vocal Students</h1>');
    changeText('<h1>Soprano</h1><img src="soprano.jpg"><br/><input type="button" onclick="getTeachersSoprano()" value="find a teacher near you!"><h1>Alto</h1><img src="alto.jfif"><br/><input type="button" onclick="getTeachersAlto()" value="find a teacher near you!"><h1>Tenor</h1><img src="tenor.jpg"><br/><input type="button" onclick="getTeachersTenor()" value="find a teacher near you!"><h1>Bass</h1><img src="bass.jpg"><br/><input type="button" onclick="getTeachersBass()" value="find a teacher near you!">');
    clearActiveBtnBackground();
    document.getElementById('showVocalPageBtn').setAttribute('class', 'active');
    bandInstrumentsNavBar.style.display = 'none';
    console.log('display vocal page');
}

function showDataBaseOfTeachers() {
    changeTitle('<h1>Database of Teachers</h1>');
    changeText('<h1>Vocal</h1><h2>Soprano</h2><h3>City, State (There would be multiple of these)</h3><p>List of soprano teachers.</p><h2>Alto</h2><h3>City, State (There would be multiple of these)</h3><p>List of alto teachers</p><h2>Tenor</h2><h3>City, State (There would be multiple of these)</h3><p>List of tenor techers</p><h2>Bass</h2><h3>City, State (There would be multiple of these)</h3><p>List of bass teachers</p><h1>Orchestra</h1><h2>Violin</h2><h3>City, State (There would be multiple of these)</h3><p>List of violin teachers</p><h2>Viola</h2><h3>City, State (There would be multiple of these)</h3><p>List of viola teachers</p><h2>Cello</h2><h3>City, State (There would be multiple of these)</h3><p>List of cello teachers</p><h2>String Bass</h2><h3>City, State (There would be multiple of these)</h3><p>List of string base teachers</p><h1>Band</h1><h2>Trumpet</h2><h3>City, State (There would be multiple of these)</h3><p>List of trumpet teachers</p><h2>French Horn</h2><h3>City, State (There would be multiple of these)</h3><p>List of french horn teachers</p><h2>Baritone/Euphonium</h2><h3>City, State (There would be multiple of these)</h3><p>List of baritone/euphonium teachers</p><h2>Trombone</h2><h3>City, State (There would be multiple of these)</h3><p>List of trombone teachers</p><h2>Tuba</h2><h3>City, State (There would be multiple of these)</h3><p>List of tuba teachers</p>');
    clearActiveBtnBackground();
    document.getElementById('showDataBaseOfTeachers').setAttribute('class', 'active');
    bandInstrumentsNavBar.style.display = 'none';
    console.log('display database of teachers page');
}

// get teachers based on given location
// band
// high brass
function getTeachersTrumpet() {
    let location = {
        state: prompt('Please enter the initials of your state'),
        city: prompt('Please enter your city'),
    }
    let newLocation = {
        city: location.city.toUpperCase(),
        state: location.state.toUpperCase(),
    }
    switch (newLocation.state, newLocation.city) {
        case 'MO', 'SPRINGFIELD':
            if (confirm('Select okay to display the trumpet teachers in Springfield, MO')) {
                changeText("<h1>List of Trumpet Teachers within Springfield, MO</h1>" + trumpetTeacherList.mo.springfield);
            }
            break;
        case 'MO', 'NIXA':
            if (confirm('Select, "OK" to display the trumpet teachers in Nixa, MO')) {
                changeText("<h1>List of Trumpet Teachers within Nixa, MO</h1>" + trumpetTeacherList.mo.nixa)
            }
    }
}

function getTeachersFrenchHorn() {
    let location = {
        state: prompt('Please enter the initials of your state'),
        city: prompt('Please enter your city'),
    }
    let newLocation = {
        city: location.city.toUpperCase(),
        state: location.state.toUpperCase(),
    }
    switch (newLocation.state, newLocation.city) {
        case 'MO', 'SPRINGFIELD':
            if (confirm('Select okay to display the french horn teachers in Springfield, MO')) {
                changeText("<h1>List of French Horn Teachers within Springfield, MO</h1>" + frenchHornTeacherList.mo.springfield);
            }
            break;
        case 'MO', 'NIXA':
            if (confirm('Select, "OK" to display the french horn teachers in Nixa, MO')) {
                changeText("<h1>List of French Horn Teachers within Nixa, MO</h1>" + frenchHorneacherList.mo.nixa)
            }
    }
}

//low brass
function getTeachersTrombone() {
    let location = {
        state: prompt('Please enter the initials of your state'),
        city: prompt('Please enter your city'),
    }
    let newLocation = {
        city: location.city.toUpperCase(),
        state: location.state.toUpperCase(),
    }
    switch (newLocation.state, newLocation.city) {
        case 'MO', 'SPRINGFIELD':
            if (confirm('Select okay to display the trombone teachers in Springfield, MO')) {
                changeText("<h1>List of Trombone Teachers within Springfield, MO</h1>" + tromboneTeacherList.mo.springfield);
            }
            break;
        case 'MO', 'NIXA':
            if (confirm('Select, "OK" to display the trombone teachers in Nixa, MO')) {
                changeText("<h1>List of Trombone Teachers within Nixa, MO</h1>" + tromboneTeacherList.mo.nixa)
            }
    }
}

function getTeachersTuba() {
    let location = {
        state: prompt('Please enter the initials of your state'),
        city: prompt('Please enter your city'),
    }
    let newLocation = {
        city: location.city.toUpperCase(),
        state: location.state.toUpperCase(),
    }
    switch (newLocation.state, newLocation.city) {
        case 'MO', 'SPRINGFIELD':
            if (confirm('Select okay to display the tuba teachers in Springfield, MO')) {
                changeText("<h1>List of Tuba Teachers within Springfield, MO</h1>" + tubaTeacherList.mo.springfield);
            }
            break;
        case 'MO', 'NIXA':
            if (confirm('Select, "OK" to display the tuba teachers in Nixa, MO')) {
                changeText("<h1>List of Tuba Teachers within Nixa, MO</h1>" + fluteTeacherList.mo.nixa)
            }
    }
}

function getTeachersBaritone() {
    let location = {
        state: prompt('Please enter the initials of your state'),
        city: prompt('Please enter your city'),
    }
    let newLocation = {
        city: location.city.toUpperCase(),
        state: location.state.toUpperCase(),
    }
    switch (newLocation.state, newLocation.city) {
        case 'MO', 'SPRINGFIELD':
            if (confirm('Select okay to display the baritone teachers in Springfield, MO')) {
                changeText("<h1>List of Baritone Teachers within Springfield, MO</h1>" + baritoneTeacherList.mo.springfield);
            }
            break;
        case 'MO', 'NIXA':
            if (confirm('Select, "OK" to display the baritone teachers in Nixa, MO')) {
                changeText("<h1>List of Baritone Teachers within Nixa, MO</h1>" + baritoneTeacherList.mo.nixa)
            }
    }
}

// high woodwinds
function getTeachersFlute() {
    let location = {
        state: prompt('Please enter the initials of your state'),
        city: prompt('Please enter your city'),
    }
    let newLocation = {
        city: location.city.toUpperCase(),
        state: location.state.toUpperCase(),
    }
    switch (newLocation.state, newLocation.city) {
        case 'MO', 'SPRINGFIELD':
            if (confirm('Select okay to display the flute/piccolo teachers in Springfield, MO')) {
                changeText("<h1>List of Flute/Piccolo Teachers within Springfield, MO</h1>" + fluteTeacherList.mo.springfield);
            }
            break;
        case 'MO', 'NIXA':
            if (confirm('Select, "OK" to display the flute/piccolo teachers in Nixa, MO')) {
                changeText("<h1>List of Flute/Piccolo Teachers within Nixa, MO</h1>" + fluteTeacherList.mo.nixa)
            }
    }
}

function getTeachersClarinet() {
    let location = {
        state: prompt('Please enter the initials of your state'),
        city: prompt('Please enter your city'),
    }
    let newLocation = {
        city: location.city.toUpperCase(),
        state: location.state.toUpperCase(),
    }
    switch (newLocation.state, newLocation.city) {
        case 'MO', 'SPRINGFIELD':
            if (confirm('Select okay to display the clarinet teachers in Springfield, MO')) {
                changeText("<h1>List of Clarinet Teachers within Springfield, MO</h1>" + clarinetTeacherList.mo.springfield);
            }
            break;
        case 'MO', 'NIXA':
            if (confirm('Select, "OK" to display the clarinet teachers in Nixa, MO')) {
                changeText("<h1>List of Clarinet Teachers within Nixa, MO</h1>" + clarinetTeacherList.mo.nixa)
            }
    }
}

function getTeachersOboe() {
    let location = {
        state: prompt('Please enter the initials of your state'),
        city: prompt('Please enter your city'),
    }
    let newLocation = {
        city: location.city.toUpperCase(),
        state: location.state.toUpperCase(),
    }
    switch (newLocation.state, newLocation.city) {
        case 'MO', 'SPRINGFIELD':
            if (confirm('Select okay to display the oboe teachers in Springfield, MO')) {
                changeText("<h1>List of Oboe Teachers within Springfield, MO</h1>" + oboeTeacherList.mo.springfield);
            }
            break;
        case 'MO', 'NIXA':
            if (confirm('Select, "OK" to display the oboe teachers in Nixa, MO')) {
                changeText("<h1>List of Oboe Teachers within Nixa, MO</h1>" + oboeTeacherList.mo.nixa);
            }
    }
}

function getTeachersAltoSax() {
    let location = {
        state: prompt('Please enter the initials of your state'),
        city: prompt('Please enter your city'),
    }
    let newLocation = {
        city: location.city.toUpperCase(),
        state: location.state.toUpperCase(),
    }
    switch (newLocation.state, newLocation.city) {
        case 'MO', 'SPRINGFIELD':
            if (confirm('Select okay to display the alto saxophone teachers in Springfield, MO')) {
                changeText("<h1>List of Alto Saxophone Teachers within Springfield, MO</h1>" + altoSaxTeacherList.mo.springfield);
            }
            break;
        case 'MO', 'NIXA':
            if (confirm('Select, "OK" to display the alto saxophone teachers in Nixa, MO')) {
                changeText("<h1>List of Alto Saxophone Teachers within Nixa, MO</h1>" + altoSaxTeacherList.mo.nixa)
            }
    }
}

function getTeachersTenorSax() {
    let location = {
        state: prompt('Please enter the initials of your state'),
        city: prompt('Please enter your city'),
    }
    let newLocation = {
        city: location.city.toUpperCase(),
        state: location.state.toUpperCase(),
    }
    switch (newLocation.state, newLocation.city) {
        case 'MO', 'SPRINGFIELD':
            if (confirm('Select okay to display the tenor saxophone teachers in Springfield, MO')) {
                changeText("<h1>List of Tenor Saxophone Teachers within Springfield, MO</h1>" + tenorSaxTeacherList.mo.springfield);
            }
            break;
        case 'MO', 'NIXA':
            if (confirm('Select, "OK" to display the tenor saxophone teachers in Nixa, MO')) {
                changeText("<h1>List of Tenor Saxophone Teachers within Nixa, MO</h1>" + tenorSaxTeacherList.mo.nixa);
            }
    }
}

// low woodwinds
function getTeachersBariSax() {
    let location = {
        state: prompt('Please enter the initials of your state'),
        city: prompt('Please enter your city'),
    }
    let newLocation = {
        city: location.city.toUpperCase(),
        state: location.state.toUpperCase(),
    }
    switch (newLocation.state, newLocation.city) {
        case 'MO', 'SPRINGFIELD':
            if (confirm('Select okay to display the baritone saxophone teachers in Springfield, MO')) {
                changeText("<h1>List of Baritone Saxophone Teachers within Springfield, MO</h1>" + bariSaxTeacherList.mo.springfield);
            }
            break;
        case 'MO', 'NIXA':
            if (confirm('Select, "OK" to display the baritone saxophone teachers in Nixa, MO')) {
                changeText("<h1>List of Baritone Saxophone Teachers within Nixa, MO</h1>" + bariSaxTeacherList.mo.nixa);
            }
    }
}

function getTeeachersBassClarinet() {
    let location = {
        state: prompt('Please enter the initials of your state'),
        city: prompt('Please enter your city'),
    }
    let newLocation = {
        city: location.city.toUpperCase(),
        state: location.state.toUpperCase(),
    }
    switch (newLocation.state, newLocation.city) {
        case 'MO', 'SPRINGFIELD':
            if (confirm('Select okay to display the bass clarinet teachers in Springfield, MO')) {
                changeText("<h1>List of Bass Clarinet Teachers within Springfield, MO</h1>" + bassClarinetTeacherList.mo.springfield);
            }
            break;
        case 'MO', 'NIXA':
            if (confirm('Select, "OK" to display the bass clarient teachers in Nixa, MO')) {
                changeText("<h1>List of Bass Clarinet Teachers within Nixa, MO</h1>" + bassClarinetTeacherList.mo.nixa);
            }
    }
}

function getTeachersBassoon() {
    let location = {
        state: prompt('Please enter the initials of your state'),
        city: prompt('Please enter your city'),
    }
    let newLocation = {
        city: location.city.toUpperCase(),
        state: location.state.toUpperCase(),
    }
    switch (newLocation.state, newLocation.city) {
        case 'MO', 'SPRINGFIELD':
            if (confirm('Select okay to display the bassoon teachers in Springfield, MO')) {
                changeText("<h1>List of Bassoon Teachers within Springfield, MO</h1>" + bassoonTeacherList.mo.springfield);
            }
            break;
        case 'MO', 'NIXA':
            if (confirm('Select, "OK" to display the bassoon teachers in Nixa, MO')) {
                changeText("<h1>List of Bassoon Teachers within Nixa, MO</h1>" + bassoonTeacherList.mo.nixa);
            }
    }
}

// orchestra
function getTeachersViolin() {
    let location = {
        state: prompt('Please enter the initials of your state'),
        city: prompt('Please enter your city'),
    }
    let newLocation = {
        city: location.city.toUpperCase(),
        state: location.state.toUpperCase(),
    }
    switch (newLocation.state, newLocation.city) {
        case 'MO', 'SPRINGFIELD':
            if (confirm('Select okay to display the violin teachers in Springfield, MO')) {
                changeText("<h1>List of Violin Teachers within Springfield, MO</h1>" + violinTeacherList.mo.springfield);
            }
            break;
        case 'MO', 'NIXA':
            if (confirm('Select, "OK" to display the violin teachers in Nixa, MO')) {
                changeText("<h1>List of Violin Teachers within Nixa, MO</h1>" + violinTeacherList.mo.nixa);
            }
    }
}

function getTeachersViola() {
    let location = {
        state: prompt('Please enter the initials of your state'),
        city: prompt('Please enter your city'),
    }
    let newLocation = {
        city: location.city.toUpperCase(),
        state: location.state.toUpperCase(),
    }
    switch (newLocation.state, newLocation.city) {
        case 'MO', 'SPRINGFIELD':
            if (confirm('Select okay to display the viola teachers in Springfield, MO')) {
                changeText("<h1>List of Viola Teachers within Springfield, MO</h1>" + violaTeacherList.mo.springfield);
            }
            break;
        case 'MO', 'NIXA':
            if (confirm('Select, "OK" to display the viola teachers in Nixa, MO')) {
                changeText("<h1>List of Viola Teachers within Nixa, MO</h1>" + violaTeacherList.mo.nixa);
            }
    }
}

function getTeachersCello() {
    let location = {
        state: prompt('Please enter the initials of your state'),
        city: prompt('Please enter your city'),
    }
    let newLocation = {
        city: location.city.toUpperCase(),
        state: location.state.toUpperCase(),
    }
    switch (newLocation.state, newLocation.city) {
        case 'MO', 'SPRINGFIELD':
            if (confirm('Select okay to display the cello teachers in Springfield, MO')) {
                changeText("<h1>List of Cello Teachers within Springfield, MO</h1>" + celloTeacherList.mo.springfield);
            }
            break;
        case 'MO', 'NIXA':
            if (confirm('Select, "OK" to display the cello teachers in Nixa, MO')) {
                changeText("<h1>List of Cello Teachers within Nixa, MO</h1>" + celloTeacherList.mo.nixa);
            }
    }
}

function getTeachersStringBass() {
    let location = {
        state: prompt('Please enter the initials of your state'),
        city: prompt('Please enter your city'),
    }
    let newLocation = {
        city: location.city.toUpperCase(),
        state: location.state.toUpperCase(),
    }
    switch (newLocation.state, newLocation.city) {
        case 'MO', 'SPRINGFIELD':
            if (confirm('Select okay to display the string bass teachers in Springfield, MO')) {
                changeText("<h1>List of String Bass Teachers within Springfield, MO</h1>" + stringBassTeacherList.mo.springfield);
            }
            break;
        case 'MO', 'NIXA':
            if (confirm('Select, "OK" to display the string bass teachers in Nixa, MO')) {
                changeText("<h1>List of String Bass Teachers within Nixa, MO</h1>" + stringBassTeacherList.mo.nixa);
            }
    }
}

// vocal
function getTeachersSoprano() {
    let location = {
        state: prompt('Please enter the initials of your state'),
        city: prompt('Please enter your city'),
    }
    let newLocation = {
        city: location.city.toUpperCase(),
        state: location.state.toUpperCase(),
    }
    switch (newLocation.state, newLocation.city) {
        case 'MO', 'SPRINGFIELD':
            if (confirm('Select okay to display the soprano teachers in Springfield, MO')) {
                changeText("<h1>List of Soprano Teachers within Springfield, MO</h1>" + sopranoTeacherList.mo.springfield);
            }
            break;
        case 'MO', 'NIXA':
            if (confirm('Select, "OK" to display the soprano teachers in Nixa, MO')) {
                changeText("<h1>List of Soprano Teachers within Nixa, MO</h1>" + sopranoTeacherList.mo.nixa);
            }
    }
}

function getTeachersAlto() {
    let location = {
        state: prompt('Please enter the initials of your state'),
        city: prompt('Please enter your city'),
    }
    let newLocation = {
        city: location.city.toUpperCase(),
        state: location.state.toUpperCase(),
    }
    switch (newLocation.state, newLocation.city) {
        case 'MO', 'SPRINGFIELD':
            if (confirm('Select okay to display the alto teachers in Springfield, MO')) {
                changeText("<h1>List of Alto Teachers within Springfield, MO</h1>" + altoTeacherList.mo.springfield);
            }
            break;
        case 'MO', 'NIXA':
            if (confirm('Select, "OK" to display the alto teachers in Nixa, MO')) {
                changeText("<h1>List of Alto Teachers within Nixa, MO</h1>" + altoTeacherList.mo.nixa);
            }
    }
}

function getTeachersTenor() {
    let location = {
        state: prompt('Please enter the initials of your state'),
        city: prompt('Please enter your city'),
    }
    let newLocation = {
        city: location.city.toUpperCase(),
        state: location.state.toUpperCase(),
    }
    switch (newLocation.state, newLocation.city) {
        case 'MO', 'SPRINGFIELD':
            if (confirm('Select okay to display the tenor teachers in Springfield, MO')) {
                changeText("<h1>List of Tenor Teachers within Springfield, MO</h1>" + tenorTeacherList.mo.springfield);
            }
            break;
        case 'MO', 'NIXA':
            if (confirm('Select, "OK" to display the tenor teachers in Nixa, MO')) {
                changeText("<h1>List of Tenor Teachers within Nixa, MO</h1>" + tenorTeacherList.mo.nixa);
            }
    }
}

function getTeachersBass() {
    let location = {
        state: prompt('Please enter the initials of your state'),
        city: prompt('Please enter your city'),
    }
    let newLocation = {
        city: location.city.toUpperCase(),
        state: location.state.toUpperCase(),
    }
    switch (newLocation.state, newLocation.city) {
        case 'MO', 'SPRINGFIELD':
            if (confirm('Select okay to display the bass teachers in Springfield, MO')) {
                changeText("<h1>List of Bass Teachers within Springfield, MO</h1>" + bassTeacherList.mo.springfield);
            }
            break;
        case 'MO', 'NIXA':
            if (confirm('Select, "OK" to display the bass teachers in Nixa, MO')) {
                changeText("<h1>List of Bass Teachers within Nixa, MO</h1>" + bassTeacherList.mo.nixa);
            }
    }
}

askForDevice();
goToTeacherOrStudentPage()