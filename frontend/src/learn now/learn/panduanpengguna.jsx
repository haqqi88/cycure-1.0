import Learnsidebar from "../../assets/bookpan/Learn sidebar.png"
import Settingsidebar from "../../assets/bookpan/Setting sidebar.png"
import Discusssidebar from "../../assets/bookpan/discuss sidebar.png"
import Homesidebar from "../../assets/bookpan/home sidebar.png"
import chapter from "../../assets/bookpan/chapter.png"
import pretest from "../../assets/bookpan/pretest.png"
import discuss from "../../assets/bookpan/discuss.png"
import { useNavigate } from "react-router-dom"

const panduanPengguna = () => {
    const navigate = useNavigate();

    return(
        <div className="flex w-full bg-[#1a00c5] p-5 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-15">
            <div className="flex flex-col poppins-regular text-base text-white w-full gap-6">
                <div className="w-full flex justify-center poppins-medium text-xl">
                    <h1>Panduan Penggunaan</h1>
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-lg poppins-medium">Kolom navigasi:</h1>
                        <div className="flex gap-2 items-center w-zs">
                            <img src={Homesidebar} className="w-36" alt="" />
                            <p>Kembali ke halaman utama dengan menekan tombol Home.</p>
                        </div>
                        <div className="flex gap-2 items-center w-zs">
                            <img src={Learnsidebar} className="w-36" alt="" />
                            <p>Akses pembelajaran dengan menekan tombol Learn pada kolom navigasi.</p>
                        </div>
                        <div className="flex gap-2 items-center w-zs">
                            <img src={Discusssidebar} className="w-36" alt="" />
                            <p>Akses ruang diskusi dengan menekan tombol discuss.</p>
                        </div>
                        <div className="flex gap-2 items-center w-zs">
                            <img src={Settingsidebar} className="w-36" alt="" />
                            <p>Ingin ganti akun atau logout ada di setting.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1 className="text-lg poppins-medium">Learn:</h1>
                        <div className="flex gap-2 items-center w-zz">
                            <img src={chapter} className="h-36" alt="" />
                            <p>Mulai petualangan dengan menekan bagian berapapun yang kamu inginkan.</p>
                        </div>
                        <div className="flex gap-2 items-center w-zz">
                            <img src={pretest} className="h-36" alt="" />
                            <p>Eitss tunggu dulu kalau kamu user baru ada ujian pra pembelajaran, nanti dari sini bakal nentuin bagian mana yang bakal dibuka loh.</p>
                        </div>
                        <div className="flex gap-2 items-center w-zz">
                            <img src={discuss} className="h-36" alt="" />
                            <p>Mau diskusi bareng bareng sama temen seperjuangan bisa banget, disini ada 3 macam ruang diskusi yang bisa dipilih loh.</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <button className="btn btn-accent h-20" onClick={() => navigate("/Learn/main")}>❯</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default panduanPengguna;