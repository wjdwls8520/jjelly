import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import "./map.css";
import Header from "./component/Header";
import Footer from "./component/Footer";


const noto = Noto_Sans_KR({
  subsets: ['latin'], // 또는 preload: false
});


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <title>JJelly</title>
        <meta property="og:type" content="website" />
        <meta name="description" content='반려동물 커뮤니티' />
        <meta property="og:image" content="/ogimage.png" />
        {/* <script 
          type="text/javascript" 
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=9784fc8d43c2978a22923da1563dc53d&libraries=services,clusterer,drawing,autoload=false">
        </script> */}
      </head>
      <body className={noto.className }>
        <div id="wrap">

            {/* 헤더 */}
            <Header />

            {children}

            {/* 푸터 */}
            <Footer />
        </div>
      </body>
    </html>
  );
}
