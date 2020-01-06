
// variables
let CSS = document.getElementById('cssFile');
const studentNavBar = document.getElementById('studentNavBar');
const bandInstrumentsNavBar = document.getElementById('bandInstrumentsNavBar');
const pageTitleText = document.getElementById('pageTitleText');
const teacherNavBar = document.getElementById('teacherNavBar');
let pageText = document.getElementById('pageText');
const defaultButtonCSS = 'animation-delay: 0s; animation-direction: normal; animation-duration: 0s; animation-fill-mode: none; animation-iteration-count: 1; animation-name: none; animation-play-state: running; animation-timing-function: ease; background-attachment: scroll; background-blend-mode: normal; background-clip: border-box; background-color: rgb(240, 240, 240); background-image: none; background-origin: padding-box; background-position: 0% 0%; background-repeat: repeat; background-size: auto; border-bottom-color: rgb(240, 240, 240); border-bottom-left-radius: 0px; border-bottom-right-radius: 0px; border-bottom-style: outset; border-bottom-width: 2px; border-collapse: separate; border-image-outset: 0px; border-image-repeat: stretch; border-image-slice: 100%; border-image-source: none; border-image-width: 1; border-left-color: rgb(240, 240, 240); border-left-style: outset; border-left-width: 2px; border-right-color: rgb(240, 240, 240); border-right-style: outset; border-right-width: 2px; border-top-color: rgb(240, 240, 240); border-top-left-radius: 0px; border-top-right-radius: 0px; border-top-style: outset; border-top-width: 2px; bottom: auto; box-shadow: none; box-sizing: border-box; break-after: auto; break-before: auto; break-inside: auto; caption-side: top; clear: none; clip: auto; color: rgb(0, 0, 0); content: normal; cursor: default; direction: ltr; display: inline-block; empty-cells: show; float: none; font-family: Arial; font-kerning: auto; font-optical-sizing: auto; font-size: 13.3333px; font-stretch: 100%; font-style: normal; font-variant: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-variant-numeric: normal; font-variant-east-asian: normal; font-weight: 400; height: auto; image-rendering: auto; isolation: auto; justify-items: normal; justify-self: auto; left: auto; letter-spacing: normal; line-height: normal; list-style-image: none; list-style-position: outside; list-style-type: disc; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; margin-top: 0px; max-height: none; max-width: none; min-height: 0px; min-width: 0px; mix-blend-mode: normal; object-fit: fill; object-position: 50% 50%; offset-distance: 0px; offset-path: none; offset-rotate: auto 0deg; opacity: 1; orphans: 2; outline-color: rgb(0, 0, 0); outline-offset: 0px; outline-style: none; outline-width: 0px; overflow-anchor: auto; overflow-wrap: normal; overflow-x: visible; overflow-y: visible; padding-bottom: 1px; padding-left: 6px; padding-right: 6px; padding-top: 1px; pointer-events: auto; position: static; resize: none; right: auto; scroll-behavior: auto; speak: normal; table-layout: auto; tab-size: 8; text-align: center; text-align-last: auto; text-decoration: none solid rgb(0, 0, 0); text-decoration-line: none; text-decoration-style: solid; text-decoration-color: rgb(0, 0, 0); text-decoration-skip-ink: auto; text-underline-position: auto; text-indent: 0px; text-rendering: auto; text-shadow: none; text-size-adjust: auto; text-overflow: clip; text-transform: none; top: auto; touch-action: auto; transition-delay: 0s; transition-duration: 0s; transition-property: all; transition-timing-function: ease; unicode-bidi: normal; vertical-align: baseline; visibility: visible; white-space: pre; widows: 2; width: auto; will-change: auto; word-break: normal; word-spacing: 0px; z-index: auto; zoom: 1; -webkit-appearance: push-button; backface-visibility: visible; -webkit-border-horizontal-spacing: 0px; -webkit-border-image: none; -webkit-border-vertical-spacing: 0px; -webkit-box-align: stretch; -webkit-box-decoration-break: slice; -webkit-box-direction: normal; -webkit-box-flex: 0; -webkit-box-ordinal-group: 1; -webkit-box-orient: horizontal; -webkit-box-pack: start; -webkit-box-reflect: none; column-count: auto; column-gap: normal; column-rule-color: rgb(0, 0, 0); column-rule-style: none; column-rule-width: 0px; column-span: none; column-width: auto; backdrop-filter: none; align-content: normal; align-items: flex-start; align-self: auto; flex-basis: auto; flex-grow: 0; flex-shrink: 1; flex-direction: row; flex-wrap: nowrap; justify-content: normal; -webkit-font-smoothing: auto; grid-auto-columns: auto; grid-auto-flow: row; grid-auto-rows: auto; grid-column-end: auto; grid-column-start: auto; grid-template-areas: none; grid-template-columns: none; grid-template-rows: none; grid-row-end: auto; grid-row-start: auto; row-gap: normal; -webkit-highlight: none; hyphens: manual; -webkit-hyphenate-character: auto; -webkit-line-break: auto; -webkit-line-clamp: none; -webkit-locale: auto; -webkit-margin-before-collapse: collapse; -webkit-margin-after-collapse: collapse; -webkit-mask-box-image: none; -webkit-mask-box-image-outset: 0px; -webkit-mask-box-image-repeat: stretch; -webkit-mask-box-image-slice: 0 fill; -webkit-mask-box-image-source: none; -webkit-mask-box-image-width: auto; -webkit-mask-clip: border-box; -webkit-mask-composite: source-over; -webkit-mask-image: none; -webkit-mask-origin: border-box; -webkit-mask-position: 0% 0%; -webkit-mask-repeat: repeat; -webkit-mask-size: auto; order: 0; perspective: none; perspective-origin: 50% 50%; -webkit-print-color-adjust: economy; -webkit-rtl-ordering: logical; shape-outside: none; shape-image-threshold: 0; shape-margin: 0px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0.18); -webkit-text-combine: none; -webkit-text-decorations-in-effect: none; -webkit-text-emphasis-color: rgb(0, 0, 0); -webkit-text-emphasis-position: over right; -webkit-text-emphasis-style: none; -webkit-text-fill-color: rgb(0, 0, 0); -webkit-text-orientation: vertical-right; -webkit-text-security: none; -webkit-text-stroke-color: rgb(0, 0, 0); -webkit-text-stroke-width: 0px; transform: none; transform-origin: 50% 50%; transform-style: flat; -webkit-user-drag: auto; -webkit-user-modify: read-only; user-select: none; -webkit-writing-mode: horizontal-tb; -webkit-app-region: none; buffered-rendering: auto; clip-path: none; clip-rule: nonzero; mask: none; filter: none; flood-color: rgb(0, 0, 0); flood-opacity: 1; lighting-color: rgb(255, 255, 255); stop-color: rgb(0, 0, 0); stop-opacity: 1; color-interpolation: srgb; color-interpolation-filters: linearrgb; color-rendering: auto; fill: rgb(0, 0, 0); fill-opacity: 1; fill-rule: nonzero; marker-end: none; marker-mid: none; marker-start: none; mask-type: luminance; shape-rendering: auto; stroke: none; stroke-dasharray: none; stroke-dashoffset: 0px; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 4; stroke-opacity: 1; stroke-width: 1px; alignment-baseline: auto; baseline-shift: 0px; dominant-baseline: auto; text-anchor: start; writing-mode: horizontal-tb; vector-effect: none; paint-order: normal; d: none; cx: 0px; cy: 0px; x: 0px; y: 0px; r: 0px; rx: auto; ry: auto; caret-color: rgb(0, 0, 0); line-break: auto;';

// Teacher Variables
const teacherJohnSmith = 'John Smith: contact information<img class="teacherPic" src="johnSmith.jpg">'
const teacherJaneDoe = 'Jane Doe: contact information<img class="teacherPic" src="janeDoe.jpg">'
const teacherJohnDoe = 'John Doe: contact information<img class="teacherPic" src="johnDoe.jfif">'

// Teachers
// band
// high brass
const trumpetTeacherList = {
    mo: {
        springfield: `<ol><li>${teacherJohnSmith}</li><li>${teacherJaneDoe}</li><li>${teacherJohnDoe}</li></ol>`,
        nixa: `<ol><li>${teacherJohnSmith}</li><li>${teacherJaneDoe}</li><li>${teacherJohnDoe}</li></ol></ol>`,
    }
}
const frenchHornTeacherList = {
    mo: {
        springfield: `<ol><li>${teacherJohnSmith}</li></ol>`,
        nixa: `<ol><li>${teacherJohnSmith}</li></ol>`,
    }
}

// low brass
const tromboneTeacherList = {
    mo: {
        springfield: `<ol><li>${teacherJohnSmith}</li></ol>`,
        nixa: `<ol><li>${teacherJohnSmith}</li></ol>`,
    }
}
const baritoneTeacherList = {
    mo: {
        springfield: `<ol><li>${teacherJohnSmith}</li></ol>`,
        nixa: `<ol><li>${teacherJohnSmith}</li></ol>`,
    }
}
const tubaTeacherList = {
    mo: {
        springfield: `<ol><li>${teacherJohnSmith}</li></ol>`,
        nixa: `<ol><li>${teacherJohnSmith}</li></ol>`,
    }
}

// high woodwinds
const fluteTeacherList = {
    mo: {
        springfield: `<ol><li>${teacherJohnSmith}</li></ol>`,
        nixa: `<ol><li>${teacherJohnSmith}</li></ol>`,
    }
}
const clarinetTeacherList = {
    mo: {
        springfield: `<ol><li>${teacherJohnSmith}</li></ol>`,
        nixa: `<ol><li>${teacherJohnSmith}</li></ol>`,
    }
}
const oboeTeacherList = {
    mo: {
        springfield: `<ol><li>${teacherJohnSmith}</li></ol>`,
        nixa: `<ol><li>${teacherJohnSmith}</li></ol>`,
    }
}
const altoSaxTeacherList = {
    mo: {
        springfield: `<ol><li>${teacherJohnSmith}</li></ol>`,
        nixa: `<ol><li>${teacherJohnSmith}</li></ol>`,
    }
}
const tenorSaxTeacherList = {
    mo: {
        springfield: `<ol><li>${teacherJohnSmith}</li><li>${teacherJaneDoe}</li><li>${teacherJohnDoe}</li></ol>`,
        nixa: `<ol><li>${teacherJohnSmith}</li><li>${teacherJaneDoe}</li><li>${teacherJohnDoe}</li></ol></ol>`,
    }
}
        
// low woodwinds
const bariSaxTeacherList = {
    mo: {
        springfield: `<ol><li>${teacherJohnSmith}</li><li>${teacherJaneDoe}</li><li>${teacherJohnDoe}</li></ol>`,
        nixa: `<ol><li>${teacherJohnSmith}</li><li>${teacherJaneDoe}</li><li>${teacherJohnDoe}</li></ol></ol>`,
    }
}
const bassClarinetTeacherList = {
    mo: {
        springfield: `<ol><li>${teacherJohnSmith}</li><li>${teacherJaneDoe}</li><li>${teacherJohnDoe}</li></ol>`,
        nixa: `<ol><li>${teacherJohnSmith}</li><li>${teacherJaneDoe}</li><li>${teacherJohnDoe}</li></ol></ol>`,
    }
}
const bassoonTeacherList = {
    mo: {
        springfield: `<ol><li>${teacherJohnSmith}</li><li>${teacherJaneDoe}</li><li>${teacherJohnDoe}</li></ol>`,
        nixa: `<ol><li>${teacherJohnSmith}</li><li>${teacherJaneDoe}</li><li>${teacherJohnDoe}</li></ol></ol>`,
    }
}

// orchestra
const violinTeacherList = {
    mo: {
        springfield: `<ol><li>${teacherJohnSmith}</li><li>${teacherJaneDoe}</li><li>${teacherJohnDoe}</li></ol>`,
        nixa: `<ol><li>${teacherJohnSmith}</li><li>${teacherJaneDoe}</li><li>${teacherJohnDoe}</li></ol></ol>`,
    }
}
const violaTeacherList = {
    mo: {
        springfield: `<ol><li>${teacherJohnSmith}</li><li>${teacherJaneDoe}</li><li>${teacherJohnDoe}</li></ol>`,
        nixa: `<ol><li>${teacherJohnSmith}</li><li>${teacherJaneDoe}</li><li>${teacherJohnDoe}</li></ol></ol>`,
    }
}
const celloTeacherList = {
    mo: {
        springfield: `<ol><li>${teacherJohnSmith}</li><li>${teacherJaneDoe}</li><li>${teacherJohnDoe}</li></ol>`,
        nixa: `<ol><li>${teacherJohnSmith}</li><li>${teacherJaneDoe}</li><li>${teacherJohnDoe}</li></ol></ol>`,
    }
}
const stringBassTeacherList = {
    mo: {
        springfield: `<ol><li>${teacherJohnSmith}</li><li>${teacherJaneDoe}</li><li>${teacherJohnDoe}</li></ol>`,
        nixa: `<ol><li>${teacherJohnSmith}</li><li>${teacherJaneDoe}</li><li>${teacherJohnDoe}</li></ol></ol>`,
    }
}

// vocal
const sopranoTeacherList = {
    mo: {
        springfield: `<ol><li>${teacherJohnSmith}</li><li>${teacherJaneDoe}</li><li>${teacherJohnDoe}</li></ol>`,
        nixa: `<ol><li>${teacherJohnSmith}</li><li>${teacherJaneDoe}</li><li>${teacherJohnDoe}</li></ol></ol>`,
    }
}
const altoTeacherList = {
    mo: {
        springfield: `<ol><li>${teacherJohnSmith}</li><li>${teacherJaneDoe}</li><li>${teacherJohnDoe}</li></ol>`,
        nixa: `<ol><li>${teacherJohnSmith}</li><li>${teacherJaneDoe}</li><li>${teacherJohnDoe}</li></ol></ol>`,
    }
}
const tenorTeacherList = {
    mo: {
        springfield: `<ol><li>${teacherJohnSmith}</li><li>${teacherJaneDoe}</li><li>${teacherJohnDoe}</li></ol>`,
        nixa: `<ol><li>${teacherJohnSmith}</li><li>${teacherJaneDoe}</li><li>${teacherJohnDoe}</li></ol></ol>`,
    }
}
const bassTeacherList = {
    mo: {
        springfield: `<ol><li>${teacherJohnSmith}</li><li>${teacherJaneDoe}</li><li>${teacherJohnDoe}</li></ol>`,
        nixa: `<ol><li>${teacherJohnSmith}</li><li>${teacherJaneDoe}</li><li>${teacherJohnDoe}</li></ol></ol>`,
    }
}
    
// customize viewing style
function askForDevice() {
    if (confirm('Continue using PC or laptop viewing style?')) {
        document.getElemntsByTagName('input').style.cssText = defaultButtonCSS;
        CSS.setAttribute('href', 'PC.css');
        console.log('Viewing style set to PC/Laptop')
    } else if (confirm('Continue using tablet viewing style?')) {
        document.getElemntsByTagName('input').style.cssText = defaultButtonCSS;
        CSS.setAttribute('href', 'tablet.css');
        console.log('Viewing style set to tablet')
    } else if (confirm('Contiue using mobile viewing style?')) {
        document.getElemntsByTagName('input').style.cssText = defaultButtonCSS;
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
    changeText('<h1>Trumpet</h1><img src="trumpet.jpg"><br/><br/><input type="button" value="find teachers near me!" onclick="getTeachersTrumpet()"><input type="button" id="getSheetMusic" value="get playing exercises" onclick="getSheetMusicTrumpet()"><h1>French Horn</h1><img src="frenchHorn.png"><br/><br/><input type="button" value="find teachers near me!" onclick="getTeachersFrenchHorn()"><input type="button" id="getSheetMusic" value="get playing exercises" onclick="getSheetMusicFrenchHorn()">');
    clearActiveBtnBackground();
    document.getElementById('showHighBrassPageBtn').setAttribute('class', 'active');
    bandInstrumentsNavBar.style.display = 'inline';
    console.log('display high brass page');
}

function showLowBrassPage() {
    changeTitle('<h1>Low Brass Students</h1>');
    changeText('<h1>Trombone</h1><img src="trombone.jpg"><br/><br/><input type="button" value="find teachers near me!" onclick="getTeachersTrombone()"><input type="button" id="getSheetMusic" value="get playing exercises" onclick="getSheetMusicTrombone()"><h1>Baritone / Euphonium</h1><img src="baritone.jpg"><br/><br/><input type="button" value="find teachers near me!" onclick="getTeachersBaritone()"><input type="button" id="getSheetMusic" value="get playing exercises" onclick="getSheetMusicBaritone()"><h1>Tuba</h1><img src="tuba.png"><br/><br/><input type="button" value="find teachers near me!" onclick="getTeachersTuba()"><input type="button" id="getSheetMusic" value="get playing exercises" onclick="getSheetMusicTuba()">');
    clearActiveBtnBackground();
    document.getElementById('showLowBrassPageBtn').setAttribute('class', 'active');
    bandInstrumentsNavBar.style.display = 'inline';
    console.log('display low brass page');
}

function showHighReedsPage() {
    changeTitle('<h1>High Woodwind Students</h1>');
    changeText('<h1>Piccolo / Flute</h1><img src="flute.jpg"><br/><br/><input type="button" onclick="getTeachersFlute()" value="Find teachers near me!"><input type="button" id="getSheetMusic" value="get playing exercises" onclick="getSheetMusicFlute()"></p><h1>Clarinet</h1><img src="clarinet.jpg"><br/><br/><input type="button" onclick="getTeachersClarinet()" value="Find teachers near me!"><input type="button" id="getSheetMusic" value="get playing exercises" onclick="getSheetMusicClarinet()"><h1>Oboe</h1><img src="oboe.jpg"><br/><br/><input type="button" onclick="getTeachersOboe()" value="Find teachers near me!"><input type="button" id="getSheetMusic" value="get playing exercises" onclick="getSheetMusicOboe()"><h1>Alto Saxophone</h1><img src="altoSax.jpg"><br/><br/><input type="button" onclick="getTeachersAltoSax()" value="Find teachers near me!"><input type="button" id="getSheetMusic" value="get playing exercises" onclick="getSheetMusicAltoSax()"><h1>Tenor Saxophone</h1><img src="tenorSax.jfif"><br/><br/><input type="button" onclick="getTeachersTenorSax()" value="Find teachers near me!"><input type="button" id="getSheetMusic" value="get playing exercises" onclick="getSheetMusicTenorSax()">');
    clearActiveBtnBackground();
    document.getElementById('showHighReedsPageBtn').setAttribute('class', 'active');
    bandInstrumentsNavBar.style.display = 'inline';
    console.log('display high reeds page');
}

function showLowReedsPage() {
    changeTitle('<h1>Low Woodwind Students</h1>');
    changeText('<h1>Baritone Saxophone</h1><img src="bariSax.jpg"><br/><br/><input type="button" value="find teachers near me!" onclick="getTeachersBariSax()"><input type="button" id="getSheetMusic" value="get playing exercises" onclick="getSheetMusicBariSax()"><h1>Bass Clarinet</h1><img src="bassClarinet.jpg"><br/><br/><input type="button" value="find teachers near me!" onclick="getTeachersBassClarinet()"><input type="button" id="getSheetMusic" value="get playing exercises" onclick="getSheetMusicBassClarinet()"><h1>Bassoon</h1><img src="bassoon.jpg"><br/><br/><input type="button" value="find teachers near me!" onclick="getTeachersBassoon()"><input type="button" id="getSheetMusic" value="get playing exercises" onclick="getSheetMusicBassoon()">');
    clearActiveBtnBackground();
    document.getElementById('showLowReedsPageBtn').setAttribute('class', 'active');
    bandInstrumentsNavBar.style.display = 'inline';
    console.log('display low reeds page');
}

function showOrchestraPage() {
    changeTitle('<h1>Orchestra Students</h1>');
    clearActiveBtnBackground();
    changeText('<h1>Violin</h1><img src="violin.jpg"><br/><br/><input type="button" onclick="getTeachersViolin()" value="find a teacher near you!"><input type="button" id="getSheetMusic" value="get playing exercises" onclick="getSheetMusicViolin()"><h1>Viola</h1><img src="viola.webp"><br/><br/><input type="button" onclick="getTeachersViola()" value="find a teacher near you!"><input type="button" id="getSheetMusic" value="get playing exercises" onclick="getSheetMusicViola()"><h1>Cello</h1><img src="cello.jpg"><br/><br/><input type="button" onclick="getTeachersCello()" value="find a teacher near you!"><input type="button" id="getSheetMusic" value="get playing exercises" onclick="getSheetMusicCello()"><h1>String Bass</h1><img src="stringBass.jfif"><br/><br/><input type="button" onclick="getTeachersStringBass()" value="find a teacher near you!"><input type="button" id="getSheetMusic" value="get playing exercises" onclick="getSheetMusicStringBass()">');
    document.getElementById('showOrchestraPageBtn').setAttribute('class', 'active');
    bandInstrumentsNavBar.style.display = 'none';
    console.log('display orchestra page');
}

function showVocalPage() {
    changeTitle('<h1>Vocal Students</h1>');
    changeText('<h1>Soprano</h1><img src="soprano.jpg"><br/><br/><input type="button" onclick="getTeachersSoprano()" value="find a teacher near you!"><input type="button" id="getSheetMusic" value="get playing exercises" onclick="getSheetMusicSoprano()"><h1>Alto</h1><img src="alto.jfif"><br/><br/><input type="button" onclick="getTeachersAlto()" value="find a teacher near you!"><input type="button" id="getSheetMusic" value="get playing exercises" onclick="getSheetMusicAlto()"><h1>Tenor</h1><img src="tenor.jpg"><br/><br/><input type="button" onclick="getTeachersTenor()" value="find a teacher near you!"><input type="button" id="getSheetMusic" value="get playing exercises" onclick="getSheetMusicTenor()"><h1>Bass</h1><img src="bass.jpg"><br/><br/><input type="button" onclick="getTeachersBass()" value="find a teacher near you!"><input type="button" id="getSheetMusic" value="get playing exercises" onclick="getSheetMusicBass()">');
    clearActiveBtnBackground();
    document.getElementById('showVocalPageBtn').setAttribute('class', 'active');
    bandInstrumentsNavBar.style.display = 'none';
    console.log('display vocal page');
}

function showDataBaseOfTeachers() {
    changeTitle('<h1>All Teachers</h1>');
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

// get sheet music
// band
// high brass
function getSheetMusicTrumpet() {
    if (confirm('Select, "OK" if you want to display the trumpet music exercices page.')) {
        changeTitle('<h1>Trumpet: Musical Exercices</h1>');
        changeText('<h1>Technical Exercises</h1><h1>Lyrical Exercices</h1><h1>Long Tones</h1>');
        clearActiveBtnBackground();
    }
}
function getSheetMusicFrenchHorn() {
    if (confirm('Select, "OK" if you want to display the french horn music exercices page.')) {
        changeTitle('<h1>French Horn Music Exercices</h1>');
        changeText('<h1>Technical Exercises</h1><h1>Lyrical Exercices</h1><h1>Long Tones</h1>');
        clearActiveBtnBackground();
    }
}

// low brass
function getSheetMusicTrombone() {
    if (confirm('Select, "OK" if you want to display the trombone music exercices page.')) {
        changeTitle('<h1>Trombone: Musical Exercices</h1>');
        changeText('<h1>Technical Exercises</h1><h1>Lyrical Exercices</h1><h1>Long Tones</h1>');
        clearActiveBtnBackground();
    }
}
function getSheetMusicBaritone() {
    if (confirm('Select, "OK" if you want to display the baritone/euphonium music exercices page.')) {
        changeTitle('<h1>Baritone/Euphonium: Musical Exercices</h1>');
        changeText('<h1>Technical Exercises</h1><h1>Lyrical Exercices</h1><h1>Long Tones</h1>');
        clearActiveBtnBackground();
    }
}
function getSheetMusicTuba() {
    if (confirm('Select, "OK" if you want to display the tuba music exercices page.')) {
        changeTitle('<h1>Tuba: Musical Exercices</h1>');
        changeText('<h1>Technical Exercises</h1><h1>Lyrical Exercices</h1><h1>Long Tones</h1>');
        clearActiveBtnBackground();
    }
}

// high woodwinds
function getSheetMusicFlute() {
    if (confirm('Select, "OK" if you want to display the flute music exercices page.')) {
        changeTitle('<h1>Flute: Musical Exercices</h1>');
        changeText('<h1>Technical Exercises</h1><h1>Lyrical Exercices</h1><h1>Long Tones</h1>');
        clearActiveBtnBackground();
    }
}
function getSheetMusicClarinet() {
    if (confirm('Select, "OK" if you want to display the clarinet music exercices page.')) {
        changeTitle('<h1>Clarinet: Musical Exercices</h1>');
        changeText('<h1>Technical Exercises</h1><h1>Lyrical Exercices</h1><h1>Long Tones</h1>');
        clearActiveBtnBackground();
    }
}
function getSheetMusicOboe() {
    if (confirm('Select, "OK" if you want to display the oboe music exercices page.')) {
        changeTitle('<h1>Oboe: Musical Exercices</h1>');
        changeText('<h1>Technical Exercises</h1><h1>Lyrical Exercices</h1><h1>Long Tones</h1>');
        clearActiveBtnBackground();
    }
}
function getSheetMusicAltoSax() {
    if (confirm('Select, "OK" if you want to display the alto saxophone music exercices page.')) {
        changeTitle('<h1>Alto Saxophone: Musical Exercices</h1>');
        changeText('<h1>Technical Exercises</h1><h1>Lyrical Exercices</h1><h1>Long Tones</h1>');
        clearActiveBtnBackground();
    }
}
function getSheetMusicTenorSax() {
    if (confirm('Select, "OK" if you want to display the tenor saxophone music exercices page.')) {
        changeTitle('<h1>Tenor Saxophone: Musical Exercices</h1>');
        changeText('<h1>Technical Exercises</h1><h1>Lyrical Exercices</h1><h1>Long Tones</h1>');
        clearActiveBtnBackground();
    }
}

// low woodwinds
function getSheetMusicBariSax() {
    if (confirm('Select, "OK" if you want to display the baritone saxophone music exercices page.')) {
        changeTitle('<h1>Baritone Saxophone: Musical Exercices</h1>');
        changeText('<h1>Technical Exercises</h1><h1>Lyrical Exercices</h1><h1>Long Tones</h1>');
        clearActiveBtnBackground();
    }
}
function getSheetMusicBassClarinet() {
    if (confirm('Select, "OK" if you want to display the bass clarinet music exercices page.')) {
        changeTitle('<h1>Bass Clarinet: Musical Exercices</h1>');
        changeText('<h1>Technical Exercises</h1><h1>Lyrical Exercices</h1><h1>Long Tones</h1>');
        clearActiveBtnBackground();
    }
}
function getSheetMusicBassoon() {
    if (confirm('Select, "OK" if you want to display the bassoon music exercices page.')) {
        changeTitle('<h1>Bassoon: Musical Exercices</h1>');
        changeText('<h1>Technical Exercises</h1><h1>Lyrical Exercices</h1><h1>Long Tones</h1>');
        clearActiveBtnBackground();
    }
}

// orchestra
function getSheetMusicViolin() {
    if (confirm('Select, "OK" if you want to display the violin music exercices page.')) {
        changeTitle('<h1>Violin: Musical Exercices</h1>');
        changeText('<h1>Technical Exercises</h1><h1>Lyrical Exercices</h1><h1>Long Tones</h1>');
        clearActiveBtnBackground();
    }
}
function getSheetMusicViola() {
    if (confirm('Select, "OK" if you want to display the viola music exercices page.')) {
        changeTitle('<h1>Viola: Musical Exercices</h1>');
        changeText('<h1>Technical Exercises</h1><h1>Lyrical Exercices</h1><h1>Long Tones</h1>');
        clearActiveBtnBackground();
    }
}
function getSheetMusicCello() {
    if (confirm('Select, "OK" if you want to display the cello music exercices page.')) {
        changeTitle('<h1>Cello: Musical Exercices</h1>');
        changeText('<h1>Technical Exercises</h1><h1>Lyrical Exercices</h1><h1>Long Tones</h1>');
        clearActiveBtnBackground();
    }
}
function getSheetMusicStringBass() {
    if (confirm('Select, "OK" if you want to display the string bass music exercices page.')) {
        changeTitle('<h1>String Bass: Musical Exercices</h1>');
        changeText('<h1>Technical Exercises</h1><h1>Lyrical Exercices</h1><h1>Long Tones</h1>');
        clearActiveBtnBackground();
    }
}

// vocal
function getSheetMusicSoprano() {
    if (confirm('Select, "OK" if you want to display the soprano music exercices page.')) {
        changeTitle('<h1>Soprano: Musical Exercices</h1>');
        changeText('<h1>Technical Exercises</h1><h1>Lyrical Exercices</h1><h1>Long Tones</h1>');
        clearActiveBtnBackground();
    }
}
function getSheetMusicAlto() {
    if (confirm('Select, "OK" if you want to display the alto music exercices page.')) {
        changeTitle('<h1>Alto: Musical Exercices</h1>');
        changeText('<h1>Technical Exercises</h1><h1>Lyrical Exercices</h1><h1>Long Tones</h1>');
        clearActiveBtnBackground();
    }
}
function getSheetMusicTenor() {
    if (confirm('Select, "OK" if you want to display the tenor music exercices page.')) {
        changeTitle('<h1>Tenor: Musical Exercices</h1>');
        changeText('<h1>Technical Exercises</h1><h1>Lyrical Exercices</h1><h1>Long Tones</h1>');
        clearActiveBtnBackground();
    }
}
function getSheetMusicBass() {
    if (confirm('Select, "OK" if you want to display the bass music exercices page.')) {
        changeTitle('<h1>Bass: Musical Exercices</h1>');
        changeText('<h1>Technical Exercises</h1><h1>Lyrical Exercices</h1><h1>Long Tones</h1>');
        clearActiveBtnBackground();
    }
}

askForDevice();
goToTeacherOrStudentPage()
