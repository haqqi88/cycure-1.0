import React from "react"
import { useState, useEffect } from "react";
import komik1 from "../../../../assets/comic.ch2/komik1.png"
import komik2 from "../../../../assets/comic.ch2/komik2.png"
import komik3 from "../../../../assets/comic.ch2/komik3.png"
import komik4 from "../../../../assets/comic.ch2/komik4.png"
import { useNavigate } from "react-router-dom";
import { useLearnContext } from "../../../../context/LearnContext";


const Input = ({value, inputValue, status, submit}) =>{
    return(
        <input type="text" placeholder=". . . . . ." className={`input text-sm ${submit ? status ? "input-accent" :  "input-error" : "input-bordered"} input-xs w-24 bg-transparent`} value={value} onChange={inputValue} />
    )} 

    
const LearnChapter2 = () =>{
    const navigate = useNavigate();
    const {progress2, setProgress2} = useLearnContext();
    const {chapter, setChapter} = useLearnContext();
    const [submit, setSubmit] = useState(false) 
    const [status, setStatus] = useState({}) 
    const [gap1, setGap1] = useState('');
    const [gap2, setGap2] = useState('');
    const [gap3, setGap3] = useState('');
    const [gap4, setGap4] = useState('');
    const [gap5, setGap5] = useState('');

    const handleOnClick = () =>{
        setProgress2(progress2 + 25);
    }

    const handleOnClick2 = () =>{
        localStorage.setItem("progress2", JSON.stringify(progress2));
        if(chapter == 2){
        setChapter(chapter + 1);
        localStorage.setItem("chapter", JSON.stringify(chapter + 1));
        }
        navigate("/Learn/PostestCh2")
    }
    console.log(progress2);

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
            gap1: 'brute force',
            gap2: 'dictionary',
            gap3: 'calculated',
            gap4: 'blended',
            gap5: 'kata sandi',
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
            <div className="carousel m-3 w-full">
                    <div id="slide1" className="carousel-item relative w-full overflow-hidden">
                        <div className="flex w-full justify-between mx-14">
                            <img src={komik1} alt="" />
                            <img src={komik2} alt="" />
                        </div>
                        <div className="absolute top-3/4 w-full flex transform justify-between">
                            <a href="#" className=""></a>
                            <a href="#slide2" className="btn btn-circle" onClick={() => {progress2 === 25 ? handleOnClick() : null}}>❯</a>
                        </div>
                    </div>      
                    <div id="slide2" className="carousel-item relative w-full h-full flex flex-col">
                        <div className="flex flex-col w-full text-justify text-lg poppins-regular text-gray-100 items-center gap-3 px-20">
                            <h1 className="text-xl pt-2 poppins-medium">JEBAKAN EMAIL PALSU 2</h1>
                            <form onSubmit={onSubmit}>
                                <p><span className="tab"/>Di sebuah dunia yang sangat luas, ada sebuah kota ajaib bernama Cyberville. Di kota ini, semua orang punya rumah yang sangat istimewa. Rumah-rumah itu bisa dibuka dengan kata sandi rahasia.</p>
                                <p><span className="tab"/>Kata sandi ini seperti kunci ajaib yang hanya diketahui oleh pemiliknya. Di Cyberville, ada seorang hacker jahat bernama Naia. Dia sangat ingin masuk ke rumah-rumah mewah di Cyberville dan mengambil semua permata dan harta karun yang ada di dalamnya. Tapi, bagaimana caranya?</p>
                                <p><span className="tab"/>Naia punya banyak cara untuk mencuri kata sandi. Salah satunya adalah dengan mencoba semua kemungkinan kata sandi. Ini seperti mencoba membuka semua gembok di dunia sampai menemukan yang pas. Cara ini disebut <Input value={gap1} inputValue={handleChange1} status={status.gap1} submit={submit}/> attack. Cara lain yang lebih pintar adalah dengan menggunakan kamus. Naia punya kamus berisi kata-kata yang sering digunakan orang sebagai kata sandi, seperti nama hewan atau makanan kesukaan. Mereka akan mencoba satu per satu kata dari kamus itu. Cara ini disebut <Input value={gap2} inputValue={handleChange2} status={status.gap2} submit={submit}/> attack.</p>
                                <p><span className="tab"/>Naia yang pintar juga bisa mencari tahu tentang korbannya. Misalnya, dia akan mencari tahu nama hewan peliharaan atau tanggal ulang tahun korban di internet. Dengan begitu, dia bisa menebak kata sandi yang mungkin digunakan oleh korban. Cara ini disebut  <Input value={gap3} inputValue={handleChange3} status={status.gap3} submit={submit}/> attack.</p>
                                <p><span className="tab"/>Terkadang, Naia juga menggabungkan semua cara di atas. Misalnya, dia akan mencoba menebak kata sandi dengan berbagai cara sekaligus. Cara ini disebut <Input value={gap4} inputValue={handleChange4} status={status.gap4} submit={submit}/> attack. Untuk melindungi rumah kita di Cyberville, kita harus membuat <Input value={gap5} inputValue={handleChange5} status={status.gap5} submit={submit}/> yang sangat kuat, seperti kunci yang sangat sulit ditembus. Kita bisa membuat kata sandi dengan menggabungkan huruf besar, huruf kecil, angka, dan simbol. Selain itu, kita juga harus rajin mengganti kata sandi secara berkala.</p>
                                <div className="flex justify-center">
                                    <button type="submit" className="btn mt-1 btn-success btn-circle w-32">Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className="absolute top-3/4 w-full flex transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle" onClick={() => {progress2 === 50 ? handleOnClick() : null}}>❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full h-full justify-center overflow-auto">
                        <div className="w-full h-full justify-center">
                        <div className="flex flex-col text-justify text-lg poppins-light w-full text-gray-100 items-start gap-5 px-32">
                            <div className="flex w-full items-center justify-center pt-5">
                                <h1 className="poppins-medium">Materi Bagian 2</h1>
                            </div>
                            <div>
                                <h1 className="poppins-medium pb-1">Malware</h1>
                                <p>Malware adalah perangkat lunak yang dirancang untuk menyebabkan kerusakan pada sistem komputer atau jaringan. Jenis-jenis utama malware meliputi:</p>
                                <div className="pl-12 pt-1">
                                    <ul className="list-decimal">
                                        <li>Viruses: Virus komputer mereplikasi dirinya dengan menyisipkan kode berbahaya ke dalam program atau file yang sah. Contohnya, virus dapat disisipkan dalam file data seperti makro jahat di dalam dokumen Word atau di sektor boot komputer. Virus memerlukan inang untuk menyebar dan dapat menyebabkan kerusakan signifikan pada kinerja sistem, meskipun beberapa bisa tidak terlihat sama sekali.</li>
                                        <li>Worms: Worms adalah malware yang dapat menyebar secara mandiri tanpa memerlukan inang. Contoh kasus adalah worm yang menyebar melalui jaringan dengan mengeksploitasi kerentanan keamanan pada komputer dan jaringan. Mereka dapat memperlambat koneksi jaringan dengan menggunakan bandwidth, meskipun mereka tidak secara langsung memodifikasi sistem atau mencuri data.</li>
                                        <li>Ransomware: Ransomware mengenkripsi data pengguna dan meminta uang tebusan untuk mengembalikan akses. Contohnya, ransomware dapat mencuri data dari komputer pengguna, memastikan bahwa pengguna tidak memiliki cara lain untuk memulihkan datanya tanpa membayar uang tebusan. Dalam beberapa kasus, penjahat bahkan mengancam untuk mempublikasikan data yang dicuri jika tebusan tidak dibayar.</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h1 className="poppins-medium pb-1">Pencurian Kata Sandi</h1>
                                <p>Penjahat siber dapat mencuri kata sandi melalui berbagai metode:</p>
                                <div className="pl-12 pt-1">
                                    <ul className="list-decimal">
                                        <li>Pencurian Basis Data Kata Sandi: Jika basis data kata sandi dicuri, pengguna yang kata sandinya tercantum di dalamnya berisiko. Misalnya, jika toko online disusupi dan kata sandi pelanggannya dicuri, penjahat bisa mencoba mendekripsi kata sandi tersebut menggunakan hash attack.</li>
                                        <li>Serangan Social Engineering: Melalui manipulasi psikologis, penjahat dapat menipu seseorang untuk memberikan kata sandi atau melakukan tindakan yang tidak seharusnya. Contoh kasus adalah ketika seorang penjahat berpura-pura menjadi anggota departemen dukungan teknis dan meyakinkan korban untuk mengatur ulang kata sandinya dengan alasan pemulihan dari pelanggaran keamanan.</li>
                                        <li>Credential Attacks: Penjahat mencoba masuk ke sistem dengan memasukkan kombinasi nama pengguna dan kata sandi yang valid. Contoh kasus meliputi penggunaan brute force untuk mencoba semua kata sandi yang mungkin sampai mereka mendapatkan yang benar, atau dictionary attacks yang mencoba setiap kata dalam kamus hingga menemukan yang cocok.</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h1 className="poppins-medium pb-1">Pertahanan Terhadap Ancaman</h1>
                                <p>Menghadapi ancaman siber memerlukan pemahaman tentang risiko yang ada dan cara mitigasinya:</p>
                                <div className="pt-1 pl-12">
                                    <ul className="list-disc">
                                        <li>Human error: Kesalahan manusia, seperti jatuh dalam perangkap rekayasa sosial, sering menjadi titik lemah dalam keamanan siber. Contoh kasus adalah korban yang tanpa sengaja menciptakan kerentanan dengan mereset kata sandi untuk membantu departemen IT palsu melalui telepon atau email phishing.</li>
                                        <li>Bencana Eksternal: Bencana alam atau buatan manusia, seperti pemadaman listrik atau serangan teroris, dapat mengancam ketersediaan data. Contoh kasus adalah perusahaan yang menyimpan cadangan data di pusat keuangan dekat World Trade Center, yang tidak bisa diakses setelah serangan 9/11, menyebabkan kerugian besar.</li>
                                        <li>Serangan Melalui Media Sosial: Media sosial adalah alat yang sering digunakan oleh penjahat siber untuk mengumpulkan informasi tentang calon korban. Contoh kasus adalah penipuan penculikan virtual yang memanfaatkan informasi dari media sosial untuk mengetahui kapan target tidak bisa dihubungi, dan kemudian mengancam keluarga target untuk mendapatkan uang tebusan.</li>
                                    </ul>
                                </div>
                                <p className="pt-7">Tidak ada sistem yang sepenuhnya aman, tetapi dengan memahami ancaman yang ada dan menerapkan langkah-langkah keamanan yang tepat, risiko dapat dikurangi secara signifikan. Mempersiapkan diri terhadap kemungkinan serangan dan mengetahui bagaimana cara melindungi informasi pribadi dan bisnis adalah kunci dalam keamanan siber.</p>
                            </div>
                        </div>
                            <div className="w-full flex justify-between pb-28">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle" onClick={() => {progress2 === 75 ? handleOnClick() : null}}>❯</a>
                            </div>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <div className="flex w-full justify-between mx-14">
                            <img src={komik3} alt="" />
                            <img src={komik4} alt="" />
                        </div>
                        <div className="absolute top-3/4 w-full flex transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <button onClick={() =>handleOnClick2()} className="btn btn-accent h-28 btn-circle">finish</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default LearnChapter2;
