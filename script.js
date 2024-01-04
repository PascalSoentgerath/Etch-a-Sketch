


addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container")

    const new_grid = function(size) {

        for (i = 0; i < size * size; i++) {
            const new_div = document.createElement("div")
            new_div.setAttribute("class", "grid_item")
            new_div.style.width = `${calculateWidth(size)}px`
            new_div.style.height = `${calculateWidth(size)}px`
            container.insertAdjacentElement("afterbegin", new_div)
            setHoverEffect()
        }
    }

    new_grid(16)

    function calculateWidth(size) {
        const calc_percent = 100 / size
        const calc_px = (700 * calc_percent / 100).toString()
        return calc_px

    }

    function setHoverEffect() {
        document.querySelectorAll(".grid_item").forEach(e => {
            e.addEventListener("mouseenter", () => {
                e.style.backgroundColor = "black"
            })
        })
    }

    

    const resetButton = document.querySelector(".reset_button")

    resetButton.addEventListener("click", (e) => {
        const grid_size = prompt("Enter the size of your Grid (only numbers from 16 to 100)")
        if (grid_size >= 16 && grid_size <= 100) {
            reset_grid()
            new_grid(grid_size)
        } else {
            alert("Invalid number, please enter a number from 16 to 100")
        }

    })

    const reset_grid = function() {
        document.querySelectorAll(".grid_item").forEach(e => {
            e.remove()
        })
    }
})
