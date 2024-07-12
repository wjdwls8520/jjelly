import Link from "next/link";
import Region from "../component/Region";
import Field from "../component/Field";
import SquareBoard from "../component/SquareBoard";


export default function Meeting() {
    
    return(
        <section className="section pt80 squareBoardSection">
            <ul className="tabCategory mt60">
                <li className="meet active">
                    <Link href={{ pathname: '/meeting' }}>
                        젤리 모임
                    </Link>
                </li>
                <li className="meetNotice">
                    <Link href={{ pathname: '/meetNotice' }}>
                        젤리 공고
                    </Link>
                </li>
            </ul>

            {/* 분류 : 지역 */}
            <Region />

            <h2 className="mainTitle">
                <em>인기</em> 모임 <i>!</i>
            </h2>

            <SquareBoard />

            {/* 분류 카테고리, 활동  */}
            <Field />

            <h2 className="mainTitle">
                <em>젤리</em> 모임
            </h2>

            <SquareBoard />
                
        </section>  
    );
};