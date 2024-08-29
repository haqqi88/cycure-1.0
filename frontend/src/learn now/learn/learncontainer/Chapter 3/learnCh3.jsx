import React from "react"
import { useState, useEffect } from "react";
import komik1 from "../../../../assets/comic.ch3/komik1.png"
import komik2 from "../../../../assets/comic.ch3/komik2.png"
import komik3 from "../../../../assets/comic.ch3/komik3.png"
import { useNavigate } from "react-router-dom";
import { useLearnContext } from "../../../../context/LearnContext";


const Input = ({value, inputValue, status, submit}) =>{
    return(
        <input type="text" placeholder=". . . . . ." className={`input text-sm ${submit ? status ? "input-accent" :  "input-error" : "input-bordered"} input-xs w-24 bg-transparent`} value={value} onChange={inputValue} />
    )} 

    
const LearnChapter3 = () =>{
    const navigate = useNavigate();
    const {progress3, setProgress3} = useLearnContext();
    const {chapter, setChapter} = useLearnContext();
    const [submit, setSubmit] = useState(false) 
    const [status, setStatus] = useState({}) 
    const [gap1, setGap1] = useState('');
    const [gap2, setGap2] = useState('');
    const [gap3, setGap3] = useState('');
    const [gap4, setGap4] = useState('');
    const [gap5, setGap5] = useState('');

    const handleOnClick = () =>{
        setProgress3(progress3 + 25);
    }

    const handleOnClick2 = () =>{
        localStorage.setItem("progress3", JSON.stringify(progress3));
        navigate("/Learn/PostestCh3")
    }
    console.log(progress3);

    const handleChange1 = (e) => {
        setGap1(e.target.value);
        setSubmit(false);
      };
    
    const handleChange2 = (e) => {
        setGap2(e.target.value);
        setSubmit(false);
    };
    
    const handleChange3 = (e) => {
        setGap3(e.target.value);
        setSubmit(false);
    };
    
    const handleChange4 = (e) => {
        setGap4(e.target.value);
        setSubmit(false);
    };
    
    const handleChange5 = (e) => {
        setGap5(e.target.value);
        setSubmit(false);
    };
      
    const onSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        let answer = {
            gap1: 'media sosial',
            gap2: 'privasi',
            gap3: 'nomor telepon',
            gap4: 'enkripsi',
            gap5: 'informasi pribadi',
        };
        setStatus({ // Update status
            gap1: gap1 === answer.gap1,
            gap2: gap2 === answer.gap2,
            gap3: gap3 === answer.gap3,
            gap4: gap4 === answer.gap4,
            gap5: gap5 === answer.gap5,
          });
        setSubmit(true);
    };
    

    return (
        <div className="flex w-full bg-[#1a00c5] rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-15">
            <div className="carousel m-3 container w-full max-w-full">
                    <div id="slide1" className="carousel-item relative w-full overflow-hidden">
                        <div className="flex w-full justify-between mx-14">
                                <img src={komik1} alt="" />
                                <img src={komik2} alt="" />
                        </div>
                        <div className="absolute top-3/4 w-full flex transform justify-between">
                            <a href="#" className=""></a>
                            <a href="#slide2" className="btn btn-circle" onClick={() => {progress3 === 25 ? handleOnClick() : null}}>❯</a>
                        </div>
                    </div>      
                    <div id="slide2" className="carousel-item relative w-full h-full flex flex-col">
                        <div className="flex flex-col w-full text-justify text-lg poppins-regular text-gray-100 items-center gap-3 px-20">
                            <h1 className="text-xl poppins-medium pt-5 pb-3">Petualangan Sonya si Penjelajah Digital</h1>
                            <form onSubmit={onSubmit}>
                                <p><span className="tab"/>Sonya adalah seorang anak yang sangat menyukai teknologi. Ia suka bermain game, menonton video, dan berselancar di internet. Setiap hari, Sonya menghabiskan banyak waktu di dunia maya. Ia punya banyak teman online dan sering berbagi cerita dan foto di <Input value={gap1} inputValue={handleChange1} status={status.gap1} submit={submit}/>.</p>
                                <p><span className="tab"/>Suatu hari, Sonya membaca sebuah artikel tentang pentingnya menjaga <Input value={gap2} inputValue={handleChange2} status={status.gap2} submit={submit}/>. Ia baru tahu bahwa banyak orang jahat yang memanfaatkan informasi pribadi orang lain untuk tujuan yang tidak baik. Sonya jadi merasa khawatir. Ia mulai berpikir tentang semua informasi pribadi yang sudah ia bagikan di internet.</p>
                                <p><span className="tab"/>"Wah, bahaya juga ya kalau sembarangan membagikan informasi pribadi," gumam Sonya.</p>
                                <p><span className="tab"/>Dari situ, Sonya mulai lebih berhati-hati. Ia mengubah pengaturan privasi di akun media sosialnya, sehingga hanya teman-teman dekatnya saja yang bisa melihat postingannya. Ia juga tidak lagi membagikan <Input value={gap3} inputValue={handleChange3} status={status.gap3} submit={submit}/>-nya yang sebenarnya.</p>
                                <p><span className="tab"/>Selain itu, Sonya juga belajar tentang <Input value={gap4} inputValue={handleChange4} status={status.gap4} submit={submit}/>. Ia tahu bahwa hal itu seperti membuat sebuah surat rahasia yang hanya bisa dibaca oleh orang yang punya kunci khusus. Dengan begitu, <Input value={gap5} inputValue={handleChange5} status={status.gap5} submit={submit}/> -nya akan lebih aman.</p>
                                <p><span className="tab"/>Suatu hari, Sonya mengikuti lomba membuat video tentang pentingnya menjaga privasi. Videonya sangat bagus dan berhasil memenangkan juara pertama. Sonya sangat senang karena bisa membantu teman-temannya untuk lebih memahami pentingnya menjaga privasi di dunia digital. </p>

                                <div className="flex justify-center pt-8">
                                    <button type="submit" className="btn btn-success btn-circle w-32">Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className="absolute top-3/4 w-full flex transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle" onClick={() => {progress3 === 50 ? handleOnClick() : null}}>❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full h-full justify-center overflow-auto">
                        <div className="w-full h-full justify-center">
                        <div className="flex flex-col text-justify text-lg poppins-light w-full text-gray-100 items-start gap-5 px-32">
                            <div className="flex w-full items-center justify-center pt-5">
                                <h1 className="poppins-medium">Materi Bagian 3</h1>
                            </div>
                            <div>
                                <h1 className="poppins-medium pt-2">Identifikasi Risiko dan Perlindungan</h1>
                                <ul className="list-decimal pl-7 pt-1">
                                    <li><h1 className="poppins-medium">Komputer Rumah:</h1>Risiko termasuk pembobolan, berbagi perangkat dengan orang lain, dan koneksi ke jaringan atau aplikasi penyimpanan lain. Solusinya adalah dengan memperbarui firewall/router, menggunakan perangkat lunak keamanan, dan mengubah kata sandi bawaan.</li>
                                    <li><h1 className="popins-medium">Perangkat Seluler:</h1> Selalu terhubung ke internet yang tidak aman dan sering menyimpan informasi rahasia. Pastikan menggunakan aplikasi resmi, tidak melakukan root pada perangkat, dan gunakan enkripsi.</li>
                                </ul>
                            </div>
                            <div>
                                <h1 className="poppins-medium">Melindungi dari Resiko</h1>
                                <p>Setelah Anda mengidentifikasi apa yang harus Anda lindungi, Anda harus mengembangkan dan menerapkan perlindungan yang sesuai untuk barang-barang tersebut untuk menjaganya tetap aman dan membatasi dampak dari potensi terjadinya pembobolan data.</p>
                                <p className="pt-5">Hal-hal yang menjadi elemen dasar perlindungan bagi sebagian besar individu meliputi:</p>
                
                                <div className="gap-1 pl-7 pt-2">
                                    <h1 className="poppins-medium">Firewall/router</h1>
                                    <p className="whitespace-break-spaces">     Firewall akan memblokir orang luar yang mencoba menghubungi komputer di dalam rumah Anda, tetapi tidak akan memblokir server web untuk merespons jika komputer di dalam rumah Anda meminta halaman web dari server. Router menggunakan beberapa teknologi untuk mencapai perlindungan tersebut.</p>
                                </div>
                                <div className="gap-1 pl-7 pt-2">
                                    <h1 className="poppins-medium">Security software</h1>
                                    <p>Bagaimana seharusnya Anda menggunakan perangkat lunak keamanan untuk melindungi diri Anda?</p>
                                    <div>
                                        <ul className="list-disc pl-8">
                                            <li>Gunakan perangkat lunak keamanan di semua komputer dan perangkat seluler Anda. Perangkat lunak ini setidaknya harus memiliki antivirus dan kemampuan firewall perangkat pribadi.</li>
                                            <li>Gunakan perangkat lunak anti spam pada perangkat apa pun yang Anda gunakan untuk membaca email.</li>
                                            <li>Gunakan kata sandi yang kuat untuk masuk ke komputer dan perangkat seluler apa pun.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1 className="poppins-medium">{"Privacy 101 (Privasi 101)"}</h1>
                                <p className="whitespace-break-spaces">     Teknologi mengancam privasi pribadi dalam banyak hal: Kamera yang ada di mana-mana mengawasi Anda secara teratur, perusahaan teknologi melacak perilaku online Anda melalui berbagai metode teknis, dan perangkat seluler melacak lokasi Anda.</p>
                                <div className="pt-3 pl-8">
                                    <h1 className="poppins-medium">Berpikir sebelum berbagi & mengunggah</h1>
                                    <p className="whitespace-break-spaces">   Jika Anda ingin meningkatkan privasi Anda, hal pertama yang harus dilakukan adalah mempertimbangkan informasi apa saja yang mungkin Anda ungkapkan tentang diri Anda dan orang yang Anda cintai sebelum mengungkapkannya. Hal ini berlaku saat berinteraksi dengan lembaga pemerintah, perusahaan, fasilitas medis, dan individu lainnya. Jika Anda tidak perlu memberikan informasi pribadi, jangan berikan.</p>
                                </div>
                                <div className="pt-3 pl-7">
                                    <h1 className="poppins-medium">Tips Melindungi Privasi</h1>
                                    <p className="whitespace-break-spaces">     Selain berpikir sebelum berbagi, Anda dapat melakukan beberapa hal lain untuk mengurangi terhadap risiko berbagi berlebihan:</p>
                                    <ul>
                                        <li>Gunakan pengaturan privasi media sosial. Selain tidak membagikan informasi pribadi, pastikan pengaturan privasi Anda di media sosial diatur untuk melindungi data Anda agar tidak dapat dilihat oleh anggota masyarakat, kecuali jika postingan tersebut ditujukan untuk konsumsi publik.</li>
                                        <li>Enkripsi semua informasi pribadi, seperti dokumen, gambar, video, dan sebagainya. Jika Anda tidak yakin apakah sesuatu harus dienkripsi, mungkin sebaiknya dienkripsi</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <p className="whitespace-break-spaces"><h1 className="poppins-medium">Kesadaran Sebagai Target:</h1>       Penting untuk menyadari bahwa Anda adalah target potensial serangan siber. Anggota keluarga juga harus memahami risiko ini karena tindakan mereka dapat mempengaruhi keamanan seluruh jaringan.</p>
                            </div>
                            <div>
                                <h1 className="poppins-medium">Keamanan Akun Eksternal:</h1>
                                <ul className="list-disc pl-8">
                                    <li>Lakukan bisnis hanya dengan pihak yang dapat dipercaya.</li>
                                    <li>Gunakan aplikasi dan situs web resmi.</li>
                                    <li>Monitor akun secara teratur dan laporkan aktivitas mencurigakan.</li>
                                </ul>
                            </div>
                        </div>
                            <div className="w-full flex justify-between pb-28">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle" onClick={() => {progress3 === 75 ? handleOnClick() : null}}>❯</a>
                            </div>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full h-full justify-center overflow-auto">
                        <div className="flex flex-col h-full container">
                            <div className="flex w-full justify-center">
                                <div className="flex flex-col text-justify text-lg poppins-light w-10/12 text-gray-100 gap-5">
                                    <div className="flex w-full items-center justify-center pt-5">
                                        <h1 className="poppins-medium">Materi Bagian 3 kedua</h1>
                                    </div>
                                    <div>
                                        <h1 className="poppins-medium">Pencegahan Lebih Baik daripada Penanganan</h1>
                                        <p className="whitespace-break-spaces pt-1">     Persiapan adalah kunci saat menghadapi pelanggaran keamanan. Tindakan pencegahan yang tepat jauh lebih efektif daripada harus menanggulangi pelanggaran setelah terjadi. Dengan teknik-teknik yang baik, Anda akan lebih siap mendeteksi dan mengatasi pelanggaran.</p>
                                    </div>
                                    <div>
                                        <h1 className="poppins-medium">Tetap Tenang dan Bijak</h1>
                                        <p className="whitespace-break-spaces pt-1">     Saat menghadapi pelanggaran siber, penting untuk tetap tenang dan berpikir jernih. Hindari tindakan impulsif, seperti mencari saran di internet atau mengunduh perangkat lunak dari sumber yang tidak terpercaya. Sebaiknya, hentikan aktivitas, amankan data, dan fokus pada pemulihan.</p>                                        </div>
                                    <div>
                                        <h1 className="poppins-medium">Libatkan Profesional</h1>
                                        <p className="whitespace-break-spaces pt-1">       Idealnya, Anda harus melibatkan profesional keamanan siber untuk membantu pemulihan. Meskipun buku ini memberikan panduan yang baik, tidak ada yang bisa menggantikan pengalaman bertahun-tahun dari seorang profesional yang baik.</p>
                                        <p className="whitespace-break-spaces">    Anda harus menggunakan logika yang sama dan mencari bantuan profesional saat menghadapi krisis komputer dan data serius, seperti:</p>
                                        <ul className="list-disc pl-10">
                                            <li>Jika Anda sakit parah, Anda akan pergi ke dokter atau rumah sakit.</li>
                                            <li>Jika Anda ditangkap dan didakwa dengan kejahatan, Anda akan menyewa pengacara.</li>
                                            <li>Jika IRS mengirimkan surat tentang audit, Anda akan menyewa akuntan.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h1 className="poppins-medium">Pemulihan dari Pelanggaran Tanpa Bantuan Profesional</h1>
                                        <p className="whitespace-break-spaces">     Jika Anda tidak dapat melibatkan profesional, ikuti langkah-langkah berikut yang biasanya diikuti oleh para profesional:</p>
                                        <ul className="list-decimal pl-10">
                                            <li>Ketahui apa yang terjadi (atau sedang terjadi) Kumpulkan informasi sebanyak mungkin tentang serangan, sistem dan database yang terkena dampak, serta potensi risiko yang mungkin timbul.</li>
                                            <li>
                                                <h1>Isolasi serangan</h1>
                                                <ul className="list-disc pl-5">
                                                    <li>Putuskan semua konektivitas jaringan secepat mungkin dengan mematikan router atau mencabut kabel Ethernet.</li>
                                                    <li>Matikan Wi-Fi pada perangkat yang terinfeksi dan data seluler jika perlu.</li>
                                                    <li>Cabut drive USB dan perangkat removable lainnya.</li>
                                                    <li>Cabut akses yang digunakan penyerang.</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <h1>Hentikan dan hilangkan serangan</h1>
                                                <ul className="list-disc pl-5">
                                                    <li>Jika Anda memiliki disk boot perangkat lunak keamanan, gunakan untuk mem-boot komputer.</li>
                                                   <li>Jika tidak, boot komputer dalam Safe Mode untuk membersihkan sistem.</li>
                                                    <li>Jalankan pemindaian penuh dengan perangkat lunak keamanan yang diperbarui.</li>
                                                    <li>Hapus file yang tidak diperlukan, lakukan pemulihan jika data telah terhapus atau rusak.</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p><span className="tab"/>Sebagai contoh, sebuah perusahaan kecil mengalami pelanggaran keamanan besar ketika seorang karyawan tidak sengaja mengunduh perangkat lunak dari situs yang tidak terpercaya. Perangkat lunak tersebut mengandung malware yang menyebar ke seluruh jaringan perusahaan. Ketika malware mulai mencuri data penting, perusahaan tidak hanya kehilangan data tetapi juga menghadapi kerugian finansial dan reputasi yang serius. Berkat persiapan yang matang sebelumnya, perusahaan dapat cepat mendeteksi serangan, mengisolasi masalah, dan memulai proses pemulihan sebelum kerusakan lebih lanjut terjadi. Jika mereka tidak melakukan langkah-langkah pencegahan sebelumnya, dampaknya bisa jauh lebih parah.</p>
                                        <p><span className="tab"/>Dengan melakukan persiapan dan pencegahan yang tepat, Anda dapat meningkatkan peluang untuk mendeteksi dan mengatasi pelanggaran keamanan dengan lebih efektif, mengurangi dampak negatif pada sistem dan data Anda.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex justify-between pb-28">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide5" className="btn btn-circle" onClick={() => {progress3 === 75 ? handleOnClick() : null}}>❯</a>
                            </div>
                        </div>
                    </div>
                  
                    <div id="slide5" className="carousel-item relative w-full">
                        <div className="flex w-full justify-between mx-14">
                            <img src={komik3} alt="" />
                        </div>
                        <div className="absolute top-3/4 w-full flex transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <button onClick={() =>handleOnClick2()} className="btn btn-accent h-28 btn-circle">finish</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default LearnChapter3;
