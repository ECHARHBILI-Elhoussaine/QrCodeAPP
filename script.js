    let imgBox = document.getElementById("imgbox");
        let qrtext= document.getElementById("qrtext");
        let qrImage = document.getElementById("qrImage");

        function generateQR(){
            if(qrtext.value != ''){
                qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
                qrImage.classList.add("show-img");
            }
            else{
                qrtext.classList.add('error');
                setTimeout(()=>{
                    qrtext.classList.remove('error')
                },1000);
            }
        }