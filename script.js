// Wrap your JavaScript code inside a window load event
window.onload = function() {
    // Get the modals and the close buttons
    var modal1 = document.getElementById("my_modal_1");
    var modal2 = document.getElementById("my_modal_2");
    var modal3 = document.getElementById("my_modal_3");
    var modal4 = document.getElementById("my_modal_4");
    var modal5 = document.getElementById("my_modal_5");

    var startedBox = document.getElementById("box_1");
    var hashmapBox = document.getElementById("box_2");
    var binaryBox = document.getElementById("box_3");
    var treeBox = document.getElementById("box_4");
    var sortingBox = document.getElementById("box_5");

    var close_button_1 = document.getElementById("close_button_1");
    var close_button_2 = document.getElementById("close_button_2");
    var close_button_3 = document.getElementById("close_button_3");
    var close_button_4 = document.getElementById("close_button_4");
    var close_button_5 = document.getElementById("close_button_5");

    // Function to open the modal
    function openModal(modal) {
        modal.style.display = "block";
    }


    // Function to close the modal
    function closeModal(modal) {
        modal.style.display = "none";
    }

    box_1.onclick = function() {
        openModal(modal1);
    };
    close_button_1.onclick = function() {
        closeModal(modal1);
    };

    box_2.onclick = function() {
        openModal(modal2);
    };
    close_button_2.onclick = function() {
        closeModal(modal2);
    };

    box_3.onclick = function() {
        openModal(modal3);
    };
    close_button_3.onclick = function() {
        closeModal(modal3);
    };

    box_4.onclick = function() {
        openModal(modal4);
    };
    close_button_4.onclick = function() {
        closeModal(modal4);
    };

    box_5.onclick = function() {
        openModal(modal5);
    };
    close_button_5.onclick = function() {
        closeModal(modal5);
    };

    // When the user clicks anywhere outside of the modals, close them
    window.onclick = function(event) {
        if (event.target === modal1) {
            closeModal(modal1);
        } else if (event.target === modal2) {
            closeModal(modal2);
        } else if (event.target === modal3) {
            closeModal(modal3);
        } else if (event.target === modal4) {
            closeModal(modal4);
        } else if (event.target === modal5) {
            closeModal(modal5);
        }
    };
};
