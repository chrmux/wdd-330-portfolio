var currentPlayer = 1;
            function clearBoard() {
                let cells = document.getElementsByClassName('cell');
                console.log(cells.length);
                    for (var i = 0; i < cells.length; i++) {
                        // console.log("Touch!");
                        cells[i].innerText = "";
                    } 
            }
            function markCell(id) {
                console.log(id)
                if(currentPlayer === 1) {
                    document.getElementById(id).innerText = "X";
                    currentPlayer = 2;
                } else if (currentPlayer === 2) {
                    document.getElementById(id).innerText = "O";
                    currentPlayer = 1;
                }
            }