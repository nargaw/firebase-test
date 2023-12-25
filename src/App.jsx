import { useEffect } from "react";
import { Auth } from "./components/auth";
import { dataBase } from "./config/firebase";
import { useState } from "react";
import { getDocs, collection, storage } from "firebase/firestore";


export default function App()
{
    const [bookList, setBookList] = useState([]);

    const bookCollectionRef = collection(dataBase, "Books")
   
    useEffect(() => {
        const getBookList = async () => {
            try {
                const data = await getDocs(bookCollectionRef)
                const filteredData = data.docs.map((doc) => ({
                    ...doc.data(), 
                    id: doc.id
                }));
                setBookList(filteredData)
            } catch (err){
                console.error(err);
            }
        };
    
        getBookList();

    }, []);
    
    
    return <>
        <div className="app">
            <Auth />
            <div>
                {bookList.map((book) => (
                    <div>
                        <h1>Title: {book.title}</h1>
                        <p>Author: {book.author}</p>
                        <p>Publication Year: {book.publicationDate}</p>
                        <p>Publication Country: {book.country}</p>
                        <p>Estimated Sales: {book.estimatedSales}</p>
                    </div>
                ))}
            </div>
        </div>
    </>
}