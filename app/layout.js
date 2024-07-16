import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
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
        <meta name="description" content='반려동물 커뮤니티' />
        <script 
          type="text/javascript" 
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=bb1a1a51327ee56bf50a95b4371d3f8e&libraries=services">
        </script>
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
