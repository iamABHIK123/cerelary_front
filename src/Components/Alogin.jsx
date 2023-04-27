import React from 'react'
import "./Alogin.css"
import Home from './Home'
function Alogin() {
  return (
    <div>
       <nav class="navbar navbar-expand-lg navbar-light ss ">
            <div class="afterlog">
                <div class="navbar-brand-after" href="#"><svg width="168" height="37" viewBox="0 0 168 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.54 13.8C16.556 14.5 17.956 15.452 18.74 16.656C19.524 17.832 19.916 19.302 19.916 21.066C19.916 23.446 19.076 25.336 17.396 26.736C15.716 28.108 13.322 28.794 10.214 28.794C7.918 28.794 5.916 28.388 4.208 27.576C2.5 26.764 1.184 25.742 0.26 24.51V16.026H1.142C1.226 18.154 1.702 20.016 2.57 21.612C3.438 23.208 4.572 24.44 5.972 25.308C7.4 26.148 8.968 26.568 10.676 26.568C12.412 26.568 13.742 26.176 14.666 25.392C15.59 24.58 16.052 23.488 16.052 22.116C16.052 21.052 15.772 20.17 15.212 19.47C14.68 18.742 13.756 18.14 12.44 17.664L6.686 15.648C4.614 14.92 3.13 14.01 2.234 12.918C1.366 11.798 0.932 10.384 0.932 8.676C0.932 7.332 1.282 6.114 1.982 5.022C2.682 3.902 3.732 3.006 5.132 2.334C6.56 1.662 8.296 1.326 10.34 1.326C11.964 1.326 13.518 1.578 15.002 2.082C16.486 2.558 17.732 3.244 18.74 4.14L19.16 11.364H18.278C17.914 8.704 17.032 6.744 15.632 5.484C14.26 4.196 12.58 3.552 10.592 3.552C8.576 3.552 7.092 3.958 6.14 4.77C5.188 5.554 4.712 6.534 4.712 7.71C4.712 8.606 4.964 9.348 5.468 9.936C6 10.524 6.868 11.042 8.072 11.49L14.54 13.8ZM28.0053 25.56C28.0053 26.288 28.1453 26.778 28.4253 27.03C28.7333 27.282 29.2373 27.408 29.9373 27.408V28.5H27.7113H24.2673H22.0413V27.408C22.7413 27.408 23.2313 27.282 23.5113 27.03C23.8193 26.778 23.9733 26.288 23.9733 25.56V4.686C23.9733 3.958 23.8193 3.468 23.5113 3.216C23.2313 2.964 22.7413 2.838 22.0413 2.838V1.746H24.2673H28.0053V25.56ZM28.0053 20.94H26.9133V14.598H28.0893C28.2853 13.058 28.8733 11.77 29.8533 10.734C30.8333 9.67 32.1913 9.138 33.9273 9.138C35.8873 9.138 37.3433 9.74 38.2953 10.944C39.2753 12.12 39.7653 13.842 39.7653 16.11V25.56C39.7653 26.288 39.9053 26.778 40.1853 27.03C40.4933 27.282 40.9973 27.408 41.6973 27.408V28.5H39.4713H36.0273H33.8013V27.408C34.5013 27.408 34.9913 27.282 35.2713 27.03C35.5793 26.778 35.7333 26.288 35.7333 25.56V16.866C35.7333 14.934 35.5233 13.548 35.1033 12.708C34.6833 11.868 33.8853 11.448 32.7093 11.448C31.3373 11.448 30.2033 12.176 29.3073 13.632C28.4393 15.088 28.0053 17.524 28.0053 20.94ZM49.8236 25.56C49.8236 26.288 49.9636 26.778 50.2436 27.03C50.5516 27.282 51.0556 27.408 51.7556 27.408V28.5H49.5296H46.0856H43.8596V27.408C44.5596 27.408 45.0496 27.282 45.3296 27.03C45.6376 26.778 45.7916 26.288 45.7916 25.56V12.456C45.7916 11.728 45.6376 11.238 45.3296 10.986C45.0496 10.734 44.5596 10.608 43.8596 10.608V9.516H46.0856H49.8236V25.56ZM44.7416 3.468L47.7236 0.485998L50.7476 3.468L47.7236 6.492L44.7416 3.468ZM59.3596 36.648H55.6216H53.3956V35.556C54.0956 35.556 54.5856 35.43 54.8656 35.178C55.1736 34.926 55.3276 34.436 55.3276 33.708V12.456C55.3276 11.728 55.1736 11.238 54.8656 10.986C54.5856 10.734 54.0956 10.608 53.3956 10.608V9.516H55.6216H59.3596V36.648ZM59.2336 13.674C59.4856 12.47 60.1716 11.42 61.2916 10.524C62.4396 9.6 63.8396 9.138 65.4916 9.138C67.8156 9.138 69.6636 9.88 71.0356 11.364C72.4356 12.848 73.1356 15.382 73.1356 18.966C73.1356 22.55 72.4356 25.084 71.0356 26.568C69.6636 28.052 67.8156 28.794 65.4916 28.794C63.8676 28.794 62.4816 28.318 61.3336 27.366C60.2136 26.386 59.5136 25.252 59.2336 23.964H57.7636V13.674H59.2336ZM64.4416 26.778C66.1496 26.778 67.3116 26.106 67.9276 24.762C68.5436 23.418 68.8516 21.486 68.8516 18.966C68.8516 16.502 68.5296 14.584 67.8856 13.212C67.2416 11.84 66.0936 11.154 64.4416 11.154C63.5736 11.154 62.7476 11.392 61.9636 11.868C61.2076 12.344 60.5776 13.17 60.0736 14.346C59.5976 15.494 59.3596 17.034 59.3596 18.966C59.3596 20.898 59.5976 22.452 60.0736 23.628C60.5776 24.776 61.2076 25.588 61.9636 26.064C62.7476 26.54 63.5736 26.778 64.4416 26.778Z" fill="black" />
                    <path d="M93.0816 20.94H91.9896V14.598H93.1656C93.3616 13.058 93.9496 11.77 94.9296 10.734C95.9096 9.67 97.2676 9.138 99.0036 9.138C100.964 9.138 102.42 9.74 103.372 10.944C104.352 12.12 104.842 13.842 104.842 16.11V25.56C104.842 26.288 104.982 26.778 105.262 27.03C105.57 27.282 106.074 27.408 106.774 27.408V28.5H104.548H101.104H98.8776V27.408C99.5776 27.408 100.068 27.282 100.348 27.03C100.656 26.778 100.81 26.288 100.81 25.56V16.866C100.81 14.934 100.6 13.548 100.18 12.708C99.7596 11.868 98.9616 11.448 97.7856 11.448C96.4136 11.448 95.2796 12.176 94.3836 13.632C93.5156 15.088 93.0816 17.524 93.0816 20.94ZM81.5736 20.94H80.4816V14.43H81.6576C81.8256 13.03 82.3716 11.798 83.2956 10.734C84.2476 9.67 85.6336 9.138 87.4536 9.138C89.3296 9.138 90.7296 9.726 91.6536 10.902C92.6056 12.078 93.0816 13.814 93.0816 16.11V25.56C93.0816 26.288 93.2216 26.778 93.5016 27.03C93.8096 27.282 94.3136 27.408 95.0136 27.408V28.5H92.7876H89.3436H87.1176V27.408C87.8176 27.408 88.3076 27.282 88.5876 27.03C88.8956 26.778 89.0496 26.288 89.0496 25.56V16.866C89.0496 14.962 88.8396 13.59 88.4196 12.75C87.9996 11.882 87.2016 11.448 86.0256 11.448C84.7656 11.448 83.7016 12.134 82.8336 13.506C81.9936 14.85 81.5736 17.328 81.5736 20.94ZM81.5736 25.56C81.5736 26.288 81.7136 26.778 81.9936 27.03C82.3016 27.282 82.8056 27.408 83.5056 27.408V28.5H81.2796H77.8356H75.6096V27.408C76.3096 27.408 76.7996 27.282 77.0796 27.03C77.3876 26.778 77.5416 26.288 77.5416 25.56V12.456C77.5416 11.728 77.3876 11.238 77.0796 10.986C76.7996 10.734 76.3096 10.608 75.6096 10.608V9.516H77.8356H81.5736V25.56ZM120.666 28.5V23.166H120.54C120.204 24.79 119.574 26.134 118.65 27.198C117.754 28.262 116.438 28.794 114.702 28.794C112.854 28.794 111.454 28.262 110.502 27.198C109.55 26.134 109.074 24.51 109.074 22.326C109.074 20.982 109.284 19.82 109.704 18.84L122.178 17.454V18.504L113.316 20.31C113.064 20.926 112.938 21.752 112.938 22.788C112.938 23.908 113.162 24.804 113.61 25.476C114.086 26.148 114.772 26.484 115.668 26.484C116.536 26.484 117.334 26.134 118.062 25.434C118.79 24.734 119.364 23.67 119.784 22.242C120.232 20.814 120.456 19.05 120.456 16.95C120.456 15.074 120.148 13.646 119.532 12.666C118.916 11.658 117.964 11.154 116.676 11.154C115.612 11.154 114.8 11.448 114.24 12.036C113.68 12.596 113.4 13.338 113.4 14.262C113.4 14.514 113.414 14.752 113.442 14.976C113.498 15.2 113.554 15.424 113.61 15.648V15.774L109.956 16.11C109.732 15.438 109.62 14.892 109.62 14.472C109.62 12.932 110.278 11.658 111.594 10.65C112.938 9.642 114.702 9.138 116.886 9.138C119.042 9.138 120.652 9.586 121.716 10.482C122.808 11.378 123.494 12.456 123.774 13.716C124.054 14.976 124.194 16.46 124.194 18.168V25.56C124.194 26.288 124.334 26.778 124.614 27.03C124.922 27.282 125.426 27.408 126.126 27.408V28.5H123.9H120.666ZM133.632 23.04C133.632 24.048 133.884 24.832 134.388 25.392C134.892 25.952 135.592 26.232 136.488 26.232C137.384 26.232 138.028 25.938 138.42 25.35C138.812 24.734 139.064 23.978 139.176 23.082H140.016C139.988 24.594 139.624 25.924 138.924 27.072C138.252 28.22 136.908 28.794 134.892 28.794C133.184 28.794 131.868 28.276 130.944 27.24C130.048 26.204 129.6 24.72 129.6 22.788V11.868H126.492V10.23C128.368 9.978 129.74 9.32 130.608 8.256C131.504 7.192 132.036 5.666 132.204 3.678H133.632V23.04ZM137.034 9.516H140.31V11.868H133.254V10.314L137.034 9.516ZM151.865 28.794C149.009 28.794 146.755 27.954 145.103 26.274C143.451 24.566 142.625 22.102 142.625 18.882C142.625 15.718 143.395 13.31 144.935 11.658C146.503 9.978 148.645 9.138 151.361 9.138C153.825 9.138 155.715 9.81 157.031 11.154C158.375 12.47 159.047 14.304 159.047 16.656C159.047 17.58 159.019 18.266 158.963 18.714L145.439 19.134V17.79L155.855 16.95L154.721 17.958C155.085 17.23 155.267 16.306 155.267 15.186C155.267 14.066 154.917 13.114 154.217 12.33C153.545 11.546 152.635 11.154 151.487 11.154C149.947 11.154 148.729 11.77 147.833 13.002C146.937 14.206 146.489 16.124 146.489 18.756C146.489 21.248 147.049 23.152 148.169 24.468C149.289 25.784 150.843 26.442 152.831 26.442C153.867 26.442 154.749 26.26 155.477 25.896C156.233 25.532 156.835 25.084 157.283 24.552C157.731 24.02 158.109 23.446 158.417 22.83L159.257 23.166C158.977 24.034 158.557 24.888 157.997 25.728C157.437 26.54 156.639 27.254 155.603 27.87C154.595 28.486 153.349 28.794 151.865 28.794ZM161.402 26.148L164.384 23.166L167.408 26.148L164.384 29.172L161.402 26.148Z" fill="#6F57E9" />
                </svg>
                </div>
                <div className='sub-after'>
                    <div className='dollar' ><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.3442 28.66C17.3442 31.24 19.3242 33.32 21.7842 33.32H26.8042C28.9442 33.32 30.6842 31.5 30.6842 29.26C30.6842 26.82 29.6242 25.96 28.0442 25.4L19.9842 22.6C18.4042 22.04 17.3442 21.18 17.3442 18.74C17.3442 16.5 19.0842 14.68 21.2242 14.68H26.2442C28.7042 14.68 30.6842 16.76 30.6842 19.34M24.0002 12V36" stroke="#6F57E9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M30 44H18C8 44 4 40 4 30V18C4 8 8 4 18 4H30C40 4 44 8 44 18V30C44 40 40 44 30 44Z" stroke="#6F57E9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </div>
                    <div className='track'><svg width="159" height="48" viewBox="0 0 159 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="158.111" height="48" rx="12.4444" fill="#6F57E9" />
                        <path d="M23.4062 30V19.1573H25.3653V30H23.4062ZM19.7751 19.968V18.1778H28.9964V19.968H19.7751ZM30.8247 25.5076C30.8247 24.5956 30.9992 23.8468 31.3482 23.2613C31.6972 22.6759 32.1476 22.2424 32.6993 21.9609C33.2623 21.6681 33.8478 21.5218 34.4558 21.5218V23.3289C33.9378 23.3289 33.4481 23.4021 32.9864 23.5484C32.5361 23.6836 32.1701 23.9087 31.8887 24.224C31.6072 24.5393 31.4664 24.9559 31.4664 25.4738L30.8247 25.5076ZM29.5749 30V21.5556H31.4664V30H29.5749ZM40.8276 30L40.7432 28.4124V25.6596C40.7432 25.0853 40.6813 24.6068 40.5574 24.224C40.4336 23.8412 40.2365 23.5484 39.9663 23.3458C39.7073 23.1431 39.3639 23.0418 38.9361 23.0418C38.542 23.0418 38.193 23.1262 37.889 23.2951C37.585 23.464 37.3316 23.723 37.129 24.072L35.4063 23.464C35.5977 23.0924 35.8454 22.7434 36.1494 22.4169C36.4534 22.0904 36.8362 21.8314 37.2978 21.64C37.7707 21.4486 38.3281 21.3529 38.9698 21.3529C39.7918 21.3529 40.473 21.5049 41.0134 21.8089C41.5651 22.1129 41.9761 22.5633 42.2463 23.16C42.5165 23.7567 42.6516 24.4942 42.6516 25.3724L42.601 30H40.8276ZM38.4294 30.2027C37.4161 30.2027 36.6279 29.9775 36.065 29.5271C35.5133 29.0767 35.2374 28.4406 35.2374 27.6187C35.2374 26.7404 35.5301 26.0705 36.1156 25.6089C36.7124 25.1473 37.5399 24.9164 38.5983 24.9164H40.8614V26.3689H39.2063C38.4519 26.3689 37.9227 26.4759 37.6187 26.6898C37.3147 26.8924 37.1627 27.1852 37.1627 27.568C37.1627 27.8945 37.2922 28.1535 37.5512 28.3449C37.8214 28.525 38.193 28.6151 38.6658 28.6151C39.0824 28.6151 39.4427 28.5194 39.7467 28.328C40.062 28.1253 40.3041 27.8664 40.473 27.5511C40.6531 27.2246 40.7432 26.8756 40.7432 26.504H41.4356C41.4356 27.6524 41.1879 28.5588 40.6925 29.2231C40.2084 29.8761 39.454 30.2027 38.4294 30.2027ZM48.5191 30.2027C47.6521 30.2027 46.8865 30.0169 46.2222 29.6453C45.5579 29.2625 45.0343 28.739 44.6515 28.0747C44.28 27.4104 44.0942 26.6447 44.0942 25.7778C44.0942 24.9108 44.28 24.1452 44.6515 23.4809C45.0343 22.8166 45.5522 22.2987 46.2053 21.9271C46.8696 21.5443 47.6296 21.3529 48.4853 21.3529C49.3185 21.3529 50.0728 21.5556 50.7484 21.9609C51.424 22.355 51.925 22.9236 52.2515 23.6667L50.4951 24.3422C50.3149 23.9707 50.0391 23.6723 49.6675 23.4471C49.296 23.2219 48.8737 23.1093 48.4008 23.1093C47.9392 23.1093 47.5282 23.2276 47.168 23.464C46.8077 23.6892 46.5262 24.0044 46.3235 24.4098C46.1208 24.8039 46.0195 25.2599 46.0195 25.7778C46.0195 26.2957 46.1208 26.7573 46.3235 27.1627C46.5374 27.5567 46.8245 27.872 47.1848 28.1084C47.5564 28.3336 47.973 28.4462 48.4346 28.4462C48.9075 28.4462 49.3297 28.328 49.7013 28.0916C50.0728 27.8439 50.3487 27.5117 50.5288 27.0951L52.2853 27.7707C51.9588 28.5363 51.4577 29.133 50.7822 29.5609C50.1179 29.9887 49.3635 30.2027 48.5191 30.2027ZM55.5608 27.6356L54.4124 26.3351L58.8035 21.5556H61.0835L55.5608 27.6356ZM53.7537 30V18.1778H55.6453V30H53.7537ZM59.1244 30L56.1519 25.6258L57.3848 24.3084L61.3706 30H59.1244ZM69.6261 30.2027C69.0631 30.2027 68.5452 30.1182 68.0723 29.9493C67.5994 29.7804 67.1941 29.544 66.8563 29.24C66.5185 28.9247 66.2596 28.5588 66.0794 28.1422L67.7176 27.416C67.8865 27.7313 68.1342 27.9959 68.4608 28.2098C68.7985 28.4237 69.1701 28.5307 69.5754 28.5307C70.0145 28.5307 70.3636 28.4575 70.6225 28.3111C70.8928 28.1535 71.0279 27.9396 71.0279 27.6693C71.0279 27.4104 70.9265 27.2133 70.7239 27.0782C70.5212 26.9319 70.2341 26.8136 69.8625 26.7236L69.0688 26.504C68.2693 26.3013 67.6445 25.9804 67.1941 25.5413C66.7437 25.091 66.5185 24.5787 66.5185 24.0044C66.5185 23.16 66.7888 22.507 67.3292 22.0453C67.8809 21.5837 68.669 21.3529 69.6936 21.3529C70.2116 21.3529 70.6845 21.4317 71.1123 21.5893C71.5514 21.7357 71.9286 21.9496 72.2439 22.2311C72.5591 22.5013 72.7787 22.8222 72.9025 23.1938L71.3319 23.9031C71.2193 23.6216 71.0053 23.4077 70.6901 23.2613C70.3748 23.1037 70.0258 23.0249 69.643 23.0249C69.2602 23.0249 68.9618 23.1093 68.7479 23.2782C68.5339 23.4359 68.427 23.661 68.427 23.9538C68.427 24.1227 68.5227 24.2803 68.7141 24.4267C68.9055 24.5618 69.1813 24.6744 69.5416 24.7644L70.5381 25.0009C71.0898 25.136 71.5402 25.3499 71.8892 25.6427C72.2382 25.9241 72.4972 26.245 72.6661 26.6053C72.835 26.9544 72.9194 27.309 72.9194 27.6693C72.9194 28.176 72.773 28.6207 72.4803 29.0036C72.1988 29.3864 71.8104 29.6847 71.315 29.8987C70.8196 30.1013 70.2566 30.2027 69.6261 30.2027ZM74.4364 30L74.4195 18.0258H76.3111L76.3279 30H74.4364ZM80.1617 30V25.6764L82.0533 25.1698V30H80.1617ZM80.1617 25.6764C80.1617 25.0009 80.0829 24.483 79.9253 24.1227C79.7676 23.7511 79.5481 23.4921 79.2666 23.3458C78.9964 23.1994 78.6811 23.1262 78.3208 23.1262C77.6791 23.115 77.1836 23.3233 76.8346 23.7511C76.4968 24.179 76.3279 24.7926 76.3279 25.592H75.6017C75.6017 24.7025 75.7312 23.9425 75.9902 23.312C76.2604 22.6702 76.6376 22.1861 77.1217 21.8596C77.6059 21.5218 78.1801 21.3529 78.8444 21.3529C79.8577 21.3529 80.6459 21.6681 81.2088 22.2987C81.7718 22.9179 82.0533 23.875 82.0533 25.1698L80.1617 25.6764ZM84.0872 30L84.1041 21.5556H85.9788L85.9619 30H84.0872ZM85.033 19.9511C84.729 19.9511 84.4644 19.8441 84.2392 19.6302C84.0253 19.405 83.9183 19.1404 83.9183 18.8364C83.9183 18.5324 84.0253 18.2735 84.2392 18.0596C84.4644 17.8456 84.729 17.7387 85.033 17.7387C85.337 17.7387 85.5959 17.8456 85.8099 18.0596C86.035 18.2735 86.1476 18.5324 86.1476 18.8364C86.1476 19.1404 86.035 19.405 85.8099 19.6302C85.5959 19.8441 85.337 19.9511 85.033 19.9511ZM88.2756 33.3778V21.5556H90.049L90.1672 23.1093V33.3778H88.2756ZM92.8356 30.2027C92.1263 30.2027 91.5127 30.0225 90.9948 29.6622C90.4881 29.2907 90.0996 28.7727 89.8294 28.1084C89.5592 27.4441 89.4241 26.6673 89.4241 25.7778C89.4241 24.877 89.5592 24.1001 89.8294 23.4471C90.0996 22.7828 90.4881 22.2705 90.9948 21.9102C91.5127 21.5387 92.1263 21.3529 92.8356 21.3529C93.6013 21.3529 94.2656 21.5387 94.8285 21.9102C95.4028 22.2705 95.8475 22.7828 96.1628 23.4471C96.4893 24.1001 96.6525 24.877 96.6525 25.7778C96.6525 26.6673 96.4893 27.4441 96.1628 28.1084C95.8475 28.7727 95.4028 29.2907 94.8285 29.6622C94.2656 30.0225 93.6013 30.2027 92.8356 30.2027ZM92.3628 28.48C92.8131 28.48 93.2128 28.3674 93.5619 28.1422C93.9109 27.9058 94.1868 27.5849 94.3894 27.1796C94.6033 26.7742 94.7103 26.307 94.7103 25.7778C94.7103 25.2486 94.609 24.7813 94.4063 24.376C94.2149 23.9707 93.9447 23.6554 93.5956 23.4302C93.2466 23.205 92.8413 23.0924 92.3796 23.0924C91.9518 23.0924 91.569 23.205 91.2312 23.4302C90.8934 23.6554 90.6288 23.9707 90.4374 24.376C90.2573 24.7813 90.1672 25.2486 90.1672 25.7778C90.1672 26.307 90.2573 26.7742 90.4374 27.1796C90.6288 27.5849 90.8878 27.9058 91.2143 28.1422C91.5521 28.3674 91.9349 28.48 92.3628 28.48ZM98.2685 30V21.5556H100.042L100.16 23.1093V30H98.2685ZM103.994 30V25.6764L105.885 25.1698V30H103.994ZM109.736 30V25.6764L111.611 25.1698V30H109.736ZM103.994 25.6764C103.994 25.0009 103.915 24.483 103.757 24.1227C103.611 23.7511 103.397 23.4921 103.116 23.3458C102.845 23.1994 102.524 23.1262 102.153 23.1262C101.522 23.115 101.033 23.3233 100.684 23.7511C100.335 24.179 100.16 24.7926 100.16 25.592H99.4507C99.4507 24.7025 99.5802 23.9425 99.8391 23.312C100.098 22.6702 100.47 22.1861 100.954 21.8596C101.438 21.5218 102.012 21.3529 102.676 21.3529C103.701 21.3529 104.489 21.6681 105.041 22.2987C105.604 22.9179 105.885 23.875 105.885 25.1698L103.994 25.6764ZM109.736 25.6764C109.736 25.0009 109.657 24.483 109.5 24.1227C109.342 23.7511 109.122 23.4921 108.841 23.3458C108.571 23.1994 108.255 23.1262 107.895 23.1262C107.253 23.115 106.758 23.3233 106.409 23.7511C106.06 24.179 105.885 24.7926 105.885 25.592H105.176C105.176 24.7025 105.305 23.9425 105.564 23.312C105.823 22.6702 106.195 22.1861 106.679 21.8596C107.163 21.5218 107.737 21.3529 108.402 21.3529C109.426 21.3529 110.22 21.6681 110.783 22.2987C111.346 22.9179 111.622 23.875 111.611 25.1698L109.736 25.6764ZM117.307 30.2027C116.485 30.2027 115.753 30.0169 115.112 29.6453C114.481 29.2625 113.98 28.739 113.609 28.0747C113.248 27.4104 113.068 26.6447 113.068 25.7778C113.068 24.9108 113.254 24.1452 113.625 23.4809C113.997 22.8166 114.504 22.2987 115.145 21.9271C115.799 21.5443 116.542 21.3529 117.375 21.3529C118.129 21.3529 118.805 21.5499 119.401 21.944C120.009 22.3268 120.494 22.8841 120.854 23.616C121.214 24.3479 121.394 25.2204 121.394 26.2338H119.486C119.486 25.5019 119.396 24.8996 119.216 24.4267C119.047 23.9538 118.799 23.6047 118.473 23.3796C118.157 23.1431 117.769 23.0249 117.307 23.0249C116.823 23.0249 116.407 23.1319 116.057 23.3458C115.708 23.5597 115.444 23.875 115.264 24.2916C115.084 24.6969 114.993 25.2092 114.993 25.8284C114.993 26.3801 115.1 26.853 115.314 27.2471C115.54 27.6412 115.838 27.9452 116.209 28.1591C116.592 28.3618 117.015 28.4631 117.476 28.4631C117.983 28.4631 118.399 28.3505 118.726 28.1253C119.052 27.8889 119.306 27.5905 119.486 27.2302L121.225 27.9733C120.989 28.4237 120.685 28.8178 120.313 29.1556C119.953 29.4933 119.52 29.7523 119.013 29.9324C118.518 30.1126 117.949 30.2027 117.307 30.2027ZM114.318 26.2338V24.7307H120.398V26.2338H114.318ZM122.843 30V21.5556H124.616L124.735 23.1093V30H122.843ZM128.568 30V25.6764L130.46 25.1698V30H128.568ZM128.568 25.6764C128.568 25.0009 128.49 24.483 128.332 24.1227C128.186 23.7511 127.972 23.4921 127.69 23.3458C127.42 23.1994 127.099 23.1262 126.728 23.1262C126.097 23.115 125.607 23.3233 125.258 23.7511C124.909 24.179 124.735 24.7926 124.735 25.592H124.025C124.025 24.7025 124.155 23.9425 124.414 23.312C124.673 22.6702 125.044 22.1861 125.528 21.8596C126.013 21.5218 126.587 21.3529 127.251 21.3529C128.276 21.3529 129.064 21.6681 129.616 22.2987C130.179 22.9179 130.46 23.875 130.46 25.1698L128.568 25.6764ZM135.737 30.2027C134.847 30.2027 134.166 29.9831 133.693 29.544C133.232 29.0936 133.001 28.4519 133.001 27.6187V18.9209H134.876V27.264C134.876 27.6581 134.966 27.9564 135.146 28.1591C135.337 28.3618 135.613 28.4631 135.973 28.4631C136.086 28.4631 136.21 28.4406 136.345 28.3956C136.48 28.3505 136.632 28.2661 136.801 28.1422L137.493 29.5778C137.201 29.7804 136.908 29.9324 136.615 30.0338C136.322 30.1464 136.03 30.2027 135.737 30.2027ZM131.599 23.1769V21.5556H137.156V23.1769H131.599Z" fill="white" />
                    </svg>
                    </div>
                </div>
            </div>
        </nav>
        <Home/>
    </div>
  )
}

export default Alogin