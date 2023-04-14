const Carousel = () => {
    return(
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active satu">
                    <div class="container mt-5">
                        <div class="row ">
                            <div class="col-md-6  ">
                            <img src="aset/g.png" class="w-100 " alt="sss"/>
                            </div>
                            <div class="col-md-6  ">
                                <h5 class="card-title text-success fs-1 text-center mt-5">Rencana</h5>
                                <p class=" ps-5 px-5 card-text text-success mb-5 fs-4"> Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.This is a long paragraph written to show how the line-height of an element is affected by our utilities.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="carousel-item dua">
                <div class="container mt-5">
                        <div class="row ">
                            <div class="col-md-6  ">
                            <img src="aset/f.png" class="w-100 " alt="sss"/>
                            </div>
                            <div class="col-md-6  ">
                                <h5 class="card-title text-success fs-1 text-center mt-5">Panduan</h5>
                                <p class=" ps-5 px-5 card-text text-success fs-4 mb-5"> Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.This is a long paragraph written to show how the line-height of an element is affected by our utilities.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item tiga">
                <div class="container mt-5">
                        <div class="row ">
                            <div class="col-md-6  ">
                            <img src="aset/e.png" class="w-100 " alt="sss"/>
                            </div>
                            <div class="col-md-6  ">
                                <h5 class="card-title text-success fs-1 text-center mt-5">Kelompok</h5>
                                <p class=" ps-5 px-5 card-text text-success mb-5 fs-4"> Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon " aria-hidden="true"></span>
                <span class="visually-hidden ">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
    )
}
export default Carousel;