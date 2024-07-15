import Link from "next/link";
import Region from "../component/Region";
import Field from "../component/Field";
import SquareBoardSlide from "../component/SquareBoardSlide";
import SquareBoard from "../component/SquareBoard";


export default function Meeting() {
    
    return(
        <section className="section pt80 squareBoardSection">
            <ul className="tabCategory">
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

            <h3 className="commonBoardTit">
                인기 모임 <i>!</i>
            </h3>

            <SquareBoardSlide />


            {/* 공백 */}
            <div className="mt60"></div>  



            {/* 분류 카테고리, 활동  */}
            <Field />

            <h3 className="commonBoardTit">
                쩰리 모임
            </h3>

            <SquareBoard />
                
        </section>  
    );
};