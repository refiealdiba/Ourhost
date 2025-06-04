import ourhost from "../assets/ourhost.png";

const Footer = () => {
     return (
          <footer className="bg-lightviolet text-gray-700 py-12 px-6">
               <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo & Deskripsi */}
                    <div>
                         <div className="flex items-center mb-4">
                              <div className="w-15">
                                   <img
                                        src={ourhost}
                                        alt="ourhost logo"
                                        className="w-full"
                                   />
                              </div>
                              <span className="text-primary text-lg font-bold">
                                   Ourhost
                              </span>
                         </div>
                         <p className="text-sm">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Ullamcorper purus eleifend purus faucibus
                              faucibus.
                         </p>
                         <div className="flex gap-3 mt-4">
                              {/* Twitter */}
                              <a
                                   href="https://x.com"
                                   aria-label="X"
                                   className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-primary hover:bg-gray-300"
                              >
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                   >
                                        <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 3c-.964.572-2.034.986-3.17 1.208A4.918 4.918 0 0 0 16.616 3c-2.724 0-4.928 2.204-4.928 4.928 0 .386.044.762.127 1.124C7.691 8.885 4.066 6.913 1.64 3.905a4.902 4.902 0 0 0-.666 2.475c0 1.708.869 3.213 2.188 4.096a4.904 4.904 0 0 1-2.23-.616c-.054 2.38 1.693 4.614 4.188 5.104a4.935 4.935 0 0 1-2.224.084 4.929 4.929 0 0 0 4.6 3.419A9.867 9.867 0 0 1 0 19.54a13.936 13.936 0 0 0 7.548 2.213c9.057 0 14.01-7.496 14.01-13.986 0-.21-.004-.423-.014-.633A10.012 10.012 0 0 0 24 4.557z" />
                                   </svg>
                              </a>

                              {/* Facebook */}
                              <a
                                   href="https://facebook.com"
                                   aria-label="Facebook"
                                   className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-primary hover:bg-gray-300"
                              >
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                   >
                                        <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.676V1.324C24 .593 23.407 0 22.676 0z" />
                                   </svg>
                              </a>

                              {/* Instagram */}
                              <a
                                   href="https://instagram.com"
                                   aria-label="Instagram"
                                   className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-primary hover:bg-gray-300"
                              >
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                   >
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.973.24 2.427.403a4.92 4.92 0 0 1 1.675 1.093 4.92 4.92 0 0 1 1.093 1.675c.163.454.347 1.257.403 2.427.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.973-.403 2.427a4.916 4.916 0 0 1-1.093 1.675 4.916 4.916 0 0 1-1.675 1.093c-.454.163-1.257.347-2.427.403-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.973-.24-2.427-.403a4.916 4.916 0 0 1-1.675-1.093 4.916 4.916 0 0 1-1.093-1.675c-.163-.454-.347-1.257-.403-2.427C2.175 15.747 2.163 15.368 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.973.403-2.427a4.916 4.916 0 0 1 1.093-1.675 4.916 4.916 0 0 1 1.675-1.093c.454-.163 1.257-.347 2.427-.403C8.416 2.175 8.796 2.163 12 2.163zm0 1.838c-3.17 0-3.548.012-4.797.07-1.014.047-1.562.217-1.926.362a3.084 3.084 0 0 0-1.121.732 3.084 3.084 0 0 0-.732 1.121c-.145.364-.315.912-.362 1.926-.058 1.249-.07 1.627-.07 4.797s.012 3.548.07 4.797c.047 1.014.217 1.562.362 1.926.173.43.41.82.732 1.121.301.322.691.559 1.121.732.364.145.912.315 1.926.362 1.249.058 1.627.07 4.797.07s3.548-.012 4.797-.07c1.014-.047 1.562-.217 1.926-.362a3.09 3.09 0 0 0 1.121-.732 3.09 3.09 0 0 0 .732-1.121c.145-.364.315-.912.362-1.926.058-1.249.07-1.627.07-4.797s-.012-3.548-.07-4.797c-.047-1.014-.217-1.562-.362-1.926a3.084 3.084 0 0 0-.732-1.121 3.084 3.084 0 0 0-1.121-.732c-.364-.145-.912-.315-1.926-.362-1.249-.058-1.627-.07-4.797-.07zm0 3.838a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 1.838a3.662 3.662 0 1 0 0 7.324 3.662 3.662 0 0 0 0-7.324zm5.406-1.08a1.296 1.296 0 1 1 0 2.592 1.296 1.296 0 0 1 0-2.592z" />
                                   </svg>
                              </a>

                              {/* LinkedIn */}
                              <a
                                   href="https://linkedIn.com"
                                   aria-label="LinkedIn"
                                   className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-primary hover:bg-gray-300"
                              >
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                   >
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75 1.75.783 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.381-.029-3.156-1.923-3.156-1.926 0-2.221 1.504-2.221 3.056v5.6h-3v-10h2.879v1.367h.041c.4-.757 1.376-1.553 2.834-1.553 3.027 0 3.585 1.993 3.585 4.586v5.6z" />
                                   </svg>
                              </a>
                         </div>
                    </div>

                    {/* Resources */}
                    <div>
                         <h3 className="font-semibold text-gray-900 mb-4">
                              Resources
                         </h3>
                         <ul className="space-y-2 text-sm">
                              <li>
                                   <a href="#">Docs</a>
                              </li>
                              <li>
                                   <a href="#">Tentang</a>
                              </li>
                              <li>
                                   <a href="#">Kontak</a>
                              </li>
                         </ul>
                    </div>

                    {/* Usefull Links */}
                    <div>
                         <h3 className="font-semibold text-gray-900 mb-4">
                              Usefull links
                         </h3>
                         <ul className="space-y-2 text-sm">
                              <li>
                                   <a href="#">Terms of Services</a>
                              </li>
                              <li>
                                   <a href="#">Privacy Policy</a>
                              </li>
                              <li>
                                   <a href="#">Cookie Policy</a>
                              </li>
                         </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                         <h3 className="font-semibold text-gray-900 mb-4">
                              Newsletter
                         </h3>
                         <p className="text-sm mb-4">
                              Sign up and receive the lastest news via email.
                         </p>
                         <form className="flex">
                              <input
                                   type="email"
                                   placeholder="Email address"
                                   className="px-4 py-2 border border-gray-600 rounded-l-md focus:outline-none text-sm w-full"
                              />
                              <button
                                   type="submit"
                                   className="px-4 py-2 bg-primary text-white rounded-r-md text-sm hover:bg-purple-700"
                              >
                                   Send
                              </button>
                         </form>
                    </div>
               </div>

               {/* Garis dan Copyright */}
               <div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
                    All Rights Reserved. © 2025 Ourhost
               </div>
          </footer>
     );
};

export default Footer;
