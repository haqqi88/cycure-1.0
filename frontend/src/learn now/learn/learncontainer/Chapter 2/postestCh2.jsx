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

const PostTestChapter2 = () => {
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
            ans1: 'Antivirus',
            ans2: 'Virus membutuhkan inang untuk menyebar, sedangkan worms tidak.',
            ans3: 'Meminta uang tebusan untuk mengembalikan akses ke file yang terenkripsi.',
            ans4: 'Menipu pengguna untuk memberikan informasi sensitif.',
            ans5: 'Memindai komputer dengan perangkat lunak antivirus yang terpercaya.',
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
                <div className="flex flex-col text-justify text-base items-center poppins-regular text-gray-100 gap-3 pt-8">
                    <form onSubmit={handleSubmit} id="myForm" className="flex flex-col">
                        <Question submit={submit} status={status.ans1} question={`1. Berikut merupakan contoh malware, kecuali? `} 
                        number={ans1} onChange={onChecked1} option1={"Virus"} option2={"Worms"} option3={"Ransomware"} option4={"Antivirus"} />
                        
                        <Question submit={submit} status={status.ans2} question={`2. Virus dan worms merupakan contoh-contoh dari malware, namun virus dan worms berbeda karena. . . `} 
                        number={ans2} onChange={onChecked2} option1={"Virus membutuhkan inang untuk menyebar, sedangkan worms tidak."} option2={"Worms membutuhkan inang untuk menyebar, sedangkan virus tidak."} option3={"Virus dan worms tidak memiliki perbedaan."} option4={"Virus hanya menyerang sistem operasi Windows, sedangkan worms menyerang semua sistem operasi."} />
                        
                        <Question submit={submit} status={status.ans3} question={`3. Selain malware, ada pula ransomware yang berarti...`} 
                        number={ans3} onChange={onChecked3} option1={"Menghapus semua file di komputer."} option2={"Meminta uang tebusan untuk mengembalikan akses ke file yang terenkripsi."} option3={"Mencuri informasi pribadi dari komputer."} option4={"Mengirimkan spam email."} />
                        
                        <Question submit={submit} status={status.ans4} question={`4. Salah satu cara penjahat mencuri kata sandi adalah dengan melakukan serangan social engineering. Definisi social engineering adalah. . .`} 
                        number={ans4} onChange={onChecked4} option1={"Menyerang sistem komputer secara langsung."} option2={"Memanfaatkan kelemahan teknis dalam sistem."} option3={"Menipu pengguna untuk memberikan informasi sensitif."} option4={"Menggunakan virus untuk menginfeksi komputer."} />
                        
                        <Question submit={submit} status={status.ans5} question={`5. Jika kamu mencurigai komputermu terinfeksi malware, hal yang dapat kamu lakukan adalah. . .`} 
                        number={ans5} onChange={onChecked5} option1={"Mengabaikannya karena malware tidak berbahaya."} option2={"Mematikan komputer dan mencoba menyalakannya kembali."} option3={"Memindai komputer dengan perangkat lunak antivirus yang terpercaya."} option4={"Membuka semua email yang mencurigakan."} />
                        
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

export default PostTestChapter2;