
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import "./map.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import ScrollToTop from "./component/ScrollToTop";
import PageMotion from "./component/PageMotion";
import FloatUtil from "./component/FloatingUtil";
import MainBanner from "./component/MainBanner";

const noto = Noto_Sans_KR({
  subsets: ['latin'], // 또는 preload: false
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
}


export default async function RootLayout({ children }) {

  return (
    <html lang="en">
        <head>
            <title>JJelly</title>
            <meta property="og:type" content="website" />
            <meta name="description" content='반려동물 커뮤니티' />
            <meta property="og:image" content="/ogimage.png" />
            {/* 애플 핀치줌 막기 */}
            <meta name="HandheldFriendly" content="true" />  
            <script 
                type="text/javascript" 
                src="//dapi.kakao.com/v2/maps/sdk.js?appkey=9784fc8d43c2978a22923da1563dc53d&libraries=services,clusterer,drawing,autoload=false">
            </script>
        </head>
        <body className={noto.className }>
            <div id="wrap">

                {/* 헤더 */}
                <Header />

                {/* 배너 */}
                <MainBanner />

                    {/* 모든 렌더 페이지 */}
                    <PageMotion>
                        {children}
                    </PageMotion>

                {/* 항상 스크롤 최상단 위치 */}
                <ScrollToTop />

                {/* 푸터 */}
                <Footer />


                <FloatUtil />
            </div>
        </body>
    </html>
  );
}
