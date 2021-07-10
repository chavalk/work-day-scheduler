// Add current day
$("#currentDay").text(moment().format('dddd, MMMM Do'));

// Function to determine color code
function colorCode() {
    var currentTime = moment().hour();
    var time = 9;
    for (let i = 9; i < 18; i++) {
        if (time < currentTime) {
            $("#" + i + "hr").addClass("past");
        } else if (time == currentTime) {
            $("#" + i + "hr").addClass("present");
        } else if (time > currentTime) {
            $("#" + i + "hr").addClass("future");
        }
        time++;
    }
}

// Function to load items from local storage
function loadSavedItems() {
    for (let i = 9; i < 18; i++) {
        $("#" + i + "hr").text(localStorage.getItem(i + "h"));
    }
}

// Save entry to local storage
$(".saveBtn").on("click", function() {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
})

// Call function to color code
colorCode();

// Call function to load saved items
loadSavedItems();