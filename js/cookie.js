/***
 * Save Files in HardDrive :)
 */
const fecha = new Date();


localStorage.setItem('autor', 'felipdelosh');
localStorage.setItem('date_enter', fecha.toDateString());

//YOU VIEW IN LIGTH OR DARK MODE?
//DARK = turn off
//light = turn on
if(localStorage.getItem('view_mode') === null){
    localStorage.setItem('view_mode', 'light');
}

//You have a plant?
if(localStorage.getItem('plant_status') === null){
    localStorage.setItem('plant_status', 'death');
}

//Save a first user visit
if(localStorage.getItem('date_first_time_visited_page') === null){
    localStorage.setItem('date_first_time_visited_page', fecha.toDateString());
}

//Counter you visits
if(localStorage.getItem('visit-counter') === null){
    localStorage.setItem('visit-counter', 0);
}else{
    var count = localStorage.getItem('visit-counter');
    count = count + 1;
    localStorage.setItem('visit-counter', count);
}
