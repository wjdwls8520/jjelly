import Link from "next/link";
import { Suspense } from "react";

function LoginContents() {
    return (
        <section className="section pt80 loginSec">
            <div className="loginContainer mt80">
                <div className="loginForm">
                    <div className="idWrap">
                        <input id="inpId" className="loginInput"  type="text" name="uId" placeholder="아이디" />
                    </div>
                    <div className="pwWrap">
                        <input id="inpPassword" className="loginInput" type="password" name="password" autoComplete="off" placeholder="비밀번호" />
                        <img className="pwShow" src="/icon_view.png" alt="보기" />
                    </div>
                    <div className="options">
                        <div className="box">
                            <input type="checkbox" id="remember" className="myCheck hidden" />
                            <label htmlFor="remember" className="customCheck"></label>
                            <label htmlFor="remember">아이디 저장</label>
                        </div>
                        <Link className="findIdPw" href={{ pathname: '/' }}>
                            아이디, 비밀번호 찾기
                        </Link>
                    </div>
                    <button id="btnLoginPost" type="button" className="loginButton">로그인</button>
                    <div className="snsLogin">
                        <div className="snsTit">
                            <p></p>
                            <span>SNS 간편로그인</span>
                            <p></p>
                        </div>
                        <div className="snsIcons">
                            <div id="loginKakao" className="snsIcon">
                                <img src="/icon_login_kakao.png" alt="카카오" />
                            </div>
                            <div id="loginaver" className="snsIcon">
                                <img src="/icon_login_naver.png" alt="네이버" />
                            </div>
                            <div id="loginGoogle" className="snsIcon">
                                <img src="/icon_login_google.png" alt="구글" />
                            </div>
                        </div>
                    </div>
                </div>
                <Link href={{ pathname: '/sign', query: 'type=sign' }}>
                    <button id="btnSignUp" className="signupButton">회원가입</button>
                </Link>
            </div>
        </section>
    );
};


export default function Login() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LoginContents />
        </Suspense>
    )
};