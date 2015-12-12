
var data = {
  subplans: [
    {
      name: 'General Computer Science',
      courses: {
        required: [
          "311", "377", "383"
        ]
      }
    },
    {
      name: 'Software Engineering',
      courses: {
        required: [
          "311", "320", "520", "521"
        ],
      }
    },
    {
      name: 'Security and Privacy',
      courses: {
        required: [
          "311", "377", "460"
        ]
      }
    },
    {
      name: 'Robotics, Visions, and Graphics',
      courses: {
        required: [
          "311", "320", "370", "403", "573", "503"
        ]
      }
    },
    {
      name: 'Artificial Intelligence',
      courses: {
        required: [
          "311", "320", "383"
        ]
      }
    },
    {
      name: 'Computer Architecture',
      courses: {
        required: [
          "311", "320", "535", "635"
        ]
      }
    },
    {
      name: 'Networking',
      courses: {
        required: [
          "311", "377", "453", "491G"
        ]
      }
    },
    {
      name: 'Software Systems',
      courses: {
        required: [
          "311", "320", "377", "445"
        ]
      }
    },
    {
      name: 'Programming Lang. and Compilers',
      courses: {
        required: [
          "311", "377", "410", "530"
        ]
      }
    },
    {
      name: 'Theory of Computation',
      courses: {
        required: [
          "311", "320", "501"
        ]
      }
    },
    {
      name: 'Search and Data Mining',
      courses: {
        required: [
          "311", "320", "348", "445", "446", "585"
        ]
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
    "ECE 353",
    "ECE 354",
    "ECE 558",
    "ECE 597AB",
    "MATH 131",
    "MATH 132",
    "MATH 233",
    "MATH 235",
    "MATH 411",
    "STAT 515",
    "NATSCI 494"
  ]
};

var state = {
  subplanCourses: ''
};

function selectSubplan(subplan) {
  state.subplanCourses = '';

  toggleSubplanViews();

  data.subplans.filter(function(item) {
    return item.name === subplan
  })[0].courses.required.forEach(function(course) {
    state.subplanCourses += '<li class="collection-item center-align">CS ' + course + '<li>';
  });
  getSubplanCourses();
}

function getSubplanCourses() {
  $('#subplan-required').empty();
  $('#subplan-required').append(state.subplanCourses);
}

function toggleSubplanViews() {
  $('#subplan-select').toggle();
  $('#subplan-info').toggle();
}
