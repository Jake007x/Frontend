import Navbar from '/app/component/nav';

export default function about() {
    return (
      <>
      <Navbar />
        <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <div class="card mb-3">
                    <img src="/img/z.png" class="card-img-top custom-img"
                        alt="Card Image"></img>
                    <div class="card-body text-center">
                        <h5 class="card-title">Captain America: Civil War</h5>
                        <p class="card-text">ดำเนินเรื่องต่อจาก Avengers: Age of Ultron เมื่อกัปตันอเมริกาและทีมอเวนเจอร์สต้องเข้าไปจัดการกับเหตุการณ์ระหว่างประเทศซึ่งนำมาสู่ความเสียหายใหญ่หลวง ทำให้นักการเมืองพยายามที่จะออกกฎหมายลงทะเบียนเหล่าฮีโรเพื่อที่จะคอยควบคุมเหล่าอเวนเจอร์ส นำไปสู่การแตกแยกกันของเหล่าอเวนเจอร์ส ในขณะที่พวกเขากำลังพยายามปกป้องโลกใบนี้จากศัตรูตัวใหม่</p>
                        <a href="#" class="btn btn-primary">Button</a>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card mb-3">
                    <img src="/img/c.png" class="custom-img"
                        alt="Card Image"></img>
                    <div class="card-body text-center">
                        <h5 class="card-title">Jumanji: The Next Level</h5>
                        <p class="card-text">เรื่องราวของ สี่สหายจะต้องกลับเข้าไปสู่โลกของจูแมนจี้อีกครั้ง เพื่อช่วยเหลือหนึ่งในสมาชิกแก๊งค์ของพวกเขา แต่แล้วพวกเขาก็ได้ค้นพบว่าทุกอย่างมันไม่ได้เป็นแบบที่เขาคาดคิดเอาไว้ พวกเขาจะต้องรวบรวมความกล้าหาญเพื่อฝ่าฟันนานาอุปสรรคตั้งแต่ทะเลทรายอันแห้งแล้งไปจนถึงภูเขาหิมะ เพื่อที่จะหนีออกมาจากโลกของเกมที่อันตรายที่สุด</p>
                        <a href="#" class="btn btn-primary">Button</a>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card mb-3">
                    <img src="/img/x.png" class="card-img-top custom-img"
                        alt="Card Image"></img>
                    <div class="card-body text-center">
                        <h5 class="card-title">Free Guy</h5>
                        <p class="card-text">Free Guy เป็นเรื่องราวของนายธนาคารหนุ่มสุดเหงาผู้ค้นพบว่าจริงๆแล้วตัวเองเป็นเพียงแค่ตัวละครพื้นหลัง (NPC) ภายในวิดีโอเกมส์โอเพ่นเวิร์ลเท่านั้น และเขาจะต้องทำอะไรบางอย่างเพื่อป้องกันไม่ให้ผู้สร้างเกมส์ปิดเกมส์นี้ลง และในภารกิจนี้เขาก็ได้ความช่วยเหลือจากอวตารผู้เล่นคนอื่นด้วย</p>
                        <a href="#" class="btn btn-primary">Button</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
      </>
    );
  }
  