import React from "react"
import { useState, useEffect } from "react";
import komik1 from "../../../../assets/comic.ch1/komik1.png"
import komik2 from "../../../../assets/comic.ch1/komik2.png"
import komik3 from "../../../../assets/comic.ch1/komik3.png"
import komik4 from "../../../../assets/comic.ch1/komik4.png"
import { useNavigate } from "react-router-dom";
import { useLearnContext } from "../../../../context/LearnContext";

const Input = ({value, inputValue, status, submit}) =>{
    return(
        <input type="text" placeholder=". . . . . ." className={`input text-sm ${submit ? status ? "input-accent" :  "input-error" : "input-bordered"} input-xs w-24 bg-transparent`} value={value} onChange={inputValue} />
    )} 

    
const LearnChapter1 = () =>{
    const navigate = useNavigate();
    const {progress, setProgress} = useLearnContext();
    const {chapter, setChapter} = useLearnContext();
    const [submit, setSubmit] = useState(false) 
    const [status, setStatus] = useState({}) 
    const [gap1, setGap1] = useState('');
    const [gap2, setGap2] = useState('');
    const [gap3, setGap3] = useState('');
    const [gap4, setGap4] = useState('');
    const [gap5, setGap5] = useState('');
    const [gap6, setGap6] = useState('');

    const handleOnClick = () =>{
        setProgress(progress + 25);
    }

    const handleOnClick2 = () =>{
        localStorage.setItem("progress", JSON.stringify(progress));
        if(chapter == 1){
        setChapter(chapter + 1);
        localStorage.setItem("chapter", JSON.stringify(chapter + 1));
        }
        navigate("/Learn/PostestCh1")
    }
    console.log(progress);

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
    
    const handleChange6 = (e) => {
        setGap6(e.target.value);
        setSubmit(false);
    };
      
    const onSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        let answer = {
            gap1: 'email',
            gap2: 'password',
            gap3: 'phishing',
            gap4: 'targeted',
            gap5: 'hacker',
            gap6: 'hacker',
        };
        setStatus({ // Update status
            gap1: gap1 === answer.gap1,
            gap2: gap2 === answer.gap2,
            gap3: gap3 === answer.gap3,
            gap4: gap4 === answer.gap4,
            gap5: gap5 === answer.gap5,
            gap6: gap6 === answer.gap6,
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
                            <a href="#slide2" className="btn btn-circle" onClick={() => {progress === 25 ? handleOnClick() : null}}>❯</a>
                        </div>
                    </div>      
                    <div id="slide2" className="carousel-item relative w-full h-full flex flex-col">
                        <div className="flex flex-col w-full text-justify text-lg poppins-regular text-gray-100 items-center gap-3 px-20">
                            <h1 className="text-xl poppins-medium pt-5 pb-3">JEBAKAN EMAIL PALSU</h1>
                            <form onSubmit={onSubmit}>
                                <p><span className="tab"/>Akyra adalah seorang siswa yang sangat aktif di media sosial. Ia sering membagikan foto-foto kegiatannya sehari-hari, mulai dari tugas sekolah hingga acara liburan. Akyra juga sering berkomentar di berbagai postingan teman-temannya.</p>
                                <p><span className="tab"/>Suatu hari, Akyra menerima <Input value={gap1} inputValue={handleChange1} status={status.gap1} submit={submit}/> dari sebuah toko online terkenal. Email tersebut menggambarkan bahwa ada masalah dengan akun Akyra dan memintanya untuk segera mengganti <Input value={gap2} inputValue={handleChange2} status={status.gap2} submit={submit}/> dengan mengklik tautan yang tertera. Karena sering berbelanja di toko online tersebut, Akyra tidak merasa curiga dan langsung mengklik tautan itu.</p>
                                <p><span className="tab"/>Tanpa Akyra sadari, email itu adalah serangan <Input value={gap3} inputValue={handleChange3} status={status.gap3} submit={submit}/>. Lebih tepatnya, ini adalah serangan <Input value={gap4} inputValue={handleChange4} status={status.gap4} submit={submit}/> karena email tersebut ditujukan secara khusus kepada Akyra setelah si penyerang mengumpulkan informasi tentang Akyra dari media sosialnya.</p>
                                <p><span className="tab"/>Setelah mengklik tautan, Akyra dibawa ke sebuah halaman yang sangat mirip dengan halaman login toko online tersebut. Akyra pun memasukkan nama pengguna dan kata sandi akunnya. Namun, halaman tersebut ternyata palsu dan dibuat oleh seorang <Input value={gap5} inputValue={handleChange5} status={status.gap5} submit={submit}/>. Dengan berhasil mendapatkan kata sandi Akyra, <Input value={gap6} inputValue={handleChange6} status={status.gap6} submit={submit}/> tersebut kini memiliki akses ke akun belanja online Akyra dan bisa melakukan transaksi menggunakan nama Akyra.</p>
                                <div className="flex justify-center">
                                    <button type="submit" className="btn mt-8 btn-success btn-circle w-32">Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className="absolute top-3/4 w-full flex transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle" onClick={() => {progress === 50 ? handleOnClick() : null}}>❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full h-full justify-center overflow-auto">
                        <div className="w-full h-full justify-center">
                        <div className="flex flex-col text-justify text-lg poppins-light w-full text-gray-100 items-start gap-5 px-32">
                            <div className="flex w-full items-center justify-center pt-5">
                                <h1 className="poppins-medium">Materi Bagian 1</h1>
                            </div>
                            <div>
                                <h1 className="poppins-medium">Cybersecurity</h1>
                                <p><span className="tab"/>Cybersecurity adalah bagian dari keamanan informasi yang membahas informasi dan sistem informasi yang menyimpan dan memproses data dalam bentuk elektronik, sedangkan keamanan informasi mencakup keamanan semua bentuk data misalnya, mengamankan file kertas dan lemari arsip.</p>
                                <p><span className="tab"/>Salah satu bahaya besar yang ditimbulkan oleh Internet adalah kemudahannya pihak-pihak nakal dapat menyamar sebagai orang lain. Membuat situs web yang meniru situs web bank, toko, atau instansi pemerintah cukup sederhana dan terkadang dapat dilakukan dalam menit. Penjahat bisa menemukan pasokan nama domain yang hampir tak ada habisnya cukup dekat dengan pihak-pihak yang sah untuk mengelabui beberapa orang yang percaya bahwa situs yang mereka lihat adalah situs asli padahal bukan, memberikan para penjahat bahan pertama yang khas dalam resep untuk peniruan online.</p>
                            </div>
                            <div>
                                <h1 className="poppins-medium">Phising</h1>
                                <p><span className="tab"/>Phishing mengacu pada upaya untuk meyakinkan seseorang untuk mengambil tindakan tertentu dengan meniru pihak yang dapat dipercaya yang secara wajar dapat sah meminta pengguna untuk mengambil tindakan tersebut. </p>
                                <p><span className="tab"/>Misalnya, penjahat mungkin mengirim email yang sepertinya memang benar dikirim oleh bank besar dan meminta penerima untuk mengklik link masuk untuk mengatur ulang kata sandinya karena kemungkinan pelanggaran data. Ketika pengguna mengklik link tersebut, dia diarahkan ke situs web yang muncul milik bank, namun sebenarnya merupakan replika yang dijalankan oleh penjahat. Dengan demikian, penjahat menggunakan situs web palsu untuk mengumpulkan nama pengguna dan kata sandi ke situs perbankan.</p>
                            </div>
                            <div>
                                <h1 className="poppins-medium">Spear Phising</h1>
                                <p><span className="tab"/>Spear phishing mengacu pada serangan phishing yang dirancang dan dikirim ke target, bisnis, atau organisasi tertentu. Jika penjahat berusaha melakukannya mendapatkan kredensial ke dalam sistem email perusahaan tertentu, misalnya, dia dapat mengirim email yang dibuat khusus untuk target tertentu dalam suatu organisasi. Seringkali penjahat yang spear phishing meneliti target mereka secara online dan memanfaatkan informasi yang dibagikan secara berlebihan media sosial untuk membuat email yang terdengar sah.</p>
                                <p><span className="tab"/>Misalnya, jenis email berikut biasanya lebih banyak lagi meyakinkan daripada “Silakan masuk ke server email dan setel ulang kata sandi.</p>
                            </div>
                            <div>
                                <h1 className="poppins-medium">Data Theft</h1>
                                <p><span className="tab"/>Banyak cyberattack yang melibatkan pencurian data korban. Seorang penyerang mungkin ingin mencuri data milik individu, bisnis, atau pemerintah agensi karena satu atau lebih dari banyak kemungkinan alasan. Masyarakat, dunia bisnis, dan pemerintah semuanya rentan terhadap hal pencurian data.</p>
                            </div>
                            <div className="pl-4">
                                <h1 className="poppins-medium">Personal data theft</h1>
                                <p>Penjahat sering kali mencoba mencuri data orang dengan harapan menemukan barang yang dapat mereka uangkan, termasuk:</p>
                                <div className="pl-8">
                                    <ul className="list-disc">
                                        <li>Data yang dapat digunakan untuk pencurian identitas atau dijual kepada pencuri identitas</li>
                                        <li>Foto yang membahayakan atau data terkait kesehatan yang mungkin dapat dijual atau digunakan sebagai bagian dari skema pemerasan.</li>
                                        <li>Informasi yang dicuri dan kemudian dihapus dari mesin pengguna yang dapat ditebus oleh pengguna.</li>
                                        <li>Daftar kata sandi yang dapat digunakan untuk membobol sistem lain</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="pl-4">
                                <h1 className="poppins-medium">Business data theft</h1>
                                    <p> Penjahat dapat menggunakan data yang dicuri dari bisnis untuk sejumlah tujuan jahat:</p>
                                    <div className="pl-4">
                                    <ul className="list-disc list-inside">
                                        <li>Menjual data kepada pesaing yang tidak benar</li>
                                        <li>Membocorkan data kepada media</li>
                                        <li>Membocorkan data yang tercakup regulasi privasi</li>
                                        <li>Mencuri dan menggunakan hak intelektual</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                            <div className="w-full flex justify-between pb-28">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle" onClick={() => {progress === 75 ? handleOnClick() : null}}>❯</a>
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

export default LearnChapter1;
