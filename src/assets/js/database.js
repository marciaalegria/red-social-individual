export const saveUserInDatabase = (userData) =>{
    console.log("USERDATA:", userData);

    let db = firebase.firestore();

    db.collection("users").doc(userData.uid).set(userData)
    .then(() => {
        console.log("Document written");
        window.location.hash = "#/profile"
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });    
}