# next-onebite-books

2024-09-19  1일차
1.3 강의명 : 실습용 백엔드 서버 세팅 : 완료 (superbase 셋팅)
1.4 강의명 : 본격적인 핚습에 앞서

2024-09-22 2일차
2.1 강의명 : Page Router를 소개합니다
2.2 강의명 : 페이지 라우팅 설정하기

쿼리 스트링으로 값 가져오는법
import { useRouter } from "next/router"

const router = useRouter();
const {q} = router.query;

[[...id]] Optional Catch all segment ex) localhost:3000/book/213/123/1411
console.log 시 배열형태로 전달받음

2.3 강의명 : 네비게이팅
2.4 강의명 : 프리페칭
