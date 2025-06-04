import jumbotron from "/jumbotron.png";
import {
     CreditCard,
     Zap,
     Globe,
     ShieldCheck,
     ArrowUpRight,
} from "lucide-react";
import groupgambar from "../assets/Group.png";

const Home = () => {
     console.log(jumbotron);
     return (
          <div className="flex flex-col items-center min-h-screen">
               <div
                    className={`bg-cover w-full min-h-100 max-h-200 aspect-video bg-center flex flex-col justify-center px-50 `}
                    style={{ backgroundImage: `url(${jumbotron})` }}
               >
                    <h1 className="text-6xl font-bold text-gray-900 leading-snug px-12">
                         Cuma sekedar <br /> cloud platform <br /> kecil-kecilan
                    </h1>
                    <p className="text-gray-700 max-w-lg px-12 my-10">
                         Lorem ipsum dolor sit amet, consectetur adipiscing
                         elit. A nulla nulla etiam turpis quam diam et. Arcu
                         nisi, sed aenean sit nisl.
                    </p>
                    <a
                         href="#"
                         className="inline-block bg-purple-700 text-white px-6 py-3 mx-12 my-2 rounded font-semibold hover:bg-purple-800 transition h-max w-max"
                    >
                         Coba Gratis
                    </a>
               </div>
               <div className="py-20 bg-gray-50 w-full">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                         <h2 className="text-3xl md:text-5xl font-bold mb-2">
                              Kelebihan memilih Ourhost
                         </h2>
                         <div className="h-1 w-16 bg-purple-600 mx-auto mb-10 rounded-full"></div>

                         <div className="flex flex-wrap justify-center items-stretch gap-6">
                              {/* Card 1 */}
                              <div className="relative group bg-white rounded-xl p-4 text-center shadow transition hover:shadow-lg w-54 min-h-[300px] flex flex-col items-center overflow-hidden">
                                   {/* Hover gradient dari bawah ke atas */}
                                   <div className="absolute inset-0 bg-gradient-to-t from-purple-100 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none rounded-xl" />

                                   {/* Ikon bulat */}
                                   <div className="w-30 h-30 mb-8 flex mt-1 items-center justify-center rounded-full bg-gray-100 z-10">
                                        <CreditCard
                                             className="w-15 h-15"
                                             style={{
                                                  fill: "rgba(49, 177, 23, 1)",
                                             }}
                                             color="oklch(96.7% 0.003 264.542)"
                                             strokeWidth={1}
                                        />
                                   </div>

                                   {/* Judul dan deskripsi */}
                                   <div className="z-10">
                                        <h3 className="text-lg font-semibold mb-2 text-gray-800">
                                             Hosting Gratis
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                             Lorem ipsum dolor sit amet cete
                                             adipiscing elitIpsum.
                                        </p>
                                   </div>
                              </div>

                              {/* Card 2 */}
                              <div className="bg-white rounded-md p-4 text-center shadow hover:shadow-md transition w-54 min-h-[300px] flex flex-col">
                                   <div className="w-30 h-30 mx-auto mb-8 flex mt-1 items-center justify-center rounded-full bg-gray-100">
                                        <Zap
                                             className="w-15 h-15"
                                             style={{
                                                  fill: "rgba(228, 203, 16, 1)",
                                                  stroke: "none",
                                             }}
                                        />
                                   </div>
                                   <div>
                                        <h3 className="text-lg font-semibold mb-2">
                                             Instant Web Hosting
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-4">
                                             Lorem ipsum dolor sit amet cete
                                             adipiscing elitIpsum.
                                        </p>
                                   </div>
                              </div>

                              {/* Card 3 */}
                              <div className="bg-white rounded-md p-4  text-center shadow hover:shadow-md transition w-54 min-h-[300px] flex flex-col">
                                   <div className="w-30 h-30 mx-auto mb-8 flex mt-1 items-center justify-center rounded-full bg-gray-100">
                                        <Globe
                                             className="w-15 h-15"
                                             style={{
                                                  color: "rgba(75, 97, 184, 1)",
                                             }}
                                        />
                                   </div>
                                   <div>
                                        <h3 className="text-lg font-semibold mb-2">
                                             Domain Gratis
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-4">
                                             Lorem ipsum dolor sit amet cete
                                             adipiscing elitIpsum.
                                        </p>
                                   </div>
                              </div>

                              {/* Card 4 */}
                              <div className="bg-white rounded-md p-4 text-center shadow hover:shadow-md transition w-54 min-h-[300px] flex flex-col">
                                   <div className="w-30 h-30 mx-auto mb-8 flex mt-1 items-center justify-center rounded-full bg-gray-100">
                                        <ShieldCheck
                                             className="w-15 h-15"
                                             fill="#5319a6"
                                             color="oklch(96.7% 0.003 264.542)"
                                             strokeWidth={1.5}
                                        />
                                   </div>
                                   <div>
                                        <h3 className="text-lg font-semibold mb-2">
                                             SSL Otomatis
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-4">
                                             Lorem ipsum dolor sit amet cete
                                             adipiscing elitIpsum.
                                        </p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="py-20 bg-gray-50 w-full">
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                         {/* Ilustrasi Gambar */}
                         <div>
                              <img
                                   src={groupgambar}
                                   alt="Ilustrasi Framework"
                                   className="w-full h-auto"
                              />
                              {/* Ganti /path-to-your-image.png dengan path yang sesuai */}
                         </div>

                         {/* Konten Teks */}
                         <div>
                              <div>
                                   <h2 className="text-3xl md:text-5xl font-bold mb-5">
                                        Bahasa dan framework <br /> yang
                                        didukung
                                   </h2>
                              </div>

                              <div className="h-1 w-20 bg-purple-600 mb-10 rounded-full"></div>

                              {/* Item React */}
                              <div className="flex gap-4 items-start mb-6">
                                   <ArrowUpRight
                                        className="text-purple-600 mt-1"
                                        size={25}
                                        strokeWidth={4}
                                   />
                                   <div>
                                        <h3 className="font-semibold text-lg">
                                             React
                                        </h3>
                                        <p className="text-gray-600 text-sm max-w-sm">
                                             Lorem ipsum dolor sit amet,
                                             consectetur adipiscing elit. Vitae
                                             velit proin justo, elementum sit.
                                             In morbi dolor sodales vestibulum
                                             cras. Consequat.
                                        </p>
                                   </div>
                              </div>

                              {/* Item PHP */}
                              <div className="flex gap-4 items-start mb-6">
                                   <ArrowUpRight
                                        className="text-purple-600 mt-1"
                                        size={25}
                                        strokeWidth={4}
                                   />
                                   <div>
                                        <h3 className="font-semibold text-lg">
                                             PHP
                                        </h3>
                                        <p className="text-gray-600 text-sm max-w-sm">
                                             Lorem ipsum dolor sit amet,
                                             consectetur adipiscing elit. Vitae
                                             velit proin justo, elementum sit.
                                             In morbi dolor sodales vestibulum
                                             cras. Consequat.
                                        </p>
                                   </div>
                              </div>

                              {/* Item Laravel */}
                              <div className="flex gap-4 items-start">
                                   <ArrowUpRight
                                        className="text-purple-600 mt-1"
                                        size={25}
                                        strokeWidth={4}
                                   />
                                   <div>
                                        <h3 className="font-semibold text-lg">
                                             Laravel
                                        </h3>
                                        <p className="text-gray-600 text-sm max-w-sm">
                                             Lorem ipsum dolor sit amet,
                                             consectetur adipiscing elit. Vitae
                                             velit proin justo, elementum sit.
                                             In morbi dolor sodales vestibulum
                                             cras. Consequat.
                                        </p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center text-center relative px-4">
                    <div className="relative inline-block">
                         <h2 className="text-3xl md:text-7xl font-bold text-gray-900 mb-10">
                              Kami hadir untuk menjadikan <br />
                              situs web Anda lebih luar biasa
                         </h2>
                         <div className="mt-6 mb-6">
                              <a
                                   href="https://wa.me/62xxxxxxxxxxx" // Ganti dengan nomor WA tujuan
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   aria-label="Hubungi kami lewat WhatsApp"
                                   className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition"
                              >
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                        fill="currentColor"
                                        className="w-5 h-5 mr-2"
                                   >
                                        <path d="M380.9 97.1C339.4 55.6 284.2 32 224.6 32c-111.5 0-202 90.5-202 202 0 35.6 9.5 70.3 27.6 101L0 480l148.6-49.2c29.4 16.1 62.8 24.6 96 24.6h.1c111.4 0 202.1-90.7 202.1-202.2 0-59.6-23.5-114.8-65.9-156.3zM224.6 439c-27.7 0-54.9-7.5-78.5-21.8l-5.6-3.3-88.3 29.2 29.3-86-3.6-5.9c-17.7-28.8-27-61.9-27-96 0-99.1 80.7-179.8 179.8-179.8 48 0 93.1 18.7 127 52.6s52.6 79 52.6 127.1c.1 99.1-80.7 179.9-179.7 179.9zm101.4-138.6c-5.5-2.8-32.8-16.2-37.9-18.1-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18.1-17.6 21.9-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.4-66.1-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 7-5.1 5.6-19.3 18.9-19.3 46s19.8 53.3 22.5 57c2.8 3.7 39 59.6 94.6 83.5 13.2 5.7 23.5 9 31.6 11.5 13.3 4.2 25.5 3.6 35.1 2.2 10.7-1.6 32.8-13.4 37.4-26.3 4.6-12.8 4.6-23.8 3.2-26.2-1.3-2.3-5-3.6-10.5-6.3z" />
                                   </svg>
                                   Hubungi kami
                              </a>
                         </div>

                         {/* Segitiga Kiri Menghadap Kiri (Ungu di kiri) */}
                         <div className="absolute -left-6 bottom-0">
                              <div className="w-0 h-0 border-b-[30px] border-b-purple-600 border-r-[30px] border-r-transparent"></div>
                         </div>
                         {/* Segitiga Kanan Menghadap Kanan (Ungu di kanan) */}
                         <div className="absolute -right-6 bottom-0">
                              <div className="w-0 h-0 border-b-[30px] border-b-purple-600 border-l-[30px] border-l-transparent"></div>
                         </div>
                    </div>

                    {/* Tombol WhatsApp */}
               </div>
          </div>
     );
};
export default Home;
