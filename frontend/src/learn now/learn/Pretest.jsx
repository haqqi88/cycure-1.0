import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useLearnContext } from "../../context/LearnContext";
import { useNavigate } from "react-router-dom";


const Question = ({submit = false,status,question,number,onChange,option1,option2,option3,option4}) => {
    return(
        <div className="pb-12 pr-12 indicator">
            <span className={`indicator-item indicator-top mt-3 h-8 poppins-medium text-base w-20 indicator-end ${submit ? status ? "badge badge-accent" : "badge badge-error" : ""}`}>{submit ? status ? "Benar" : "Salah" : ""}</span>
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

const PreTest = () => {
    const {isNewUser, setIsNewUser} = useAuthContext();
    const {chapter, setChapter} = useLearnContext();
    const [submit, setSubmit] = useState(false)  
    const navigate = useNavigate();
    const [status, setStatus] = useState({}) 
    const trueCount = Object.values(status).filter(value => value === true).length;
    const falseCount = Object.values(status).filter(value => value === false).length;
    const [ans1, setAns1] = useState('');
    const [ans2, setAns2] = useState('');
    const [ans3, setAns3] = useState('');
    const [ans4, setAns4] = useState('');
    const [ans5, setAns5] = useState('');
    const [ans6, setAns6] = useState('');
    const [ans7, setAns7] = useState('');

    const Chapter1 = !status.ans1 || !status.ans2; 
    const Chapter2 = !status.ans3 || !status.ans4 || !status.ans5; 
    const Chapter3 = !status.ans6 || !status.ans7; 


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
    const onChecked6 = (event) => {
        setAns6(event.target.value);
        setSubmit(false)
    };
    const onChecked7 = (event) => {
        setAns7(event.target.value);
        setSubmit(false)
    };

    console.log(isNewUser);
    
    const handleSubmit = (event)=>{
        event.preventDefault();
        let answer = {
            ans1: 'Cybersecurity',
            ans2: 'Phising',
            ans3: 'Malware',
            ans4: 'Virus',
            ans5: 'Ransomware',
            ans6: 'Firewall',
            ans7: 'Menggunakan komputer bersama keluarga atau teman',
        };
        setStatus({
            ans1: ans1 === answer.ans1,
            ans2: ans2 === answer.ans2,
            ans3: ans3 === answer.ans3,
            ans4: ans4 === answer.ans4,
            ans5: ans5 === answer.ans5,
            ans6: ans6 === answer.ans6,
            ans7: ans7 === answer.ans7,
        });

        if(trueCount == 7 && chapter == 1){
            setChapter(chapter + 2);
            localStorage.setItem("chapter", JSON.stringify(chapter + 2));
        }else if(trueCount >= 4 && chapter == 1){
            setChapter(chapter + 1);
            localStorage.setItem("chapter", JSON.stringify(chapter + 1));
        }
        
        setSubmit(true)
        setIsNewUser(false);
        localStorage.setItem("isNewUser", JSON.stringify(false));
    }


    return(
        <div className="flex w-full bg-[#1a00c5] p-5 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-15 justify-center">
            <div className="overflow-auto scroll-smooth w-full">
                <div className="flex flex-col text-justify text-base items-center poppins-regular text-gray-100 gap-3">
                    <form onSubmit={handleSubmit} id="myForm" className="flex flex-col">
                        <Question submit={submit} status={status.ans1} question={`1. Keamanan informasi yang membahas informasi dan sistem informasi yang menyimpan dan memproses data dalam bentuk elektronik merupakan bagian dari… `} 
                        number={ans1} onChange={onChecked1} option1={"Cybercrime"} option2={"Cyber Attack"} option3={"Cybersecurity"} option4={"Cyberhackid"} />
                        
                        <Question submit={submit} status={status.ans2} question={`2. Upaya untuk meyakinkan seseorang untuk mengambil tindakan tertentu dengan meniru pihak yang dapat dipercaya merupakan pengertian dari… `} 
                        number={ans2} onChange={onChecked2} option1={"Phising"} option2={"Spear Phishing"} option3={"Worms"} option4={"Data theft (pencurian data)"} />
                        
                        <Question submit={submit} status={status.ans3} question={`3. Program  yang ditujukan untuk mengeksploitasi sumber daya komputer untuk tujuan-tujuan jahat merupakan pengertian dari…`} 
                        number={ans3} onChange={onChecked3} option1={"Privacy 101"} option2={"Malware"} option3={"Tansomware"} option4={"Personal data theft (pencurian data pribadi)"} />
                        
                        <Question submit={submit} status={status.ans4} question={`4. Contoh malware yang ketika dieksekusi, mereplikasi dengan menyisipkan kode mereka sendiri ke dalam sistem komputer adalah...`} 
                        number={ans4} onChange={onChecked4} option1={"Virus"} option2={"Worms"} option3={"social engginer"} option4={"Backup"} />
                        
                        <Question submit={submit} status={status.ans5} question={`5. Contoh malware yang menuntut uang tebusan yang harus dibayarkan kepada penjahat sebagai imbalan agar pihak yang terinfeksi tidak mengalami kerugian adalah…`} 
                        number={ans5} onChange={onChecked5} option1={"Calculated attacks"} option2={"Stealing password"} option3={"Ransomware"} option4={"Maware"} />
                        
                        <Question submit={submit} status={status.ans6} question={`6. Memblokir orang luar yang mencoba menghubungi komputer di dalam rumah Anda, tetapi tidak akan memblokir server web merupakan pengertian dari… `} 
                        number={ans6} onChange={onChecked6} option1={"Router"} option2={"Firewall"} option3={"Privacy 101"} option4={"Cybersecurity"} />
                        
                        <Question submit={submit} status={status.ans7} question={`7. Berikut merupakan cara mengamankan data, kecuali… `} 
                        number={ans7} onChange={onChecked7} option1={"Gunakan pengaturan privasi media sosial."} option2={"Enkripsi semua informasi pribadi"} option3={"Menggunakan komputer bersama keluarga atau teman"} option4={"Berpikir sebelum berbagi & mengunggah sesuatu"} />
                    </form>
                        <div className="flex justify-center">
                            <button className="btn btn-accent w-28"  form="myForm" type="submit" onClick={()=>document.getElementById('my_modal_2').showModal()}>Kumpulin</button>
                            <dialog id="my_modal_2" className="modal">
                            <div className="modal-box bg-[#38028f] poppins-regular text-base">
                                <h3 className="font-bold text-lg">Hello!</h3>
                                <p className="py-4 text-[#2ae6c6]">{trueCount}/7</p>
                                <p>Kerja bagus tetap berusaha dan semangat</p>
                                <h1>Catatan:</h1>
                                <p><span className="tab"/>{Chapter1 ? "Cybersecurity melindungi informasi elektronik dari ancaman seperti phishing, di mana penjahat meniru situs tepercaya untuk mencuri data." : "" }</p>
                                <p><span className="tab"/>{Chapter2 ? "Malware adalah perangkat lunak berbahaya yang merusak atau mengeksploitasi sistem, dengan virus sebagai jenis yang menyebar melalui file atau program yang terinfeksi." : "" }</p>
                                <p><span className="tab"/>{Chapter3 ? "Firewall adalah sistem yang melindungi jaringan dengan mengatur dan memantau lalu lintas data, mencegah akses tidak sah." : "" }</p>
                                <div className="flex w-full justify-end">
                                    <button className="btn btn-info w-20 mt-5" onClick={() => navigate("/Learn")}>lanjut</button>
                                </div>
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

export default PreTest;