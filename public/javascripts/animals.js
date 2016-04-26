function getAnimalInfo() {
    var employeeCookie = JSON.parse(getCookie('employeeCookie'));
    console.log(employeeCookie.employee_id);

    var animals = httpGet('/yourAnimals/vetGetAnimals');
    //var animals = httpGet('/yourAnimals/getAnimals?ID=' + employeeCookie.employee_id.replace(/-/g, '%2D'));
    var animalKeys = Object.keys(animals);
    var sickness = httpGet('/yourAnimals/getIllnesses');
    var sicknessKeys = Object.keys(sickness);

    var areas = {
        0: 'Rainforest',
        1: 'Temperate Forest',
        2: 'Savanna',
        3: 'Desert',
        4: 'Grasslands',
        5: 'Arctic',
        6: 'Saltwater',
        7: 'Freshwater',
        8: 'Jungle'
    };

    var animalTable = "<table>";

    if (employeeCookie.role_name == "Keeper") {
        for (var key in animalKeys) {
            if (animals[key].employee_id == employeeCookie.employee_id) {
                animalTable += "<tr><td style='font-weight: bold'>Tag number:</td><td>" + animals[key].tag_number + "</td>";
                animalTable += "<td style='font-weight: bold'>Scientific name: </td><td>" + animals[key].species + "</td></tr>";
                animalTable += "<tr class='group'><td><ul><li style='font-weight: bold'>Gender: </li><li>" + animals[key].gender + "</li></ul></td>;"
                animalTable += "<td><ul><li style='font-weight: bold'>Blood type: </li><li>" + animals[key].blood_type + "</li></ul></td>";
                animalTable += "<td style='font-weight: bold'>Area: </td><td>" + areas[animals[key].area] + "</td></tr>";
                animalTable += "<tr><td style='font-weight: bold'>Last checkup: </td><td>" + animals[key].last_checkup + "</td>";
                animalTable += "<td style='font-weight: bold'>Last time fed: </td><td>" + animals[key].last_time_fed + "</td></tr>";
                animalTable += "<tr><td style='font-weight: bold'>Date of birth: </td><td>" + animals[key].date_of_birth + "</td>;"
                animalTable += "<td style='font-weight: bold'>Date of arrival: </td><td>" + animals[key].date_of_arrival + "</td></tr>";
                animalTable += "<tr><td style='font-weight: bold'>Date of departure: </td><td>" + animals[key].date_of_departure + "</td>";
                animalTable += "<td style='font-weight: bold'>Date deceased: </td><td>" + animals[key].date_deceased + "</td></tr>";
                animalTable += "<tr><td></td></tr>"
                animalTable += "<tr><td></td></tr>"
            }
        }
        animalTable += "</table>";
    }

    else if (employeeCookie.role_name == "Veterinarian") {
        for (var key in sicknessKeys) {
            console.log(sickness[key]);
            animalTable += "<tr><td style='font-weight: bold'>Tag number:</td><td>" + sickness[key].tag_number + "</td></tr>";
            animalTable += "<tr><td style='font-weight: bold'>Illness: </td><td>" + sickness[key].illness + "</td></tr>";
            animalTable += "<tr><td style='font-weight: bold'>Description: </td><td>" + sickness[key].description + "</td></tr>";
            animalTable += "<tr><td></td></tr>"
            animalTable += "<tr><td></td></tr>"
        }
        animalTable += "</table>";
    }


    document.getElementById('tablePrint').innerHTML = animalTable;
    /*references a div tag in the html body*/

}

