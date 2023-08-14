/***
 * Save Files in HardDrive :)
 */

localStorage.setItem('autor', 'felipdelosh');
localStorage.setItem('name', 'unknow');

if(localStorage.getItem('date_first_time_visited_page') === null){
    const fecha = new Date();
    localStorage.setItem('date_first_time_visited_page', fecha.toDateString());
}