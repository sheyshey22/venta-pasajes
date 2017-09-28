"use strict";
class mapSeat {
    constructor(){
        this.allSeat=[];
        this.allUser=[];
        this.seatFull='#90EE90';
    }
    init (){
        this.buildMapSeat();
        this.seatSelect();
        this.addData();
        this.searchData();
        this.printAll();
        this.cancel();
    }
    buildMapSeat() {
        for(let i=0;i<8;i++){
            let tr = $('<tr class="col"></tr>');
            for(let j=0;j<4;j++){
                if(j==2)
                    tr.append(`<td class="tableSeat"></td>`);
                tr.append(`<td class="cell" id='${(j+1)+(i*4)}'>${(j+1)+(i*4)}</td>`);
            }
        $('#seats').append(tr);
        }
    }
    seatSelect() {
        $('td').click((e) => {
            let nro_seat=(event.target.textContent);
            $("#nSeat").append(nro_seat);
            (event.target).style.backgroundColor = ((event.target).style.backgroundColor=='rgb(248, 237, 80)') ? 'transparent' : '#F8ED50';
        });
    }
    addData() {
        $('#btn-reserv').click(() => {
          
            let name = $('#username').val();
            let lastName = $('#last_name').val();
            let nDni = $('#nro_dni').val();
            let nSeat=$('#nSeat').text();
            let data = {};
            data.seatSelect = nSeat;
            data.name = name;
            data.lastName = lastName;
            data.nDni = nDni;
            console.log(data);
            this.allUser.push(data);
            swal("Datos guardados correctamente!", "You clicked the button!", "success");
            $("#nSeat").text("");
            $("#username").val("");
            $("#last_name").val("");
            $("#nro_dni").val("");
        //     $('#info').append(`Asiento N°: ${data.name}<br>
        //                         Nombre: 
        //${data.name}<br>
        //                         Apellido: ${data.lastName}<br>
        //                         DNI N°: ${data.nDni}<br><br>`);         
        });
    }
    searchData(){    
        $('#btn-search').click(() => {            
            let nDni = $('#inputDni').val();
            console.log(nDni);
            for (var i = 0; i < this.allUser; i++) {
                var pasj=this.allUser[i];
            }
            if (nDni == this.allUser[i].nDni) {
                $('#info').empty();
                $('#info').append(`<div class="panel panel-succes">
                                      <div class="panel-heading">
                                        <h3 class="panel-title">Datos encontrados</h3>
                                      </div>
                                      <div class="panel-body">
                                        <b>Asiento N°:</b> ${this.allUser[i].seatSelect}<br>
                                        <b>Nombre: </b> ${this.allUser[i].name}<br>
                                        <b>Apellido: </b> ${this.allUser[i].lastName}<br>
                                        <b>DNI N°: </b> ${this.allUser[i].nDni}<br>
                                      </div>
                                    </div>`);
            }
        });
    }
    printAll() {
        $('#btn-allList').click(() => {
            $('#info').empty();
            let tam=this.allUser.length;
            console.log(tam);
            for (let i = 0; i < tam; i++) {
                $("#info").append(`<div class="panel">
                                      <div class="panel-heading">
                                        <h3 class="panel-title">Datos encontrados</h3>
                                      </div>
                                      <div class="panel-body">
                                        <b>Asiento N°:</b> ${this.allUser[i].seatSelect}<br>
                                        <b>Nombre: </b> ${this.allUser[i].name}<br>
                                        <b>Apellido: </b> ${this.allUser[i].lastName}<br>
                                        <b>DNI N°: </b> ${this.allUser[i].nDni}<br>
                                      </div>
                                    </div>`)
            };
        });
    }
    cancel(){
        $("#btn-cancel").click(()=>{
            let seatCancel=prompt("Ingrese el número de asiento, para cancelar la reserva").val;
            for (var i = 0; i < this.allUser; i++) {
                if (seatCancel==this.allUser[i]) {
                    var pasj=this.allUser[i];
                    this.allUser.splice($.inArray(pasj, this.allUser), 1);
                    $('.cell').style.backgroundColor = ($('.cell').style.backgroundColor=='rgb(248, 237, 80)') ? '#F8ED50' : 'transparent';
                }
                
            }
        })
    }

}
let appReserve = new mapSeat();
appReserve.init();