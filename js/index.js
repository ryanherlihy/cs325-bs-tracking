
var data = {
  subplans: [
    {
      name: 'General Computer Science',
      courses: {
        required: [
          "311", "377", "383"
        ],
        electives: 5
      }
    },
    {
      name: 'Software Engineering',
      courses: {
        required: [
          "311", "320", "520", "521"
        ],
        twoFrom: [
          "325", "365", "377", "410", "445", "453", "460", "499T/P", "496", "501", "513", "529", "575"
        ],
        electives: 2
      }
    },
    {
      name: 'Security and Privacy',
      courses: {
        required: [
          "311", "377", "460"
        ],
        oneFrom: [
          "348", "445", "453"
        ],
        twoFrom: [
          "365", "391LI", "466", "660", "ECE597AB"
        ],
        electives: 2
      }
    },
    {
      name: 'Robotics, Visions, and Graphics',
      courses: {
        required: [
          "311", "320", "370", "403", "573", "503"
        ],
        oneFrom: [
          "383", "474", "499T/P", "496", "590GM", "603", "617", "690IV"
        ],
        electives: 2
      }
    },
    {
      name: 'Artificial Intelligence',
      courses: {
        required: [
          "311", "320", "383"
        ],
        twoFrom: [
          "370", "403", "446", "503", "585", "589", "683"
        ],
        electives: 3
      }
    },
    {
      name: 'Computer Architecture',
      courses: {
        required: [
          "311", "320", "535", "635"
        ],
        twoFrom: [
          "377", "410", "445", "453", "499T/P", "496", "501", "520", "530", "610", "653", "677", "ECE353", "ECE354", "ECE558"
        ],
        electives: 2
      }
    },
    {
      name: 'Networking',
      courses: {
        required: [
          "311", "377", "453", "491G"
        ],
        twoFrom: [
          "320", "445", "460", "466", "653"
        ],
        electives: 2
      }
    },
    {
      name: 'Software Systems',
      courses: {
        required: [
          "311", "320", "377", "445"
        ],
        twoFrom: [
          "325", "453", "460", "466", "535", "677"
        ],
        electives: 2
      }
    },
    {
      name: 'Programming Lang. and Compilers',
      courses: {
        required: [
          "311", "377", "410", "530"
        ],
        twoFrom: [
          "320", "445", "499T/P", "496", "535", "391IB"
        ],
        electives: 2
      }
    },
    {
      name: 'Theory of Computation',
      courses: {
        required: [
          "311", "320", "501"
        ],
        oneFrom: [
          "377", "445", "453", "535", "391IB"
        ],
        twoFrom: [
          "499T/P", "496", "513", "575", "601", "611", "MATH411"
        ],
        electives: 2
      }
    },
    {
      name: 'Search and Data Mining',
      courses: {
        required: [
          "311", "320", "348", "445", "446", "585"
        ],
        electives: 2
      }
    }
  ],
  courses: [
    "121",
    "187",
    "220",
    "230",
    "240",
    "250",
    "305",
    "311",
    "320",
    "325",
    "348",
    "365",
    "370",
    "377",
    "383",
    "390CG",
    "391IB",
    "391LI",
    "403",
    "403",
    "410",
    "445",
    "446",
    "453",
    "460",
    "466",
    "473",
    "474",
    "491G",
    "496",
    "499T/P",
    "501",
    "503",
    "513",
    "520",
    "521",
    "529",
    "530",
    "535",
    "575",
    "585",
    "589",
    "601",
    "603",
    "610",
    "611",
    "617",
    "635",
    "653",
    "660",
    "677",
    "683",
    "690IV",
    "ECE353",
    "ECE354",
    "ECE558",
    "ECE597AB",
    "MATH131",
    "MATH132",
    "MATH233",
    "MATH235",
    "MATH411",
    "STAT515",
    "NATSCI494"
  ]
};

function generateResults(subplan) {

  //pushes all courses into an array
  var selected = [];
  $('#container input:checked').each(function() {
    selected.push($(this).attr('id'));
  });

  data.subplans.filter(function(item) {
    return item.name === subplan
  })[0].courses.required.forEach(function(course) {
    console.log(course);
  });

  data.subplans.filter(function(item) {
    return item.name === subplan
  })[0].courses.oneFrom.forEach(function(oneFrom) {
    console.log(oneFrom);
  });

  data.subplans.filter(function(item) {
    return item.name === subplan
  })[0].courses.twoFrom.forEach(function(twoFrom) {
    console.log(twoFrom);
  });

  data.subplans.filter(function(item) {
    return item.name === subplan
  })[0].courses.elective.forEach(function(elective) {
    console.log(elective);
  });


}

function next(thisSection, nextSection) {
  $(thisSection).hide();
  $(nextSection).show();
}

function back(thisSection, backSection) {
  $(thisSection).hide();
  $(backSection).show();
}
