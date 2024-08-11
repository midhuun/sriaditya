function navigateToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// To Smoothly slide to Plant-Growth Promoter Section
function toggleContentPromoter() {
var contentDiv = document.getElementById("plant-services");

contentDiv.style.display = "flex";
contentDiv.scrollIntoView({ behavior: "smooth" });

}


// To Smoothly slide to Crop Protection Section

function toggleContentProtection() {
    var contentDiv = document.getElementById("crop-services");
    contentDiv.style.display = "flex";
    contentDiv.scrollIntoView({ behavior: "smooth" });
}
// To Smoothly slide to Nano-Tech Inputs Section
    
function toggleContentNanoTech() {
    var contentDiv = document.getElementById("nano-services");
    
    contentDiv.style.display = "flex";
    contentDiv.scrollIntoView({ behavior: "smooth" });
  }
// To Smoothly slide to Nano-Tech Inputs Section
function toggleContentGarden() {
    var contentDiv = document.getElementById("garden-services");
    contentDiv.style.display = "flex";
    contentDiv.scrollIntoView({ behavior: "smooth" });
    }  

 function redirectToURL(url) {
        window.location.href = url;
      }
// To make a Call
function makeCall() {
window.location.href = "tel:9092812121";
}
 function goBack() {
    window.history.back();
  }
  function download() {
    const a = document.createElement('a');
    const filePath = './brochure-tamil.pdf';
    a.href = filePath;
    a.download = filePath; // Use the correct file name
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  