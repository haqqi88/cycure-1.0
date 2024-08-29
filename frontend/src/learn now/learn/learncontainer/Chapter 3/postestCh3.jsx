import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Question = ({submit = false,status,question,number,onChange,option1,option2,option3,option4}) => {
    return(
        <div className="pb-12 pr-16 indicator">
            <span className={`indicator-item indicator-middle h-8 poppins-medium text-base w-20 indicator-end ${submit ? status ? "badge badge-accent" : "badge badge-error" : ""}`}>{submit ? status ? "Benar" : "Salah" : ""}</span>
            <div className="w-full">
                <div className="w-qs">
                    <p className="pb-3">{question}</p>
                            <div className={`pl-3 flex flex-col gap-3`}>
                                <div className="flex w-full gap-2">
                                    <div className="flex w-1/2 gap-2">
                                        <input type="radio" name={number} className="radio radio-accent" value={option1} checked={number === option1} onChange={onChange} disabled={submit && number !== option1}/>
                                        <p>{option1}</p>
                                    </div>
                                    <label className="flex w-1/2 gap-2">
                                        <input type="radio" name={number} className="radio radio-accent" value={option2} checked={number === option2} onChange={onChange} disabled={submit && number !== option2}/>
                                        <span>{option2}</span>
                                    </label>
                                </div>
                                <div className="flex w-full gap-2">
                                    <div className="flex w-1/2 gap-2">
                                        <input type="radio" name={number} className="radio radio-accent" value={option3} checked={number === option3} onChange={onChange} disabled={submit && number !== option3}/>
                                        <p>{option3}</p>
                                    </div>
                                    <div className="flex w-1/2 gap-2">
                                        <input type="radio" name={number} className="radio radio-accent" value={option4} checked={number === option4} onChange={onChange} disabled={submit && number !== option4}/>
                                        <p>{option4}</p>
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
        </div>
    )
}

const PostTestChapter3 = () => {
    const navigate = useNavigate();
    const [submit, setSubmit] = useState(false)  
    const [status, setStatus] = useState({}) 
    const trueCount = Object.values(status).filter(value => value === true).length;
    const [ans1, setAns1] = useState('');
    const [ans2, setAns2] = useState('');
    const [ans3, setAns3] = useState('');
    const [ans4, setAns4] = useState('');
    const [ans5, setAns5] = useState('');

    const Part1 = status.ans1 || status.ans2; 
    const Part2 = status.ans3 || status.ans4 || status.ans5; 


    const onChecked1 = (event) => {
        setAns1(event.target.value);
        setSubmit(false)
    };
    const onChecked2 = (event) => {
        setAns2(event.target.value);
        setSubmit(false)
    };
    const onChecked3 = (event) => {
        setAns3(event.target.value);
        setSubmit(false)
    };
    const onChecked4 = (event) => {
        setAns4(event.target.value);
        setSubmit(false)
    };
    const onChecked5 = (event) => {
        setAns5(event.target.value);
        setSubmit(false)
    };
    
    const handleSubmit = (event)=>{
        event.preventDefault();
        let answer = {
            ans1: 'Karena perangkat seluler selalu terhubung ke internet dan sering menyimpan informasi sensitif.',
            ans2: 'Memblokir orang luar yang mencoba masuk ke jaringan rumah.',
            ans3: 'Untuk memperbaiki kerentanan keamanan.',
            ans4: 'Proses mengacak data sehingga hanya dapat dibaca oleh orang yang memiliki kunci.',
            ans5: 'Membagikan semua informasi pribadi Anda dengan teman.'
        };
        setStatus({
            ans1: ans1 === answer.ans1,
            ans2: ans2 === answer.ans2,
            ans3: ans3 === answer.ans3,
            ans4: ans4 === answer.ans4,
            ans5: ans5 === answer.ans5,
        });
        
        setSubmit(true)
    }

    return(
        <div className="flex w-full bg-[#1a00c5] p-5 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-15 justify-center">
            <div className="overflow-auto scroll-smooth w-full">
                <div className="flex flex-col text-justify text-base items-center poppins-regular text-gray-100 gap-3 pt-5">
                    <form onSubmit={handleSubmit} id="myForm" className="flex flex-col">
                        <Question submit={submit} status={status.ans1} question={`1. Perangkat seluler seringkali dianggap berisiko dari segi keamanan informasi, karena. . . `} 
                        number={ans1} onChange={onChecked1} option1={"Karena perangkat seluler tidak memiliki sistem keamanan."} option2={"Karena perangkat seluler selalu terhubung ke internet dan sering menyimpan informasi sensitif."} option3={"Karena perangkat seluler terlalu mahal."} option4={"Karena perangkat seluler terlalu kecil."} />
                        
                        <Question submit={submit} status={status.ans2} question={`2. Firewall berfungsi untuk. . .`} 
                        number={ans2} onChange={onChecked2} option1={"Memblokir semua akses ke internet."} option2={"Memblokir orang luar yang mencoba masuk ke jaringan rumah."} option3={"Mempercepat koneksi internet."} option4={"Menghapus virus dari komputer."} />
                        
                        <Question submit={submit} status={status.ans3} question={`3. Memperbaiki router secara teratur merupakan hal yang penting, karena . .`} 
                        number={ans3} onChange={onChecked3} option1={"Untuk meningkatkan kecepatan internet."} option2={"Untuk memperbaiki kerentanan keamanan."} option3={"Untuk memperbarui desain router."} option4={"Untuk menambahkan fitur-fitur baru."} />
                        
                        <Question submit={submit} status={status.ans4} question={`4. Enkripsi merupakan salah satu cara mengamankan informasi pribadi, maksud dari enkripsi adalah. . .`} 
                        number={ans4} onChange={onChecked4} option1={"Proses membuat file menjadi lebih kecil."} option2={"Proses mengacak data sehingga hanya dapat dibaca oleh orang yang memiliki kunci."} option3={"Proses menghapus data secara permanen."} option4={"Proses menyalin data ke perangkat penyimpanan eksternal."} />
                        
                        <Question submit={submit} status={status.ans5} question={`5. Meningkatkan privasi online dapat dilakukan dengan berbagai metode, diantaranya kecuali. . .`} 
                        number={ans5} onChange={onChecked5} option1={"Menggunakan pengaturan privasi yang ketat di media sosial."} option2={"Menggunakan nomor telepon virtual."} option3={"Membagikan semua informasi pribadi Anda dengan teman."} option4={"Mengenkripsi data sensitif."} />
                        
                    </form>
                        <div className="flex justify-center">
                            <button className="btn btn-accent w-28"  form="myForm" type="submit" onClick={()=>document.getElementById('my_modal_2').showModal()}>Kumpulin</button>
                            <dialog id="my_modal_2" className="modal">
                            <div className="modal-box bg-[#38028f]">
                                <h3 className="font-bold text-lg">Hello!</h3>
                                <p className="py-4 text-[#2ae6c6]">{trueCount}/5</p>
                                <p>Kerja bagus tetap berusaha dan semangat</p>
                                <h1>Catatan:</h1>
                                <p>{Part1 ? "Cybersecurity melindungi informasi elektronik dari ancaman seperti phishing, di mana penjahat meniru situs tepercaya untuk mencuri data." : "" }</p>
                                <p>{Part2 ? "Malware adalah perangkat lunak berbahaya yang merusak atau mengeksploitasi sistem, dengan virus sebagai jenis yang menyebar melalui file atau program yang terinfeksi. Ransomware mengenkripsi atau mencuri data pengguna dan meminta tebusan agar data tidak hilang atau dipublikasikan." : "" }</p>
                                <button className="btn btn-info w-20" onClick={() => navigate("/Learn")}>lanjut</button>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                            </dialog>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default PostTestChapter3;