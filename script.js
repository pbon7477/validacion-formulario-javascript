

const firebaseConfig = {
  apiKey: "AIzaSyBrkswz-DfrXzgUrj6wlLRSBziTy5ceGVM",
  authDomain: "datos-formulario-js.firebaseapp.com",
  projectId: "datos-formulario-js",
  storageBucket: "datos-formulario-js.appspot.com",
  messagingSenderId: "761214919684",
  appId: "1:761214919684:web:21c8055b14d8fa5dd50151",
  measurementId: "G-61L6W7481Z"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();





let formulario = document.getElementById("formulario");

formulario.addEventListener('submit',(event)=>{
    event.preventDefault();
   
// validando nombre
    let entradaNombre = document.getElementById('name');
    let errorNombre = document.getElementById('nameError');

    if(entradaNombre.value.trim() === ''){
        errorNombre.textContent = 'Por favor, introdusca su nombre';
        errorNombre.classList.add('error-message');
    }
    else{
        errorNombre.textContent = '';
        errorNombre.classList.remove('error-message');
    }
   
// validar mail

   let emailEntrada = document.getElementById('email');
   let emailError = document.getElementById('emailError');
   let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   if(!emailPattern.test(emailEntrada.value)){
    emailError.textContent = 'Intrudusca un email valido';
    emailError.classList.add('error-message');
   }
   else{
    emailError.textContent = '';
    emailError.classList.remove('error-message');
   }

// validar contraseña

let passwordEntrada = document.getElementById("password");
let passwordError = document.getElementById("passwordError");
let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;

if(!passwordPattern.test(passwordEntrada.value)){
   passwordError.textContent = 'La contraseña debe tener al menos 8 caracteres, mayusculas, minusculas, numeros y caracteres especiales.';
   passwordError.classList.add('error-message');

}

else{
    passwordError.textContent = '';
    passwordError.classList.remove('error-message')
}


if(!errorNombre.textContent && !emailError.textContent && !passwordError.textContent){
     
// BACKEND QUE REIVA LAINFORMACION

db.collection("users").add({
    nombre: entradaNombre.value,
    email: emailEntrada.value,
    password: passwordEntrada.value
})
.then((docRef) => {
    alert('Los datos del formulario se han enviado con exito!', docRef.id);
    formulario.reset();
   
})
.catch((error) => {
    alert( error);
});



}


})





























