var ctx = document.getElementById('myChart').getContext('2d');
// var earn = document.getElementById('earn').getContext('2d');
// var earning = document.getElementById('earning').getContext('2d');
// var not = document.getElementById('not').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Whatsup', 'Git', 'Azmon'],
        datasets: [{
            label: 'Users',
            data: [1001, 650, 800],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
        }]
    },
    options: {
			responsive: true
    }
});

// earn

var myChart = new Chart(earn, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', "Green"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 30],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
        }]
    },
    options: {
			responsive: true
    }
});

/* earning
var myChart = new Chart(earning, {
	type: 'doughnut',
	data: {
			labels: ['Red', 'Blue', 'Yellow'],
			datasets: [{
					label: '# of Votes',
					data: [12, 19, 3],
					backgroundColor: [
							'rgba(255, 99, 132, 1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
					],
			}]
	},
	options: {
		responsive: true
	}
}); */

/* not

var myChart = new Chart(not, {
	type: 'radar',
	data: {
			labels: ['Red', 'Blue', 'Yellow'],
			datasets: [{
					label: '# of Votes',
					data: [12, 19, 3],
					backgroundColor: [
							'rgba(255, 99, 132, 1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
					],
			}]
	},
	options: {
		responsive: true
	}
}); */