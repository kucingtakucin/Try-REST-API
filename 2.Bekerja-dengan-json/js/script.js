function getData() {
    fetch('data.json')
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error(response.statusText)
        })
        .then(response => {
            response.menu.forEach(elemen => {
                document.getElementById('daftar-menu').innerHTML += `
            <div class="col-md-4">
                <div class="card mb-3">
                    <img src="img/menu/${elemen.gambar}" class="card-img-top" alt="Menu">
                    <div class="card-body">
                        <h5 class="card-title">${elemen.nama}</h5>
                        <p class="card-text">${elemen.deskripsi}</p>
                        <h5 class="card-title">Rp.${elemen.harga}</h5>
                        <a href="#" class="btn btn-primary">Pesan Sekarang</a>
                    </div>
                </div>
            </div>`
            })
        })
        .catch(error => {
            console.error(error)
        })
}
getData()
document.body.addEventListener('click',  (event) => {
    if (event.target.classList.contains('nav-link')) {
        Array.from(document.getElementsByClassName('nav-link'))
            .forEach(elemen => {
                elemen.classList.remove('active')
            })
        event.target.classList.add('active')
        document.getElementById('judul').innerHTML = event.target.innerHTML;
        if (event.target.innerHTML === 'All Menu') {
            getData()
            return;
        }
        fetch('data.json')
            .then(response => response.json())
            .then(response => {
                let content = ''
                response.menu.forEach((elemen, i) => {
                    if (elemen.kategori === event.target.innerHTML.toLowerCase()) {
                        content += `
                        <div class="col-md-4">
                            <div class="card mb-3">
                                <img src="img/menu/${elemen.gambar}" class="card-img-top" alt="Menu">
                                <div class="card-body">
                                    <h5 class="card-title">${elemen.nama}</h5>
                                    <p class="card-text">${elemen.deskripsi}</p>
                                    <h5 class="card-title">Rp.${elemen.harga}</h5>
                                    <a href="#" class="btn btn-primary">Pesan Sekarang</a>
                                </div>
                            </div>
                        </div>`
                    }
                })
                document.getElementById('daftar-menu').innerHTML = content
            })
    }
});