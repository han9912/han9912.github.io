const url = './host.json';
const sshlist = document.getElementById('sshlist');
const telnetlist = document.getElementById('telnetlist');

function makeUL(array) {
    // Create the list element:
    var list = document.createElement('ul');

    for (var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');
        var a = document.createElement('a');
        a.href = "http://" + window.location.hostname + ":2222/ssh/host/" + array[i];
        a.text = array[i];

        // Set its contents:
        item.appendChild(a);

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}

// Example POST method implementation:
async function getJSON(url = '') {
    // Default options are marked with *
    const response = await fetch(url)
    .then(res => res.json())
    .then(out =>
      { console.log('Checkout this JSON! ', out);
        host = out })
    .catch(err => { throw err });
    email = Object.keys(host)[0];
    console.log(email, host);
    sshlist.appendChild(makeUL(host[email]['ssh']));
    telnetlist.appendChild(makeUL(host[email]['telnet']));
    return response; // parses JSON response into native JavaScript objects
}

hostJSON = getJSON(url);



function waitForElement(){
    if((typeof host !== "undefined") & (typeof email !== "undefined")) {
        //variable exists, do what you want
    }
    else{
        setTimeout(waitForElement, 250);
    }
}
waitForElement();
// Add the contents of options[0] to #foo:
