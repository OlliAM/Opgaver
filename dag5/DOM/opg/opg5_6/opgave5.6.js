const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

const table = document.createElement('table')
document.body.appendChild(table)

const headerRow = document.createElement("tr");
const attributes = Object.keys(MOUNTAINS[0]);

for (const attribute of attributes) {
    const th = document.createElement("th");
    th.textContent = attribute;
    headerRow.appendChild(th);
}

table.appendChild(headerRow)

for(mountain of MOUNTAINS) {
    const tr = document.createElement('tr')
    for(attribute of attributes) {
        const td = document.createElement('td');
        td.textContent = mountain[attribute]
        if(attribute === 'height') {
            td.style.textAlign = 'right'
        }
        tr.appendChild(td)
    }
    table.appendChild(tr)
}