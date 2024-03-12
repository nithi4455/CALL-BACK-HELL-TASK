// Countdown function without using set interval or recursion
const countdown = (timer, callback) => {
    if (timer > 0) {
        setTimeout(() => {
            let color;
            if (timer <= 3) {
                color = 'red'; // Change color to red for last 3 seconds
            } else {
                color = 'black'; // Default color
            }
            console.log(timer);
            document.getElementById('countdown').innerText = timer;
            document.getElementById('countdown').style.color = color; // Set color
            countdown(timer - 1, callback);
        }, 1000);
    } else {
        callback();
    }
};

// Callback hell to display countdown and then display "Happy Independence Day"
countdown(10, () => {
    setTimeout(() => {
        console.log("Happy Independence Day");
        document.getElementById('countdown').innerText = "Happy Independence Day";
        document.getElementById('countdown').style.color = 'green'; // Change color to green
        document.getElementById('countdown').style.textAlign = 'center'; // Center align the text
    }, 1000);
});
