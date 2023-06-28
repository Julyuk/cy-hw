//enter all long texts and reuse links to them

export const texts = {
    productsAppearingMessage: "Please Note: All orders must be over the value of £50, adding additional coupon codes to the basket are excluded from this offer. To receive 30% off please add the following code to the basket: NEWCUSTOMER773322 .",
    whoAreWeText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit sapien, tempus sit amet hendrerit volutpat, euismod vitae risus. Etiam consequat, sem et vulputate dapibus, diam enim tristique est, vitae porta eros mauris ut orci. Praesent sed velit odio. Ut massa arcu, suscipit viverra molestie at, aliquet a metus. Nullam sit amet tellus dui, ut tincidunt justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    whyChooseUsText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit sapien, tempus sit amet hendrerit volutpat, euismod vitae risus. Etiam consequat, sem et vulputate dapibus, diam enim tristique est, vitae porta eros mauris ut orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elit sapien, tempus sit amet hendrerit volutpat, euismod vitae risus. Etiam consequat, sem et vulputate dapibus, diam enim tristique est, vitae porta eros mauris ut orci.",
    homepageAppearingMessage:'Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras...'
  };
  
  export const homepage_sections=[
    {
    itemName:"WhoAreWe",
    headDiv:'p.sub-heading',
    headSelector:"Who Are We?",
    text:texts.whoAreWeText,

  },
  {
    itemName:"WhyChooseUs",
    headDiv:'p.sub-heading',
    headSelector:"Why Choose Us?",
    text:texts.whyChooseUsText,

  },
  {
    itemName:'GreatService',
    headDiv:'p.sub-heading',
    headSelector:'GREAT SERVICE!',
    text:texts.whyChooseUsText,

  },
  {
    itemName:'ExService',
    headDiv:'p.sub-heading',
    headSelector:'Excellent Customer Service!',
    text:texts.whyChooseUsText,

  }
]
