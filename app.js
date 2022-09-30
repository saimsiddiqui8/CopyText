let totalChar = document.getElementById("total-char");
let remainingChar = document.getElementById("remaining-char");
let textarea = document.getElementById("textarea");
let char = 0;

textarea.addEventListener('input', () => {
    char = textarea.value.length;
    totalChar.innerText = char;
    remainingChar.innerText = 150 - char;
    if (char === 150) {
        Swal.fire(
            'Oops...',
            'You exceed  the limit',
            'error'
        )
    }
});


// Copy Text !
const copyText = () => {
    Swal.fire(
        'Text Copied',
        'To ClipBoard',
        'success'
    )
    textarea.select();
    textarea.setSelectionRange(0 , 999);
    navigator.clipboard.writeText(textarea.value)

}