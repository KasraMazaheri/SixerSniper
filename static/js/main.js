/*
The path of war went cold after General Velosilious's attack and members of the galatic fraternity of Delta Psi spent
their time living in peace until everything changed on a fateful February 15th 2023 BC when Khalifa Omar Al-Dahleh broke
the peace and incited war against Thomas Mitchell Cobley III of Manchester. After that peace was never an option and the 
rest is history.
The path of war went cold after General Velosilious's attack and members of the galatic fraternity of Delta Psi spent
their time living in peace until everything changed on a fateful February 15th 2023 BC when Khalifa Omar Al-Dahleh broke
the peace and incited war against Thomas Mitchell Cobley III of Manchester. After that peace was never an option and the 
rest is history.
*/

LIMIT = 10;

var name_kill_death = [["Kasra", 20, 0], // 2, 1
                        ["Teo", 6, 5],
                        ["Thiago", 1, 7],
                        ["Jennifer", 4, 4],
                        ["Angeles", 4, 2],
                        ["Jad", 3, 4],
                        ["Catherine", 8, 6],
                        ["Omar", 14, 11],
                        ["Bilal", 3, 7],
                        ["Jakob", 7, 6],
                        ["Charis", 2, 1],
                        ["Arusha", 5, 4],
                        ["Firaol", 0, 2],
                        ["Oscar", 2, 0],
                        ["Natalia", 7, 5],
                        ["Eesha", 1, 8],
                        ["Sebastian D", 9, 4],
                        ["Laura", 0, 1],
                        ["Nour", 17, 4],
                        ["Ola", 2, 9],
                        ["Adan", 4, 7],
                        ["Isa P", 6, 7],
                        ["Pravi", 3, 2],
                        ["Mariana", 3, 4],
                        ["Cata", 1, 2],
                        ["Durra", 0, 6],
                        ["Sabrina", 1, 5],
                        ["Anika", 1, 1],
                        ["Shara", 3, 2],
                        ["Jose", 3, 0],
                        ["Sebastian C", 1, 2]];


// Sniper Leaderboard

name_kill_death.sort(function(x, y) {
    if (x[1] > y[1] || (x[1] == y[1] && x[2] < y[2]))
        return -1;
    if (x[1] != y[1] || x[2] != y[2])
        return 1;
    return x[0] < y[0] ? -1 : 1;
});


$(document).ready(function() {

    top_kill = function(x, y) {
        if (x[1] > y[1] || (x[1] == y[1] && x[2] < y[2]))
            return -1;
        if (x[1] != y[1] || x[2] != y[2])
            return 1;
        return x[0] < y[0] ? -1 : 1;
    };

    top_death = function(x, y) {
        if (x[2] > y[2] || (x[2] == y[2] && x[1] < y[1]))
            return -1;
        if (x[1] != y[1] || x[2] != y[2])
            return 1;
        return x[0] < y[0] ? -1 : 1;
    };

    sort_funcs = [top_kill, top_death];
    

    wrappers = document.getElementsByClassName("wrapper");
    for (var w = 0; w < 2; w ++) {
        name_kill_death.sort(sort_funcs[w]);
        tmp = name_kill_death[0];
        name_kill_death[0] = name_kill_death[1];
        name_kill_death[1] = tmp;

        other = wrappers[w].getElementsByClassName("others")[0];
        for (var i = 0; i < Math.min(LIMIT, name_kill_death.length) - 4; i ++) {
            node = other.cloneNode(true);
            other.parentNode.appendChild(node);
            rank = node.getElementsByClassName("num")[0];
            rank.innerText = rank.innerHTML = i + 5;
        }

        links = wrappers[w].getElementsByClassName("link");
        points = wrappers[w].getElementsByClassName("points");
        imgs = wrappers[w].getElementsByTagName("img");
        for (var i = 0; i < Math.min(LIMIT, name_kill_death.length); i ++) {
            link = links[i];
            point = points[i];
            img = imgs[i];

            link.innerText = link.innerHTML = name_kill_death[i][0];
            point.innerText = point.innerHTML = name_kill_death[i][1 + w];
            img.src = "/static/profile/" + name_kill_death[i][0] + ".png";

            if (w == 0 && i == 1) {
                point.innerText = point.innerHTML = "∞";
                point.style.fontSize = "25px";
            }
        }
    }

    document.documentElement.style.width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    count = 0;
    for (var i = 0; i < name_kill_death.length; i ++)
        count += name_kill_death[i][1];
    console.log(count);
 });
