function emailCurrentPage() {
    let texting = "Email has been sent successfully! <br><i> Keep the page on to add more tasks..</i>";

    (function() {
        emailjs.init("O6MhpQU5rKBOldgZa"); //please encrypted user id for malicious attacks

      })();
      //set the parameter as per you template parameter[https://dashboard.emailjs.com/templates]
      var templateParams = {
        to_name: 'reda.mastouri@rutgers.edu',
        from_name: '1reda.mastouri@gmail.com',
        message_html: 'Here is the current to-do list tasks'
      };
    
      emailjs.send('service_x9wrwbb', 'template_3v4i8w8', templateParams)
        .then(function(response) {
          //alert("Email Sent Successfully");
          console.log('SUCCESS!', response.status, response.text);
          document.getElementById("share").innerHTML = texting;
        }, function(error) {
          console.log('FAILED...', error);
          alert("Error Occur");
        });
}

function sendCanvasAsAttachment(canvas) {
    var base64 = canvas.toDataURL();
    emailjs.send('service_x9wrwbb', 'template_3v4i8w8', {
        content: base64
    });
}

function sendemail() {
    var userid = "O6MhpQU5rKBOldgZa"
    emailjs.init(userid);
    var thename = document.getElementById('thename').value;
    var themail = document.getElementById('themail').value;
    var themsg = document.getElementById('themsg').value;
    let text = "Email has been sent successfully to <b>"+themail+"</b> from <b>"+thename+"</b>! <br><i> Keep the page on to add more tasks..</i>";
    let error = "Error Occur!";
    var validmail = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if (thename == "") {
      alert("Please Enter Name");
    }
    else if (themail == "" || themail.match(!validmail)) {
      alert("Please Enter Valid Email");
    }

    else if (themsg == "") {
      alert("Please Enter Message");
    }
    else {
      var contactdetail = {
        from_name: thename,
        from_email: themail,
        message: themsg
      };

      emailjs.send('service_x9wrwbb', 'template_3v4i8w8', contactdetail).then(function (res) {
        //alert("Email Sent Successfully");
        document.getElementById("demo").innerHTML = text;
      },
        reason => {
          //alert("Error Occur");
          document.getElementById("demo").innerHTML = error;
        })
    }
  }

  //Save as png
  function picDiv() { 
    let photo = "Picture has been saved al khawa! <br><i> Brrrraaaaah ..</i>";  
    html2canvas($('#photo')[0], {
      width: 1905,
      height: 1200
    }).then(function(canvas) {
      var a = document.createElement('a');
      a.href = canvas.toDataURL("image/png");
      a.download = 'canvas.png';
      a.click();
      document.getElementById("shared").innerHTML = photo;
    });
  }