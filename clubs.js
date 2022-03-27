$(document).ready(function(){


  function showClubCards( which ) {
    // This will simulate reading the data from a database.
    let clubs = [
      {
        "name": "AIRSOFT CLUB",
        "description": "The purpose of this club is to bring students who share a hobby in airsoft and organize events outside of school.",
        "image": "airsoft.jpeg",
        "president": "Charles Christopher Thom - 540020@my.sbunified.org",
        "advisor": "Mr. Macias - amacias@sbunified.org",
        "when": "Every Friday at Lunch",
        "where": "Room 306",
      },
      {
        "name": "AMNESTY INTERNATIONAL CLUB",
        "description": "As a high school, we work to protect people wherever justice, freedom, truth, and dignity are denied.",
        "image": "amnestyinternational.png",
        "president": "",
        "advisor": "",
        "when": "",
        "where": "",
      },
      {
        "name": "AVID 12",
        "description": "We can. We will.",
        "image": "avid.jpeg",
        "president": "Emily Zharick Garcia Martinez - garciaemilyt@gmail.com",
        "advisor": "Ms. Daniel - hdaniel@sbunified.org",
        "when": "First Wednesday of Every Month",
        "where": "Room 307",
      },
      {
        "name": "AVID 10",
        "description": "AVID club 10 is for Avid and peac 10 students who want to raise money to go to college.",
        "image": "avid10.jpeg",
        "president": "Arwen Rossano - 531815@my.sbunified.org",
        "advisor": "Mr. Velasco - jvelasco@sbunified.org",
        "when": "Every Other Wednesday",
        "where": "Room 22",
      },
      {
        "name": "AVID CLUB 2023",
        "description": "Be part of our team! Discover a fun and comfortable space.",
        "image": "avid2023.jpeg",
        "president": "Joseline Gonzalez - 530949@my.sbunified.org",
        "advisor": "Veronica Calles - vcalles@sbunified.org",
        "when": "First Tuesday of Every Month During Lunch",
        "where": "Room 24",
      },
      {
        "name": "BIKE CLUB",
        "description": "Our mission is to unite people with a common interest in biking.",
        "image": "bikeclub.jpeg",
        "president": "Davis Flanagin - 533351@my.sbunified.org",
        "advisor": "John Tormey - jtormey@sbunified.org",
        "when": "Every First Wednesday of the Month",
        "where": "Room 208",
      },
      {
        "name": "BLACK STUDENT UNION",
        "description": "BSU is a safe place for black students to come together as a community.",
        "image": "blackstudentunion.jpeg",
        "president": "Jasmyn Amirfazlian Dennis - jazzyj805@icloud.com",
        "advisor": "Ms. Simms - csimms@sbunified.org",
        "when": "Every First Wednesday of the Month",
        "where": "Room 204",
      },
      {
        "name": "BOARD GAMES AND CHESS CLUB",
        "description": "No experience necessary. Students and staff welcome.",
        "image": "boardgame.png",
        "president": "James Walsh - 666538@my.sbunified.org",
        "advisor": "Melanie Sutton - msutton@sbunified.org",
        "when": "Every Tuesday at Lunch",
        "where": "Room 21",
        "details": "boardgame.html",
      },
      {
        "name": "CENTER OF SUCCESFUL AGING&rsquo;S CLUB",
        "description": "The Center for Successful Aging&rsquo;s programs are designed to provide essential emotional support and guidance to seniors in need and their families in our community.",
        "image": "centerforaging.jpeg",
        "president": "Jerrad Burford - 704351@my.sbunified.org",
        "advisor": "Mrs. Kahn - akahn@sbunified.org",
        "when": "Every First Thursday of the Month",
        "where": "Room 103",
      },
    
    ];
    
    var clubCards;

    if ( which < 0 ) {
      // Loop through the clubs to create the cards
      clubCards = '<div class="row row-cols-1 row-cols-md-3 g-4">'
      $.each( clubs, function( index, club ) {
        var thisClub = '<div class="col">';
        thisClub += '<div class="card">';
        thisClub += '<img src="images/' + club.image + '" class="card-img-top">';
        thisClub += '<div class="card-body">';
        thisClub += '<h5 class="card-title">' + club.name + '</h5>';
        thisClub += '<p class="card-text">' + club.description + '</p>';
        thisClub += '<button id="' + index + '" class="btn btn-primary">Details</button>';
        thisClub += '</div></div></div>';
        clubCards += thisClub;
      });
      clubCards += "</div>"
    } else {
      // display the single card
      clubCards = "";
      var club = clubs[ which ];
      var thisClub = '<div class="col">';
      thisClub += '<div class="card flex-row">';
      thisClub += '<img class="card-img-left" src="images/' + club.image + '">';
      thisClub += '<div class="card-body">';
      thisClub += '<h5 class="card-title">' + club.name + '</h5>';
      thisClub += '<div class="card-text">'
      thisClub += '<p>' + club.description + '</p>';
      thisClub += '<p> <strong>When:</strong> ' + club.when + '</p>';
      thisClub += '<p> <strong>Where:</strong> ' + club.where + '</p>';
      thisClub += '<p> <strong>President:</strong> ' + club.president + '</p>';
      thisClub += '<p> <strong>Advisor:</strong> ' + club.advisor + '</p>';
      thisClub += '</div>';
      thisClub += '<button id="-1" class="btn btn-primary">Back</button>&nbsp;';
      thisClub += '<button id="join" class="btn btn-primary">Join</button>';
      thisClub += '</div></div></div>';
      clubCards += thisClub;
    }
    // add the cards to the web page
    $("div#clubs").html( clubCards );

    $('#joinModal').on('hidden.bs.modal', function (e) {
      $(this)
        .find("input,textarea")
           .val('')
           .end()
    })

    $('#newModal').on('hidden.bs.modal', function (e) {
      $(this)
        .find("input,textarea")
           .val('')
           .end()
    })

    $("button").click(function(){
      if ( $(this).attr("id") == 'join' ) {
        $('#joinModal').modal('show');
      } else if ( $(this).attr("id") == 'closeJoin' ) {
        $('#joinModal').modal('hide');
      } else if ( $(this).attr("id") == 'saveJoin' ) {
        // send an email to the president or save to database etc.
        $('#joinModal').modal('hide');
      } else if ( $(this).attr("id") == 'addNew' ) {
        $('#newModal').modal('show');
      } else if ( $(this).attr("id") == 'closeNew' ) {
        $('#newModal').modal('hide');
      } else if ( $(this).attr("id") == 'saveNew' ) {
        // send an email to the person in charge of new clubs or save to database etc.
        $('#newModal').modal('hide');
      } else {
        showClubCards( $(this).attr("id") );
      }
    });
  };

  showClubCards(-1);

});

  
  