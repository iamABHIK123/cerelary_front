import React from 'react'
import "./Summary.css"
import xcover from "./xcover.png"
import ship from "./ship.png"
function Summary() {
    return (
        <div className='update'>

            <div class="container" >

                <div class="row">
                    <div class="col">
                        <div class="timeline-steps aos-init aos-animate" data-aos="fade-up">
                            <div class="timeline-step">
                                <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2003">
                                    <div class="inner-circle"></div>

                                    <p class="h6 text-muted mb-0 mb-lg-0">Search</p>
                                </div>
                            </div>
                            <div class="timeline-step">
                                <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2004">
                                    <div class="inner-circle"></div>

                                    <p class="h6 text-muted mb-0 mb-lg-0">Recommended services</p>
                                </div>
                            </div>
                            <div class="timeline-step">
                                <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2005">
                                    <div class="inner-circle"></div>

                                    <p class="h6 text-muted mb-0 mb-lg-0">Results</p>
                                </div>
                            </div>
                            <div class="timeline-step">
                                <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2010">
                                    <div class="inner-circle"></div>

                                    <p class="h6 text-muted mb-0 mb-lg-0">Booking</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='lower'>
                <div className='left'>
                    <div className='p-1'>
                        <div className='l-head'><h5><b>Booking Summary</b></h5></div>
                    </div>

                    <div className='com'>
                        <div className='middlem'>
                            <svg width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.2135 23.8485L24.819 23.3969C25.0962 23.1901 25.266 22.8698 25.2816 22.5243L25.7775 11.4929L31.6963 6.18043C32.1401 5.78206 32.207 5.11096 31.8504 4.63287L31.6472 4.36028C31.2905 3.88219 30.6283 3.75487 30.1199 4.06669L23.3401 8.22474L13.0862 6.17632C12.7657 6.11227 12.433 6.18731 12.1709 6.38274L11.6007 6.80802C10.8822 7.34388 11.023 8.45872 11.8522 8.79914L18.7646 11.6371L14.7197 15.0859C14.4835 15.2873 14.176 15.385 13.8668 15.3567L11.0421 15.0991C10.9393 15.0897 10.8341 15.0899 10.7373 15.1257C10.6585 15.1548 10.5841 15.1951 10.5164 15.2456C9.99223 15.6366 10.0627 16.4424 10.6467 16.7364L13.3513 18.0902C13.5239 18.1766 13.6419 18.3436 13.6655 18.5353L13.9935 21.1983C14.1115 21.8574 14.8818 22.1619 15.4185 21.7616C15.4654 21.7266 15.5086 21.6873 15.5477 21.6442C15.6224 21.5616 15.6627 21.4554 15.6914 21.3477L16.4533 18.4872C16.5244 18.2202 16.6891 17.9876 16.9173 17.8318L21.2024 14.9053L22.3812 23.0778C22.4985 23.9492 23.5087 24.3741 24.2135 23.8485Z" fill="black" />
                                <line x1="11.0125" y1="10.6305" x2="1.86166" y2="17.4552" stroke="black" />
                                <line x1="19.9533" y1="21.2549" x2="14.7243" y2="25.1547" stroke="black" />
                                <line x1="9.84946" y1="18.6184" x2="4.62038" y2="22.5182" stroke="black" />
                            </svg>
                            <div className='mid-line'>

                            </div>

                        </div>
                        <div className='around'>
                            <div classsName="send">
                                <svg width="38" height="27" viewBox="0 0 38 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 25.5H36.5M6.015 8H31.985M27.75 1H10.25C6.75 1 5 2.75 5 6.25V25.5H33V6.25C33 2.75 31.25 1 27.75 1Z" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11.9824 8V25.5M18.9824 8V25.5M25.9824 8V25.5" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round" />
                                </svg>

                            </div>

                            <div className='rec'><svg width="37" height="27" viewBox="0 0 37 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 25.5H36M5.515 8H31.485M27.25 1H9.75C6.25 1 4.5 2.75 4.5 6.25V25.5H32.5V6.25C32.5 2.75 30.75 1 27.25 1Z" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M11.4824 8V25.5M18.4824 8V25.5M25.4824 8V25.5" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round" />
                            </svg>
                            </div>
                        </div>
                    </div>

                    <div className='px-2'>
                        <div className='ppx-1'>
                            <div className='u-ppx'>
                                <div className='r-text'>Total Weight/Volume</div>
                                <div className='ppx-icon'> <svg width="65" height="66" viewBox="0 0 65 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27.0833 60.0833H37.9167C51.4583 60.0833 56.875 54.6667 56.875 41.125V24.875C56.875 11.3333 51.4583 5.91666 37.9167 5.91666H27.0833C13.5417 5.91666 8.125 11.3333 8.125 24.875V41.125C8.125 54.6667 13.5417 60.0833 27.0833 60.0833Z" stroke="#5C5C5C" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M46.7187 22.9521C42.8004 19.4712 37.7412 17.5486 32.5 17.5486C27.2588 17.5486 22.1996 19.4712 18.2812 22.9521L24.1854 32.4313C26.4742 30.3905 29.4335 29.2627 32.5 29.2627C35.5665 29.2627 38.5258 30.3905 40.8146 32.4313L46.7187 22.9521Z" stroke="#5C5C5C" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg></div>
                            </div>
                        </div>

                        <div className='ppx-2'>
                            <div className='ppx-2-1'>1X</div>
                            <div className='ppx-2-2'>
                                <div className='ppx-2-icon'>
                                    <svg width="69" height="93" viewBox="0 0 49 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.5 29.5V44.5H11.2872V40.5H36.734V45.5H47.5V29.5M1.5 29.5L5.41489 1.5H42.6064L47.5 29.5M1.5 29.5H12.7553M47.5 29.5H34.7766M33.7979 1.5L34.7766 29.5M34.7766 29.5H24.0106M24.0106 1.5V29.5M24.0106 29.5H12.7553M12.7553 29.5L13.2447 2.5" stroke="#5C5C5C" stroke-width="3" />
                                        <path d="M3.33169 64.788V62.772H5.68369C6.17435 62.772 6.57435 62.612 6.88369 62.292C7.20369 61.972 7.36369 61.5507 7.36369 61.028C7.36369 60.6867 7.28369 60.388 7.12369 60.132C6.96369 59.8653 6.74502 59.6573 6.46769 59.508C6.19035 59.3587 5.87035 59.2893 5.50769 59.3H3.33169V57.3L5.55569 57.284C6.34502 57.2733 7.04369 57.4333 7.65169 57.764C8.25969 58.084 8.73435 58.5267 9.07569 59.092C9.41702 59.6467 9.58769 60.292 9.58769 61.028C9.58769 61.7533 9.42235 62.3987 9.09169 62.964C8.76102 63.5293 8.30769 63.9773 7.73169 64.308C7.15569 64.628 6.48902 64.788 5.73169 64.788H3.33169ZM1.39569 68.5V57.3H3.58769V68.5H1.39569ZM15.3761 68.5L15.2961 66.884V64.452C15.2961 63.972 15.2427 63.5667 15.1361 63.236C15.0294 62.8947 14.8641 62.6387 14.6401 62.468C14.4267 62.2867 14.1387 62.196 13.7761 62.196C13.4561 62.196 13.1681 62.2653 12.9121 62.404C12.6561 62.5427 12.4374 62.7667 12.2561 63.076L10.3361 62.42C10.4854 62.0787 10.7041 61.748 10.9921 61.428C11.2801 61.0973 11.6534 60.8307 12.1121 60.628C12.5814 60.4147 13.1521 60.308 13.8241 60.308C14.6241 60.308 15.2907 60.452 15.8241 60.74C16.3681 61.028 16.7734 61.4547 17.0401 62.02C17.3067 62.5747 17.4347 63.2573 17.4241 64.068L17.3761 68.5H15.3761ZM13.1681 68.692C12.2081 68.692 11.4614 68.4787 10.9281 68.052C10.4054 67.6253 10.1441 67.0227 10.1441 66.244C10.1441 65.3907 10.4267 64.7507 10.9921 64.324C11.5681 63.8867 12.3734 63.668 13.4081 63.668H15.4401V65.236H14.1441C13.4507 65.236 12.9707 65.3213 12.7041 65.492C12.4374 65.652 12.3041 65.8813 12.3041 66.18C12.3041 66.4147 12.4107 66.6013 12.6241 66.74C12.8374 66.868 13.1361 66.932 13.5201 66.932C13.8614 66.932 14.1654 66.852 14.4321 66.692C14.6987 66.5213 14.9067 66.308 15.0561 66.052C15.2161 65.7853 15.2961 65.5133 15.2961 65.236H15.8561C15.8561 66.324 15.6427 67.172 15.2161 67.78C14.8001 68.388 14.1174 68.692 13.1681 68.692ZM19.1073 68.5V57.3H21.2193V68.5H19.1073ZM23.0448 68.5V57.3H25.1568V68.5H23.0448ZM30.5983 68.692C29.809 68.692 29.1103 68.516 28.5023 68.164C27.8943 67.8013 27.4143 67.3053 27.0623 66.676C26.721 66.0467 26.5503 65.3213 26.5503 64.5C26.5503 63.6787 26.7263 62.9533 27.0783 62.324C27.441 61.6947 27.9316 61.204 28.5503 60.852C29.1796 60.4893 29.8996 60.308 30.7103 60.308C31.4036 60.308 32.0436 60.4947 32.6303 60.868C33.2276 61.2307 33.7076 61.7693 34.0703 62.484C34.433 63.188 34.6143 64.0467 34.6143 65.06H32.4703C32.481 64.356 32.4063 63.796 32.2463 63.38C32.097 62.9533 31.8836 62.6493 31.6063 62.468C31.329 62.276 31.0036 62.18 30.6303 62.18C30.2143 62.18 29.8623 62.2653 29.5743 62.436C29.2863 62.6067 29.0676 62.868 28.9183 63.22C28.7796 63.5613 28.7103 64.0093 28.7103 64.564C28.7103 65.044 28.8063 65.444 28.9983 65.764C29.1903 66.084 29.4463 66.3293 29.7663 66.5C30.0863 66.66 30.4383 66.74 30.8223 66.74C31.2383 66.74 31.5743 66.6493 31.8303 66.468C32.097 66.2867 32.2996 66.052 32.4383 65.764L34.4223 66.532C34.1983 66.98 33.905 67.3693 33.5423 67.7C33.1903 68.02 32.769 68.2653 32.2783 68.436C31.7876 68.6067 31.2276 68.692 30.5983 68.692ZM27.9263 65.06L27.9423 63.412H33.5743V65.06H27.9263ZM39.1377 68.692C38.2524 68.692 37.5804 68.4733 37.1217 68.036C36.6737 67.5987 36.4497 66.9747 36.4497 66.164V58.004H38.5617V65.7C38.5617 66.0413 38.6364 66.3027 38.7857 66.484C38.935 66.6547 39.1537 66.74 39.4417 66.74C39.5484 66.74 39.6657 66.7187 39.7937 66.676C39.9217 66.6227 40.055 66.548 40.1937 66.452L40.9297 68.036C40.6737 68.228 40.3857 68.3827 40.0657 68.5C39.7564 68.628 39.447 68.692 39.1377 68.692ZM35.1537 62.292V60.5H40.5617V62.292H35.1537ZM45.2712 68.692C44.7592 68.692 44.2792 68.6173 43.8312 68.468C43.3832 68.308 42.9885 68.084 42.6472 67.796C42.3059 67.4973 42.0392 67.1347 41.8472 66.708L43.6552 65.876C43.8152 66.132 44.0339 66.356 44.3112 66.548C44.5885 66.7293 44.9085 66.82 45.2712 66.82C45.6232 66.82 45.8952 66.772 46.0872 66.676C46.2792 66.5693 46.3752 66.42 46.3752 66.228C46.3752 66.036 46.2952 65.8973 46.1352 65.812C45.9859 65.716 45.7779 65.636 45.5112 65.572L44.7752 65.38C44.0072 65.1773 43.3992 64.8573 42.9512 64.42C42.5139 63.972 42.2952 63.46 42.2952 62.884C42.2952 62.0627 42.5565 61.428 43.0792 60.98C43.6125 60.532 44.3645 60.308 45.3352 60.308C45.8365 60.308 46.3005 60.3827 46.7272 60.532C47.1645 60.6813 47.5379 60.8893 47.8472 61.156C48.1565 61.4227 48.3699 61.732 48.4872 62.084L46.7432 62.884C46.6685 62.6707 46.4872 62.5 46.1992 62.372C45.9112 62.2333 45.6232 62.164 45.3352 62.164C45.0472 62.164 44.8232 62.228 44.6632 62.356C44.5139 62.4733 44.4392 62.6387 44.4392 62.852C44.4392 62.9907 44.5139 63.108 44.6632 63.204C44.8125 63.2893 45.0259 63.364 45.3032 63.428L46.3432 63.684C46.8659 63.812 47.2819 64.02 47.5912 64.308C47.9112 64.5853 48.1405 64.9 48.2792 65.252C48.4285 65.5933 48.5032 65.9293 48.5032 66.26C48.5032 66.74 48.3592 67.1667 48.0712 67.54C47.7939 67.9027 47.4099 68.1853 46.9192 68.388C46.4392 68.5907 45.8899 68.692 45.2712 68.692Z" fill="black" />
                                    </svg>

                                    <div className='measure'>230 X 140 X  120 CM</div>
                                </div>
                            </div>
                            <div className='ppx-2-3'><h4>Load</h4></div>
                        </div>

                    </div>

                    <div className='px-3'>
                        <div className='pps-1'>
                            <div className='ppss-2'>Seller: Primetime Worldwide</div>
                            <div className='ppss-1'>
                                <img src={ship} alt="ship"/>
                            </div>
                        </div>
                        <div className='pps-2'>
                            <div className='ppsss-2'>Insurance:Xcover.com</div>
                            <div className='ppsss-1' ><img src={xcover} alt="xcover"/></div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className='od-1'>
                        <div className='text-1'><h4><b>Price details</b> </h4></div>
                        <div className='right-frame'><svg width="105" height="20" viewBox="0 0 105 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="104.824" height="20" rx="10" fill="#E5E6E6" />
                            <path d="M15.7438 5.84779L16.6045 7.5693C16.7219 7.80894 17.0349 8.0388 17.299 8.08282L18.8591 8.34203C19.8568 8.50831 20.0916 9.23213 19.3727 9.94616L18.1598 11.159C17.9544 11.3645 17.8419 11.7606 17.9055 12.0443L18.2527 13.5457C18.5266 14.7341 17.8957 15.1938 16.8442 14.5727L15.3819 13.7071C15.1178 13.5506 14.6825 13.5506 14.4135 13.7071L12.9512 14.5727C11.9046 15.1938 11.2688 14.7292 11.5427 13.5457L11.89 12.0443C11.9535 11.7606 11.841 11.3645 11.6356 11.159L10.4228 9.94616C9.70872 9.23213 9.93858 8.50831 10.9363 8.34203L12.4964 8.08282C12.7556 8.0388 13.0686 7.80894 13.186 7.5693L14.0467 5.84779C14.5162 4.91367 15.2792 4.91367 15.7438 5.84779Z" fill="black" />
                            <path d="M31.305 10.6164L30.9574 9.85162L34.6123 6.04774H35.6651L31.305 10.6164ZM30.7191 13V6.04774H31.5235V13H30.7191ZM34.7712 13L31.9208 9.46428L32.4671 8.92796L35.7942 13H34.7712ZM36.5331 13V8.0341H37.278L37.3277 8.94782V13H36.5331ZM40.0192 13V10.4575L40.8137 10.1595V13H40.0192ZM40.0192 10.4575C40.0192 9.96749 39.9629 9.59339 39.8504 9.33516C39.7378 9.07694 39.5822 8.90148 39.3836 8.80878C39.1849 8.70946 38.9598 8.6598 38.7082 8.6598C38.2712 8.6598 37.9302 8.8154 37.6852 9.1266C37.4469 9.43117 37.3277 9.86486 37.3277 10.4277H36.9403C36.9403 9.90459 37.0165 9.45435 37.1688 9.07694C37.3211 8.69953 37.5396 8.41151 37.8243 8.21287C38.1156 8.01423 38.4665 7.91492 38.877 7.91492C39.4796 7.91492 39.953 8.10031 40.2973 8.4711C40.6482 8.84188 40.8204 9.40469 40.8137 10.1595L40.0192 10.4575ZM44.2662 13.1192C43.7829 13.1192 43.3525 13.0099 42.9751 12.7914C42.6043 12.5663 42.3129 12.2584 42.1011 11.8678C41.8892 11.4771 41.7833 11.0269 41.7833 10.517C41.7833 10.0072 41.8859 9.55697 42.0911 9.16632C42.303 8.77567 42.5944 8.4711 42.9651 8.2526C43.3425 8.02748 43.7696 7.91492 44.2463 7.91492C44.7363 7.91492 45.1667 8.02748 45.5375 8.2526C45.9149 8.4711 46.2062 8.77567 46.4115 9.16632C46.6234 9.55697 46.7293 10.0072 46.7293 10.517C46.7293 11.0269 46.6234 11.4771 46.4115 11.8678C46.2062 12.2584 45.9182 12.5663 45.5474 12.7914C45.1766 13.0099 44.7496 13.1192 44.2662 13.1192ZM44.2662 12.3842C44.5973 12.3842 44.8853 12.3048 45.1303 12.1459C45.3753 11.987 45.5673 11.7685 45.7063 11.4904C45.852 11.2123 45.9248 10.8878 45.9248 10.517C45.9248 10.1463 45.852 9.82182 45.7063 9.54373C45.5673 9.26564 45.3719 9.04714 45.1203 8.88823C44.8687 8.72932 44.5774 8.64987 44.2463 8.64987C43.9219 8.64987 43.6339 8.72932 43.3823 8.88823C43.1373 9.04714 42.942 9.26564 42.7963 9.54373C42.6573 9.82182 42.5877 10.1463 42.5877 10.517C42.5877 10.8812 42.6573 11.2057 42.7963 11.4904C42.942 11.7685 43.1406 11.987 43.3922 12.1459C43.6504 12.3048 43.9418 12.3842 44.2662 12.3842ZM52.2154 13L53.8939 8.0341H54.6984L53.01 13H52.2154ZM48.8386 13L50.5171 8.0341H51.262L49.6034 13H48.8386ZM48.7989 13L47.1105 8.0341H47.915L49.5736 13H48.7989ZM52.2154 13L50.5568 8.0341H51.3117L52.9703 13H52.2154ZM55.4947 13V8.0341H56.2396L56.2893 8.94782V13H55.4947ZM58.9808 13V10.4575L59.7753 10.1595V13H58.9808ZM58.9808 10.4575C58.9808 9.96749 58.9245 9.59339 58.812 9.33516C58.6994 9.07694 58.5438 8.90148 58.3452 8.80878C58.1465 8.70946 57.9214 8.6598 57.6698 8.6598C57.2328 8.6598 56.8918 8.8154 56.6468 9.1266C56.4085 9.43117 56.2893 9.86486 56.2893 10.4277H55.9019C55.9019 9.90459 55.9781 9.45435 56.1304 9.07694C56.2827 8.69953 56.5012 8.41151 56.7859 8.21287C57.0772 8.01423 57.4281 7.91492 57.8386 7.91492C58.4412 7.91492 58.9146 8.10031 59.2589 8.4711C59.6098 8.84188 59.782 9.40469 59.7753 10.1595L58.9808 10.4575ZM65.2248 13.1192C64.8606 13.1192 64.5428 13.0662 64.2713 12.9603C63.9999 12.8477 63.7714 12.702 63.586 12.5233C63.4073 12.3445 63.2782 12.1492 63.1987 11.9373L63.8939 11.6493C64.0065 11.8744 64.1753 12.0565 64.4005 12.1955C64.6256 12.3346 64.8739 12.4041 65.1453 12.4041C65.4565 12.4041 65.7181 12.3445 65.93 12.2253C66.1418 12.0995 66.2478 11.9241 66.2478 11.6989C66.2478 11.4937 66.1683 11.3281 66.0094 11.2023C65.8571 11.0765 65.6287 10.9739 65.3241 10.8945L64.8474 10.7653C64.3971 10.6462 64.0462 10.4674 63.7946 10.229C63.543 9.98404 63.4172 9.70926 63.4172 9.40469C63.4172 8.93458 63.5695 8.57042 63.8741 8.31219C64.1853 8.04734 64.6454 7.91492 65.2546 7.91492C65.5459 7.91492 65.8108 7.95795 66.0491 8.04403C66.2875 8.13011 66.4928 8.2526 66.6649 8.41151C66.8371 8.56379 66.9629 8.74588 67.0423 8.95776L66.3471 9.26564C66.261 9.04052 66.1187 8.8783 65.92 8.77898C65.7214 8.67967 65.4797 8.63001 65.195 8.63001C64.8904 8.63001 64.6521 8.69622 64.4799 8.82864C64.3078 8.95445 64.2217 9.13322 64.2217 9.36496C64.2217 9.49738 64.2912 9.62319 64.4302 9.74237C64.5759 9.85493 64.7878 9.94763 65.0659 10.0205L65.5625 10.1496C65.8869 10.229 66.1584 10.3482 66.3769 10.5071C66.5954 10.6594 66.7609 10.8349 66.8735 11.0335C66.986 11.2321 67.0423 11.444 67.0423 11.6691C67.0423 11.9671 66.9629 12.2253 66.8039 12.4438C66.645 12.6623 66.4299 12.8312 66.1584 12.9503C65.8869 13.0629 65.5757 13.1192 65.2248 13.1192ZM68.1132 13V5.91862H68.9077V13H68.1132ZM71.6092 13V10.4575L72.4037 10.1595V13H71.6092ZM71.6092 10.4575C71.6092 9.96749 71.5496 9.59339 71.4304 9.33516C71.3178 9.07694 71.1622 8.90148 70.9636 8.80878C70.765 8.70946 70.5398 8.6598 70.2882 8.6598C69.8512 8.6598 69.5102 8.8154 69.2652 9.1266C69.0269 9.43117 68.9077 9.86486 68.9077 10.4277H68.5204C68.5204 9.90459 68.5965 9.45435 68.7488 9.07694C68.9011 8.69953 69.1229 8.41151 69.4142 8.21287C69.7056 8.01423 70.0565 7.91492 70.467 7.91492C71.0629 7.91492 71.5363 8.10031 71.8872 8.4711C72.2382 8.84188 72.4103 9.40469 72.4037 10.1595L71.6092 10.4575ZM73.701 13L73.7208 8.0341H74.5154L74.4955 13H73.701ZM74.1082 6.88201C73.9757 6.88201 73.8599 6.83235 73.7606 6.73303C73.6612 6.63371 73.6116 6.51784 73.6116 6.38542C73.6116 6.24637 73.6612 6.1305 73.7606 6.03781C73.8599 5.93849 73.9757 5.88883 74.1082 5.88883C74.2472 5.88883 74.3631 5.93849 74.4558 6.03781C74.5551 6.1305 74.6048 6.24637 74.6048 6.38542C74.6048 6.51784 74.5551 6.63371 74.4558 6.73303C74.3631 6.83235 74.2472 6.88201 74.1082 6.88201ZM76.0093 14.9864V8.0341H76.7542L76.8039 8.94782V14.9864H76.0093ZM78.4824 13.1192C78.0652 13.1192 77.6977 13.0099 77.3799 12.7914C77.0687 12.5729 76.8271 12.2684 76.6549 11.8777C76.4828 11.4804 76.3967 11.0269 76.3967 10.517C76.3967 10.0006 76.4828 9.54704 76.6549 9.15639C76.8271 8.76574 77.0687 8.46117 77.3799 8.24267C77.6977 8.02417 78.0652 7.91492 78.4824 7.91492C78.926 7.91492 79.3166 8.02417 79.6543 8.24267C79.992 8.46117 80.2535 8.76574 80.4389 9.15639C80.6309 9.54704 80.7269 10.0006 80.7269 10.517C80.7269 11.0269 80.6309 11.4804 80.4389 11.8777C80.2535 12.2684 79.992 12.5729 79.6543 12.7914C79.3166 13.0099 78.926 13.1192 78.4824 13.1192ZM78.3036 12.3942C78.6148 12.3942 78.8896 12.3147 79.1279 12.1558C79.3729 11.9969 79.5649 11.7751 79.704 11.4904C79.8496 11.2057 79.9225 10.8812 79.9225 10.517C79.9225 10.1529 79.8529 9.82844 79.7139 9.54373C79.5815 9.25902 79.3928 9.03721 79.1478 8.8783C78.9028 8.71939 78.6247 8.63994 78.3135 8.63994C78.0222 8.63994 77.7606 8.71939 77.5289 8.8783C77.3038 9.03721 77.125 9.25902 76.9926 9.54373C76.8668 9.82844 76.8039 10.1529 76.8039 10.517C76.8039 10.8812 76.8668 11.2057 76.9926 11.4904C77.125 11.7751 77.3038 11.9969 77.5289 12.1558C77.754 12.3147 78.0122 12.3942 78.3036 12.3942ZM81.8772 14.9864V8.0341H82.6221L82.6718 8.94782V14.9864H81.8772ZM84.3503 13.1192C83.9331 13.1192 83.5657 13.0099 83.2478 12.7914C82.9366 12.5729 82.695 12.2684 82.5228 11.8777C82.3507 11.4804 82.2646 11.0269 82.2646 10.517C82.2646 10.0006 82.3507 9.54704 82.5228 9.15639C82.695 8.76574 82.9366 8.46117 83.2478 8.24267C83.5657 8.02417 83.9331 7.91492 84.3503 7.91492C84.7939 7.91492 85.1845 8.02417 85.5222 8.24267C85.8599 8.46117 86.1214 8.76574 86.3068 9.15639C86.4988 9.54704 86.5949 10.0006 86.5949 10.517C86.5949 11.0269 86.4988 11.4804 86.3068 11.8777C86.1214 12.2684 85.8599 12.5729 85.5222 12.7914C85.1845 13.0099 84.7939 13.1192 84.3503 13.1192ZM84.1715 12.3942C84.4827 12.3942 84.7575 12.3147 84.9958 12.1558C85.2408 11.9969 85.4328 11.7751 85.5719 11.4904C85.7175 11.2057 85.7904 10.8812 85.7904 10.517C85.7904 10.1529 85.7209 9.82844 85.5818 9.54373C85.4494 9.25902 85.2607 9.03721 85.0157 8.8783C84.7707 8.71939 84.4926 8.63994 84.1814 8.63994C83.8901 8.63994 83.6286 8.71939 83.3968 8.8783C83.1717 9.03721 82.9929 9.25902 82.8605 9.54373C82.7347 9.82844 82.6718 10.1529 82.6718 10.517C82.6718 10.8812 82.7347 11.2057 82.8605 11.4904C82.9929 11.7751 83.1717 11.9969 83.3968 12.1558C83.6219 12.3147 83.8802 12.3942 84.1715 12.3942ZM89.8706 13.1192C89.3872 13.1192 88.9601 13.0099 88.5894 12.7914C88.2186 12.5663 87.9272 12.2584 87.7154 11.8678C87.5101 11.4771 87.4075 11.0269 87.4075 10.517C87.4075 10.0072 87.5101 9.55697 87.7154 9.16632C87.9272 8.77567 88.2153 8.4711 88.5794 8.2526C88.9502 8.02748 89.374 7.91492 89.8507 7.91492C90.3076 7.91492 90.7048 8.03079 91.0425 8.26253C91.3868 8.48765 91.6517 8.80547 91.8371 9.21598C92.0225 9.6265 92.1152 10.1098 92.1152 10.666H91.3206C91.3206 10.2423 91.2643 9.88141 91.1518 9.58346C91.0392 9.27888 90.8704 9.04383 90.6452 8.8783C90.4267 8.71277 90.1586 8.63001 89.8408 8.63001C89.5163 8.63001 89.2283 8.70946 88.9767 8.86837C88.7317 9.02066 88.543 9.23916 88.4106 9.52387C88.2782 9.80858 88.212 10.143 88.212 10.527C88.212 10.9044 88.2848 11.2321 88.4305 11.5102C88.5761 11.7817 88.7781 11.9969 89.0363 12.1558C89.2945 12.3081 89.5859 12.3842 89.9103 12.3842C90.2546 12.3842 90.5459 12.3015 90.7843 12.1359C91.0227 11.9704 91.2114 11.7552 91.3504 11.4904L92.0456 11.838C91.9198 12.0962 91.751 12.3213 91.5391 12.5133C91.3338 12.7054 91.0889 12.8543 90.8042 12.9603C90.5261 13.0662 90.2149 13.1192 89.8706 13.1192ZM87.9339 10.666L87.9438 9.98073H91.6285V10.666H87.9339ZM93.5543 10.3085C93.5543 9.77216 93.6569 9.33847 93.8621 9.00741C94.0674 8.66973 94.3289 8.42144 94.6468 8.26253C94.9712 8.097 95.3122 8.01423 95.6697 8.01423V8.75912C95.3784 8.75912 95.097 8.80878 94.8255 8.9081C94.5607 9.00079 94.3422 9.15639 94.17 9.37489C93.9979 9.59339 93.9118 9.89135 93.9118 10.2688L93.5543 10.3085ZM93.1173 13V8.0341H93.9118V13H93.1173Z" fill="black" />
                        </svg>
                        </div>
                    </div>

                    <div className='od-2'>
                        <div className='od-2-1'>Seller’s Quote</div>
                        <div className='od-2-2'>$ 3,659.25</div>
                    </div>

                    <div className='od-3'>
                        <div className='od-3-1'>
                            <div className='od-3-1-1'>Duties and taxes</div>
                            <div className='od-3-1-2'>Not Included</div>
                        </div>

                        <div className='od-3-2'>
                            <div className='od-3-2-1'>
                                <div className='od-3-2-1-1'>Insurance </div>
                                <div className='od-3-2-1-2'> $323.40</div>
                            </div>

                            <div className='od-3-2-2'>Based on the items cost</div>
                        </div>
                    </div>

                    <div className='od-4'>
                        <div className='od-4-1'>Add a <a href='#' style={{ color: 'blue' }}>promo code</a></div>
                        <div className='od-4-2'>
                            <div className='od-4-2-1'>Platform fee
                            </div>
                            <div className='od-4-2-2'>$119.48
                            </div>
                        </div>
                    </div>


                    <div className='od-4-tot'>
                        <div className='od-4-t1'>
                            Total:
                        </div>

                        <div className='od-4-t2'>
                            $ 4,102.13
                        </div>
                    </div>

                    <button className='checkbut'>

                        <svg width="276" height="48" viewBox="0 0 276 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="276" height="48" rx="14" fill="#9747FF" />
                            <path d="M95.355 32.276C93.791 32.276 92.4033 31.9233 91.192 31.218C89.9807 30.4973 89.03 29.516 88.34 28.274C87.65 27.0167 87.305 25.5753 87.305 23.95C87.305 22.3247 87.65 20.891 88.34 19.649C89.03 18.3917 89.973 17.4103 91.169 16.705C92.3803 15.9843 93.768 15.624 95.332 15.624C96.436 15.624 97.4633 15.8233 98.414 16.222C99.3647 16.6053 100.193 17.1497 100.898 17.855C101.619 18.545 102.171 19.3423 102.554 20.247L99.633 21.328C99.3723 20.7607 99.0273 20.27 98.598 19.856C98.1687 19.4267 97.678 19.097 97.126 18.867C96.574 18.6217 95.976 18.499 95.332 18.499C94.3967 18.499 93.561 18.7367 92.825 19.212C92.1043 19.672 91.537 20.3083 91.123 21.121C90.7243 21.9337 90.525 22.8767 90.525 23.95C90.525 25.0233 90.732 25.974 91.146 26.802C91.56 27.6147 92.135 28.2587 92.871 28.734C93.607 29.194 94.4503 29.424 95.401 29.424C96.0603 29.424 96.6583 29.3013 97.195 29.056C97.747 28.7953 98.23 28.4427 98.644 27.998C99.0733 27.5533 99.4183 27.0397 99.679 26.457L102.6 27.515C102.217 28.4503 101.665 29.2783 100.944 29.999C100.239 30.7197 99.4107 31.2793 98.46 31.678C97.5093 32.0767 96.4743 32.276 95.355 32.276ZM104.5 32L104.477 15.762H107.513L107.536 32H104.5ZM112.136 32V26.112L115.172 25.422V32H112.136ZM112.136 26.112C112.136 25.33 112.044 24.7243 111.86 24.295C111.676 23.8657 111.423 23.559 111.101 23.375C110.779 23.1757 110.403 23.076 109.974 23.076C109.192 23.0607 108.586 23.2983 108.157 23.789C107.743 24.2797 107.536 25.008 107.536 25.974H106.524C106.524 24.7473 106.7 23.7123 107.053 22.869C107.421 22.0103 107.927 21.3587 108.571 20.914C109.23 20.454 109.989 20.224 110.848 20.224C112.259 20.224 113.332 20.6533 114.068 21.512C114.804 22.3553 115.172 23.6587 115.172 25.422L112.136 26.112ZM122.792 32.276C121.658 32.276 120.653 32.023 119.779 31.517C118.905 30.9957 118.215 30.2827 117.709 29.378C117.219 28.4733 116.973 27.4307 116.973 26.25C116.973 25.0693 117.226 24.0267 117.732 23.122C118.254 22.2173 118.959 21.512 119.848 21.006C120.753 20.4847 121.788 20.224 122.953 20.224C123.95 20.224 124.87 20.4923 125.713 21.029C126.572 21.5503 127.262 22.3247 127.783 23.352C128.305 24.364 128.565 25.5983 128.565 27.055H125.483C125.499 26.043 125.391 25.238 125.161 24.64C124.947 24.0267 124.64 23.5897 124.241 23.329C123.843 23.053 123.375 22.915 122.838 22.915C122.24 22.915 121.734 23.0377 121.32 23.283C120.906 23.5283 120.592 23.904 120.377 24.41C120.178 24.9007 120.078 25.5447 120.078 26.342C120.078 27.032 120.216 27.607 120.492 28.067C120.768 28.527 121.136 28.8797 121.596 29.125C122.056 29.355 122.562 29.47 123.114 29.47C123.712 29.47 124.195 29.3397 124.563 29.079C124.947 28.8183 125.238 28.481 125.437 28.067L128.289 29.171C127.967 29.815 127.546 30.3747 127.024 30.85C126.518 31.31 125.913 31.6627 125.207 31.908C124.502 32.1533 123.697 32.276 122.792 32.276ZM118.951 27.055L118.974 24.686H127.07V27.055H118.951ZM135.873 32.276C134.677 32.276 133.611 32.023 132.676 31.517C131.74 30.9957 131.012 30.2827 130.491 29.378C129.969 28.458 129.709 27.4153 129.709 26.25C129.709 25.0693 129.969 24.0267 130.491 23.122C131.012 22.2173 131.733 21.512 132.653 21.006C133.573 20.4847 134.631 20.224 135.827 20.224C136.977 20.224 138.027 20.5077 138.978 21.075C139.928 21.6423 140.618 22.4627 141.048 23.536L138.196 24.548C137.981 24.1033 137.644 23.7507 137.184 23.49C136.739 23.214 136.241 23.076 135.689 23.076C135.121 23.076 134.623 23.214 134.194 23.49C133.764 23.7507 133.427 24.1187 133.182 24.594C132.936 25.0693 132.814 25.6213 132.814 26.25C132.814 26.8787 132.936 27.4307 133.182 27.906C133.427 28.366 133.772 28.734 134.217 29.01C134.661 29.286 135.167 29.424 135.735 29.424C136.287 29.424 136.785 29.2783 137.23 28.987C137.69 28.6957 138.027 28.3123 138.242 27.837L141.117 28.849C140.672 29.9377 139.974 30.781 139.024 31.379C138.088 31.977 137.038 32.276 135.873 32.276ZM145.783 29.079L143.966 26.986L149.854 20.5H153.465L145.783 29.079ZM142.885 32V15.9H145.921V32H142.885ZM150.245 32L146.427 26.434L148.405 24.341L153.81 32H150.245ZM160.06 32.276C158.894 32.276 157.852 32.023 156.932 31.517C156.027 30.9957 155.314 30.2827 154.793 29.378C154.287 28.4733 154.034 27.4307 154.034 26.25C154.034 25.0693 154.287 24.0267 154.793 23.122C155.299 22.2173 156.004 21.512 156.909 21.006C157.813 20.4847 158.848 20.224 160.014 20.224C161.194 20.224 162.237 20.4847 163.142 21.006C164.046 21.512 164.752 22.2173 165.258 23.122C165.764 24.0267 166.017 25.0693 166.017 26.25C166.017 27.4307 165.764 28.4733 165.258 29.378C164.752 30.2827 164.046 30.9957 163.142 31.517C162.252 32.023 161.225 32.276 160.06 32.276ZM160.06 29.47C160.627 29.47 161.125 29.332 161.555 29.056C161.984 28.78 162.314 28.4043 162.544 27.929C162.789 27.4383 162.912 26.8787 162.912 26.25C162.912 25.6213 162.789 25.0693 162.544 24.594C162.298 24.1033 161.953 23.72 161.509 23.444C161.079 23.168 160.581 23.03 160.014 23.03C159.462 23.03 158.963 23.168 158.519 23.444C158.089 23.72 157.752 24.1033 157.507 24.594C157.261 25.0693 157.139 25.6213 157.139 26.25C157.139 26.8787 157.261 27.4383 157.507 27.929C157.752 28.4043 158.097 28.78 158.542 29.056C158.986 29.332 159.492 29.47 160.06 29.47ZM175.609 32L175.425 29.884V20.5H178.461V32H175.609ZM167.812 27.078V20.5H170.848V26.388L167.812 27.078ZM170.848 26.388C170.848 27.1547 170.932 27.7603 171.101 28.205C171.285 28.6343 171.538 28.9487 171.86 29.148C172.197 29.332 172.573 29.424 172.987 29.424C173.784 29.4393 174.39 29.2017 174.804 28.711C175.218 28.205 175.425 27.4767 175.425 26.526H176.46C176.46 27.7527 176.276 28.7953 175.908 29.654C175.555 30.4973 175.049 31.149 174.39 31.609C173.746 32.0537 172.987 32.276 172.113 32.276C170.733 32.276 169.667 31.8543 168.916 31.011C168.18 30.1523 167.812 28.8413 167.812 27.078L170.848 26.388ZM185.829 32.276C184.557 32.276 183.591 31.9617 182.931 31.333C182.287 30.7043 181.965 29.8073 181.965 28.642V16.912H185.001V27.975C185.001 28.4657 185.109 28.8413 185.323 29.102C185.538 29.3473 185.852 29.47 186.266 29.47C186.42 29.47 186.588 29.4393 186.772 29.378C186.956 29.3013 187.148 29.194 187.347 29.056L188.405 31.333C188.037 31.609 187.623 31.8313 187.163 32C186.719 32.184 186.274 32.276 185.829 32.276ZM180.102 23.076V20.5H187.876V23.076H180.102Z" fill="white" />
                        </svg>

                    </button>
                    <div className='l-all'>
                        <div className='l-14'></div>
                        <div className='l-13'></div>
                        <div className='l-12'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary