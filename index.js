document.getElementById('main').remove();

const newHeader = document.createElement('h1');


// document.querySelector('h1').id = 'victory';

newHeader.id = 'victory';

newHeader.innerHTML = 'Moshe is the champion';

document.body.append(newHeader);