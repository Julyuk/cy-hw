/// <reference types="Cypress"/>
export class Homepage {
  visit() {
    cy.visit("http://www.webdriveruniversity.com/Page-Object-Model/index.html");
  }
  getPOHeader() {
    return cy.get(".navbar-header");
  }
  getHomeLink() {
    return cy.contains("Home").should("have.text", "Home");
  }
  getOurProductsLink() {
    return cy.contains("Our Products").should("have.text", "Our Products");
  }
  getContactUsLink() {
    return cy.contains("Contact Us").should("have.text", "Contact Us");
  }
  getLeftArrow() {
    return cy.get(".glyphicon-chevron-left");
  }
  getRightArrow() {
    return cy.get(".glyphicon-chevron-right");
  }
  getSlide1() {
    return cy.get(".carousel-inner").find("img").eq(0);
  }
  getSlide2() {
    return cy.get(".carousel-inner").find("img").eq(1);
  }
  getSlide3() {
    return cy.get(".carousel-inner").find("img").eq(2);
  }

  getWhoAreWeHead() {
    return cy.contains("Who Are We?").should("have.text", "Who Are We?");
  }

  getWhoAreWeText() {
    return cy
      .contains(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit sapien, tempus sit amet hendrerit volutpat, euismod vitae risus. Etiam consequat, sem et vulputate dapibus, diam enim tristique est, vitae porta eros mauris ut orci. Praesent sed velit odio. Ut massa arcu, suscipit viverra molestie at, aliquet a metus. Nullam sit amet tellus dui, ut tincidunt justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      )
      .should(
        "have.text",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit sapien, tempus sit amet hendrerit volutpat, euismod vitae risus. Etiam consequat, sem et vulputate dapibus, diam enim tristique est, vitae porta eros mauris ut orci. Praesent sed velit odio. Ut massa arcu, suscipit viverra molestie at, aliquet a metus. Nullam sit amet tellus dui, ut tincidunt justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      );
  }
  getFindOutMoreButton() {
    return cy.get("button#button-find-out-more");
  }

  getWhyChooseUsHead() {
    return cy.contains("Why Choose Us?").should("have.text", "Why Choose Us?");
  }

  getWhyChooseUsText() {
    return cy
      .contains(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit sapien, tempus sit amet hendrerit volutpat, euismod vitae risus. Etiam consequat, sem et vulputate dapibus, diam enim tristique est, vitae porta eros mauris ut orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit sapien, tempus sit amet hendrerit volutpat, euismod vitae risus. Etiam consequat, sem et vulputate dapibus, diam enim tristique est, vitae porta eros mauris ut orci."
      )
      .should(
        "have.text",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit sapien, tempus sit amet hendrerit volutpat, euismod vitae risus. Etiam consequat, sem et vulputate dapibus, diam enim tristique est, vitae porta eros mauris ut orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit sapien, tempus sit amet hendrerit volutpat, euismod vitae risus. Etiam consequat, sem et vulputate dapibus, diam enim tristique est, vitae porta eros mauris ut orci."
      );
  }

  getGreatServiceHead() {
    return cy.contains("GREAT SERVICE!").should("have.text", "GREAT SERVICE!");
  }

  getGreatServiceText() {
    return cy
      .contains(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit sapien, tempus sit amet hendrerit volutpat, euismod vitae risus. Etiam consequat, sem et vulputate dapibus, diam enim tristique est, vitae porta eros mauris ut orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit sapien, tempus sit amet hendrerit volutpat, euismod vitae risus. Etiam consequat, sem et vulputate dapibus, diam enim tristique est, vitae porta eros mauris ut orci."
      )
      .should(
        "have.text",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit sapien, tempus sit amet hendrerit volutpat, euismod vitae risus. Etiam consequat, sem et vulputate dapibus, diam enim tristique est, vitae porta eros mauris ut orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit sapien, tempus sit amet hendrerit volutpat, euismod vitae risus. Etiam consequat, sem et vulputate dapibus, diam enim tristique est, vitae porta eros mauris ut orci."
      );
  }

  getStars() {
    // Assuming the stars are contained within a parent element with class below
   return  cy.get("div.div-star")
      .find( "span.glyphicon.glyphicon-star")  // Find all the star elements within the 'great-service' section
      .should("have.length", 10);  // Assert that the count of stars is 10
  }

  getExServiceHead() {
    return cy
      .contains("Excellent Customer Service!")
      .should("have.text", "Excellent Customer Service!");
  }

  getExServiceText() {
    return cy
      .contains(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit sapien, tempus sit amet hendrerit volutpat, euismod vitae risus. Etiam consequat, sem et vulputate dapibus, diam enim tristique est, vitae porta eros mauris ut orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit sapien, tempus sit amet hendrerit volutpat, euismod vitae risus. Etiam consequat, sem et vulputate dapibus, diam enim tristique est, vitae porta eros mauris ut orci."
      )
      .should(
        "have.text",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit sapien, tempus sit amet hendrerit volutpat, euismod vitae risus. Etiam consequat, sem et vulputate dapibus, diam enim tristique est, vitae porta eros mauris ut orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit sapien, tempus sit amet hendrerit volutpat, euismod vitae risus. Etiam consequat, sem et vulputate dapibus, diam enim tristique est, vitae porta eros mauris ut orci."
      );
  }
  getMessageHead() {
    return cy.get("h4.modal-title");
  }
  getMessageText() {
    return cy
      .contains(
        "Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras..."
      )
      .should(
        "have.text",
        "Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras..."
      );
  }
  getMessageCloseButton() {
    return cy.contains("button.btn.btn-default", "Close");
  }
  getMessageXButton() {
    return cy.get("button.close");
  }
  getMessageFindOutMoreButton() {
    return cy.contains("button.btn.btn-default", "Find Out More");
  }
  getMyCoursesText() {
    return cy
      .contains("My Courses & Promo Codes")
      .should("have.text", "My Courses & Promo Codes");
  }
}
