function signInGoogle() {
    // Doğrudan Rust backend OAuth rotamıza yönlendiriyoruz
    window.location.href = "http://api.dolunay.muharremelyesa.com/auth/google/login";
}

function signInFacebook() {
    // Doğrudan Rust backend OAuth rotamıza yönlendiriyoruz
    window.location.href = "https://api.dolunay.muharremelyesa.com/auth/facebook/login";
}

const urlParams = new URLSearchParams(window.location.search);

if (urlParams.get('status') === 'success') {
    const email = urlParams.get('email');
    const firstName = urlParams.get('first_name');
    const lastName = urlParams.get('last_name');
    const picture = urlParams.get('picture');

    console.log("Kullanıcı Bilgileri:", { email, firstName, lastName, picture });

    // Örnek: Profil resmini ekrandaki img etiketine basmak
    // document.getElementById('user-avatar').src = picture;
    // document.getElementById('user-name').innerText = `${firstName} ${lastName}`;
}