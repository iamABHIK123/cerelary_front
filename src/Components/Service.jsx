import React from 'react'
import "./Service.css"
function Service() {
    return (
        <div>
            <div className='service'>
                <div className='ser-head'>Services</div>
                <div className='table'>

                    <div class="card border-dark mb-3 b-1" style={{ maxWidth: "18rem" }}>

                        <div class="card-header" style={{ textAlign: 'center', color: 'black' }}><svg width="52" height="52" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 29.3333V13.3333M27.2266 16.4933C28.3866 16.96 29.1066 18.3333 28.84 19.5467L28.2933 22.0267C27.3466 26.2933 24 29.3333 19.1733 29.3333H12.8266C7.99998 29.3333 4.65331 26.2933 3.70664 22.0267L3.15998 19.5467C2.89331 18.3333 3.61331 16.96 4.77331 16.4933L6.66664 15.7333L14.0133 12.7867C15.2933 12.28 16.7066 12.28 17.9866 12.7867L25.3333 15.7333L27.2266 16.4933Z" stroke="#0075FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M25.3333 10.6667V15.7333L17.9866 12.7867C16.7066 12.28 15.2933 12.28 14.0133 12.7867L6.66663 15.7333V10.6667C6.66663 8.46667 8.46663 6.66667 10.6666 6.66667H21.3333C23.5333 6.66667 25.3333 8.46667 25.3333 10.6667ZM19.3333 6.66667H12.6666V4.00001C12.6666 3.26667 13.2666 2.66667 14 2.66667H18C18.7333 2.66667 19.3333 3.26667 19.3333 4.00001V6.66667Z" stroke="#0075FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                            <h5>Freight Services</h5></div>
                        <div class="card-body text-dark">

                            <p class="card-text">Open new Opportunites to grow your busniess. Enter new markets and discover new contitnents, We are with you, door-to-door.</p>
                        </div>
                    </div>


                    <div class="card border-dark mb-3 b-1" style={{ maxWidth: "18rem" }}>

                        <div class="card-header" style={{ textAlign: 'center', color: 'black' }}><svg width="48" height="48" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.33329 7V6.06666C9.33329 4.00166 9.33329 2.33333 13.0666 2.33333H14.9333C18.6666 2.33333 18.6666 4.00166 18.6666 6.06666V7M9.33329 25.6667H18.6666C23.3566 25.6667 24.1966 23.7883 24.4416 21.5017L25.3166 12.1683C25.6316 9.32166 24.815 7 19.8333 7H8.16663C3.18496 7 2.36829 9.32166 2.68329 12.1683L3.55829 21.5017C3.80329 23.7883 4.64329 25.6667 9.33329 25.6667Z" stroke="#FF4747" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16.3333 16.3567V15.1667C16.3333 14 16.3333 14 15.1666 14H12.8333C11.6666 14 11.6666 14 11.6666 15.1667V16.3683M16.3333 16.3567C16.3333 17.6283 16.3216 18.6667 14 18.6667C11.69 18.6667 11.6666 17.64 11.6666 16.3683M16.3333 16.3567C19.5582 15.9552 22.6288 14.743 25.2583 12.8333M11.6666 16.3683C8.64497 16.03 5.68164 14.945 3.05664 13.1483" stroke="#FF4747" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                            <h5>Business Services</h5></div>
                        <div class="card-body text-dark">

                            <p class="card-text">We support your goals for growth with cargo insurance, online payments and paperless workflow. Take your business to the next level.</p>
                        </div>
                    </div>


                    <div class="card border-dark mb-3 b-1" style={{ maxWidth: "18rem" }}>

                        <div class="card-header" style={{ textAlign: 'center', color: 'black' }}><svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22" stroke="#FF6813" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.99995 3H8.99995C7.04998 8.84157 7.04998 15.1584 8.99995 21H7.99995M15 3C15.97 5.92 16.46 8.96 16.46 12" stroke="#FF6813" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3 16V15C5.92 15.97 8.96 16.46 12 16.46M3 9C8.84157 7.05003 15.1584 7.05003 21 9M22 22L21 21M18.2 21.4C19.0487 21.4 19.8626 21.0629 20.4627 20.4627C21.0629 19.8626 21.4 19.0487 21.4 18.2C21.4 17.3513 21.0629 16.5374 20.4627 15.9373C19.8626 15.3371 19.0487 15 18.2 15C17.3513 15 16.5374 15.3371 15.9373 15.9373C15.3371 16.5374 15 17.3513 15 18.2C15 19.0487 15.3371 19.8626 15.9373 20.4627C16.5374 21.0629 17.3513 21.4 18.2 21.4Z" stroke="#FF6813" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                            <h5>Shipping & Logistics</h5></div>

                        <div class="card-body text-dark">
                            <p class="card-text">Find powerful solutions to meet your diverse transportation needs. Agile solutions to handle all your supply chain needs.</p>
                        </div>
                    </div>


                    <div class="card border-dark mb-3 b-1" style={{ maxWidth: "18rem" }}>

                        <div class="card-header" style={{ textAlign: 'center', color: 'black' }}><svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 18.86H17.24C16.44 18.86 15.68 19.17 15.12 19.73L13.41 21.42C12.63 22.19 11.36 22.19 10.58 21.42L8.87 19.73C8.31 19.17 7.54 18.86 6.75 18.86H6C4.34 18.86 3 17.53 3 15.89V4.97999C3 3.33999 4.34 2.00999 6 2.00999H18C19.66 2.00999 21 3.33999 21 4.97999V15.89C21 17.52 19.66 18.86 18 18.86Z" stroke="#47A7FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7 9.15999C7 8.22999 7.76 7.46999 8.69 7.46999C9.62 7.46999 10.38 8.22999 10.38 9.15999C10.38 11.04 7.71 11.24 7.12 13.03C7 13.4 7.31 13.77 7.7 13.77H10.38M16.04 13.76V8.04999C16.0405 7.92364 15.9998 7.80057 15.924 7.69949C15.8482 7.59841 15.7414 7.52485 15.62 7.48999C15.4977 7.45546 15.3676 7.46111 15.2488 7.50612C15.1299 7.55113 15.0287 7.63311 14.96 7.73999C14.24 8.89999 13.46 10.22 12.78 11.38C12.67 11.57 12.67 11.82 12.78 12.01C12.89 12.2 13.1 12.32 13.33 12.32H17" stroke="#47A7FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                            <h5>24/7 Support</h5></div>

                        <div class="card-body text-dark">
                            <p class="card-text">Receive support from our experts all over the world at every stage of the process, 24/7.</p>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Service
