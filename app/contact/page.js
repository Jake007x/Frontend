import Navbar from '/app/component/nav';

export default function about() {
    return (
      <>
      <Navbar />
        <div class="container-fluid">
        <div class="row justify-content-center">

            <div class="col-md-4">
                <div class="card mb-3">
                    <img src="/img/i.png" class="card-img-top custom-img"
                        alt="Card Image"></img>
                    <div class="card-body text-center">
                        <h5 class="card-title">ที่ตั้งและเบอร์โทร</h5>
                        <p class="card-text">9 ถนนเวียงแก้ว ตำบลศรีภูมิ อำเภอเมืองเชียงใหม่ เชียงใหม่ 50200</p>
                        <p class="card-text">เบอร์โทรศัพท์ 053217708 </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
      </>
    );
  }
  