document.addEventListener("DOMContentLoaded",
    function(e) {
        let button = document.querySelector("#button_tag1")
        let keydown = document.querySelector("#keydown")
        let change = document.querySelector("#change")
        let input = document.querySelector("#input")

        button.addEventListener("click",
            function(e) {
                console.log("button tag")
            }
        )

        keydown.addEventListener("keydown",
            function(e) {
                console.log("KEY DOWN")
            }
        )

        change.addEventListener("change",
            function(e) {
                console.log("CHANGE")
            }
        )

        input.addEventListener("input",
            function(e) {
                console.log("INPUT")
            }
        )

        let input_test = document.querySelector(".inputTest #input")
        let paragraph = document.querySelector(".inputTest #paragraph")
        input_test.addEventListener("input",
            function(e) {
                paragraph.textContent = e.target.value
            }
        )

    }
)