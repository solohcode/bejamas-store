import firebase from './firebase'

export const ref = firebase.firestore().collection("products");


export const Get_Products = async ()=>{
    let prod = []
    const res = await ref.get()
    res.docs.forEach(e => {
        prod.push(e.data())
    });
    return prod
}


    