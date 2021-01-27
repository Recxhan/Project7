// alert

const alertBanner = document.getElementById('alert');
alertBanner.innerHTML = 
`
<div class='alert-banner'>
<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
<p class='alert-banner-close'>X</p>
</div>
`
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains('alert-banner-close'))
    alertBanner.style.display = 'none'
})

// notifications

const notificationBell = document.getElementsByClassName('bell-icon')[0];
const dropdown = document.getElementById('notifications-dropdown');
const greenCircle = document.getElementsByClassName('green-circle')[0];
const closeBtn = document.getElementsByClassName('close-btn')[0];

notificationBell.addEventListener('click', () => {
    if(dropdown.style.display = 'none'){
        dropdown.style.display = 'block';
    }
    greenCircle.style.display = 'none';
})

closeBtn.addEventListener('click', ()=> {
    dropdown.style.display = 'none';
})


// traffic chart

const trafficCanvas = document.getElementById('traffic-chart');
const trafficNav = document.getElementsByClassName('traffic-nav');
const trafficNavLink = document.getElementsByClassName('traffic-nav-link');

// traffic-hourly

const trafficHourlyDataSet ={
    labels: ['1-2', '2-3', '3-4', '4-5', '5-6', '6-7', '7-8', '8-9', '9-10', '10-11', '11-12', '12-1', '1-2', '2-3', '3-4', '4-5', '5-6', '6-7', '7-8', '8-9', '9-10', '10-11', '11-12', '12-1'],
    datasets: [{
        data: [75, 125, 100, 200, 150, 170, 125, 180, 225, 150, 250, 120, 80, 82, 90, 102, 65, 80, 99, 50, 56, 68, 78, 150],
        backgroundColor: 'rgba(116, 119, 191, 0.3)',
        borderWidth: 2,
        lineTension: 0,
    }]
};


const trafficHourlyOptions = {
    aspectRatio: 2.5,
    animation:{
        duration: 1
    },
    scales: {
        yAxes: [{
            ticks: {
                min: 0,
                max: 500,
            }
        }]
    },
    legend : {
        display: false
    }
};

// traffic-daily
const trafficDailyDataSet ={
    labels: ['Monday', 'Tuesday', 'Wedensday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
        data: [1200, 1700, 1070, 1205, 1659, 1920, 2100],
        backgroundColor: 'rgba(116, 119, 191, 0.3)',
        borderWidth: 2,
        lineTension: 0,
    }]
};

const trafficDailyOptions = {
    aspectRatio: 2.5,
    animation:{
        duration: 1
    },
    scales: {
        yAxes: [{
            ticks: {
                min: 500,
                max: 3000,
            }
        }]
    },
    legend : {
        display: false
    }
};

// traffic-weekly

const trafficWeeklyDataSet ={
    labels: ['27-2', '3-9', '10-16', '17-23', '24-30', '31-6'],
    datasets: [{
        data: [5000, 7020, 4710, 5025, 6569, 9201, 9002],
        backgroundColor: 'rgba(116, 119, 191, 0.3)',
        borderWidth: 2,
        lineTension: 0,
    }]
};

const trafficWeeklyOptions = {
    aspectRatio: 2.5,
    animation:{
        duration: 1
    },
    scales: {
        yAxes: [{
            ticks: {
                min: 1000,
                max: 15000,
            }
        }]
    },
    legend : {
        display: false
    }
};

// traffic-monthly

const trafficMonthlyDataSet ={
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        data: [12000, 17000, 10070, 12005, 16590, 19200, 21000, 15000, 16709, 23521, 14980, 11924],
        backgroundColor: 'rgba(116, 119, 191, 0.3)',
        borderWidth: 2,
        lineTension: 0,
    }]
};

const trafficMonthlyOptions = {
    aspectRatio: 2.5,
    animation:{
        duration: 1
    },
    scales: {
        yAxes: [{
            ticks: {
                min: 5000,
                max: 25000,
            }
        }]
    },
    legend : {
        display: false
    }
};

// traffic-function
const trafficChartFuc = (trafficData, trafficOptions) =>{
    let trafficChart = new Chart(trafficCanvas, {
        type: 'line',
        data: trafficData,
        options: trafficOptions
    })
};

trafficChartFuc(trafficHourlyDataSet, trafficHourlyOptions);

trafficNav[0].addEventListener('click', event => {
    for(i = 0; i < 4; i++){
        if(trafficNavLink[i].classList.contains('active')){
            trafficNavLink[i].classList.remove('active')
        }
        event.target.classList.add('active')
    }
    if(trafficNavLink[0].classList.contains('active')){
        trafficChartFuc(trafficHourlyDataSet, trafficHourlyOptions)
    } else if(trafficNavLink[1].classList.contains('active')){
        trafficChartFuc(trafficDailyDataSet, trafficDailyOptions)
    } else if(trafficNavLink[2].classList.contains('active')){
        trafficChartFuc(trafficWeeklyDataSet, trafficWeeklyOptions)
    } else if(trafficNavLink[3].classList.contains('active')){
        trafficChartFuc(trafficMonthlyDataSet, trafficMonthlyOptions)
    }
});

// daily-chart

const dailyCanvas = document.getElementById('daily-chart');

const dailyData = {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};

const dailyOptions = {
    scales: {
        yAxes: [{
            ticks:{
                beginAtZero: true
            }
        }]
    },
    legend : {
        display: false
    }
}

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

// mobile-chart

const mobileCanvas = document.getElementById('mobile-chart');

const mobileData = {
    labels: ['Desktop', 'Tablet', 'Phones'],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B5C8'
        ]
    }]
};

const mobileOptions = {
    legend: {
        position: 'right',
        labels:{
            boxWidth: 20,
            fontStyle: 'bold'
        }
    }
};

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});


// message user

const user = document.getElementById('userField');
const messgae = document.getElementById('messageField');
const send = document.getElementById('send');

send.addEventListener('click', () => {
    if(user.value === '' && messgae.value === ''){
        alert('Please fill out user and message fields before sending')
    } else if (user.value === ''){
        alert('Please fill out user field before sending')
    } else if (messgae.value === ''){
        alert('Please fill out message field before sending')
    } else {
        alert('Message succesfully sent to: ${user.value}')
    }
});

// setting local storage 

const saveBtn = document.getElementById('save');
const cancelBtn = document.getElementById('cancel');
const email = document.getElementById('email');
const profile = document.getElementById('public-profile');
const timezone = document.getElementById('time-zone');
const selected = document.getElementById('selected')

saveBtn.addEventListener('click', () => {
    localStorage.setItem('emailPreference', email.checked);
    localStorage.setItem('profilePreference', profile.checked)
    localStorage.setItem('timezonePreference', timezone.value)
    alert('Settings saved')
});

if(window.localStorage.getItem('emailPreference') === 'true'){
    email.checked = true;
} else {
    email.checked = false;
};

if(window.localStorage.getItem('profilePreference') === 'true'){
    profile.checked = true;
} else {
    profile.checked = false;
};

if(window.localStorage.getItem('timezonePreference') !== null){
    timezone.value = window.localStorage.getItem('timezonePreference')
};

cancelBtn.addEventListener('click', () => {
    localStorage.clear();
    email.checked = false;
    profile.checked =false;
    timezone.value = null;
    timezone.value= selected.value
});


