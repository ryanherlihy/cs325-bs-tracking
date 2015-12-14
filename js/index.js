
var data = {
  subplans: [
    {
      name: 'General Computer Science',
      courses: {
        required: [
          "311", "377", "383"
        ],
        electives: [5]
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
        electives: [2]
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
        electives: [2]
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
        electives: [2]
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
        electives: [3]
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
        electives: [2]
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
        electives: [2]
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
        electives: [2]
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
        electives: [2]
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
        electives: [2]
      }
    },
    {
      name: 'Search and Data Mining',
      courses: {
        required: [
          "311", "320", "348", "445", "446", "585"
        ],
        electives: [2]
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
    "326",
    "348",
    "365",
    "370",
    "377",
    "383",
    "390CG",
    "391IB",
    "391LI",
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

function arrayToString(arr) {
  var str = '';
  arr.forEach(function(item, index) {
    if (index === 0) {
      str += item;
    } else {
      str += ', ' + item;
    }
  })

  return str;
}

function generateResults() {

  subplan = data.subplans[$('#subplan-select').val()].name;

  //pushes all courses into an array
  var selected = [];
  $('#container input:checked').each(function() {
    selected.push($(this).attr('id'));
  });

  //Intro courses
  var intro = [];
  if(selected.indexOf("121") === -1)
    intro.push("121");
  if(selected.indexOf("187") === -1)
    intro.push("187");

  if(intro.length !== 0){
    $('#intro-results').html("You need to take the following intro classes: " + arrayToString(intro));
    console.log("You need to take the following intro classes:" + intro);
  }else{
    $('#intro-results').html("You've successfully taken all of the required intro classes.");
    console.log("You've successfully taken all of the required intro classes.");
  }

  //Math courses
  var math = [];
  if(selected.indexOf("MATH131") === -1)
    math.push("MATH 131");
  if(selected.indexOf("MATH132") === -1)
    math.push("MATH 132");
  if(selected.indexOf("MATH233") === -1 && selected.indexOf("STAT515") === -1) {
    math.push("MATH 233 or STAT 515");
  }
  if(selected.indexOf("MATH235") === -1)
    math.push("MATH 235");

  if(math.length >= 3){
    $('#math-results').html("You need to take the following math classes: " + arrayToString(math));
    console.log("You need to take the following math classes:" + math);
  }else{
    $('#math-results').html("You've successfully taken all of the required math classes.");
    console.log("You've successfully taken all of the required math classes.");
  }

  //200-level courses
  var twohundred = [];
  if(selected.indexOf("220") === -1)
    twohundred.push("220");
  if(selected.indexOf("230") === -1)
    twohundred.push("230");
  if(selected.indexOf("240") === -1)
    twohundred.push("240");
  if(selected.indexOf("250") === -1)
    twohundred.push("250");

  if(twohundred.length !== 0){
    $('#200-results').html("You need to take the following 200-level classes: " + arrayToString(twohundred));
    console.log("You need to take the following 200-level classes:" + twohundred);
  }else{
    $('#200-results').html("You've successfully taken all of the required 200-level classes.");
    console.log("You've successfully taken all of the required 200-level classes.");
  }

  //Junior year writing
  var junior = [];
  if(selected.indexOf("305") === -1)
    junior.push("305");

  if(junior.length !== 0){
    $('#jr-results').html("You need to take junior year writing.");
    console.log("You need to take junior year writing.");
  }else{
    $('#jr-results').html("You've successfully taken junior year writing.");
    console.log("You've successfully taken junior year writing.");
  }

  //Int experiance
  var intexp = [];
  if(selected.indexOf("320") === -1)
    intexp.push("320");
  if(selected.indexOf("326") === -1)
    intexp.push("326");
  if(selected.indexOf("NATSCI494") === -1)
    intexp.push("NATSCI 494");

  if(intexp.length === 3){
    $('#intexp-results').html("You need to take one of following Integrative Experience Classes: " + arrayToString(intexp));
    console.log("You need to take one of following Integrative Experience Classes:" + intexp);
  }else{
    $('#intexp-results').html("You've successfully taken the Integrative Experience requirement.");
    console.log("You've successfully taken the Integrative Experience requirement.");
  }

  //Required courses
  var req = [];
  data.subplans.filter(function(item) {
    return item.name === subplan
  })[0].courses.required.forEach(function(course) {
    if(selected.indexOf(course) === -1)
      req.push(course);
  });
  $('#req-results').html("You need to take the following required courses: " + arrayToString(req));
  console.log("You need to take the following required courses:" + req);

  //One from
  var one = [];
  var oneCounter = 0;
  if(data.subplans.filter(function(item) {
    return item.name === subplan
  })[0].courses.oneFrom){

      data.subplans.filter(function(item) {
      return item.name === subplan
    })[0].courses.oneFrom.forEach(function(oneFrom) {
      if(selected.indexOf(oneFrom) === -1){
        one.push(oneFrom);
      }else{
        oneCounter++;
      }
    });
    if(oneCounter == 0){
      $('#one-results').html("You need to take at least one of the following one from courses: " + arrayToString(one));
      console.log("You need to take at least one of the following one from courses:" + one);
    }else{
      $('#one-results').html("You have successfully taken all of the one from courses.");
      console.log("You have successfully taken all of the one from courses.");
    }
  }

  //Two from
  var two = [];
  var twoCounter = 0;
  if(data.subplans.filter(function(item) {
    return item.name === subplan
  })[0].courses.oneFrom !== undefined){

    data.subplans.filter(function(item) {
      return item.name === subplan
    })[0].courses.twoFrom.forEach(function(twoFrom) {
      if(selected.indexOf(twoFrom) === -1){
        two.push(twoFrom);
      }else{
        twoCounter++;
      }
    });
    if(twoCounter == 0){
      $('#two-results').html("You need to take at least two of the following two from courses: " + arrayToString(two));
      console.log("You need to take at least two of the following two from courses:" + two);
    }
    else if(twoCounter == 1){
      $('#two-results').html();
      console.log("You need to take at least one of the following two from courses: " + arrayToString(two));
    }else{
      $('#two-results').html();
      console.log("You have successfully taken all of the one from courses.");
    }

  }

  //Number of electives
  var ele = []
  data.subplans.filter(function(item) {
    return item.name === subplan
  })[0].courses.electives.forEach(function(elective) {
    $('#elective-results').html(elective);
    console.log(elective);
  });

  next("#subplan-choice", "#final-part");
}

function next(thisSection, nextSection) {
  $(thisSection).hide();
  $(nextSection).show();
}

function back(thisSection, backSection) {
  $(thisSection).hide();
  $(backSection).show();
}
