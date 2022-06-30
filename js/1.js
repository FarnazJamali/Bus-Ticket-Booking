const seats = [{
        seat1: {
            seatName: 1,
            reservedStatus: "false"
        },
        seat2: {
            seatName: 2,
            reservedStatus: "true"
        },
        seat3: {
            seatName: 3,
            reservedStatus: "false"
        }
    }, {
        seat1: {
            seatName: 4,
            reservedStatus: "false"
        },
        seat2: {
            seatName: 5,
            reservedStatus: "false"
        },
        seat3: {
            seatName: 6,
            reservedStatus: "false"
        }
    }, {
        seat1: {
            seatName: 7,
            reservedStatus: "false"
        },
        seat2: {
            seatName: 8,
            reservedStatus: "false"
        },
        seat3: {
            seatName: 9,
            reservedStatus: "false"
        }
    }, {
        seat1: {
            seatName: 10,
            reservedStatus: "false"
        },
        seat2: {
            seatName: 11,
            reservedStatus: "false"
        },
        seat3: {
            seatName: 12,
            reservedStatus: "false"
        }
    }, {
        seat1: {
            seatName: 13,
            reservedStatus: "false"
        },
        seat2: {
            seatName: 14,
            reservedStatus: "true"
        },
        seat3: {
            seatName: 15,
            reservedStatus: "true"
        }
    },
    {
        seat1: {
            seatName: 16,
            reservedStatus: "false"
        },
        seat2: {
            seatName: 17,
            reservedStatus: "false"
        },
        seat3: {
            seatName: 18,
            reservedStatus: "false"
        }
    }, {
        seat1: {
            seatName: 19,
            reservedStatus: "false"
        },
        seat2: {
            seatName: 20,
            reservedStatus: "false"
        },
        seat3: {
            seatName: 21,
            reservedStatus: "false"
        }
    }


];


function rowsMaker() {
    let rows = seats.map(function (seat, seatIndex) {
        return `<div class="col-12 my-2">
                        <div class="d-flex">
                            <div div class = "col-1 me-auto"
                            id = "seat${seatIndex}[0]"
                            onclick = "reservation(${[seatIndex]})" >
                                <div class="bg-secondary my-1 vh-10"> </div>
                                <div class="bg-secondary vh-30"></div>
                            </div>
                            <div class = "col-1 me-2"
                            id = "seat${seatIndex}[1]"
                            onclick = "reservation(${seatIndex})" >
                                <div class ="bg-secondary my-1 vh-10"> </div>
                                <div class ="bg-secondary vh-30"> </div>
                            </div>
                            <div class = "col-1 ms-2"
                            id = "seat${seatIndex}[2]"
                            onclick = "reservation(${seatIndex})" >
                                <div class="bg-secondary my-1 vh-10"></div>
                                <div class="bg-secondary vh-30"></div>
                            </div>
                        </div>
                    </div>`
    });
    console.log(rows)

    document.getElementById("busPlan").innerHTML = rows.join(" ");

}

function reservation(...args) {
    if (args[argsIndex].seat.reservedStatus === false) {
        console.log(args[argsIndex])
    }
}