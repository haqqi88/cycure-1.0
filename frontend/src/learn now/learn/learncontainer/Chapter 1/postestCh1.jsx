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

const PostTestChapter1 = () => {
    const navigate = useNavigate();
    const [submit, setSubmit] = useState(false)  
    const [status, setStatus] = useState({}) 
    const trueCount = Object.values(status).filter(value => value === true).length;
    const [ans1, setAns1] = useState('');
    const [ans2, setAns2] = useState('');
    const [ans3, setAns3] = useState('');
    const [ans4, setAns4] = useState('');
    const [ans5, setAns5] = useState('');

    const part1 = status.ans1 || status.ans2; 
    const part2 = status.ans3 || status.ans4 || status.ans5; 


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
            ans1: 'Cybersecurity hanya fokus pada data elektronik, sedangkan keamanan informasi mencakup semua bentuk data.',
            ans2: 'Upaya meyakinkan seseorang untuk melakukan tindakan tertentu dengan meniru pihak yang dapat dipercaya.',
            ans3: 'Spear phishing lebih tertarget daripada phishing.',
            ans4: 'Untuk mendapatkan data yang dapat digunakan untuk pencurian identitas atau dijual.',
            ans5: 'Semua jawaban diatas benar.',
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
                        <Question submit={submit} status={status.ans1} question={`1. Keamanan siber dan keamanan informasi merupakan dua hal yang berbeda, dimanakah letak perbedaannya?`} 
                        number={ans1} onChange={onChecked1} option1={"Cybersecurity hanya fokus pada data elektronik, sedangkan keamanan informasi mencakup semua bentuk data."} option2={"Keamanan informasi hanya fokus pada data elektronik, sedangkan cybersecurity mencakup semua bentuk data."} option3={"Cybersecurity dan keamanan informasi memiliki fokus yang sama."} option4={"Tidak ada perbedaan antara cybersecurity dan keamanan informasi."} />
                        
                        <Question submit={submit} status={status.ans2} question={`2. Phishing dalam dunia siber merupakan. . .  `} 
                        number={ans2} onChange={onChecked2} option1={"Serangan siber yang menargetkan individu secara acak."} option2={"Upaya meyakinkan seseorang untuk melakukan tindakan tertentu dengan meniru pihak yang dapat dipercaya."} option3={"Pencurian data pribadi seseorang."} option4={"Serangan siber yang hanya menargetkan bisnis atau organisasi."} />
                        
                        <Question submit={submit} status={status.ans3} question={`3. Spear phishing merupakan tingkat lanjut dari phising, yang membuat kedua itu berbeda ialah?`} 
                        number={ans3} onChange={onChecked3} option1={"Phishing lebih tertarget daripada spear phishing."} option2={"Spear phishing lebih tertarget daripada phishing."} option3={"Tidak ada perbedaan antara phishing dan spear phishing."} option4={"Phishing hanya menargetkan individu, sedangkan spear phishing menargetkan organisasi."} />
                        
                        <Question submit={submit} status={status.ans4} question={`4. Penjahat sering melakukan pencurian data pribadi dengan tujuan. . .`} 
                        number={ans4} onChange={onChecked4} option1={"Untuk mendapatkan informasi kontak."} option2={"Untuk mendapatkan data yang dapat digunakan untuk pencurian identitas atau dijual."} option3={"Untuk mendapatkan data yang dapat digunakan untuk membuat akun palsu."} option4={"Semua jawaban diatas benar."} />
                        
                        <Question submit={submit} status={status.ans5} question={`5. Banyak sekali tujuan penjahat dalam melakukan pencurian data bisnis, diantaranya adalah. . .`} 
                        number={ans5} onChange={onChecked5} option1={"Menjual data kepada pesaing."} option2={"Membocorkan data kepada media."} option3={"Mencuri hak intelektual."} option4={"Semua jawaban diatas benar."} />

                    </form>
                        <div className="flex justify-center">
                            <button className="btn btn-accent w-28"  form="myForm" type="submit" onClick={()=>document.getElementById('my_modal_2').showModal()}>Kumpulin</button>
                            <dialog id="my_modal_2" className="modal">
                            <div className="modal-box bg-[#38028f]">
                                <h3 className="font-bold text-lg">Hello!</h3>
                                <p className="py-4 w-14 text-[#2ae6c6]">{trueCount}/5</p>
                                <p>Kerja bagus tetap berusaha dan semangat</p>
                                <h1>Catatan:</h1>
                                <p><span className="tab"/>{part1 ? "Cybersecurity melindungi informasi elektronik dari ancaman seperti phishing, di mana penjahat meniru situs tepercaya untuk mencuri data." : "" }</p>
                                <p><span className="tab"/>{part2 ? "Malware adalah perangkat lunak berbahaya yang merusak atau mengeksploitasi sistem, dengan virus sebagai jenis yang menyebar melalui file atau program yang terinfeksi. Ransomware mengenkripsi atau mencuri data pengguna dan meminta tebusan agar data tidak hilang atau dipublikasikan." : "" }</p>
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

export default PostTestChapter1;