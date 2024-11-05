import toast from "react-hot-toast";

//2--- get all coffees from local storage
const getAllFavorite=()=>{
    const all = localStorage.getItem('favorites')
    
    if(all){
        const favorites = JSON.parse(all);
        console.log(favorites);
        return favorites;
    } else{
        console.log([]);
        return [];
    }
}


// 1--- add a coffee to local storage
const addFavorite = coffee =>{
    
    const favorites = getAllFavorite();
    const isExist = favorites.find(item=> item.id == coffee.id);
    if(isExist) return toast.error('Item Already Exist')
    favorites.push(coffee);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    toast.success('Successfully added!')
}



// 3--- remove coffee from local storage
const removeFavorite = id => {
    // get all previously saved coffee
    const favorites = getAllFavorite();
    const remaining = favorites.filter(coffee=>coffee.id!=id);
    localStorage.setItem('favorites', JSON.stringify(remaining));
    toast.success('Successfully removed!')
}




export {addFavorite, getAllFavorite, removeFavorite};