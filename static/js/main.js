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

var name_kill_death = [["Kasra", 3, 0],
                        ["Teo", 1, 2],
                        ["Thiago", 0, 1],
                        ["Jennifer", 0, 2],
                        ["Angeles", 1, 0],
                        ["Jad", 0, 0]];


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

        console.log("LOLZ");
        links = wrappers[w].getElementsByClassName("link");
        points = wrappers[w].getElementsByClassName("points");
        imgs = wrappers[w].getElementsByTagName("img");
        for (var i = 0; i < Math.min(LIMIT, name_kill_death.length); i ++) {
            link = links[i];
            point = points[i];
            img = imgs[i];

            link.innerText = link.innerHTML = name_kill_death[i][0];
            point.innerText = point.innerHTML = name_kill_death[i][1];
            img.src = "/static/profile/" + name_kill_death[i][0] + ".png";
            
        }
    }
    
 });
