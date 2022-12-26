var many = document.querySelectorAll('.active');
var count = document.querySelector('.count');
        
count.innerHTML = many.length;

var notfs = document.querySelectorAll('.notf');
var mark = document.querySelector('button');

// console.log(notfs.length);
// console.log(notfs[5].classList.value)

for(let i=0; i<notfs.length; i++){
    mark.addEventListener('click', () => {
        // var act = notfs[i].classList.value;
        notfs[i].classList.remove("active");
        count.innerHTML = '0'
        // console.log(act)
    });
}
