const seatsPlan = [{
        rowNumber: 0,
        seats: [{
                seatName: 1,
                reservedStatus: "false"
            },
            {
                seatName: 2,
                reservedStatus: "true"
            },
            {
                seatName: 3,
                reservedStatus: "false"
            }
        ]
    },
    {
        rowNumber: 1,
        seats: [{
                seatName: 4,
                reservedStatus: "false"
            },
            {
                seatName: 5,
                reservedStatus: "false"
            },
            {
                seatName: 6,
                reservedStatus: "false"
            }

        ]
    },
    {
        rowNumber: 2,
        seats: [{
                seatName: 7,
                reservedStatus: "false"
            },
            {
                seatName: 8,
                reservedStatus: "false"
            },
            {
                seatName: 9,
                reservedStatus: "false"
            }
        ]
    },
    {
        rowNumber: 3,
        seats: [{
                seatName: 10,
                reservedStatus: "false"
            },
            {
                seatName: 11,
                reservedStatus: "false"
            },
            {
                seatName: 12,
                reservedStatus: "false"
            }
        ]
    },
    {
        rowNumber: 4,
        seats: [{
                seatName: 13,
                reservedStatus: "false"
            },
            {
                seatName: 14,
                reservedStatus: "true"
            },
            {
                seatName: 15,
                reservedStatus: "true"
            }
        ]
    },
    {
        rowNumber: 5,
        seats: [{
                seatName: 16,
                reservedStatus: "false"
            },
            {
                seatName: 17,
                reservedStatus: "false"
            },
            {
                seatName: 18,
                reservedStatus: "false"
            }
        ]
    },
    {
        rowNumber: 6,
        seats: [{
                seatName: 19,
                reservedStatus: "false"
            },
            {
                seatName: 20,
                reservedStatus: "false"
            },
            {
                seatName: 21,
                reservedStatus: "false"
            }
        ]
    }
];


function rowsMaker() {
    let rows = seatsPlan.map(function (seat) {
        // console.log(seat.seats[1].seatName)
        // console.log(`id = "seat${seat.seats[i].seatName}"`)
        return `<div class="col-12 my-2">
                        <div class="d-flex">
                            <div div class = "col-1 me-auto"
                            id = "seat${seat.seats[0].seatName}"
                            onclick = "reservation(${seat.seats[0].seatName})" >
                                <div class = "vh-30" > </div>
                                <div class = "my-1 vh-10" > </div>
                              </div>
                            <div class = "col-1 me-2"
                            id = "seat${seat.seats[1].seatName}"
                            onclick = "reservation(${seat.seats[1].seatName})" >
                                <div class = "vh-30"> </div> 
                                <div class = "my-1 vh-10"> </div> 
                            </div>    
                            <div class = "col-1 ms-2" id = "seat${seat.seats[2].seatName}"
                            onclick = "reservation(${seat.seats[2].seatName})" >
                                <div class = "vh-30"> </div>  
                                <div class = "my-1 vh-10"> </div> 
                                </div> </div> </div>
                            `

    });
    console.log(rows)
    document.getElementById("busPlan").innerHTML = rows.join(" ");

}
let reserved = [];

function reservation(e) {
    console.log(e)
    console.log(!(reserved.includes(e)))
    if (!(reserved.includes(e) || e === 2 || e === 14 || e === 15)) {
        reserved.push(e);
        console.log(reserved)
        document.getElementById('tickets').innerHTML += e + ",";
        let changeBgColor = document.querySelector(`#seat${e} > div.vh-30`);
        let changeBgColor1 = document.querySelector(`#seat${e} > div.vh-10`);
        changeBgColor.style.backgroundColor = '#198754';
        changeBgColor1.style.backgroundColor = '#198754';
    }
}

document.getElementById("clearButton").addEventListener("click", clearReservation)

function clearReservation() {
    document.getElementById('tickets').innerHTML = " ";
    rowsMaker();
}