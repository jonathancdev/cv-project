export function importUserData () {

//session
localStorage.setObject('activeSession', true)
//signupinfo
// localStorage.setObject('currentUser', { 
//     name: "Jane", 
//     surname: "Breeze", 
//     profession: "Professional", 
//     password: "password", 
//     email: "jane@cvbreeze.au", 
//     userId: "cvIDJ4B6P12" 
// })
//avatar
localStorage.setItem('cvIDJ4B6P12_avatar', 'test user')
//path
localStorage.setItem('cvIDJ4B6P12_path', 'breezeJ_cv.jpg')
//contact
localStorage.setObject('cvIDJ4B6P12_contact', [{
    tel: "555-555-5555",
    email: "jane@cvbreeze.au",
    address: "510 Carrington Lane\nAdelaide\nSA 5000\nAustralia",
    web: "janebmgmt.au"
  }])
  //education
  localStorage.setObject('cvIDJ4B6P12_education', [
    {
      loc: "International Biz University",
      degree: "MBA",
      desc: "Management concentration",
      monthOne: "June",
      yearOne: "2016"
    },
    {
      loc: "Happy University",
      degree: "BA Marketing and Strategy",
      desc: "",
      monthOne: "June",
      yearOne: "2013"
    }
  ])
  //profile
  localStorage.setItem('cvIDJ4B6P12_profile', 'Aliquet eget sit amet tellus. Sit amet mauris commodo quis imperdiet. A lacus vestibulum sed arcu non. Netus et malesuada fames ac. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam. Nisi vitae suscipit tellus mauris a diam maecenas sed. Ut pharetra sit amet aliquam id. Varius sit amet mattis vulputate enim nulla.')
  //skills
  localStorage.setObject('cvIDJ4B6P12_skills', [
    "Project Management",
    "Performance Management",
    "Staff Recruitment and Training",
    "Marketing and Promotions",
    "Auditing",
    "Quality Assurance",
    "Revenue and Trend Analysis",
    "Continuous Improvement"
  ])
  //work
  localStorage.setObject('cvIDJ4B6P12_work', [
    {
      title: "Manager",
      company: "Super Agency",
      monthOne: "March",
      monthTwo: "July",
      yearOne: "2017",
      yearTwo: "2021",
      duties: [
        "Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum",
        "At risus viverra adipiscing at in",
        "Ante metus dictum at tempor commodo"
      ]
    },
    {
      title: "Supervisor",
      company: "Wonder Corp.",
      monthOne: "March",
      monthTwo: "February",
      yearOne: "2015",
      yearTwo: "2017",
      duties: [
        "Faucibus purus in massa tempor",
        "Neque ornare aenean euismod elementum",
        "Diam maecenas sed enim ut"
      ]
    },
    {
      title: "Coordinator",
      company: "The Great Foundation",
      monthOne: "June",
      monthTwo: "January",
      yearOne: "2012",
      yearTwo: "2015",
      duties: [
        "Laoreet sit amet cursus sit amet",
        "Elementum integer enim neque volutpat",
        "Molestie at elementum eu facilisis sed odio"
      ]
    }
  ])

//userid
localStorage.setObject('userIdTest', "cvIDJ4B6P12")
//userInfo
localStorage.setObject('userInfoTest', {
    name: "Jane",
    surname: "Breeze",
    profession: "Professional",
    password: "password",
    email: "jane@cvbreeze.au",
    userId: "cvIDJ4B6P12"
  })
}

