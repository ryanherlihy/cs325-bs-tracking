function cs121(e) {
  if (!$(e.target).hasClass('red')) {
    if ($('#m131').hasClass('green')) {
      $('#cs187').removeClass('red');
    }

    $(e.target).addClass('green lighten-4');
  }
}

function cs187(e) {
  if (!$(e.target).hasClass('red')) {
    if ($('#m132').hasClass('green')) {
      $('#cs250').removeClass('red');
      $('#cs240').removeClass('red');
    }

    $('#cs220').removeClass('red');
    $('#cs230').removeClass('red');
    $(e.target).addClass('green');
  }
}

function cs200s(e) {
  if (!$(e.target).hasClass('red')) {
    $(e.target).addClass('green');
  }
}

function m131(e) {
  if (!$(e.target).hasClass('red')) {
    if ($('#cs121').hasClass('green')) {
      $('#cs187').removeClass('red');
    }

    $('#m132').removeClass('red');
    $(e.target).addClass('green lighten-4');
  }
}

function m132(e) {
  if (!$(e.target).hasClass('red')) {
    if ($('#cs187').hasClass('green')) {
      $('#cs250').removeClass('red');
      $('#cs240').removeClass('red');
    }

    $('#m233-s515').removeClass('red');
    $('#m235').removeClass('red');
    $(e.target).addClass('green');
  }
}

function m233s515(e) {
  if (!$(e.target).hasClass('red')) {
    $(e.target).addClass('green');
  }
}

function m235(e) {
  if (!$(e.target).hasClass('red')) {
    $(e.target).addClass('green');
  }
}
