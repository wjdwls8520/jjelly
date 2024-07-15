import Link from "next/link";

export default function Sign() {
    return (
        <section className="section pt80">
            <div className="signupWrap mt60">
                <h2 className="faqTitle">회원가입</h2>
                <div className="identityVerificationWrap">
                    <img className="identityIcon" src="identity_icon.png" alt="아이콘" />
                    <span className="tit">
                        본인 인증 안내
                    </span>
                    <span className="txt bold">
                        정확한 본인확인을 위해 본인인증을 진행해주세요.
                    </span>
                    <span className="txt">
                        (제공되는 정보는 해당 인증기관에서 직접 수집하며
                        <br />
                        본인확인 이외의 용도로 사용되거나 저장되지 않습니다.)
                    </span>
                    <button id="btnIdentity" className="btnIdentity" type="button">
                        SNS 인증
                    </button>
                </div>

                <div className="inputArea essential">
                    <div className="inputBox essential">
                        <div className="inputWrap">
                            <label className="inpTit" htmlFor="inpUserName">
                                이름<span className="point">*</span>
                            </label>
                            <input id="inpUserName" className="myInput disabled" type="text" defaultValue="" placeholder="김쩰리" />
                        </div>
                    </div>
                    <div className="inputBox essential">
                        <div className="inputWrap">
                            <label className="inpTit" htmlFor="inpPhoneNumber">
                                휴대폰<span className="point">*</span>
                            </label>
                            <input id="inpPhoneNumber" className="myInput disabled" type="text" maxLength="13" defaultValue="" placeholder="010 - 1234 - 5678" />
                        </div>
                    </div>
                    <div className="inputBox essential">
                        <div className="inputWrap">
                            <label className="inpTit" htmlFor="inpEmail">
                                이메일<span className="point">*</span>
                            </label>
                            <input id="inpEmail" className="myInput disabled" type="text" placeholder="이메일을 입력해주세요." />                      
    
                            <span className="warning display-none">
                                이메일은 필수 입력사항이에요. 이메일을 입력해주세요.
                            </span>

                            <span className="warning2 display-none">
                                이미 존재하는 이메일입니다.
                            </span>
                        </div>
                    </div>
                    <div className="inputBox essential">
                        <div className="inputWrap">
                            <label className="inpTit" htmlFor="inpNickName">
                                닉네임<span className="point">*</span>
                            </label>
                            <input id="inpNickName" className="myInput btnInput" type="text" placeholder="xhoor1234" defaultValue="우주뚫고나가는쩰리" />

                            <button id="btnNickNameDuplication" className="btnDuplication" type="button">
                                중복확인
                            </button>
    
                            <span className="warning display-none">
                                이미 존재하는 닉네임입니다.
                            </span>
                        </div>
                    </div>
                    <div className="inputBox essential">
                        <div className="inputWrap textAreaWrap checkWrap">
                            <label className="inpTit" htmlFor="inpServiceAgreeCheck">
                                (필수) 서비스 이용약관
                            </label>
                            <textarea id="inpServiceAgreeCheck" className="myInput myTextArea" disabled="" defaultValue="1원칙" />


                            <div className="agreeWrap">
                                <input id="serviceAgreeCheck" className="hidden myCheckBox" type="checkbox" />
                                <label className="customCheck" htmlFor="serviceAgreeCheck">
                                    
                                </label>
                                <label className="inpTxt" htmlFor="serviceAgreeCheck">
                                    [필수] 서비스 이용약관에 동의합니다. 
                                </label>
                            </div>
    
                            <span className="warning display-none">
                                * 개인정보 수집에 동의해주세요.
                            </span>
                        </div>
                    </div>
                    <div className="inputBox essential">
                        <div className="inputWrap textAreaWrap checkWrap">
                            <label className="inpTit" htmlFor="inpIdentityCheck">
                                (필수) 개인정보 취급방침
                            </label>
                            <textarea id="inpIdentityCheck" className="myInput myTextArea" disabled="" defaultValue="1원칙" />


                            <div className="agreeWrap">
                                <input id="identityCheck" className="hidden myCheckBox" type="checkbox" />
                                <label className="customCheck" htmlFor="identityCheck">
                                    
                                </label>
                                <label className="inpTxt" htmlFor="identityCheck">
                                    개인정보 취급방침에 동의합니다.
                                </label>
                            </div>
    
                            <span className="warning display-none">
                                * 개인정보 수집에 동의해주세요.
                            </span>
                        </div>
                    </div>
                    <div className="inputBox essential">
                        <div className="inputWrap checkWrap flexRow">
                            <input id="allAgreeCheck" className="hidden myCheckBox" type="checkbox" />
                            <label className="customCheck" htmlFor="allAgreeCheck">
                                
                            </label>
                            <label className="inpTxt" htmlFor="allAgreeCheck">
                                모두 동의합니다.
                            </label>
                        </div>
                    </div>


                    
                    <div className="btnWrap" style={{gap: '10px'}}>
                        <button type="button" className="loginButton">회원가입</button>
                        <Link href={{ pathname: '/login' }}>
                            <button type="button" className="btn btnStyle02 backLogin">돌아가기</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
