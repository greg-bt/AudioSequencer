// Helper
function newElement(tag) { return document.createElement(tag) }

// Change cell color on click
function cellClick (e) { this.style.opacity = (this.style.opacity == "") ? 1 : ""; }

// Populate sequencer with cells
var percussion = ["Kick", "Hat","Clap","Snare"];
for (y=0; y<4; y++){
    // Create Rows
    var row = newElement("tr");
    row.innerHTML = percussion[y];

    // Fill Rows with cells
    for (x=0; x<16; x++) {
        var button = newElement("td");
        button.id = `${x} ${y}`; //////////// May be unnecessary

        // Add click event listener
        button.addEventListener("click", cellClick, false);
        row.appendChild(button);
    }

    document.getElementById("sequencer").appendChild(row);
}




//.innerHTML += sequenceHTML + "</tr>"


//document.getElementById("down").addEventListener("click", () => document.getElementById("cover").classList.add("rise"));