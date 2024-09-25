import SearchableLayout from "@/components/searchalbe-layout";
import style from "./index.module.css";
import { ReactNode } from "react";
import books from '@/mock/books.json'
import BookItem from "@/components/book-item";

export default function Home() {
 return (
    <div className={style.container}>
        <section>
            <h3>지금 추천하는 도사</h3>
            {books.map((book) => <BookItem key = {book.id}{...book}/>)}
        </section>
        <section>
            <h3>등록된 모든 도서</h3>
            {books.map((book) => <BookItem key = {book.id}{...book}/>)}
        </section>
    </div>
 );
}

Home.getLayout = (page : ReactNode) => {
    return <SearchableLayout>{page}</SearchableLayout>
};