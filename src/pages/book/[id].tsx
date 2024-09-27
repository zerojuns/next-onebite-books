import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import style from "./[id].module.css"
import fecthOneBook from "@/lib/fetch-one-book";

export const getServerSideProps = async (
    context : GetServerSidePropsContext
) =>{
    const id = context.params!.id;
    const book = await fecthOneBook(Number(id));
    return{
        props : {
            book,
        },
    };
};

export default function Page(
    {book} : InferGetServerSidePropsType<typeof getServerSideProps>
){
    if(!book) return "문제가 발생했습니다";

    const {title,subTitle,description,author,publisher,coverImgUrl} = book;
    return (
        <div className={style.cotainer}>
            <div className={style.cover_img_container}
            style={{backgroundImage :`url('${coverImgUrl}')`}}>
            <img src={coverImgUrl}/>
            </div>
            <div className={style.title} >{title}</div>
            <div className={style.subTitle}>{subTitle}</div>
            <div className={style.author}>{author} | {publisher}</div>
            <div className={style.description}>{description}</div>
        </div>
    );
}