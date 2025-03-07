document.getElementById('activity-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const activityInput = document.getElementById('activity-input');
    const activity = activityInput.value.trim();

    if (activity) {
        addActivityToList(activity);
        activityInput.value = '';
    }
});

function addActivityToList(activity) {
    const li = document.createElement('li');
    li.textContent = activity;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(deleteBtn);
    document.getElementById('activity-list').appendChild(li);
}
