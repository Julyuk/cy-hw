export const textData={
    headerText:'WebdriverUniversity.com (Data Tables)',
    headingText:'Data, Tables & Button States',
    headingPath: `//div[@id='main-header']/h1`,

}

export const headings=[
`Breadcrumb`,
`Badges`,
`Pagination`,
`Table`,
`Buttons & States`,
`Random Text`,
`Lists`,
]

export const drinks=[
    'Coffee',
    'Tea',
    'Milk',
    'Espresso',
    'Sugar',
]
export const fruits=[
    "Apple",
    "Banana",
    "Blackberries",
    "Cherries",
    "Figs",
]
export const vegetables=[
    "Asparagus",
    "Broccoli",
    "Kidney beans",
    "Lentils",
]
export const typesOfJobs=[
    "Finance",
    "Technology",
    "Sales",
]

export const buttons=[
   { name:'firstRowLink',
    selector:'a',
    text:'Link',
},

   {name:'firstRowButton',
   selector:'button',
   text:'Button',},

   {name:'firstRowInputButton',
   selector:"input[@type='button']",
   text:'Input',},

   {name:'firstRowInputSubmit',
   selector:"input[@type='submit']",
   text:'Submit',},

   {name:'  firstRowInputReset',
   selector:"input[@type='reset']",
   text:'Reset',},
]

export const buttonStates=["Danger", "Warning","Info","Alert"];
export const Otherstates=[1,2,3,4]

export const pagination=[
    {
        num:false,
        text:'Previous',
    },
    {
        num:true,
        text:1,
    },
    {
        num:true,
        text:2,
    },
    {
        num:true,
        text:3,
    },
    {
        num:true,
        text:4,
    },
    {
        num:true,
        text:5,
    },
    {
        num:false,
        text:'Next',
    },
]

export const badges=[{
    text:`Today's Deals`,
    num:5,
    order:1,
},
{
    text:`All Products`,
    num:20,
    order:2,
}]

export const navs=[
    'Home',"About Us", //'Contact Us'
]

export const smallTable=['#',"First",'Last',]
export const row1=[1,"Andy","Otto"];
export const row2=[2,"Jacob","Jones"];
export const row3=[3,"Larry","Scott"];
    
export const table1=[
    {row:["Firstname","Lastname","Age"]},
    {row:["John","Smith",45]},
    {row:["Jemma","Jackson",94]},
    {row:["Michael","Doe",20]},
]

export const table2=[
    {row:["Firstname","Lastname","Age"]},
    {row:["Jason","Jones",27]},
    {row:["Sarah","Jackson",56]},
    {row:["Bob","Woods",80]},
]