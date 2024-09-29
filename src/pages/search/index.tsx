import SearchableLayout from "@/components/searchalbe-layout";
import { ReactNode, useEffect, useState } from "react";
import BookItem from "@/components/book-item";
import fetchBooks from "@/lib/fetch-books";
import { useRouter } from "next/router";
import { BookData } from "@/types";
import Head from "next/head";

// export const getStaticProps = async (context : GetStaticPropsContext) => {
    
//     const q = context.query.q;
//     const books = await fetchBooks(q as string);
//     return{
//         props :{
//             books,
//         },
//     };
// };

export default function Page(){

    const [books,setBooks] = useState<BookData[]>([]);

    const fetchSearchResult = async() =>{
        const data = await fetchBooks(q as string);
        setBooks(data);
    };

    const router = useRouter();
    const q = router.query.q;

    useEffect(() =>{
        if(q){
            fetchSearchResult();
        }
    },[q]);

    return (
    <div>
        <Head>
            <title>한입북스 - 검색결과</title>
            <meta property="og:image" content="thumbnail.png" />
            <meta property="og:title" content="한입북스 - 검색결과" />
        </Head>
        {books.map((book) => (<BookItem
            key={book.id} {...book}/>
        ))}
    </div>
    );
}

Page.getLayout = (page : ReactNode) =>{
    return <SearchableLayout>{page}</SearchableLayout>
}