/* ================================================  */
/* =================== TAB 1 JS ===================  */
/* ================================================  */

// Home Cards Function //
const connectionTypeCards = jsonObject.connectionType_radio_Cards;
function addConnectionTypeCards() {
  let $cardRow = $("#cards-row");
  for (var i = 0; i < connectionTypeCards.length; i++) {
    let tag = $('<div class="mx-lg-5 mx-md-3 mx-sm-2  mx-4 mt-5"></div>');
    tag.html(`<input type="radio" onchange="onRadioChange(event)" hidden id=${connectionTypeCards[i].id} name="connectionType"  value="${connectionTypeCards[i].val}">
        <label for=${connectionTypeCards[i].id}>
          <div class="tab1-cards h-100 text-break text-center  position-relative">
             <span id=${connectionTypeCards[i].id} class="card-check-icon"><i class="fa-sharp fa-solid fa-circle-check"></i></span>
                <div class="card-title pt-1 mt-3"><p class="px-3">${connectionTypeCards[i].text}</p></div>
                <div class="${connectionTypeCards[i].cardClass}"><img src="${connectionTypeCards[i].image}" alt="" class="img-fluid card-icons"></div>
            </div>
         </label>`);
    $cardRow.append(tag);
  }
}

/* ================================================  */
/* =================== TAB 2 JS ===================  */
/* ================================================  */
// Sections functions Start
function propertyTypeHomeSection() {
  resetPropertyTypeRadioButtons();
  let x = $("#home-form");
  let html = `<div id="group-1" class="my-sm-5 my-2"><div class="card-title pb-0 mb-0" id=""><p>Already a customer:</p></div>
                <div id="home-form-group1" class="d-sm-flex neg"><!-- Data from json  --></div></div>
                <div id="group-2" class="my-sm-5 my-2"><div class="card-title pb-0 mb-0" id=""><p>Interested in a second power supply?</p></div>
                <div id="home-form-group2" class="d-sm-flex neg"> <!-- Data from json  --></div></div>
                <div id="group-3" class="my-sm-5 my-2"><div class="card-title pb-0 mb-0" id=""><p>I'm interested in:</p></div>
                <div id="home-form-group3" class="d-sm-flex neg"><!-- Data from json  --></div></div>
                <div id="group-4" class="my-sm-5 my-2"><div class="card-title pb-0 mb-0" id=""><p>Do you have a Day or Night counter?</p>
                </div><div id="home-form-group4" class="d-sm-flex neg"><!-- Data from json  --></div></div>`;
  x.html(html);
  propertyTypeHomeRadioGroup1();
  propertyTypeHomeRadioGroup2();
  propertyTypeHomeRadioGroup3();
  propertyTypeHomeRadioGroup4();
}

function propertyTypeBusinessSection() {
  resetPropertyTypeRadioButtons();
  let x = $("#business-form");
  var html = ` <div id="group-5" class="my-5"><div class="card-title pb-0 mb" id="">
                 <p>The Agreed Power of my provision is:</p></div><div id="business-form-group1" class="d-sm-flex neg"></div></div>`;
  x.html(html);
  propertyTypeBusinessRadioGroup();
}

function propertyTypeApartmentSection() {
  resetPropertyTypeRadioButtons();
  let x = $("#apartment-form");
  var html = `<div id="group-6" class="my-5"><div class="card-title pb-0 mb" id=""><p>Already a customer:</p></div><div id="apartment-form-group1" class="d-sm-flex neg"></div></div>
                <div id="group-7" class="my-5"><div class="card-title pb-0 mb" id=""><p>I'm interested in:</p></div><div id="apartment-form-group2" class="d-sm-flex neg"></div></div>`;
  x.html(html);
  propertyTypeApartmentRadioGroup1();
  propertyTypeApartmentRadioGroup2();
}
// Sections functions End

let propertyType = jsonObject.propertyTypeCards;

function propertyTypeCards() {
  let cardRow = $("#tab2-cards-row");
  for (var i = 0; i < propertyType.length; i++) {
    let tag = $('<div class="mx-3 mt-0"></div>');
    tag.html(`<input type="radio" onchange="onRadioChange(event)" value="${propertyType[i].val}" hidden id=${propertyType[i].id} name="propertyType">
                <label for=${propertyType[i].id}>
                    <div class="tab2-cards mb-4 h-100 text-break text-center  position-relative">
                        <span class="card-check-icon"><i class="fa-sharp fa-solid fa-circle-check"></i></span>
                        <div class="card-img pt-3 pb-0">
                            <img src="${propertyType[i].image}" class="img-fluid card-icons">
                        </div>
                        <div class="tab2-card-title pt-2 mt-0">
                            <p>${propertyType[i].text}</p>
                        </div>
                    </div>
                </label>`);
    cardRow.append(tag);
  }
}

// Tab 2 radio groups
const propertyTypeHome1 = jsonObject.homeFormGroup1;
const propertyTypeHome2 = jsonObject.homeFormGroup2;
const propertyTypeHome3 = jsonObject.homeFormGroup3;
const propertyTypeHome4 = jsonObject.homeFormGroup4;

const propertyTypeBusiness = jsonObject.businessFormGroup1;

const propertyTypeApartment1 = jsonObject.apartmentFormGroup1;
const propertyTypeApartment2 = jsonObject.apartmentFormGroup2;

// ********** Home section functions => These are four functions ************ //
function propertyTypeHomeRadioGroup1() {
  let row = $("#home-form-group1");
  for (var i = 0; i < propertyTypeHome1.length; i++) {
    let tag = $('<div class="mx-1"></div>');
    tag.html(`<input  type="radio" onchange="onRadioChange(event)" hidden name="alreadyACustomer" value="${propertyTypeHome1[i].val}" id="${propertyTypeHome1[i].id}">
                    <label for="${propertyTypeHome1[i].id}"><p class="btn tab2-radio-form-btn">${propertyTypeHome1[i].val}</p></label>`);
    row.append(tag);
  }
}
function propertyTypeHomeRadioGroup2() {
  let row = $("#home-form-group2");
  for (var i = 0; i < propertyTypeHome2.length; i++) {
    let tag = $('<div class="mx-1"></div>');
    tag.html(`<input  type="radio" onchange="onRadioChange(event)" hidden name="interestedInASecondPowerSupply" value="${propertyTypeHome2[i].val}" id="${propertyTypeHome2[i].id}">
                  <label for="${propertyTypeHome2[i].id}"><p class="btn tab2-radio-form-btn">${propertyTypeHome2[i].val}</p></label>`);
    row.append(tag);
  }
}
function propertyTypeHomeRadioGroup3() {
  let row = $("#home-form-group3");
  for (var i = 0; i < propertyTypeHome1.length; i++) {
    let tag = $('<div class="mx-1"></div>');
    tag.html(`<input  type="radio" onchange="onRadioChange(event)" hidden name="iAmInterestedIn" value="${propertyTypeHome3[i].val}" id="${propertyTypeHome3[i].id}">
                  <label for="${propertyTypeHome3[i].id}"><p class="btn tab2-radio-form-btn">${propertyTypeHome3[i].val}</p></label>`);
    row.append(tag);
  }
}
function propertyTypeHomeRadioGroup4() {
  var row = $("#home-form-group4");
  for (var i = 0; i < propertyTypeHome1.length; i++) {
    let tag = $('<div class="mx-1"></div>');
    tag.html(`<input  type="radio" onchange="onRadioChange(event)" hidden name="doYouHaveADayOrNightCounter" value="${propertyTypeHome4[i].val}" id="${propertyTypeHome4[i].id}">
                  <label for="${propertyTypeHome4[i].id}"><p class="btn tab2-radio-form-btn">${propertyTypeHome4[i].val}</p></label>`);
    row.append(tag);
  }
}

// ************ business section function ************ //
function propertyTypeBusinessRadioGroup() {
  var row = $("#business-form-group1");
  for (var i = 0; i < propertyTypeBusiness.length; i++) {
    let tag = $('<div class="mx-1"></div>');
    tag.html(`<input  type="radio" onchange="onRadioChange(event)" hidden name="theAgreedPowerOfMyProvisionIs" value="${propertyTypeBusiness[i].val}" id="${propertyTypeBusiness[i].id}">
                  <label for="${propertyTypeBusiness[i].id}"><p class="btn tab2-radio-form-btn">${propertyTypeBusiness[i].val}</p></label>`);
    row.append(tag);
  }
}

// ************ Apartment section functions => These are two functions ************ //
function propertyTypeApartmentRadioGroup1() {
  var row = $("#apartment-form-group1");
  for (var i = 0; i < propertyTypeApartment1.length; i++) {
    let tag = $('<div class="mx-1"></div>');
    tag.html(`<input  type="radio" onchange="onRadioChange(event)" hidden name="alreadyACustomer" value="${propertyTypeApartment1[i].val}" id="${propertyTypeApartment1[i].id}">
                  <label for="${propertyTypeApartment1[i].id}"><p class="btn tab2-radio-form-btn">${propertyTypeApartment1[i].val}</p></label>`);
    row.append(tag);
  }
}
function propertyTypeApartmentRadioGroup2() {
  var row = $("#apartment-form-group2");
  for (var i = 0; i < propertyTypeApartment2.length; i++) {
    let tag = $('<div class="mx-1"></div>');
    tag.html(`<input  type="radio" onchange="onRadioChange(event)" hidden name="iAmInterestedIn" value="${propertyTypeApartment2[i].val}" id="${propertyTypeApartment2[i].id}">
                  <label for="${propertyTypeApartment2[i].id}"><p class="btn tab2-radio-form-btn">${propertyTypeApartment2[i].val}</p></label>`);
    row.append(tag);
  }
}

// Clear existing radio form if user tab  anothre card
function resetPropertyTypeRadioButtons() {
  propertyTypeHomeRadioSection.html(" ");
  propertyTypeBuisnessRadioSection.html(" ");
  propertyTypeApartmentRadioSection.html(" ");
}
var propertyTypeHomeRadioSection = $("#home-form");
var propertyTypeBuisnessRadioSection = $("#business-form");
var propertyTypeApartmentRadioSection = $("#apartment-form");

/* ================================================  */
/* =================== TAB 3 JS ===================  */
/* ================================================  */
const carousel = jsonObject.carouselCards;

// *******Daynamic Carousel Cards function********** //
function carouselCardsFunction() {
  var cardRow1 = $("#carousel-row1");
  var cardRow2 = $("#carousel-row2");
  for (var i = 0; i < carousel.length; i++) {
    let tag = $(
      '<div class="col-lg-4  col-md-6 col-sm-12 col-box mb-3"></div>'
    );
    tag.html(`
             <div class="card card-box">
                <img class="card-img img-fluid" src="${carousel[i].image}">
                  <div class="card-body px-3">
                      <p class="tab3-card-title text-nowrap">Volton Unique Flexi Plus</p>
                      <p class="tab3-card-text pt-0">Secure the lowest kilowatt-hour priceon energy makret!</p>
                      <input hidden type="radio" onchange="onRadioChange(event)" name="energyPackage" value="${carousel[i].val}" id="${carousel[i].id}">
                          <label for="${carousel[i].id}">
                             <p class="text-center btn btn-block  tab3-card-btn mt-3" id="get_btn"> Get it </p>
                          </label>
                      <div class="card-links text-center">
                          <p class="p-0 my-2"><a class="links-text">Learn more <i class="fa fa-duotone fa-share-from-square"></i></a></p>
                          <p class="p-0 my-0"><a id="special-link" class="links-text">Special conditions <i class="fa-solid fa-list"></i></a>
                          </p>
                      </div>
                  </div>
             </div>
          `);
    if (i < 3) {
      cardRow1.append(tag);
    } else {
      cardRow2.append(tag);
    }
  }
}

/* ================================================  */
/* =================== TAB 5 JS ===================  */
/* ================================================  */
const applicationCard = jsonObject.tab5Cards;
const content = jsonObject.tab5Content;

// **** Applicaton Radion Cards Function **** //
function onlineApplicationCards() {
  let cardRow = $("#tab5-cards");
  for (var i = 0; i < applicationCard.length; i++) {
    var tag = $('<div class="mx-2 mt-2"></div>');
    if (i < 2) {
      tag.html(`
                <input type="radio" onchange="onRadioChange(event)" onclick="toggleOnlineApplicationCard(${
                  i + 1
                })" hidden value="${applicationCard[i].val}"  id="${
        applicationCard[i].id
      }" name="applicationFor">
                <label for="${applicationCard[i].id}">
                    <div id="tab5-c${[
                      i + 1,
                    ]}" class="tab-5-cards py-2 px-2  text-break text-center">
                        <div class="pt-2 mt-0">
                            <p class="card-text-h my-0 py-0 font-weight-bold" id="${
                              applicationCard[i].textId
                            }">${applicationCard[i].val}</p>
                            <p class="card-text-p my-0 py-0">${
                              applicationCard[i].subText
                            }</p>
                        </div>
                    </div>
                </label>`);
    } else if (i >= 2) {
      tag.html(`
                <input type="radio" onchange="onRadioChange(event)" onclick="toggleOnlineApplicationCard(${
                  i + 1
                })" hidden value="${applicationCard[i].val}"  id="${
        applicationCard[i].id
      }" name="applicationFor">
                <label for="${applicationCard[i].id}">
                    <div id="tab5-c${[
                      i + 1,
                    ]}" class="tab-5-cards py-2 px-2 align-items-end h-75 text-break text-center">
                        <div class="pt-2 mt-0">
                            <p class="card-text-h my-0 py-0 font-weight-bold" id="${
                              applicationCard[i].textId
                            }">${applicationCard[i].val}</p>
                        </div>
                    </div>
                </label>`);
    }
    cardRow.append(tag);
  }
}
// *******Adding terms Function********** //
function applicationTerms() {
  let contentBox = $("#terms");
  for (var i = 0; i < content.length; i++) {
    let tag = $(`<div class="" id='content-${i + 1}'></div>`);
    tag.html(`<div>${content[i].item}</div>`);
    contentBox.append(tag);
  }
}
// *******Toggle content box function********** //
var onlineApplicationCard;
function toggleOnlineApplicationCard(n) {
  applicationTerms();
  let content = $("#content-" + n);
  let term = $("#terms");
  term.html(content.html());
  onlineApplicationCard = $("#tab5-c" + n);
}

/* ================================================  */
/* ======== TABS NAVIGATION AND VALIDATION  =======  */
/* ================================================  */
var currentTab = 0;
// Display the current tab
function toggleTabsFunction(n) {
  navChange();
  let tabs = $(".tab");
  $(tabs[n]).show();
  if (n == 0) {
    $(".btn_left_col").hide();
    $("#stepperSection").hide();
    $(".btn_right_col").removeClass("col-sm-6").addClass("btnNextSaperate");
    // $(".btn_right_col").addClass("btnNextSaperate");
  } else {
    $(".btn_left_col").show();
    $(".btn_right_col").addClass("col-sm-6").removeClass("btnNextSaperate");
    // $(".btn_right_col").removeClass("btnNextSaperate");
    $("#stepperSection").addClass("stepperBorder").show();
    // $("#stepperSection").show();
  }

  if (n == tabs.length - 1) {
    $("#nextBtn , #prevBtn").hide();
    $("#stepperSection").hide();
    console.log(formDataCollection);
  }
  fixStepIndicator(n);
}
toggleTabsFunction(currentTab);

var radios;
var textFields;
var select;
var tab;

// Navigation between tabs
function nextPrev(n) {
  tab = $(".tab");
  if (n < 0) {
    $(tab[currentTab]).hide();
    currentTab = currentTab + n;
    toggleTabsFunction(currentTab);
  } else {
    radios = tab[currentTab].querySelectorAll('input[type="radio"]');
    textFields = tab[currentTab].querySelectorAll('input[type="text"]');
    select = tab[currentTab].querySelectorAll("select");
    var groups = {};
    for (var i = 0; i < radios.length; ++i) {
      if (!(radios[i].name in groups)) {
        groups[radios[i].name] = 0;
      } else {
        groups[radios[i].name] += 1;
      }
    }

    formValidation();
    if (valid) {
      $(tab[currentTab]).hide();
      $(".step")[currentTab].className += " finish";
      currentTab = currentTab + n;
      toggleTabsFunction(currentTab);
    }
  }
}
let valid;
function formValidation() {
  valid = true;
  $(radios).each(function () {
    var groupName = $(this).attr("name");
    var val = $("input:radio[name=" + groupName + "]:checked").val();
    if (val === undefined) {
      $(this).next().children().addClass("invalid");
      valid = false;
      // return valid;
      // return;
    } else if (val != undefined) {
      $(this).next().children().removeClass("invalid");
      valid = true;
      // return valid;
      // return;
    }
  });

  $(textFields).each(function () {
    let name = this.name;
    let txt = $(this).val();
    if (txt != "") {
      let textField = {
        value: txt,
      };
      formDataCollection[name] = "€ " + textField.value;
      valid = true;
      // return valid;
      return;
    } else if (txt == "") {
      $(this).addClass("text_invalid");
      valid = false;
      // return valid;
      return;
    }
  });

  $(select).each(function () {
    let selectedOption = $(this).find(":selected").val();
    let id = this.id;
    let options = {
      option: selectedOption,
    };
    formDataCollection[id] = options.option;
  });
  return valid;
}

// Changing in navbar Text and hide/show Navbar subtitle //
function navChange() {
  let title = $("#nav-title");
  let subTitle = $("#nav-subtitle");
  if (currentTab >= 1) {
    title.text("Online Application");
    subTitle.hide();
  } else {
    title.text("Welcome to the Online Application");
    subTitle.show();
  }
}

// ************ Stepper function ************ //
function fixStepIndicator(n) {
  let i,
    x = $(".step");
  for (i = 0; i < x.length; i++) {
    $(x[i]).removeClass("active");
  }
  $(x[n]).addClass(" active");
}

// ************ Collect from Data ************ //
let formDataCollection = {};
function onRadioChange(e) {
  formValidation();

  let formdata = {
    inputType: "radio",
    groupName: e.target.name,
    value: e.target.value,
  };
  formDataCollection[formdata.groupName] = formdata.value;
}

$(document).ready(function () {
  addConnectionTypeCards();
  // Enable disabled Next button from home tab
  var $radioButtons = $("input[type=radio]");
  $radioButtons.click(function () {
    $(this).toggleClass(this.checked);
    if (this.checked == true && this.name == "connectionType") {
      $("#nextBtn").attr("disabled", false);
    }
  });
  // Tab 2
  propertyTypeCards();
  propertyTypeHomeSection();

  var $radioButtons = $('input[type="radio"]');
  $radioButtons.click(function () {
    $(this).toggleClass(this.checked);
    let id = this.id;
    function tab2RadioSectionsToggle() {
      if (id === "property_card1") {
        propertyTypeHomeSection();
        propertyTypeHomeRadioSection.show();
        propertyTypeBuisnessRadioSection.hide();
        propertyTypeApartmentRadioSection.hide();
      } else if (id === "property_card2") {
        propertyTypeBusinessSection();
        propertyTypeHomeRadioSection.hide();
        propertyTypeBuisnessRadioSection.show();
        propertyTypeApartmentRadioSection.hide();
      } else if (id === "property_card3") {
        propertyTypeApartmentSection();
        propertyTypeHomeRadioSection.hide();
        propertyTypeBuisnessRadioSection.hide();
        propertyTypeApartmentRadioSection.show();
      }
    }
    tab2RadioSectionsToggle();
  });
  // Tab 3
  carouselCardsFunction();
  // Tab 5
  onlineApplicationCards();
  applicationTerms();
  // *******Add and remove "tab-5-card-checked" class from TAB 5 radio cards********** //
  var $radioButtons = $("input:radio[name=applicationFor]");
  $radioButtons.click(function () {
    function applicationCardStyle() {
      $(".tab-5-cards").each(function () {
        $(this).removeClass("tab-5-card-checked");
      });
      onlineApplicationCard.addClass("tab-5-card-checked");
    }
    applicationCardStyle();
  });
});
