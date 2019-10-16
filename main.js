const items = document.querySelectorAll('#timeline li');

const isInViewport = el => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
            (window.innerHeight ||
            document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth ||
        document.documentElement.clientWidth)
    );
};

const run = () => {
    items.forEach(item => {
        if (isInViewport(item)) {
            item.classList.add('show');
        }
    });
};

// Events
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);


// Edit name & nickname
const addForm = document.querySelector('.add');

addForm.name.value = document.querySelector('.fullname').textContent;

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = addForm.name.value;
    const mainColor = addForm.color1.value;
    const fontColor = addForm.color3.value;
    document.querySelector('#main-header').style.backgroundColor = mainColor;
    document.querySelector('body').style.color = fontColor;
    document.querySelector('.fullname').innerHTML = name;
});

// Show/Hide edit form
const editBtn = document.querySelector('.edit');

editBtn.addEventListener('click', e => {
    addForm.classList.toggle('hide');
});

// Add skills/abilities
const skillForm = document.querySelector('.add-skill');
const list = document.querySelector('.skill-items');

const generateTemplate = skill => {
    const html = `<li>${skill} <i class="far fa-trash-alt delete"></li>`;
    list.innerHTML += html;
}

skillForm.addEventListener('submit', e => {
    e.preventDefault();

    const skill = skillForm.skill.value.trim();

    if(skill.length){
        generateTemplate(skill);
        skillForm.reset();
    }
});

// Delete skills/abilities
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

// Show/Hide edit form
const editSkill = document.querySelector('.edit-skill');

editSkill.addEventListener('click', e => {
    skillForm.classList.toggle('hide');
});
