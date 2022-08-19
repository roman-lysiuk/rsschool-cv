const iconPopupContacts = document.querySelector(".popup-contact");
const popupContacts = document.querySelector(".section-contacts");
const navLinkContacts = document.querySelector(".nav-link_contacts");
const contactsCloseIcons = document.querySelector(".section-contacts__close");
iconPopupContacts.addEventListener("click", showPopupContacts);
navLinkContacts.addEventListener("click", showPopupContacts);
contactsCloseIcons.addEventListener("click", showPopupContacts);

function showPopupContacts() {
  iconPopupContacts.classList.toggle("active");
  popupContacts.classList.toggle("active");
}
